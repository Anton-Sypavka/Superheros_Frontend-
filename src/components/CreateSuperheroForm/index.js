import { useForm } from 'react-hook-form';
import {useState} from "react";
import { useNavigate } from 'react-router-dom'
import Ajax from '../../services/Ajax';

import './style.scss'


function CreateSuperheroForm({createForm, superhero}) {
    const [isActive, setIsActive] = useState(!createForm);
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm({
        defaultValues: {}
    });

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();

            for (let val in data) {
                if (val === 'image' && data[val][0]) {
                    formData.append(val, data[val][0]);
                } else if (val !== 'image' && data[val]) {
                    formData.append(val, data[val]);
                }
            }

            if (createForm) {
                await Ajax.postSuperhero(formData);
            } else {
                await Ajax.patchSuperhero(superhero._id, formData)
            }

            navigate('/');

        } catch (e) {
            console.log(e)
        }
    }

    const onEditBtnClick = () => {
        setIsActive((state) => !state);
        reset();
    }

    const onDeleteBtnClick = async () => {
        try {
            await Ajax.deleteSuperhero(superhero._id);

            navigate('/');
        } catch (e) {
            console.log(e);
        }

    }

    return (
        <div>
            <form className='superhero-form' onSubmit={handleSubmit(onSubmit)}>
                <div className='superhero-form__input'>
                    <label>
                        Nickname
                        <input
                            defaultValue={createForm ? '' : superhero.nickname}
                            {...register("nickname", {
                                required: true})}
                            disabled={isActive}
                        />
                        <div>{errors?.nickname && <p className='error'>Required field</p>}</div>
                    </label>
                </div>

                <div className='superhero-form__input'>
                    <label>
                        Real name
                        <input
                            defaultValue={createForm ? '' : superhero.real_name}
                            {...register("real_name", {required: true})}
                            disabled={isActive}
                        />
                        <div>{errors?.real_name && <p className='error'>Required field</p>}</div>
                    </label>
                </div>

                <div className='superhero-form__input'>
                    <label>
                        Description
                        <input
                            defaultValue={createForm ? '' : superhero.origin_description}
                            {...register("origin_description", {
                                required: true,
                                minLength: {
                                    value: 10,
                                    message: 'Minimum 15'
                                }
                            })}
                            disabled={isActive}
                        />
                        <div>{errors?.origin_description && <p className='error'>{errors?.origin_description?.message || 'Required field'}</p>}</div>
                    </label>
                </div>

                <div className='superhero-form__input'>
                    <label>
                        Superpowers
                        <input
                            defaultValue={createForm ? '' : superhero.superpowers}
                            {...register("superpowers", {required: true})}
                            disabled={isActive}
                        />
                        <div>{errors?.superpowers && <p className='error'>Required field</p>}</div>
                    </label>
                </div>

                <div className='superhero-form__input'>
                    <label>
                        Catch Prase
                        <input
                            defaultValue={createForm ? '' : superhero.catch_phrase}
                            {...register("catch_phrase", {required: true})}
                            disabled={isActive}
                        />
                        <div>{errors?.catch_phrase && <p className='error'>Required field</p>}</div>
                    </label>
                </div>

                {
                    !isActive &&
                    <>
                        <div className='superhero-form__input'>
                            <label>
                                Upload Photo
                                <input
                                    {...register("image", {required: createForm})}
                                    type='file'
                                    style={{display: isActive ? 'none' : 'inline-block' }}
                                />
                                <div>{errors?.image && <p className='error'>Required field</p>}</div>
                            </label>
                        </div>
                        <input type='submit' value='Submit'/>
                    </>
                }
            </form>
            {
                isActive &&
                <>
                    <button onClick={onEditBtnClick}>Edit</button>
                    <button
                        onClick={onDeleteBtnClick}
                        style={{backgroundColor: 'red', color: 'white', marginLeft: '10px'}}
                    >
                        Delete Superhero
                    </button>
                </>
            }
        </div>
    )
}

export default CreateSuperheroForm;
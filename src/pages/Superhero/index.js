import {useEffect, useState} from 'react';
import Ajax from "../../services/Ajax";
import { useParams } from 'react-router-dom';
import CreateSuperheroForm from "../../components/CreateSuperheroForm";

import './style.scss'

function Superhero() {
    const [superhero, setSuperhero] = useState({});
    const { superheroId } = useParams();

    useEffect(() => {
        async function getOneHero() {
            const { data: { superhero } } = await Ajax.getOneSuperhero(superheroId)

            setSuperhero(superhero);
        }
        getOneHero();
    }, []);

    return(
        <div className="superhero">
            <h1 className="superhero__title">{superhero.nickname}</h1>
            <div className="superhero__image">
                <img src={superhero.image} alt={superhero.nickname}/>
            </div>
            <CreateSuperheroForm superhero={superhero}/>
        </div>
    )
}

export default Superhero;
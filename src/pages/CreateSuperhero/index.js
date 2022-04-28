import CreateSuperheroForm from '../../components/CreateSuperheroForm';

function CreateSuperhero() {

    return (
        <div>
            <h1>Create Superhero</h1>
            <CreateSuperheroForm createForm={true}/>
        </div>
    )
}

export default CreateSuperhero;
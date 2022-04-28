import {useEffect, useState} from 'react';
import Ajax from "../../services/Ajax";
import { useParams } from 'react-router-dom';
import CreateSuperheroForm from "../../components/CreateSuperheroForm";

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
        <div>
            <h1>{superhero.nickname}</h1>
            <img src={superhero.image} alt={superhero.nickname}/>
            <CreateSuperheroForm superhero={superhero}/>
        </div>
    )
}

export default Superhero;
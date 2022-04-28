import { Routes, Route } from 'react-router-dom';

import CreateSuperhero from "../../pages/CreateSuperhero";
import Home from '../../pages/Home'
import Superhero from '../../pages/Superhero'
import './style.scss';

function Main() {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/create-superhero' element={<CreateSuperhero/>}/>
                <Route path='/:superheroId' element={<Superhero/>}/>
            </Routes>
        </main>
    )
}

export default Main;
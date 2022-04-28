import Superheroslist from '../../components/Superheroslist';
import {Link} from 'react-router-dom';

import './style.scss';

function Home() {
    return (
        <div className='superheros'>
            <div className='superheros__title-container'>
                <h1>Superheros</h1>
                <Link to='/create-superhero/'>
                    <button>Create new Superhero</button>
                </Link>
            </div>

            <Superheroslist/>
        </div>
    )
}

export default Home;

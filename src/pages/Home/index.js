import Superheroslist from '../../components/Superheroslist';
import {Link} from 'react-router-dom';

function Home() {
    return (
        <div>
            <h1>Superheros</h1>
            <Link to='/create-superhero/'>Create new Superhero</Link>
            <Superheroslist/>
        </div>
    )
}

export default Home;

import './style.scss';
import {Link} from "react-router-dom";

function SuperheroItem({ props }) {
    const { image, nickname, _id } = props;

    return (
        <li>
            <Link to={_id}>
                <div className="image-container">
                    <img src={image} alt={nickname}/>
                </div>
                <h3>{nickname}</h3>
            </Link>
        </li>
    )
}

export default SuperheroItem;
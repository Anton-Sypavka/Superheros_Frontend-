import { useSelector, useDispatch } from 'react-redux';
import {useEffect, useState} from 'react';

import SuperheroItem from '../SuperheroItem';
import { loadSuperheros } from '../../store/actions/superherosActions';

import './style.scss';

function Superheroslist() {
    const superheros = useSelector( state => state.superheros.superheros);
    const loading = useSelector( state => state.superheros.loading);
    const error = useSelector( state => state.superheros.error);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadSuperheros(page, 2));
    }, [page])

    const onPaginationBtnClick = (e) => {
        const targetBtn = e.target.dataset.page;

        if (targetBtn === 'next') {
            setPage(page + 1)
        } else if (targetBtn === 'prev' && page > 2 && error) {
            setPage(page - 2)
        } else if (targetBtn === 'prev' && page > 1) {
            setPage(page - 1)
        }
    }

    if (loading) {
        return (
            <p>Loading...</p>
        )
    } else {
        return (
            <div>
                <p>{page}</p>
                <ul>
                    { superheros.map( hero => <SuperheroItem key={hero._id} props={hero}/>) }
                </ul>
                <div>
                    <button onClick={onPaginationBtnClick} data-page="prev" disabled={page === 1}>Prev page</button>
                    <button onClick={onPaginationBtnClick} data-page="next" disabled={error}>Next page</button>
                </div>
            </div>
        )
    }
}

export default Superheroslist;
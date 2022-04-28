import Ajax from "../../services/Ajax";

export const GET_SUPERHEROS_REQUESTED = 'photos/GET_PHOTOS_REQUESTED'
export const GET_SUPERHEROS_SUCCESS = 'photos/GET_PHOTOS_SUCCESS'
export const GET_SUPERHEROS_ERROR = 'photos/GET_PHOTOS_ERROR'

export const loadSuperheros = (page, limit) => {
    return async dispatch => {
        dispatch(superherosRequested());

        try {
            const res = await Ajax.getSuperheros(page, limit);
            dispatch(superherosSuccess({ data: res.data.superheros }));
        } catch (error) {
            dispatch(superherosError(error));
        }
    }
}

const superherosRequested = () => {
    return {
        type: GET_SUPERHEROS_REQUESTED
    }
}

const superherosSuccess = data => {
    return {
        type: GET_SUPERHEROS_SUCCESS,
        payload: data
    }
}

const superherosError = error => {
    return {
        type: GET_SUPERHEROS_ERROR,
        payload: {
            error
        }
    }
}
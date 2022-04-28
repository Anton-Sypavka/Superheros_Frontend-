export default class Ajax {
    static async getSuperheros(page, limit) {
        return fetch(`${process.env.REACT_APP_API}/superheros?page=${page}&limit=${limit}`)
            .then(res => res)
            .then(res => {
                if (res.status === 400) {
                    throw new Error('Something went wrong!')
                }
                return res.json();
            })
            .catch(e => e);
    }

    static async getOneSuperhero(id) {
        return fetch(`${process.env.REACT_APP_API}/superheros/${id}`)
            .then(res => res.json())
    }

    static async postSuperhero(data) {
        return fetch(`${process.env.REACT_APP_API}/superheros`, {
            method: 'POST',
            body: data
        })
            .then(res => res.json())
    }

    static async patchSuperhero(id, data) {
        return fetch(`${process.env.REACT_APP_API}/superheros/${id}`, {
            method: 'PATCH',
            body: data
        })
            .then(res => res.json())
    }

    static async deleteSuperhero(id) {
        return fetch(`${process.env.REACT_APP_API}/superheros/${id}`, {
            method: 'DELETE',
        })
            .then(res => res.json())
    }
}
const URL_BASE = 'http://localhost:3000';

export const getPeoples = async () => (
    fetch(`${URL_BASE}/people`)
        .then((response) => {
            if (response.status !== 200) {
                throw new Error('Cant fetch peoples');
            }
            return response.json();
        })
        .then((data) => data)
);

export const postPeoples = async (name, age) => {
    const options = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age }),
    };
    return fetch(`${URL_BASE}/people`, options)
        .then((response) => {
            if (response.status !== 201) {
                throw new Error('Creation error');
            }
            return response.json();
        })
        .then((data) => data);
};

export const putPeoples = async (id, name, age) => {
    const options = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, age }),
    };
    return fetch(`${URL_BASE}/people/${id}`, options)
        .then((response) => {
            if (response.status !== 201) {
                throw new Error('Update error');
            }
            return response.json();
        })
        .then((data) => data);
};

export const deletePeoples = async (id) => {
    const options = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
    };
    return fetch(`${URL_BASE}/people/${id}`, options)
};

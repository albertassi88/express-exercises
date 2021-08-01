import React, { useState, useEffect } from 'react';
import * as api from '../services/api';

function Home() {
    const [people, setPeople] = useState([]);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [idPeople, setIdPeople] = useState('');
    
    useEffect(() => {
        api.getPeoples().then(response => setPeople(response)) //Get      
    }, [people]);

    function createPeople() {
        api.postPeoples(name, age); //Post
        setName('');
        setAge('');
    }
    
    function updatePeople() {
        api.putPeoples(idPeople, name, age); //Put
        setName('');
        setAge('');
    }

    function deletePeople() {
        api.deletePeoples(idPeople); //Delete
    }

    function findPeople() {
        const findPeople = people.find(people => people.name === name);
        const { _id } = findPeople;
        setIdPeople(_id);
    }

    function renderCreate() {
        return (
            <div>
                <input value={name} placeholder="name" onChange={({ target }) => setName(target.value)} />
                <input value={age} placeholder="age" onChange={({ target }) => setAge(target.value)} />
                <button onClick={() => createPeople()}>Adicionar</button>
            </div>
        );
    };  
    
    function renderFind() {
        return (
            <div>
                <input value={name} placeholder="name" onChange={({ target }) => setName(target.value)} />
                <button onClick={() => findPeople()}>Procurar</button>
            </div>
        );
    }; 

    function renderUpdate() {
        return (
            <div>
                <input value={name} placeholder="name" onChange={({ target }) => setName(target.value)} />
                <input value={age} placeholder="age" onChange={({ target }) => setAge(target.value)} />
                <button onClick={() => updatePeople()}>Alterar</button>
            </div>
        );
    };

    function renderDelete() {
        return (
            <div>
                <button onClick={() => deletePeople()}>Deletar</button>
            </div>
        );
    };

    return (
        <div>
            {renderCreate()}
            {renderFind()}
            {renderUpdate()}
            {renderDelete()}
            {people.map((element, index) => (
                <div key={index}>
                    <p>{`${element.name} - ${element.age}`}</p>
                </div>
            ))}
        </div>
    )
}

export default Home
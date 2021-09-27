import React from 'react';
import { useEffect, useState } from 'react';
import Developer from '../Developer/Developer';
import Select from '../Select/Select';
import './Hier.css'

const Hier = () => {
    const [developers, setDevelopers] = useState([]);
    const [select, setSelect] = useState([]);
    const [salary, setSalary] = useState([]);
    useEffect(() => {
        fetch('./developer.json')
            .then(res => res.json())
            .then(data => setDevelopers(data))
    }, []);

    useEffect(() => {
        const selected = [];
        setSelect(selected);
    }, []);

    useEffect(() => {
        const total = [];
        setSalary(total);
    }, [])

    // handle select count
    const handleAddToSelect = (name, newSalary) => {
        const oldSelect = [...select];
        if (oldSelect.indexOf(name) === -1) {
            const newSelect = [...select, name];
            setSelect(newSelect);
            const newTotal = [...salary, newSalary];
            setSalary(newTotal);
        }

    };
    return (
        <div className="hier-container">
            <div className="developer-container">
                {
                    developers.map(developer => <Developer
                        key={developer.id}
                        developer={developer}
                        handleAddToSelect={handleAddToSelect}
                    ></Developer>)
                }
            </div>
            <div className="select-container">
                <Select select={select} salary={salary} selectDev={select}></Select>
            </div>
        </div>
    );
};

export default Hier;
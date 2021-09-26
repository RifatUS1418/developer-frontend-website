import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import './Developer.css';

const Developer = (props) => {
    const { img, name, age, role, rating, salary } = props.developer;
    const element = <FontAwesomeIcon icon={faMoneyBill} />
    return (
        <div className="developer">
            <div className="card-img">
                <img src={img} alt="" />
            </div>
            <p className="name">Name: {name}</p>
            <p><small>Role: {role}</small></p>
            <p><small>Age: {age}</small></p>
            <p><small>Rating: {rating}</small></p>
            <p><small>Salary: ${salary}</small></p>
            <button onClick={() => props.handleAddToSelect(name, salary)} className="btn-select">{element}Hire</button>
        </div>
    );
};

export default Developer;
import React from 'react';
import './Select.css';

const Select = (props) => {
    console.log(props);
    const { select, salary } = props;
    // const salaryChart = [];
    // salary.push(salary);
    const totalSalary = salary.reduce((previous, salary) => previous + salary, 0);
    console.log(totalSalary);
    return (
        <div>
            <h2>Developer: {select.length}</h2>
            <h2>Total cost per/hr: ${totalSalary}</h2>
        </div>
    );
};

export default Select;
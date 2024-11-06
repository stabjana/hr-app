import './card.css'
import { useState } from 'react';

function Card(props) {
    // need useState to render!
    const [role, setRole] = useState(props.inirole)
    const clickHandler = () => {
        if (role === "Team Lead") {
            setRole(props.inirole);
        }
        else {
            setRole("Team Lead");
        }
    };

    return (
        <div className="card">
            <p>{props.name}</p>
            <p>{props.role}</p>
            <p>{props.department}</p>
            <p>Start Date: {props.startDate}</p>
            <p>Location: {props.location}</p>
            <p>Emergency Contact: {props.emergencyContact}</p>
            <p>Trainings: {props.trainings}</p>
            <p>Performance Grade: {props.performanceGrade}</p>
            <button onClick={clickHandler}>Promote</button>

            {/* 
            <h3>Name: {props.name}</h3>
            <p>Role: {role}</p>
            <p>Department: {props.department}</p>
            <p>Direct superior: {props.superior}</p>
            <p>Salary: {props.salary}</p>
            <button onClick={clickHandler}>Promote</button> */}
        </div>
    );
};

export default Card;
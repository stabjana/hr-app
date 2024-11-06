import './card.css'
import { useState } from 'react';

function Card(props) {
    // need useState to render!
    const [role, setRole] = useState(props.role)
    const clickHandler = () => {
        if (role === "Team Lead") {
            setRole(props.role);
        }
        else {
            setRole("Team Lead");
        }
    };

    return (
        <div className="card">
            <p className="promoStar"> {role === "Team Lead" && "⭐"} </p>
            <p>{props.name}</p>
            <p>{props.role}</p>
            <p>{props.department}</p>
            <p>Start Date: {props.startDate}</p>
            <p>Location: {props.location}</p>
            <p>Emergency Contact: {props.emergencyContact}</p>
            <p>Trainings: {props.trainings}</p>
            <p>Performance Grade: {props.performanceGrade}</p>
            <button onClick={clickHandler}>Promote</button>
        </div>
    );
};

export default Card;
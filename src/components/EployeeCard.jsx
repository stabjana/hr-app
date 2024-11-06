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
            <p>Years worked here: {Math.floor(calculateYears(props.startDate))}</p>
            {calculateYears(props.startDate) < 0.5 && <p>📆  Schedule probation review.</p>}
            {Math.floor(calculateYears(props.startDate)) === 5 && <p> 🎉 Schedule recognition meeting.</p>}
            {Math.floor(calculateYears(props.startDate)) === 10 && <p> 🎉 Schedule recognition meeting.</p>}
            {Math.floor(calculateYears(props.startDate)) === 15 && <p> 🎉 Schedule recognition meeting.</p>}
            {role === "Team Lead" ? <button onClick={clickHandler}>Demote from Team Lead</button> : <button onClick={clickHandler}>Promote to Team Lead</button>}

        </div>
    )
};
const calculateYears = (startDate) => {
    const start = new Date(startDate);
    const today = new Date();
    return ((today - start) / 1000 / 60 / 60 / 24 / 365);
}


export default Card;
import Button from './Button';
import './card.css'
import { useState } from 'react';

function Card({ name, iniRole, department, startDate, location, emergencyContact, trainings, performanceGrade }) {
    // need useState to render!
    const [role, setRole] = useState(iniRole);

    const clickHandler = () => {
        if (role === "Team Lead") {
            setRole(iniRole);
        }
        else {
            setRole("Team Lead");
        }
    };

    return (
        <div className="card">
            <p className="promoStar"> {role === "Team Lead" && "⭐"} </p>
            <p>{name}</p>
            {role === "Team Lead" ? <p className="primary" >{role} </p> : <p className="secondary">{role}</p>}
            <p>{department}</p>
            <p>Start Date: {startDate}</p>
            <p>Location: {location}</p>
            <p>Emergency Contact: {emergencyContact}</p>
            <p>Trainings: {trainings}</p>
            <p>Performance Grade: {performanceGrade}</p>
            <p>Years worked here: {Math.floor(calculateYears(startDate))}</p>
            {calculateYears(startDate) < 0.5 && <p>📆  Schedule probation review.</p>}
            {Math.floor(calculateYears(startDate)) === 5 && <p> 🎉 Schedule recognition meeting.</p>}
            {Math.floor(calculateYears(startDate)) === 10 && <p> 🎉 Schedule recognition meeting.</p>}
            {Math.floor(calculateYears(startDate)) === 15 && <p> 🎉 Schedule recognition meeting.</p>}

            {role === "Team Lead" ? <Button text="Demote from Team Lead" onClick={clickHandler}></Button>
                : <Button text="Promote to Team Lead" onClick={clickHandler}></Button>}

        </div>
    )
};
const calculateYears = (startDate) => {
    const start = new Date(startDate);
    const today = new Date();
    return ((today - start) / 1000 / 60 / 60 / 24 / 365);
}


export default Card;
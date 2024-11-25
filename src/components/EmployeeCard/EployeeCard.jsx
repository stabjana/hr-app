import Button from '../Button';
import './card.css'
import { useState } from 'react';
import Form from '../Forms/Form';

function Card({ name, iniRole, department, startDate, location, emergencyContact, trainings, performanceGrade }) {
    // need useState to render!
    const [role, setRole] = useState(iniRole);
    const [toggleFormEdit, setToggleFormEdit] = useState(false);

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
            {role === "Team Lead" ? <p className="newRole" >{role} </p> : <p className="iniRole">{role}</p>}
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

            <Button onClick={() => setToggleFormEdit(!toggleFormEdit)} text={toggleFormEdit ? "Save" : "Edit"} />
            {toggleFormEdit && (
                <Form role={role} department={department} location={location} />
            )}

            {role === "Team Lead" ? <Button className="primary" text="Demote" onClick={clickHandler}></Button>
                : <Button className="secondary" text="Promote" onClick={clickHandler}></Button>}

        </div>
    )
};
const calculateYears = (startDate) => {
    const start = new Date(startDate);
    const today = new Date();
    return ((today - start) / 1000 / 60 / 60 / 24 / 365);
}


export default Card;
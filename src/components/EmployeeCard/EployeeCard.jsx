import { useState } from 'react';
import Button from '../Button/Button';
import './card.css'
import { calcYearsWorked } from "../../utilities/yearsCalc";
import { getDepartmentClass } from "../../utilities/styleUtils";

const EmployeeCard = ({ startDate, department, name, location, role }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [promotedRole, setPromotedRole] = useState(false);
    const [person, setPerson] = useState({ department, location, role });

    const yearsWorked = calcYearsWorked(startDate);
    const isProbation = yearsWorked < 0.5;
    const isAnniversary = yearsWorked > 0 && yearsWorked % 5 === 0;

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPerson((prevState) => ({ ...prevState, [name]: value }));
    };

    const renderEditableField = (value, name) =>
        isEditing ? (
            <input value={value} name={name} onChange={handleInputChange} />
        ) : (
            <p className={name}>{value}</p>
        );

    return (
        <div className={`card ${getDepartmentClass(person.department)}`}>
            <div className="card-header">
                <p className="name">{name}</p>
                <div className="card-icons">
                    {promotedRole && (
                        <div>
                            <span className="material-symbols-outlined promote">star</span>
                            <p className="card-icon-message">Team Lead</p>
                        </div>
                    )}
                    {isAnniversary && (
                        <div>
                            <span className="material-symbols-outlined celebrate">
                                celebration
                            </span>
                            <p className="card-icon-message">
                                Schedule recognition meeting for {yearsWorked} years of in the job!
                            </p>
                        </div>
                    )}

                    {isProbation && (
                        <div>
                            <span className="material-symbols-outlined notify">
                                notifications
                            </span>
                            <p className="card-icon-message">
                                Schedule probation review. It's almost 6 months.
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className="card-content">
                <div className="card-data">
                    {renderEditableField(person.role, "role")}
                    {renderEditableField(person.department, "department")}
                    {renderEditableField(person.location, "location")}
                </div>
                <div className="card-image">
                    <img src={`https://robohash.org/${name}?set=set5`} alt={name} />
                </div>
            </div>
            <div className="card-footer">
                <div className="card-footer-actions">
                    <Button
                        onClick={() => setPromotedRole((prev) => !prev)}
                        text={promotedRole ? "Demote" : "Promote"}
                    />
                    <Button
                        onClick={() => setIsEditing((prev) => !prev)}
                        text={isEditing ? "Save" : "Edit"}
                        role="secondary"
                    />
                </div>
                <p className="years">
                    {yearsWorked} <span className="text"> years in school </span>
                    <span className="date">({startDate})</span>
                </p>
            </div>
        </div>
    );
};

export default EmployeeCard;
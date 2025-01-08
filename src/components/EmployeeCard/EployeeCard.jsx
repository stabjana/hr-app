import { useState } from 'react';
import useAxiosRequest from '../../utilities/useAxios';
import { useNavigate } from 'react-router-dom';
import { getDepartmentClass } from "../../utilities/styleUtils";
import { useEmployeeStatus } from '../../hooks/useEmployeeStatus';
import Button from '../Button/Button';
import styles from './employeeCard.module.css'

const EmployeeCard = ({ startDate, department, name, location, role, id }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [promotedRole, setPromotedRole] = useState(false);
    const [person, setPerson] = useState({ department, location, role });
    const navigate = useNavigate();

    const { update } = useAxiosRequest("https://hr-db-web.onrender.com/api/");
    const { yearsWorked, isProbation, isAnniversary } = useEmployeeStatus(startDate); // get years calc and status from custom hook instead of the yearsCalc.js

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPerson((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleSave = async () => {
        try {
            await update(`employeesData/${id}`, person); // uses patch to update the  employee with the correct id
            setIsEditing(false); // This is to exit edit mode
        } catch (error) {
            console.error("Error saving employee data:", error);
        }
    };

    // edit the card content
    const renderEditableField = (value, name) => {
        const capitalizeWords = (text) => {
            return text
                .toString()
                .split() // split the text
                .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()) // decapitalize each word
                .join(" "); // join the words to a string
        };


        const displayValue = value ? capitalizeWords(value) : "N/A";

        return isEditing ? (
            <input value={value || ""} name={name} onChange={handleInputChange} />
        ) : (
            <p className={`${styles[name]}`}>{displayValue}</p>
        );
    };

    return (
        <div className={`${styles.card} ${styles[getDepartmentClass(person.department)]}`}>
            <div className={styles.cardHeader}>
                <p className={styles.cardName}>{name}</p>
                <div className={styles.cardIcons}>
                    {promotedRole && (
                        <div>
                            <span className="material-symbols-outlined promote">⭐</span>
                            <p className="card-icon-message">Team Lead</p>                       </div>
                    )}
                    {isAnniversary && (
                        <div>
                            <span className="material-symbols-outlined celebrate">
                                🎉
                            </span>
                            <p className={styles.cardIconMessage}>
                                Schedule recognition meeting for {yearsWorked} years of in the job!
                            </p>
                        </div>
                    )}

                    {isProbation && (
                        <div>
                            <span className="material-symbols-outlined notify">
                                📆
                            </span>
                            <p className={styles.cardIconMessage}>
                                Schedule probation review. It's almost 6 months.
                            </p>
                        </div>
                    )}
                </div>
            </div>
            <div className={styles.cardContent}>
                <div className={styles.cardData}>
                    {renderEditableField(person.role, "role")}
                    {renderEditableField(person.department, "department")}
                    {renderEditableField(person.location, "location")}
                </div>
                <div className={styles.cardImage}>
                    <img src={`https://robohash.org/${name}?set=set5`} alt={name} />
                </div>
            </div>
            <div className={styles.cardFooter}>
                <div className="card-footer-actions">
                    <Button
                        onClick={() => setPromotedRole((prev) => !prev)}
                        text={promotedRole ? "Demote" : "Promote"}
                        role="secondary"
                    />


                    <Button
                        onClick={isEditing ? handleSave : () => setIsEditing(true)}
                        text={isEditing ? "Save" : "Edit"}
                        role="secondary"
                    />

                    <Button
                        onClick={() => navigate(`/employeesData/${id}`)}
                        text={"Show details"}

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
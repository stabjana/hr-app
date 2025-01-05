import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useAxiosRequest from "../../utilities/useAxios";
import Button from "../../components/Button/Button";
import styles from "./Form.module.css";

const initialFormData = {
    name: "",
    role: "",
    department: "",
    superior: "",
    startDate: "",
    location: "",
    emergencyContact: "",
    trainings: "",
    performanceGrade: "",
};
const Form = () => {
    const [formData, setFormData] = useState(initialFormData);
    const [successMessage, setSuccessMessage] = useState(null);
    const navigate = useNavigate();

    const { post, get } = useAxiosRequest("http://localhost:3002/");

    // Update the form state when an input changes
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev, [name]: name === "skills"
                ? value.split(",").map((skill) => skill.trim())
                : value,
        }));
    };

    const resetForm = () => setFormData(initialFormData);


    // Submit the form data
    const submitHandler = async (e) => {
        e.preventDefault();


        try {

            // checking for the next id
            const employees = await get("employeesData");
            const maxId = employees.map((emp) => parseInt(emp.id, 10)).filter((id) => !isNaN(id)).reduce((max, current) => Math.max(max, current), 0); // convert ids to numbers, taking in only Numbers, check for highest id
            const nextId = maxId + 1;

            const newFormData = { ...formData, id: String(nextId) }; // posting the new entry to db.json with id as a string
            await post("employeesData", newFormData); // Formulardaten mit neuer ID senden

            setSuccessMessage("New employee added successfully!");
            resetForm();
        } catch (error) {
            console.error("Error adding employee:", error);
            setSuccessMessage("Failed to add new employee. Please retry.");
        }
    };

    /*         try {
                post("employeesData", formData);
                setSuccessMessage("New employee added successfully!");
                resetForm();
            } catch {
                setSuccessMessage("Failed to add new employee. Please retry.");
            }
        }; */


    return (
        <div className={styles.formContainer}>
            {!successMessage ? (
                <form onSubmit={submitHandler} onChange={changeHandler} className={styles.formBase}>

                    <h2>Add new employee</h2>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" name="name" required />

                    <label htmlFor="role">Role</label>
                    <input type="text" id="role" name="role" />

                    <label htmlFor="department">Department</label>
                    <input type="text" id="department" name="department" />

                    <label htmlFor="superior">Superior</label>
                    <input type="text" id="superior" name="superior" placeholder="Full Name" />

                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" id="startDate" name="startDate" />

                    <label htmlFor="location">Location</label>
                    <select id="location" name="location" required>
                        <option value="Pasila">Pasila</option>
                        <option value="City-Center">City-Center</option>
                        <option value="Espoo">Espoo</option>
                    </select>

                    <label htmlFor="emergencyContact">Emergency Contact</label>
                    <input type="text" id="emergencyContact" name="emergencyContact" placeholder="Full Name and telephone number" />

                    <label htmlFor="trainings">Trainings</label>
                    <input type="text" id="trainings" name="trainings" placeholder="e.g., React, MUI"
                        required />

                    <label htmlFor="performanceGrade">Performance Grade</label>
                    <input type="text" id="performanceGrade" name="performanceGrade" />

                    <Button text="Add new" type="submit" />
                </form>
            ) : (

                <div>
                    <p>{successMessage}</p>
                    <Button
                        text="Go to list"
                        onClick={() => navigate("/employeesData")}
                        role="primary"
                    />
                    <Button
                        text="Add another employee"
                        role="primary-light"
                        onClick={() => setSuccessMessage(null)}
                    />
                </div>
            )}
        </div>
    );
};

export default Form;
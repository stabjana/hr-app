import { useState, useNavigate } from "react";
import useAxiosRequest from "../utilities/useAxios";
import Button from "../components/Button/Button";
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
    const navigate = useNavigate;

    const { create } = useAxiosRequest("http://localhost:3002/");

    // Update form state when an input changes
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev, [name]: name === "skills"
                ? value.split(",").map((skill) => skill.trim())
                : value,
        }));
    };

    const resetForm = () => setFormData(initialFormData);


    // Submit form data
    const submitHandler = (e) => {
        e.preventDefault();

        try {
            create("employeesData", formData);
            setSuccessMessage("New employee added successfully!");
            resetForm();
        } catch {
            setSuccessMessage("Failed to add new employee. Please retry.");
        }
    };


    return (
        <div className={styles.formContainer}>
            {!successMessage ? (
                <form onSubmit={submitHandler} onChange={changeHandler} className={styles.formBase}>

                    <h2>Add new employee</h2>
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name" />

                    <label htmlFor="role">Role</label>
                    <input type="text" name="role" />

                    <label htmlFor="department">Department</label>
                    <input type="text" name="department" />

                    <label htmlFor="superior">Superior</label>
                    <input type="text" name="superior" placeholder="Full Name" />

                    <label htmlFor="startDate">Start Date</label>
                    <input type="date" name="startDate" />

                    <label htmlFor="location">Location</label>
                    <select name="location" required>
                        <option value="Pasila">Pasila</option>
                        <option value="City-Center">City-Center</option>
                        <option value="Espoo">Espoo</option>
                    </select>

                    <label htmlFor="emergencyContact">Emergency Contact</label>
                    <input type="text" name="emergencyContact" placeholder="Full Name and telephone number" />

                    <label htmlFor="trainings">Trainings</label>
                    <input type="text" name="trainings" placeholder="e.g., React, MUI"
                        required />

                    <label htmlFor="performanceGrade">Performance Grade</label>
                    <input type="text" name="performanceGrade" />

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
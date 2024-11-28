import { useState } from "react";
import axios from "axios";

const Form = ({ role, department, location }) => {
    const [formData, setFormData] = useState({ // hook with object fields
        role,
        department,
        location,

    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value })) // create a new object + all previous states + everything where name and elements are changing
    }

    const AddForm = ({ setEmployees, employees }) => { // addPerson
        const [newEmployee, setNewEmployee] = useState({

            /*  });
             const [formData, setFormData] = useState({ */
            name: "",
            iniRole: "",
            department: "",
            superior: "",
            startDate: "",
            startDate: "",
            location: "",
            emergencyContact: "",
            trainings: "",
            performanceGrade: "",

        });

        const handleSubmit = () => {

            axios.post('http://localhost:3002/employeesData', newEmployee)
                .then((res) => {
                    setEmployees([...employees, res.data])
                    setNewEmployee('');
                });
        }


        return (
            <div>
                <form onSubmit={handleSubmit()}>
                    <input name="role" value={formData.role} onChange={handleChange} type="text" />
                    <input name="department" value={formData.department} onChange={handleChange} type="text" />
                    <input name="location" value={formData.location} onChange={handleChange} type="text" />
                </form>
            </div>
        )

    }
};

export default Form;
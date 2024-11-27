import { useState } from "react";

const Form = ({ role, department, location }) => {
    const [formData, setFormData] = useState({ // hook with object fields
        role,
        department,
        location,

    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({ ...prevState, [name]: value })) // create a nwe object + all previous states + everything where name and elements are changing
    }

    return (
        <div>
            <form>
                <input name="role" value={formData.role} onChange={handleChange} type="text" />
                <input name="department" value={formData.department} onChange={handleChange} type="text" />
                <input name="location" value={formData.location} onChange={handleChange} type="text" />
            </form>
        </div>
    )

};

export default Form;
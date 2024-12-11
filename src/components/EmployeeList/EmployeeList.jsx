import EmployeeCard from "../EmployeeCard/EployeeCard.jsx";
import "./employee.css";
import { useState, useEffect } from "react";
import axios from "axios";

const EmployeeList = () => {

    const [persons, setPersons] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
            .get("http://localhost:3002/employeesData")
            .then((response) => {
                setPersons(response.data);
                setIsLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setIsLoading(false);
            });
    }, []);

    /* return part */
    return (
        <div className="list">
            {isLoading ? (
                <p>Page is loading...</p>
            ) : (

                persons.map((employee) => {
                    return <EmployeeCard key={employee.id} {...employee} />
                })
            )}
        </div>
    );
};

export default EmployeeList;
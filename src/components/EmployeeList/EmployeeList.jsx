import EmployeeCard from "../EmployeeCard/EployeeCard.jsx";
import "./employee.css";
import { useState, useEffect } from "react";
import axios from "axios";

/* import { employeesData } from "../../data/EmployeesData.jsx";*/

const EmployeeList = () => {
    const [posts, setPosts] = useState([]); // HERE IS SOMETHING WRONG!!!
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

                posts.map((employee) => {
                    return <EmployeeCard key={employee.id} {...employee} />
                })
            )}
        </div>
    );
    /* 
        oder:
        return (
            <div>
                <main>
                    <h2>Employee List</h2>
             
                    {isLoading ? (
                        <p>Loading...</p>
                    ) : (
                        persons.map((employee) => (
                            <EmployeeCard key={employee.id} {...employee} />
                        ))
                    )}
                </main>
            </div>
        ); */
};

export default EmployeeList;
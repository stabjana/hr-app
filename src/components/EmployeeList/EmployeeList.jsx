import EmployeeCard from "../EmployeeCard/EployeeCard.jsx";
import "./employee.css";
import { useState, useEffect } from "react";

/* import { employeesData } from "../../data/EmployeesData.jsx"; */

const EmployeeList = () => {
    const [posts, setPosts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:3002/employeesData')
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setIsLoading(false);
            });
    });

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
};

export default EmployeeList;
import Card from "./EmployeeCard/EployeeCard";
import employees from "../data/EmployeesData";
import './employee.css'
import { useState } from 'react';
import Button from "./Button";


function List() {
    const [isLoggedIn, setIsLoggedIn] = useState(true); // CHANGE AGAIN IN END!!!

    const handleLogin = () => {
        setIsLoggedIn(!isLoggedIn);
    };

    return (
        <main>
            {isLoggedIn ? (
                <div>
                    <h2>Employee List</h2>
                    <div className="employeeList">
                        {employees.map((employee) => < Card key={employee.id} {...employee}
                        ></Card>)};
                    </div>
                    <Button text="Log out" onClick={handleLogin}></Button>
                </div>

            ) : (
                <div>
                    <h2>Please log in to see the Employees</h2>
                    <Button text="Log in" onClick={handleLogin}></Button>
                </div>
            )
            }
        </main >
    );
};

export default List;
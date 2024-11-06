import Card from "./EployeeCard";
import employees from "./EmployeesData";
import './employee.css'
import { useState } from 'react';


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
                        /* name={el.name} role={el.role} department={el.department} startDate={el.startDate} location={el.location} emergencyContact={el.emergencyContact} trainings={el.trainings} performanceGrade={el.performanceGrade} */ ></Card>)};
                        <button onClick={handleLogin}>Log out</button>
                    </div>
                </div>

            ) : (
                <div>
                    <h2>Please log in to see the Employees</h2>
                    <button onClick={handleLogin}>Log in</button>
                </div>
            )
            }
        </main >
    );
};

export default List;
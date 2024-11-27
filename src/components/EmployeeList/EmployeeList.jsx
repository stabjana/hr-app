import EmployeeCard from "../EmployeeCard/EployeeCard.jsx";
import "./employee.css";
/* import { employeesData } from "../../data/EmployeesData.jsx"; */

const EmployeeList = () => {


    return (
        <div className="list">
            {employeesData.map((employee) => {
                return <EmployeeCard key={employee.id} {...employee} />;
            })}
        </div>
    );
};

export default EmployeeList;
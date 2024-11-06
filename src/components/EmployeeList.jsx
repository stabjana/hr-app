import Card from "./EployeeCard";
import employees from "./EmployeesData";
import './employee.css'

function List() {
    return (
        <main>
            <h2>Employee List</h2>
            <div className="employeeList">
                {employees.map((el) => < Card key={el.id} name={el.name} role={el.role} department={el.department} startDate={el.startDate} location={el.location} emergencyContact={el.emergencyContact} trainings={el.trainings} performanceGrade={el.performanceGrade} ></Card>)};
            </div>
        </main >
    );
};

export default List;
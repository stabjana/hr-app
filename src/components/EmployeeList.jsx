import Card from "./EployeeCard";
import './employee.css'

function List() {
    return (
        <main>
            <h2>Employee List</h2>
            <div className="employeeList">
                <Card name="Dave" inirole="Teacher" department="ICT" superior="Vera" salary="4000"></Card>
                <Card name="Margit" inirole="Teacher" department="ICT" superior="Vera" salary="5000"></Card>
                <Card name="Nils" inirole="Fun Manager" department="ICT" superior="Vera" salary="4000"></Card>
                <Card name="Emma" inirole="" department="ICT" superior="Vera" salary="4000"></Card>
                <Card name="Felix" inirole="teacher" department="ICT" superior="Vera" salary="4000"></Card>
            </div>
        </main>
    );
};

export default List;
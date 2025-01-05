import { useEffect } from "react";
import useAxiosRequest from "../../utilities/useAxios.js";
import EmployeeCard from "../EmployeeCard/EployeeCard.jsx";
import "./employee.css";


const EmployeeList = () => {
    const {
        data: employeesData,
        loading,
        error,
        get,
    } = useAxiosRequest("http://localhost:3002/");

    useEffect(() => {
        get("employeesData");
    }, []);

    if (loading) return <p>Page is loading...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="list">
            {(employeesData || []).map((employee) => {
                return <EmployeeCard key={employee.id} {...employee} />;
            })}
        </div>
    );
};

export default EmployeeList;
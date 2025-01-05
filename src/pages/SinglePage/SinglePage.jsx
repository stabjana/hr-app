import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import useAxiosRequest from "../../utilities/useAxios";
import { useEmployeeStatus } from "../../hooks/useEmployeeStatus";
import Button from "../../components/Button/Button";
import styles from "./SinglePage.module.css";

const SinglePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data, loading, get } = useAxiosRequest( // use axios to get the employee based on the id
    `http://localhost:3002/employeesData/${id}`
  );

  useEffect(() => {
    get();
  }, []);

  const { yearsWorked } = useEmployeeStatus(data?.startDate);

  if (loading) return <p>Loading...</p>;

  if (!data) return <p>No data available.</p>;

  return (
    <div>
      {data && (
        <div className={styles.singlePageContent} >
          <div>
            <h2>{data.name}</h2>
            <div className={styles.data} >

              <p>Role: <strong>{data.role}</strong></p>
              <p>Department: <strong>{data.department}</strong></p>
              <p>Superior: <strong>{data.superior}</strong></p>
              <p>Location: <strong>{data.location}</strong></p>
              <p>Finished trainings: <strong>{data.trainings}</strong></p>
              <p>Overall performance: <strong>{data.performanceGrade}</strong></p>
              <p>Emergency contact: <strong>{data.emergencyContact}</strong></p>
            </div>
          </div>
          <div className={styles.status} >
            <p>Start date: {data.startDate}</p>
            <p>{yearsWorked} years</p>
          </div>
        </div>
      )}
      <Button text="Back" role="primary-light" onClick={() => navigate(-1)} />
    </div>
  );
};

export default SinglePage;
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

  const { data, loading, get } = useAxiosRequest(
    `http://localhost:3001/employeesData/${id}`
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
        <div /* className={styles.singlePageContent} */>
          <div /* className={styles.status} */>
            <p>{data.status}</p>
            <p>{data.startDate}</p>
            <p /* className= {styles.lessImportant} */>{yearsWorked} years</p>
          </div>
          <div>
            <h2>{data.name}</h2>
            {data.skills.map((skill) => (
              <span key={skill}>{skill} </span>
            ))}
            <div /* className={styles.data} */>
              <div /* className={styles.role} */>
                <p>{data.role}</p>
                <p>{data.department}</p>
                <p>{data.location}</p>
              </div>
              <div /* className={styles.contactDetails} */>
                <p> {data.phone}</p>
                <p> {data.email}</p>
              </div>
            </div>
            <div /* className={styles.management} */>
              <p> {data.employmentType}</p>
              <p> {data.salary} €</p>
              <p> {data.manager}</p>
            </div>
          </div>
        </div>
      )}
      <Button text="Back" role="primary-light" onClick={() => navigate(-1)} />
    </div>
  );
};

export default SinglePage;

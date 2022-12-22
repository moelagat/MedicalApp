
import React, { useState, useEffect }  from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [patients, setPatients] = useState([]);    
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users/")
            .then(res => res.json())
            .then(
                (data) => {
                    setIsLoaded(true);
                    setPatients(data);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
      }, [])
      if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
        return <div>Loading...</div>;
    } else {
       
        return (
            <ul>
                {patients.map(patient => (
                <li>
                <Link to={`patient/${patient.id}`}>{patient.name}</Link>
                </li>
                ))}
            </ul>
        );
    }
}
export default Home;
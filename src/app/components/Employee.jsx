'use client'
import React from 'react'
import { useState, useEffect } from "react";
import "../styles/employeeStyle.css"
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import EmployeePostModal from './EmployeePostModal';
import EmployeePutModal from './EmployeePutModal';
import { useAuth0 } from '@auth0/auth0-react';

export default function employee() {
    const [emplDetails, setEmplDetails] = useState([]);
    const [showPostModal, setShowPostModal] = useState(false);
    const [showPutModal, setShowPutModal] = useState(false);
    const [showData, setShowData] = useState(false);
    const { isAuthenticated } = useAuth0();

    useEffect(() => {
        fetchEmplDetail();
    }, [showPostModal, showPutModal])


    const fetchEmplDetail = () => {
        fetch('https://localhost:7032/api/EmployeeAPI')
        .then(respone => respone.json())
        .then(data => setEmplDetails(data))
    }
    
    const handleDelete = () => {
        const id = prompt("Enter Employee ID to delete the record");
        if(id){
            fetch(`https://localhost:7032/api/EmployeeAPI/${id}`, {
                method: 'DELETE'
            })
            .then(response => {
                if(response.ok){
                    alert("Employee data deleted successfully");
                    fetchEmplDetail();
                }
                else{
                    alert("Please enter a valid employee ID");
                }
            })
            .catch(error => console.log("Error deleting employee: " + error));
        }
    }

  return (
    isAuthenticated && <div className='detailSection'>
        <button
            type='button'
            onClick={() => {fetchEmplDetail, setShowData(prevState => prevState = !prevState)}}
            className='btn btn-primary'
            style={{ backgroundColor: '#020626', color: 'white', border: 'none', marginBottom: '20px'}}
        >Check Details</button>
        { showData &&
            <section>
                <div className='crudBar'>
                    <button onClick={() => setShowPostModal(true)}>Add</button>
                    <button onClick={() => setShowPutModal(true)}>Update</button>
                    <button onClick={handleDelete}>Delete</button>
                </div>
                <table className='table table-bordered'>
                    <thead className='table-success'>
                        <tr>
                            <th>Id</th>
                            <th>Name</th>
                            <th>DOB</th>
                            <th>DOJ</th>
                            <th>Blood Group</th>
                            <th>Phone</th>
                            <th>Experience Years</th>
                            <th>Career Start Date</th>
                            <th>Interviewed Date</th>
                            <th>Previous Company</th>
                            <th>CTC</th>
                            <th>Work Mode</th>
                        </tr>
                    </thead>
                    <tbody className='table-info'>
                        {emplDetails.map(detail => {
                            return(
                                <tr key={detail.emplID}>
                                    <td>{detail.emplID}</td>
                                    <td>{detail.emplName}</td>
                                    <td>{detail.dob}</td>
                                    <td>{detail.doj}</td>
                                    <td>{detail.bloodGroup}</td>
                                    <td>{detail.phone}</td>
                                    <td>{detail.experienceYears}</td>
                                    <td>{detail.careerStartDate}</td>
                                    <td>{detail.interviewedDate}</td>
                                    <td>{detail.previousCompany}</td>
                                    <td>{detail.ctc}</td>
                                    <td>{detail.workMode}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </section>
        }
        <EmployeePostModal
            show={showPostModal}
            onHide={() => setShowPostModal(false)}
        />
        <EmployeePutModal
            show={showPutModal}
            onHide={() => setShowPutModal(false)}
        />
    </div>
  )
}

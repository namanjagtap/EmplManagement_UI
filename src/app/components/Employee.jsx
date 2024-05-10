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
    const { user, isAuthenticated } = useAuth0();


    const [userDetails, setUserDetails] = useState([]);

    useEffect(() => {
        if(isAuthenticated){

            fetch(`https://dev-2yve6ieic7sp55cm.us.auth0.com/api/v2/users/${user.sub}`, {
              method: 'GET',
              headers: {
                'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImtqcE5tMk1IYVhXeF9NZjdGQjYwYyJ9.eyJpc3MiOiJodHRwczovL2Rldi0yeXZlNmllaWM3c3A1NWNtLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJPbnphN3hyN2FmNzd3QTBJZDdUTVZKU0lQcFNRR0ZqY0BjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9kZXYtMnl2ZTZpZWljN3NwNTVjbS51cy5hdXRoMC5jb20vYXBpL3YyLyIsImlhdCI6MTcxNTMyMzAwMiwiZXhwIjoxNzE1NDA5NDAyLCJzY29wZSI6InJlYWQ6Y2xpZW50X2dyYW50cyBjcmVhdGU6Y2xpZW50X2dyYW50cyBkZWxldGU6Y2xpZW50X2dyYW50cyB1cGRhdGU6Y2xpZW50X2dyYW50cyByZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyBkZWxldGU6dXNlcnMgY3JlYXRlOnVzZXJzIHJlYWQ6dXNlcnNfYXBwX21ldGFkYXRhIHVwZGF0ZTp1c2Vyc19hcHBfbWV0YWRhdGEgZGVsZXRlOnVzZXJzX2FwcF9tZXRhZGF0YSBjcmVhdGU6dXNlcnNfYXBwX21ldGFkYXRhIHJlYWQ6dXNlcl9jdXN0b21fYmxvY2tzIGNyZWF0ZTp1c2VyX2N1c3RvbV9ibG9ja3MgZGVsZXRlOnVzZXJfY3VzdG9tX2Jsb2NrcyBjcmVhdGU6dXNlcl90aWNrZXRzIHJlYWQ6Y2xpZW50cyB1cGRhdGU6Y2xpZW50cyBkZWxldGU6Y2xpZW50cyBjcmVhdGU6Y2xpZW50cyByZWFkOmNsaWVudF9rZXlzIHVwZGF0ZTpjbGllbnRfa2V5cyBkZWxldGU6Y2xpZW50X2tleXMgY3JlYXRlOmNsaWVudF9rZXlzIHJlYWQ6Y29ubmVjdGlvbnMgdXBkYXRlOmNvbm5lY3Rpb25zIGRlbGV0ZTpjb25uZWN0aW9ucyBjcmVhdGU6Y29ubmVjdGlvbnMgcmVhZDpyZXNvdXJjZV9zZXJ2ZXJzIHVwZGF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGRlbGV0ZTpyZXNvdXJjZV9zZXJ2ZXJzIGNyZWF0ZTpyZXNvdXJjZV9zZXJ2ZXJzIHJlYWQ6ZGV2aWNlX2NyZWRlbnRpYWxzIHVwZGF0ZTpkZXZpY2VfY3JlZGVudGlhbHMgZGVsZXRlOmRldmljZV9jcmVkZW50aWFscyBjcmVhdGU6ZGV2aWNlX2NyZWRlbnRpYWxzIHJlYWQ6cnVsZXMgdXBkYXRlOnJ1bGVzIGRlbGV0ZTpydWxlcyBjcmVhdGU6cnVsZXMgcmVhZDpydWxlc19jb25maWdzIHVwZGF0ZTpydWxlc19jb25maWdzIGRlbGV0ZTpydWxlc19jb25maWdzIHJlYWQ6aG9va3MgdXBkYXRlOmhvb2tzIGRlbGV0ZTpob29rcyBjcmVhdGU6aG9va3MgcmVhZDphY3Rpb25zIHVwZGF0ZTphY3Rpb25zIGRlbGV0ZTphY3Rpb25zIGNyZWF0ZTphY3Rpb25zIHJlYWQ6ZW1haWxfcHJvdmlkZXIgdXBkYXRlOmVtYWlsX3Byb3ZpZGVyIGRlbGV0ZTplbWFpbF9wcm92aWRlciBjcmVhdGU6ZW1haWxfcHJvdmlkZXIgYmxhY2tsaXN0OnRva2VucyByZWFkOnN0YXRzIHJlYWQ6aW5zaWdodHMgcmVhZDp0ZW5hbnRfc2V0dGluZ3MgdXBkYXRlOnRlbmFudF9zZXR0aW5ncyByZWFkOmxvZ3MgcmVhZDpsb2dzX3VzZXJzIHJlYWQ6c2hpZWxkcyBjcmVhdGU6c2hpZWxkcyB1cGRhdGU6c2hpZWxkcyBkZWxldGU6c2hpZWxkcyByZWFkOmFub21hbHlfYmxvY2tzIGRlbGV0ZTphbm9tYWx5X2Jsb2NrcyB1cGRhdGU6dHJpZ2dlcnMgcmVhZDp0cmlnZ2VycyByZWFkOmdyYW50cyBkZWxldGU6Z3JhbnRzIHJlYWQ6Z3VhcmRpYW5fZmFjdG9ycyB1cGRhdGU6Z3VhcmRpYW5fZmFjdG9ycyByZWFkOmd1YXJkaWFuX2Vucm9sbG1lbnRzIGRlbGV0ZTpndWFyZGlhbl9lbnJvbGxtZW50cyBjcmVhdGU6Z3VhcmRpYW5fZW5yb2xsbWVudF90aWNrZXRzIHJlYWQ6dXNlcl9pZHBfdG9rZW5zIGNyZWF0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIGRlbGV0ZTpwYXNzd29yZHNfY2hlY2tpbmdfam9iIHJlYWQ6Y3VzdG9tX2RvbWFpbnMgZGVsZXRlOmN1c3RvbV9kb21haW5zIGNyZWF0ZTpjdXN0b21fZG9tYWlucyB1cGRhdGU6Y3VzdG9tX2RvbWFpbnMgcmVhZDplbWFpbF90ZW1wbGF0ZXMgY3JlYXRlOmVtYWlsX3RlbXBsYXRlcyB1cGRhdGU6ZW1haWxfdGVtcGxhdGVzIHJlYWQ6bWZhX3BvbGljaWVzIHVwZGF0ZTptZmFfcG9saWNpZXMgcmVhZDpyb2xlcyBjcmVhdGU6cm9sZXMgZGVsZXRlOnJvbGVzIHVwZGF0ZTpyb2xlcyByZWFkOnByb21wdHMgdXBkYXRlOnByb21wdHMgcmVhZDpicmFuZGluZyB1cGRhdGU6YnJhbmRpbmcgZGVsZXRlOmJyYW5kaW5nIHJlYWQ6bG9nX3N0cmVhbXMgY3JlYXRlOmxvZ19zdHJlYW1zIGRlbGV0ZTpsb2dfc3RyZWFtcyB1cGRhdGU6bG9nX3N0cmVhbXMgY3JlYXRlOnNpZ25pbmdfa2V5cyByZWFkOnNpZ25pbmdfa2V5cyB1cGRhdGU6c2lnbmluZ19rZXlzIHJlYWQ6bGltaXRzIHVwZGF0ZTpsaW1pdHMgY3JlYXRlOnJvbGVfbWVtYmVycyByZWFkOnJvbGVfbWVtYmVycyBkZWxldGU6cm9sZV9tZW1iZXJzIHJlYWQ6ZW50aXRsZW1lbnRzIHJlYWQ6YXR0YWNrX3Byb3RlY3Rpb24gdXBkYXRlOmF0dGFja19wcm90ZWN0aW9uIHJlYWQ6b3JnYW5pemF0aW9uc19zdW1tYXJ5IGNyZWF0ZTphdXRoZW50aWNhdGlvbl9tZXRob2RzIHJlYWQ6YXV0aGVudGljYXRpb25fbWV0aG9kcyB1cGRhdGU6YXV0aGVudGljYXRpb25fbWV0aG9kcyBkZWxldGU6YXV0aGVudGljYXRpb25fbWV0aG9kcyByZWFkOm9yZ2FuaXphdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbnMgZGVsZXRlOm9yZ2FuaXphdGlvbnMgY3JlYXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcnMgZGVsZXRlOm9yZ2FuaXphdGlvbl9tZW1iZXJzIGNyZWF0ZTpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgcmVhZDpvcmdhbml6YXRpb25fY29ubmVjdGlvbnMgdXBkYXRlOm9yZ2FuaXphdGlvbl9jb25uZWN0aW9ucyBkZWxldGU6b3JnYW5pemF0aW9uX2Nvbm5lY3Rpb25zIGNyZWF0ZTpvcmdhbml6YXRpb25fbWVtYmVyX3JvbGVzIHJlYWQ6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBkZWxldGU6b3JnYW5pemF0aW9uX21lbWJlcl9yb2xlcyBjcmVhdGU6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIHJlYWQ6b3JnYW5pemF0aW9uX2ludml0YXRpb25zIGRlbGV0ZTpvcmdhbml6YXRpb25faW52aXRhdGlvbnMgZGVsZXRlOnBob25lX3Byb3ZpZGVycyBjcmVhdGU6cGhvbmVfcHJvdmlkZXJzIHJlYWQ6cGhvbmVfcHJvdmlkZXJzIHVwZGF0ZTpwaG9uZV9wcm92aWRlcnMgZGVsZXRlOnBob25lX3RlbXBsYXRlcyBjcmVhdGU6cGhvbmVfdGVtcGxhdGVzIHJlYWQ6cGhvbmVfdGVtcGxhdGVzIHVwZGF0ZTpwaG9uZV90ZW1wbGF0ZXMgY3JlYXRlOmVuY3J5cHRpb25fa2V5cyByZWFkOmVuY3J5cHRpb25fa2V5cyB1cGRhdGU6ZW5jcnlwdGlvbl9rZXlzIGRlbGV0ZTplbmNyeXB0aW9uX2tleXMgcmVhZDpzZXNzaW9ucyBkZWxldGU6c2Vzc2lvbnMgcmVhZDpyZWZyZXNoX3Rva2VucyBkZWxldGU6cmVmcmVzaF90b2tlbnMgY3JlYXRlOnNlbGZfc2VydmljZV9wcm9maWxlcyByZWFkOnNlbGZfc2VydmljZV9wcm9maWxlcyB1cGRhdGU6c2VsZl9zZXJ2aWNlX3Byb2ZpbGVzIGRlbGV0ZTpzZWxmX3NlcnZpY2VfcHJvZmlsZXMgY3JlYXRlOnNzb19hY2Nlc3NfdGlja2V0cyByZWFkOmZvcm1zIHVwZGF0ZTpmb3JtcyBkZWxldGU6Zm9ybXMgY3JlYXRlOmZvcm1zIHJlYWQ6Zmxvd3MgdXBkYXRlOmZsb3dzIGRlbGV0ZTpmbG93cyBjcmVhdGU6Zmxvd3MgcmVhZDpmbG93c192YXVsdCB1cGRhdGU6Zmxvd3NfdmF1bHQgZGVsZXRlOmZsb3dzX3ZhdWx0IGNyZWF0ZTpmbG93c192YXVsdCByZWFkOmNsaWVudF9jcmVkZW50aWFscyBjcmVhdGU6Y2xpZW50X2NyZWRlbnRpYWxzIHVwZGF0ZTpjbGllbnRfY3JlZGVudGlhbHMgZGVsZXRlOmNsaWVudF9jcmVkZW50aWFscyIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyIsImF6cCI6Ik9uemE3eHI3YWY3N3dBMElkN1RNVkpTSVBwU1FHRmpjIn0.VzYqFmB8hA3k-sMKHdSXjhgA2KbxqyZ6felD8PqLkS7zlsnAuC9D72xW2DZRq1cPdfOoXoAlPiHMvlsp2aOB3ftq80sy4L9j9z5XnePgW0xffsen1y_wyyWyzFGm_8TUbPamGYrBiKP3o2BTPe3WJ4AxaKVj7kMytobqSDHrCJIEoLb6hLYuqPk_mXYsqbIF4lGNIWkXWDGE58VSaa3_l3492LOo9OIHx2ZKoPk6GSx8BghOVDndtdERVGnQIZyVlqtdXdmvpzhg_Kg-oqHHuhx-oO2CJs8ChyqiZO7PmWdJ1WhbseTqFiODtufZZut-Mzefn3YVqWZkvARTpoewNw'
              }
            })
            .then(response => response.json())
            .then(data => setUserDetails(data));
        }
    }, [user, isAuthenticated])

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
                    <button disabled={userDetails.app_metadata.authorization.roles[0] == 'Super Admin'} onClick={() => setShowPostModal(true)}>Add</button>
                    <button disabled={userDetails.app_metadata.authorization.roles[0] == 'Company Admin'} onClick={() => setShowPutModal(true)}>Update</button>
                    <button disabled={userDetails.app_metadata.authorization.roles[0] == 'Employee'} onClick={handleDelete}>Delete</button>
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

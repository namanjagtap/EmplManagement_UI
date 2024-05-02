import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Modal } from 'react-bootstrap';
import "../styles/modalStyle.css"

export default function EmployeePutModal(props) {

  const [formState, setFormState] = useState({
    EmplID: '',
    EmplName: '',
    DOB: '',
    DOJ: '',
    BloodGroup: '',
    Phone: '',
    ExperienceYears: '',
    CareerStartDate: '',
    InterviewedDate: '',
    PreviousCompany: '',
    CTC: ''
  });

  const fetchData = () => {
    fetch(`https://localhost:7032/api/EmployeeAPI/${formState.EmplID}`)
    .then(response => response.json())
    .then(data => setFormState({
        EmplID: data.emplID,
        EmplName: data.emplName,
        DOB: data.dob,
        DOJ: data.doj,
        BloodGroup: data.bloodGroup,
        Phone: data.phone,
        ExperienceYears: data.experienceYears,
        CareerStartDate: data.careerStartDate,
        InterviewedDate: data.interviewedDate,
        PreviousCompany: data.previousCompany,
        CTC: data.ctc
    }));
  }

  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://localhost:7032/api/EmployeeAPI/${formState.EmplID}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formState)
    })
    .then(response => {
      if(response.ok){
        alert("Employee data entered successfully");
        props.onHide();
        setFormState({
          EmplID: '',
          EmplName: '',
          DOB: '',
          DOJ: '',
          BloodGroup: '',
          Phone: '',
          ExperienceYears: '',
          CareerStartDate: '',
          InterviewedDate: '',
          PreviousCompany: '',
          CTC: ''
        });
      }else{
        alert("Failed to insert data");
      }
    })
  }

  return (
        <Modal
          {...props}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">
              Update Employee
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
                <div className='border p-3'>
                    <h6>Fetch Employee Details to update</h6>
                    <div class="form-floating">
                        <input name='EmplID' type="number" class="form-control" id="floatingInput" placeholder="1" onChange={handleChange} required />
                        <label htmlFor="floatingInput">Employee ID</label>
                    </div>
                    <button onClick={fetchData}>Fetch</button>
                </div>
                <div class="form-floating">
                    <input name='EmplName' type="text" value={formState.EmplName} value={formState.EmplName} class="form-control" id="floatingInput" placeholder="John Dire" onChange={handleChange} required />
                    <label htmlFor="floatingInput">Employee Name</label>
                </div>
                <div class="form-floating">
                    <input name='DOB' type="date" value={formState.DOB} class="form-control" id="dob" placeholder="1990-05-15" onChange={handleChange} required />
                    <label htmlFor="dob">DOB</label>
                </div>
                <div class="form-floating">
                    <input name='DOJ' type="date" value={formState.DOJ} class="form-control" id="doj" placeholder="2015-08-20" onChange={handleChange} required />
                    <label htmlFor="doj">DOJ</label>
                </div>
                <div class="form-floating">
                    <input name='BloodGroup' type="text" value={formState.BloodGroup} class="form-control" id="bloodGroup" placeholder="A+" onChange={handleChange} required />
                    <label htmlFor="bloodGroup">Blood Group</label>
                </div>
                <div class="form-floating">
                    <input name='Phone' type="number" value={formState.Phone} class="form-control" id="phone" placeholder="1234567890" onChange={handleChange} required />
                    <label htmlFor="phone">Phone</label>
                </div>
                <div class="form-floating">
                    <input name='ExperienceYears' type="number" value={formState.ExperienceYears} class="form-control" id="experienceYears" placeholder="6" onChange={handleChange} required />
                    <label htmlFor="experienceYears">Experience Years</label>
                </div>
                <div class="form-floating">
                    <input name='CareerStartDate' type="date" value={formState.CareerStartDate} class="form-control" id="careerStartDate" placeholder="2010-07-01" onChange={handleChange} required />
                    <label htmlFor="careerStartDate">Career Start Date</label>
                </div>
                <div class="form-floating">
                    <input name='InterviewedDate' type="date" value={formState.InterviewedDate} class="form-control" id="interviewedDate" placeholder="2015-08-10" onChange={handleChange} required />
                    <label htmlFor="interviewedDate">Interviewed Date</label>
                </div>
                <div class="form-floating">
                    <input name='PreviousCompany' type="text" value={formState.PreviousCompany} class="form-control" id="previousCompany" placeholder="ABC Corp" onChange={handleChange} required />
                    <label htmlFor="previousCompany">Previous Company</label>
                </div>
                <div class="form-floating">
                    <input name='CTC' type="number" value={formState.CTC} class="form-control" id="ctc" placeholder="7000000" onChange={handleChange} required />
                    <label htmlFor="ctc">CTC</label>
                </div>
              <button type='submit'>Submit</button>
              <button onClick={props.onHide}>Close</button>
            </form>
          </Modal.Body>
        </Modal>
      );
}

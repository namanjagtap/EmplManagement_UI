import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Modal, Button } from 'react-bootstrap';

export default function EmployeeModal(props) {

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

  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    console.log(formState)
  }, [formState])

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
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
              Add Employee
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
                <div class="form-floating mb-3">
                    <input name='EmplID' type="number" class="form-control" id="emplID" placeholder="1" onChange={handleChange} onChange={handleChange} />
                    <label for="emplID">Employee ID</label>
                </div>
                <div class="form-floating">
                    <input name='EmplID' type="text" class="form-control" id="floatingInput" placeholder="John Dire" onChange={handleChange} />
                    <label for="floatingInput">Employee Name</label>
                </div>
                <div class="form-floating">
                    <input name='DOB' type="date" class="form-control" id="dob" placeholder="1990-05-15" onChange={handleChange} />
                    <label for="dob">DOB</label>
                </div>
                <div class="form-floating">
                    <input name='DOJ' type="date" class="form-control" id="doj" placeholder="2015-08-20" onChange={handleChange} />
                    <label for="doj">DOJ</label>
                </div>
                <div class="form-floating">
                    <input name='BloodGroup' type="text" class="form-control" id="bloodGroup" placeholder="A+ onChange={handleChange}"/>
                    <label for="bloodGroup">Blood Group</label>
                </div>
                <div class="form-floating">
                    <input name='Phone' type="number" class="form-control" id="phone" placeholder="1234567890" onChange={handleChange} />
                    <label for="phone">Phone</label>
                </div>
                <div class="form-floating">
                    <input name='ExperienceYears' type="number" class="form-control" id="experienceYears" placeholder="6" onChange={handleChange} />
                    <label for="experienceYears">Experience Years</label>
                </div>
                <div class="form-floating">
                    <input name='CareerStartDate' type="date" class="form-control" id="careerStartDate" placeholder="2010-07-01" onChange={handleChange} />
                    <label for="careerStartDate">Career Start Date</label>
                </div>
                <div class="form-floating">
                    <input name='InterviewedDate' type="date" class="form-control" id="interviewedDate" placeholder="2015-08-10" onChange={handleChange} />
                    <label for="interviewedDate">Interviewed Date</label>
                </div>
                <div class="form-floating">
                    <input name='PreviousCompany' type="text" class="form-control" id="previousCompany" placeholder="ABC Corp" onChange={handleChange} />
                    <label for="previousCompany">Previous Company</label>
                </div>
                <div class="form-floating">
                    <input name='CTC' type="number" class="form-control" id="ctc" placeholder="7000000" onChange={handleChange} />
                    <label for="ctc">CTC</label>
                </div>
              <Button type='submit'>Submit</Button>
            </form>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
}

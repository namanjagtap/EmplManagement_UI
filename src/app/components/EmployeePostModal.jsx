import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css"
import "bootstrap/dist/js/bootstrap.bundle"
import { Modal } from 'react-bootstrap';
import "../styles/modalStyle.css"

export default function EmployeePostModal(props) {

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
    CTC: '',
    WorkMode: ''
  });


  const handleChange = (e) => {
    setFormState({...formState, [e.target.name]: e.target.value})
  }

  useEffect(() => {
    console.log(formState)
  }, [formState])

  //Employee ID Creation Logic
  const generateEmplID = (work, doj, count) => {
    const year = doj.substr(2, 2);
    const month = doj.substr(5, 2);

    let prefix;
    if(work=='Remote' ||  work=='Hybrid')
      prefix = '1';
    else if(work=='Office')
      prefix = '2'
    else
      prefix = '0';

      const emplID = `${prefix}${year}${month}${count}`;
      return emplID;
  }

  console.log(formState);
  const handleSubmit = (e) => {
    e.preventDefault();

    //Applying EmplID creation logic here
    //Here I am fetching the count of employees and the in the response 
    //I am returning another fetch that will use this count variable for calculations.
    let count;
    fetch(`https://localhost:7032/api/EmployeeAPI/count`)
    .then(response => {
      if(response.ok){
        return response.text();
      }
      throw new Error("Cant fetch count of employees")
    })
    .then(data => {
      count = parseInt(data);
      formState.EmplID = generateEmplID(formState.WorkMode, formState.DOJ, count+1);
      return fetch(`https://localhost:7032/api/EmployeeAPI`, {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify(formState)
              })
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
          CTC: '',
          WorkMode: ''
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
              Add Employee
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit}>
            <div class="form-floating">
                    <input name='EmplName' type="text" class="form-control" id="floatingInput" placeholder="John Dire" onChange={handleChange} required />
                    <label htmlFor="floatingInput">Employee Name</label>
                </div>
                <div class="form-floating">
                    <input name='Phone' type="number" class="form-control" id="phone" placeholder="1234567890" onChange={handleChange} required />
                    <label htmlFor="phone">Phone</label>
                </div>
                <div className='row justify-content-between'>
                  <div class="form-floating col">
                      <input name='DOB' type="date" class="form-control" id="dob" placeholder="1990-05-15" onChange={handleChange} required />
                      <label className='ms-2' htmlFor="dob">DOB</label>
                  </div>
                  <div class="form-floating col">
                      <input name='DOJ' type="date" class="form-control" id="doj" placeholder="2015-08-20" onChange={handleChange} required />
                      <label className='ms-2' htmlFor="doj">DOJ</label>
                  </div>
                </div>
                <div className='row justify-content-between'>
                  <div class="form-floating col">
                      <input name='BloodGroup' type="text" class="form-control" id="bloodGroup" placeholder="A+" onChange={handleChange} required />
                      <label className='ms-2' htmlFor="bloodGroup">Blood Group</label>
                  </div>
                  <div class="form-floating col">
                      <input name='ExperienceYears' type="number" class="form-control" id="experienceYears" placeholder="6" onChange={handleChange} required />
                      <label className='ms-2' htmlFor="experienceYears">Experience Years</label>
                  </div>
                </div>
                <div className='row justify-content-between'>
                  <div class="form-floating col">
                      <input name='CareerStartDate' type="date" class="form-control" id="careerStartDate" placeholder="2010-07-01" onChange={handleChange} required />
                      <label className='ms-2' htmlFor="careerStartDate">Career Start Date</label>
                  </div>
                  <div class="form-floating col">
                      <input name='InterviewedDate' type="date" class="form-control" id="interviewedDate" placeholder="2015-08-10" onChange={handleChange} required />
                      <label className='ms-2' htmlFor="interviewedDate">Interviewed Date</label>
                  </div>
                </div>
                <div class="form-floating">
                    <input name='PreviousCompany' type="text" class="form-control" id="previousCompany" placeholder="ABC Corp" onChange={handleChange} required />
                    <label htmlFor="previousCompany">Previous Company</label>
                </div>
                <div class="form-floating">
                    <input name='CTC' type="number" class="form-control" id="ctc" placeholder="7000000" onChange={handleChange} required />
                    <label htmlFor="ctc">CTC</label>
                </div>
                <div class="form-floating">
                  <select name='WorkMode' class="form-control" id='workMode' onChange={handleChange} placeholder="Remote" required >
                    <option value="" disabled selected></option>
                    <option value="Remote">Remote</option>
                    <option value="Hybrid">Hybrid</option>
                    <option value="Office">Office</option>
                  </select>
                  <label htmlFor='workMode'>Work Mode</label>
                </div>
              <button type='submit'>Submit</button>
              <button onClick={props.onHide}>Close</button>
            </form>
          </Modal.Body>
        </Modal>
      );
}

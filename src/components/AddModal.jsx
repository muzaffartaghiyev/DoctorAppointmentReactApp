import { useState } from "react"
import { v4 as uuidv4 } from "uuid";

import { toast } from 'react-toastify';


import {Button, Modal, Form} from "react-bootstrap"


const AddModal = ({showModal,closeModal,doctorName,appointmentList,setAppointmentList}) => {
  

  const [patientName,setPatientName] = useState('')
  const [date,setDate] = useState('')

  const handleSubmit =(e)=>{
      e.preventDefault()

      if(patientName.trim()===''){
        toast.error("Please fill out the name and surname field!");
        return;
      }

      setAppointmentList([...appointmentList,{
          id: uuidv4(),
          patient: patientName,
          day: date,
          consulted: false,
          doctor: doctorName,
      }])  
      toast.success("Appointment added successfully!");
      closeModal()
  }

  return (
    <>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title className="text-danger">Appointment for {doctorName}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Patient Name and Surname</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter name and surname"
                autoFocus
                onChange={(e)=>setPatientName(e.target.value)}
                value={patientName}
                required
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Day&Time</Form.Label>
              <Form.Control
                type="datetime-local"
                onChange={(e)=>setDate(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group
              className="mb-3 d-flex justify-content-center gap-3"
              controlId=""
            >
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button variant="danger" onClick={closeModal}>
                Close
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddModal



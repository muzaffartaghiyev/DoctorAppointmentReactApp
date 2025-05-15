import { useState } from 'react'
import {Col, Card} from "react-bootstrap"

import AddModal from "./AddModal"

const DoctorCard = ({doctor,appointmentList,setAppointmentList}) => {
    const [showModal ,setShowModal] = useState(false)


    const handleShowModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

  return (
    <Col xs={6} md={4} lg={3} className=" d-flex justify-content-center" >
            <Card style={{ width: '12rem', height:"230px", }} >
            <Card.Img className="doctor-img" variant="top" src={doctor.img} onClick={handleShowModal}/>
            
            <Card.Body>
                <Card.Title>{doctor.name}</Card.Title>
                <Card.Text>
                {doctor.dep}
                </Card.Text>
            </Card.Body>
            </Card>
            <AddModal showModal={showModal} closeModal={handleCloseModal} doctorName={doctor.name}  appointmentList={appointmentList} setAppointmentList={setAppointmentList}/>
        </Col>
  )
}

export default DoctorCard

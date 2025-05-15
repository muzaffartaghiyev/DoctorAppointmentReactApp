import React, { useState } from 'react'

import {Container} from "react-bootstrap"

import Doctors from "../components/Doctors"
import AppointmentList from "../components/AppointmentList"

import {doctorData, appointmentData} from "../helpers/Data"

const Home = () => {

  const [appointmentList, setAppointmentList] = useState(appointmentData)

  return (
    <Container className='d-flex flex-column justify-content-center align-items-center'>
        <h1 className='display-4 fw-normal text-danger mt-3'>CLARUS HOSPITAL</h1>
        <Doctors doctorData={doctorData} appointmentList={appointmentList} setAppointmentList={setAppointmentList}/>
        <AppointmentList appointmentList={appointmentList} setAppointmentList={setAppointmentList}/>
    </Container>
  )
}

export default Home

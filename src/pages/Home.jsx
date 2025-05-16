import React, { useState } from 'react'

import {Container,Image} from "react-bootstrap"

import Doctors from "../components/Doctors"
import AppointmentList from "../components/AppointmentList"

import {doctorData, appointmentData} from "../helpers/Data"
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {

  const [appointmentList, setAppointmentList] = useState(appointmentData)

  return (
    <Container className='d-flex flex-column justify-content-center align-items-center'>
        <h1 className='display-4 fw-normal text-danger mt-3'>CLARUS HOSPITAL</h1>
        <Doctors doctorData={doctorData} appointmentList={appointmentList} setAppointmentList={setAppointmentList}/>
        {appointmentList.length===0?(<Image src='./img/appointment.jpg' className='w-50 m-5' rounded   />) : (<AppointmentList appointmentList={appointmentList} setAppointmentList={setAppointmentList}/>)}
        
    </Container>
  )
}

export default Home

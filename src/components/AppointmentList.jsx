import { TiDelete } from "react-icons/ti";
import { toast } from 'react-toastify';

import {Container} from "react-bootstrap"


// toast.error("Please fill out the name and surname field!");

const AppointmentList = ({appointmentList,setAppointmentList}) => {

  const handleClick = (patient)=>{
      setAppointmentList(appointmentList.map(appointment=>appointment.patient === patient ? {...appointment, consulted:!appointment.consulted} :appointment))
      toast.info(`Consultation status updated for ${patient}`);
  }

  const handleDelete = (patient,doctorName) =>{
      setAppointmentList(appointmentList.filter(pt=>pt.patient!==patient))
      toast.warning(`Appointment deleted for ${patient} with doctor ${doctorName}`);
  }

  return (
    <Container className='p-5 d-flex flex-column gap-3'>
        {appointmentList.map(appointment=>
            <div key={appointment.id} className={`d-flex justify-content-between g-3 p-3 appointment-container ${appointment.consulted?'consulted':''}`}  >
                <div className='d-flex justify-content-between w-100 pe-5 ms-3' onClick={()=>handleClick(appointment.patient)}>
                  
                  <div>
                    <h3 className='text-danger'>{appointment.patient}</h3>
                    <h5>{appointment.doctor}</h5>
                  </div>
                  <div className='me-5'>
                    <h5>Date: {appointment.day.split("T")[0]}</h5>
                    <h5>Time: {appointment.day.split("T")[1]} </h5>
                  </div>
                </div>
                <TiDelete style={{color:'red',fontSize:'2rem',cursor:'pointer'}} onClick={()=>handleDelete(appointment.patient,appointment.doctor)}/>
                
            </div>
        
        )}
    </Container>
  )
}

export default AppointmentList

import {Container,Row} from "react-bootstrap"
import DoctorCard from "./DoctorCard"

const Doctors = ({doctorData,appointmentList,setAppointmentList}) => {

  return (
    <div className='text-center'>
      <h2 className='text-success mb-4'>Our Doctors</h2>
      <Container className="justify-content-center">
        <Row className='g-3 justify-content-center' >
        {doctorData.map((doctor)=>
          <DoctorCard doctor={doctor} key={doctor.id} appointmentList={appointmentList} setAppointmentList={setAppointmentList}/>
        )}
      </Row>
      </Container>
      
    </div>
  )
}

export default Doctors

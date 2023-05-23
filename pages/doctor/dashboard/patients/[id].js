import MyLayout from "../../component/layout";
import axios from "axios";
import DoctorDrawer from "../../component/doctordrawer";
import AppointmentLayout from "../../component/appointmentlayout"

export default function PatientProfile({ data }) {
  
  return (
    <>
    <MyLayout title={data.id} />
    <DoctorDrawer/>
    
      <AppointmentLayout
      id={data.id} 
      patientName={data.patientName}
      patientAge={data.patientAge}
      patientGender={data.patientGender}
      patientAppointmentDate={data.patientAppointmentDate}
      patientAppointmentTime={data.patientAppointmentTime}
      patientAddress={data.patientAddress}
      patientEmail={data.patientEmail}
      patientEmargencyContact={data.patientEmargencyContact}
      filename={data.filename}
      doctorName={data.doctorName}
      doctorEmail={data.doctorEmail}
      />
    </>
  );
}



export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get(`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/findAppointmentByID/` + id);
  const data = await response.data;
  //console.log(data);
  return { props: { data } };
}

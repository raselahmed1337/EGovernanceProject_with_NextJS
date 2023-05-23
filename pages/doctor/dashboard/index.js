import Link from "next/link";
import axios from "axios";
import MyLayout from '../component/layout';
import DoctorDrawer from "../component/doctordrawer";
import SessionCheck from "../component/sessioncheck";

export default function GetAllAppointments({ data }) {
  return (
    <>
    <SessionCheck/>
    <DoctorDrawer />
      <MyLayout title="All Patients" />
      

      <div className="relative mb-20 mt-1 ml-48 bg-gray-200 flex justify-center items-center h-screen">
  <div className="flex justify-center flex-col items-center">
    <h1 className="text-lg font-bold mb-2">Recent Patients Appointment List</h1>
    <table className="ml-12 min-w-full divide-y divide-gray-200">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Patient Name
          </th>
          <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Age
          </th>
          <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Gender
          </th>
          <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Time
          </th>
          <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Date
          </th>
          <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Email
          </th>
          <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Emargency
          </th>
          <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Doctor Name
          </th>
          <th className="px-2 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Doctor Email
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {data.map((item) => (
          <tr key={item.id}>
            <td className="px-4 py-4 whitespace">
              <Link href={"/doctor/dashboard/patients/" + item.id} className="text-blue-500 hover:text-blue-700">
                {item.patientName}
              </Link>
            </td>
           
            <td className="px-2 py-4 whitespace-nowrap">{item.patientAge}</td>
            <td className="px-2 py-4 whitespace-nowrap">{item.patientGender}</td>
            <td className="px-2 py-4 whitespace-nowrap">{item.patientAppointmentTime}</td>
            <td className="px-2 py-4 whitespace-nowrap">{item.patientAppointmentDate}</td>
            <td className="px-2 py-4 whitespace-nowrap">{item.patientEmail}</td>
            <td className="px-2 py-4 whitespace-nowrap">{item.patientEmargencyContact}</td>
            <td className="px-2 py-4 whitespace-nowrap">{item.doctorName}</td>
            <td className="px-2 py-4 whitespace-nowrap">{item.doctorEmail}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>

</>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/allAppointments/");
  const data = await response.data;
  return { props: { data } };
}

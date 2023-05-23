import MyLayout from "./layout";
import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";

export default function AppointmentLayout(props) {
    const [message, setMessage] = useState('');
    const router = useRouter();

    const handleDeleteDoctor = async () => {
        try {
          const response = await axios.delete(`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/deleteAppointment/${router.query.id}`);
          setMessage(`Patient with ID ${router.query.id} deleted successfully`);
          router.push('/doctor/dashboard/');
        } catch (error) {
          console.log(error);
          setMessage(`Error deleting Patient with ID ${router.query.id}`);
        }
      };
   
    return (
      <>
        <MyLayout title="All Patients" />
        <div className="p-28">
          <div className="mx-auto w-72 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <div className="flex flex-col items-center pb-10">
              {/* <img
                className="w-24 h-24 mb-3 rounded-full shadow-lg"
                src={`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/getPatientsImage/` + props.patientPhoto}
                alt="me"
                width="150"
                height="150"
              /> */}
              {/* <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{props.id}</h5> */}
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {props.patientName}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {props.patientAge}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {props.patientGender}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {props.patientAppointmentDate}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {props.patientAppointmentTime}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {props.patientAddress}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {props.patientEmail}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {props.patientEmargencyContact}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {props.doctorName}
              </span>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {props.doctorEmail}
              </span>

              <div className="flex mt-4 space-x-3 md:mt-6">
                <button
                  href="#"
                  type="button"
                  onClick={handleDeleteDoctor}
                  className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-100 hover:bg-blue-700 duration-700 ... inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
                >
                  Completed
                </button>
              </div>

              {message && (
                <p className="text-center mt-4 text-green-700 font-bold">
                  {message}
                </p>
              )}
            </div>
          </div>
        </div>
      </>
    );
}
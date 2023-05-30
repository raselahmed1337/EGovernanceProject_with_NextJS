import MyLayout from "../component/layout"
import Link from "next/link"
import DoctorDrawer from "../component/doctordrawer"
import SessionCheck from "../component/sessioncheck";

export default function DoctorDashboard() {
  return (
    <>
      <SessionCheck/>
      <DoctorDrawer />
      <MyLayout title="Doctor Dashboard"/>

      <div className="flex flex-wrap md:flex-nowrap">
        <div className="mt-1 md:w-1/2 ml-auto">
          <div className="flex fixed flex-col justify-center items-center h-screen">
            <div className="bg-gradient-to-r from-cyan-700 to-blue-900 px-28 rounded-2xl shadow-md">
              
              <Link href="/doctor/dashboard/finddoctorbyid" className="mb-2 flex items-center text-white justify-center">
                Find Doctors by ID
              </Link>
              <Link href="/doctor/dashboard/findblogbyblogid" className="mb-2 flex items-center text-white justify-center">
                Find Blog by Blog ID
              </Link>
              <Link href="/doctor/dashboard/finddoctorbyemail" className="mb-2 flex items-center text-white justify-center">
                Find Doctors by Email
              </Link>
              
              <Link href="/doctor/dashboard/finddoctorbyphone" className="mb-2 text-blue-600 flex text-white justify-center">
                Find Doctors by Phone Number
              </Link>
              <Link href="/doctor/dashboard/finddoctorbycollege" className="mb-2 text-blue-600 flex text-white justify-center">
                Find Doctors by College Name
              </Link>
              <Link href="/doctor/dashboard/finddoctorbyname" className="mb-2 text-blue-600 flex itext-white  justify-center">
                Find Doctors by Name
              </Link>
              <Link href="/doctor/dashboard/specialist" className="mb-2 text-blue-600 flex items-center justify-center">
                Find Doctors by Specialist
              </Link>
              <Link href="/doctor/dashboard/deletedoctorbyid" className="mb-2 flex items-center text-white justify-center">
                Delete Doctor by ID
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

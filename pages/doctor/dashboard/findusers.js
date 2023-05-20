import MyLayout from "../component/layout"
import Link from "next/link"
import DoctorDrawer from "../component/doctordrawer"
import SessionCheck from "../component/sessioncheck";


export default function DoctorDashboard() {

  return (
    <>
    <SessionCheck/>
      <MyLayout title="Doctor Dashboard"/>
      <DoctorDrawer />
      
      <div className="flex flex-wrap md:flex-nowrap">
  <div className="mt-20 w-full md:w-1/2 ml-auto">
    <div className="flex fixed flex-col flex-center justify-center items-center h-screen">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Link href="/doctor/dashboard/finddoctorbyid" className="my-2 flex items-center text-blue-600">
          <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4v3m0 0v9a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z" />
          </svg>
          Find Doctors by ID
        </Link>
        <Link href="/doctor/dashboard/findblogbyblogid" className="my-2 flex items-center text-blue-600">
          <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h2m4 0h2a2 2 0 002-2V7a2 2 0 00-2-2h-2m0 0V3a2 2 0 00-2-2H7a2 2 0 00-2 2v2m10 8v3m0 0v3m0-3h3m-3 0H7a2 2 0 01-2-2V7a2 2 0 012-2h10a2 2 0 012 2v10a2 2 0 01-2 2z" />
          </svg>
          Find Blog by Blog ID
        </Link>
        <Link href="/doctor/dashboard/finddoctorbyemail" className="my-2 flex items-center text-blue-600">
          <svg className="w-6 h-6 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6a2 2 0 01-2-2V6a2 2 0 012-2h12a2 2 0 012 2v12a2 2 0 01-2 2h-6a2 2 0 01-2-2" />
          </svg>
          Find Doctors by Email
        </Link>
        <Link href="/doctor/dashboard/finddoctorbyphone" className="my-2 text-blue-600 flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-6 h-6 mr-2">
            <path d="M10 1a9 9 0 100 18 9 9 0 000-18zm0 16.2A7.2 7.2 0 1110 2.8a7.2 7.2 0 010 14.4zm2.635-10.545a.8.8 0 00-1.025.483A.8.8 0 0012.8 8v2.457L9.648 13.7a.8.8 0 101.174 1.088l2.88-3.04v2.783a.8.8 0 101.6 0v-3.6a.8.8 0 00-.366-.667l-3.2-2.4a.8.8 0 00-.659-.125z" />
          </svg>
          Find Doctors by Phone Number
        </Link>
        <Link href="/doctor/dashboard/finddoctorbycollege" className="my-2 text-blue-600 flex items-center">
          <svg className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M12.293 6.293a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 01-1.414-1.414L13.586 11H3a1 1 0 010-2h10.586l-1.293-1.293a1 1 0 010-1.414z" />
          </svg>
          Find Doctors by College Name
        </Link>
        <Link href="/doctor/dashboard/finddoctorbyname" className="my-2 text-blue-600 flex items-center">
          <svg className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 7a2 2 0 114 0 2 2 0 01-4 0zM3 16v-3a3 3 0 013-3h8a3 3 0 013 3v3a1 1 0 01-1 1H4a1 1 0 01-1-1zm12 0a2 2 0 002-2v-3a1 1 0 00-1-1H4a1 1 0 00-1 1v3a2 2 0 002 2h10z" />
          </svg>
          Find Doctors by Name
        </Link>
        <Link href="/doctor/dashboard/specialist" className="my-2 text-blue-600 flex items-center">
          <svg className="mr-2 h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.125 2h3.75C16.719 2 18 3.281 18 5v2h-2v.938a7.003 7.003 0 00-6 0V7H2v6.938a7.003 7.003 0 006 0V13h2v2h-2v1h6v-1h-2v-2.063a7.003 7.003 0 006 0V13h2V5c0-1.719-1.281-3-2.875-3h-3.75zM4 9h4v4H4V9zm12 0h-4v4h4V9z" clipRule="evenodd" />
          </svg>
          Find Doctors by Specialist
        </Link>
        <Link href="/doctor/dashboard/deletedoctorbyid" className="my-2 flex items-center text-blue-600">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
          <span>Delete Doctor by ID</span>
        </Link>
      </div>
    </div>
  </div>
</div>


      </>
    );
  }
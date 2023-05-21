import Link from 'next/link';
import { useState, useEffect } from 'react';
import axios from 'axios'
import { useRouter } from 'next/router';

export default function Session() {
  const [email, setEmail] = useState(null);
  const [doctorDetails, setDoctorDetails] = useState(null);
    const router = useRouter();
    
  useEffect(() => {
      if (typeof window !== 'undefined')// checks if the code is running on the client-side and not on the server-side.
      {
          const session = sessionStorage.getItem('email');
          if (session) {
            setEmail(sessionStorage.getItem('email'));
           
          }          
      }
   
  }, []);

const handleSignOut = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/signout/');
      console.log(response.data);
      sessionStorage.removeItem('email');
      setEmail(null);
      router.push('/doctor/signIn');
    } catch (error) {
      console.error(error);
    }
  };

  const getDoctorDetails = async () => {
    try {
      const response = await axios.get(`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/email/${email}`);
      setDoctorDetails(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const toggleDoctorDetails = (event) => {
    event.preventDefault();
    if (doctorDetails === null) {
      getDoctorDetails();
    } else {
      setDoctorDetails(null);
    }
  };
  

  return (
    <>
          {email !== null ? (
        <>
          <div className="flex md:order-2"> 
          <Link href="/doctor/dashboard/insertBlog"className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-100 duration-700 ... text-white mr-5 font-bold hover:text-gray-500" >Add Blog</Link>
          <Link href="/doctor/dashboard/addCampaign"className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-100 duration-700 ... text-white mr-5 font-bold hover:text-gray-500" >Add Campaign</Link>
           <Link href="/doctor/dashboard/" className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-100 duration-700 ... text-white mr-5 font-bold hover:text-gray-500" >Dashboard</Link>

          <button href="#" onClick={toggleDoctorDetails} onMouseOver={getDoctorDetails}
          className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-100 duration-700 ... text-white mr-4 font-bold hover:text-gray-500"
          >
          My Profile     
          </button>

          {doctorDetails && (
  <div className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-100 duration-700 ... absolute z-40 right-2 w-54 mt-12 p-3 items-center justify-center rounded-lg shadow-lg bg-blue-500 hover:bg-blue-700 text-white transition-all duration-500 transform hover:-translate-x-2" onClick={toggleDoctorDetails}>
                <img
                  className="p-2 w-28 h-28 mb-0 item-center rounded-full shadow-lg"
                  src={`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/getimage/${doctorDetails.filename}`}
                  alt="me"
                  width={150}
                  height={150}
                />    
    <p className="text-grey-500 ">{doctorDetails.name}</p>
    <p className="text-grey-500 ">Specialist: {doctorDetails.specialist}</p>
    <p className="text-grey-500 ">Email: {doctorDetails.email}</p>
    <div className="grid grid-cols-2 gap-2 mt-2">
      <button type="button" className="py-1 px-2 text-xs font-semibold text-white bg-green-500 hover:bg-green-700 shadow shasow-lg rounded-lg">Update</button>
      <button type="button" className="py-1 px-2 text-xs font-semibold text-white bg-red-500 hover:bg-red-700 shadow shasow-lg rounded-lg" onClick={handleSignOut}>Sign out</button>
    </div>
  </div>
)}

          {/* <button  className="text-white font-bold hover:text-gray-500" onClick={handleSignOut}>Sign out</button> */}
          
          
               
          </div>
     
            </>
      ) : (
        <div className="flex md:order-2">
              <Link href="/doctor/signIn" className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-100 duration-700 ... text-white mr-4 font-bold hover:text-gray-500">Sign in</Link>
              <Link href="/doctor/doctorRegistration" className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-100 duration-700 ... text-white mr-4 font-bold hover:text-gray-500">Registration</Link>
         </div>   

         
      )}

      
     
    </>
  );
}
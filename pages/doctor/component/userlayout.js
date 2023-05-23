import { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/router';
import SessionCheck from "./sessioncheck";
import MyLayout from "./layout";
import DoctorDrawer from "./doctordrawer";

export default function UserLayout(props) {

  const [message, setMessage] = useState('');
  const router = useRouter();

  const [name, setName] = useState(props.name);
  const [specialist, setSpecialist] = useState(props.specialist);
  const [collegeName, setCollegeName] = useState(props.collegeName);
  const [age, setAge] = useState(props.age);
  const [email, setEmail] = useState(props.email);
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber);

  const handleUpdateDoctor = async(e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/updatedoctor/${props.id}`,
      {
          name,
          age,
          collegeName,
          specialist,
          phoneNumber,
          email,
        }
      );
        setMessage(`Doctor with ID ${props.id} updated successfully`);
        router.push('/doctor/dashboard/getalldoctorsinDashboard');
    } catch (error) {
      setMessage(`Error updating doctor with ID ${props.id}`);
    }
  };



  const handleDeleteDoctor = async () => {
    try {
      const response = await axios.delete(`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/deletedoctor/${props.id}`);
      setMessage(`Doctor with ID ${props.id} deleted successfully`);
      router.push('/doctor/dashboard/getalldoctorsinDashboard');
    } catch (error) {
      console.log(error);
      setMessage(`Error deleting doctor with ID ${props.id}`);
    }
  };

  return (
    <>
      <SessionCheck />
      <DoctorDrawer/>
      <MyLayout title={props.name} />

      <div className="py-28 bg-gray-200 p-8">
        <div className="mx-auto w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-8">
            <img
              className="py-1 px-1 w-28 h-28 mb-0 rounded-full shadow-lg"
              src={`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/getimage/${props.filename}`}
              alt="me"
              width="150"
              height="150"
            />

            <form
              onSubmit={handleUpdateDoctor}
              className="grid grid-cols-2 gap-4 p-2"
            >
              <div className="mt-2 ">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="shadow focus:shadow-outline p-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="age"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Age
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="age"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="shadow focus:shadow-outline p-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="collegeName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  College Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="collegeName"
                    id="collegeName"
                    value={collegeName}
                    onChange={(e) => setCollegeName(e.target.value)}
                    className="shadow focus:shadow-outline p-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="specialist"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Specialist
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="specialist"
                    id="specialist"
                    value={specialist}
                    onChange={(e) => setSpecialist(e.target.value)}
                    className="shadow focus:shadow-outline p-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="collegeName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Phone Number
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="phoneNumber"
                    id="phoneNumber"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    className="shadow focus:shadow-outline p-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="shadow focus:shadow-outline p-1 focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>
              </div>
            </form>
            
            <div className="flex mt-4 space-x-3 md:mt-6">
              <button
                href="#"
                type="button"
                onClick={handleUpdateDoctor}
                className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-100 hover:bg-blue-700 duration-700 ... inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update
              </button>
              <button
                href="#"
                type="button"
                onClick={handleDeleteDoctor}
                className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-100 hover:bg-blue-700 duration-700 ... inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Delete
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

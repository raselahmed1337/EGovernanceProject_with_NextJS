import { useState } from 'react';
import axios from 'axios';
import MyLayout from '../component/layout';

export default function DeleteDoctor() {
  const [doctorId, setDoctorId] = useState('');
  const [message, setMessage] = useState('');

  const handleDeleteDoctor = async () => {
    try {
      const response = await axios.delete(`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/deletedoctor/${doctorId}`);
      setMessage(`Doctor with ID ${doctorId} deleted successfully`);
    } catch (error) {
      console.log(error);
      setMessage(`Error deleting doctor with ID ${doctorId}`);
    }
  };

  return (
    <>
      <MyLayout title="Delete Doctor" />
      <div className="p-12 mt-20">
        <section className="text-gray-600 body-font ml-auto">
          <div className="bg-blue-300 rounded-lg p-8 md:ml-auto w-auto mt-10 md:mt-0">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-gray-700 font-sm mb-0" htmlFor="doctorId">
                  Doctor ID
                </label>
                <input
                  className="input-field rounded-sm"
                  id="doctorId"
                  placeholder="Enter Doctor ID"
                  type="number"
                  value={doctorId}
                  onChange={(e) => setDoctorId(e.target.value)}
                />
              </div>
              <button
                type="button"
                className="text-white font-sm bg-red-500 border-0 py-1 px-1 focus:outline-none hover:bg-red-600 rounded text-lg"
                onClick={handleDeleteDoctor}
              >
                Delete Doctor
              </button>
            </div>
            {message && (
              <p className="text-center mt-4 text-green-700 font-bold">{message}</p>
            )}
          </div>
        </section>
      </div>
    </>
  );
}

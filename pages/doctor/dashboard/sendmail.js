import { useState } from 'react';
import axios from 'axios';
import MyLayout from '../component/layout';
import DoctorDrawer from '../component/doctordrawer';
import SessionCheck from '../component/sessioncheck';

export default function SendMail() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleSubjectChange = (event) => setSubject(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!email || !subject || !text) {
      setErrorMessage('Please fill out all fields');
      return;
    }

    try {
      const response = await axios.post('https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/sendmail/', {
        email,
        subject,
        text,
      });
      console.log(response.data);
      setEmail('');
      setSubject('');
      setMessage('');
      setErrorMessage('');
    } catch (error) {
      console.log(error);
      setErrorMessage('Failed to send email');
    }
  };
 
  return (
    <>
    <SessionCheck/>
    <DoctorDrawer/>
    <MyLayout title="Send Mail"/>
   
    <div className="flex justify-center items-center h-screen bg-gray-100">
  <form className="bg-white shadow-md rounded px-10 pt-6 pb-8 mb-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 hovar:">
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
        Email:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="email"
        type="email" placeholder="enter your email" 
        value={email}
        onChange={handleEmailChange}
      />
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="subject">
        Subject:
      </label>
      <input
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="subject"
        type="text"
        placeholder="enter your subject" 
        value={subject}
        onChange={handleSubjectChange}
      />
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="text">
        Message:
      </label>
      <textarea
      placeholder="enter your message" 
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="text"
        value={text}
        onChange={handleMessageChange}
      />
    </div>
    <div className="flex items-center justify-center">
      <button
        className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-100 duration-700 ... bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        onClick={handleSubmit}
      >
        Send
      </button>
    </div>
    {errorMessage && <p className='text-red'>{errorMessage}</p>}
  </form>
</div>

</>
  );
}

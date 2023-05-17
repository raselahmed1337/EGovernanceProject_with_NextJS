import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import UserLayout from '../component/userdata';
import MyLayout from '../component/layout';
import SessionCheck from '../component/sessioncheck';


export default function MyPage({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    router.push({
      pathname: 'finddoctorbyspecialist',
      query: { specialist: inputValue }
    });
  }

  return (
    <>
    <SessionCheck/>
     <MyLayout />
      <form onSubmit={handleFormSubmit}>
        <input type="text" value={inputValue} onChange={handleInputChange} />
        <button type="submit">Fetch Data</button>
      </form>
      {data.status == null? 
   <UserLayout data={data}/>
      : data.status }
    </>
  );
}
  
export async function getServerSideProps({ query }) {
    const specialist = query.specialist;
    try {
      const response = await axios.get(`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/specialist/${specialist}`);
      const data = await response.data;
      return {
        props: {
          data
        }
      };
    } catch (error) {
      return {
        props: {
          data: {status:"enter valid user specialist"}
        }
      };
    }
  }
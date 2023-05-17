import { useState } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';
import UserLayout from '../component/userdata';
import MyLayout from '../component/layout';


export default function MyPage({ data }) {
  const [inputValue, setInputValue] = useState();
  const router = useRouter();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // redirect to the same page with query params containing the input value
    router.push({
      pathname: 'finddoctorbyname',
      query: { inputValue: inputValue }
    });
  }

  return (
    <>
      <MyLayout title="Find Doctor By Name"/>
      <div className="fixed top-28  justify-center z-20">
  <form onSubmit={handleFormSubmit} className="flex items-center justify-center py-2 px-4">
    <div className="relative w-full max-w-md">
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Search"
        className="block w-full text-gray-600 border-gray-300 rounded-md bg-white pl-10 pr-4 py-2 text-sm placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 focus:ring-opacity-50 transition duration-150 ease-in-out"
      />
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <svg className="h-5 w-5 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M21 21l-4.35-4.35M12 6a6 6 0 100 12 6 6 0 000-12z" />
        </svg>
      </div>
    </div>

    <button
      type="submit"
      className="ml-4 px-4 py-2 text-sm font-medium leading-5 text-white transition-colors duration-150 bg-blue-500 border border-transparent rounded-md active:bg-blue-600 hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
    >
      Search
    </button>
  </form>
</div>
     
{data.status == null? 
   <UserLayout data={data}/>
      : data.status }
    </>
  );
}
  
  export async function getServerSideProps({ query }) {
    const inputValue = query.inputValue;
    try {
    const response = await axios.get('https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/finddoctorbyname/'+inputValue);
    const data = await response.data;
  
    return {
      props: {
        data
      }
    };
    
    } catch (error) {
  
    return {
      props: {
        data: {status:"enter valid doctor name"}
      }
    };
  }
  }
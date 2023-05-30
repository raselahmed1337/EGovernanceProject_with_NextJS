import { useEffect, useState } from 'react';
import MyLayout from './component/layout';
import axios from 'axios';

export default function GetAllCampaigns({ data }) {
  const [currentCampaignIndex, setCurrentCampaignIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCampaignIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [data]);

  return (
    <>
      <MyLayout title="All Campaigns" />
      <div className="flex justify-center items-center min-h-screen bg-gray-300">
        <div className="w-full">
          <div className="flex flex-wrap">
            {data.map((item, index) => (
              <div
                key={item.id}
                className={`w-full p-4 ${index === currentCampaignIndex ? 'block' : 'hidden'}`}
              >
                <div className="fixed inset-0 flex items-center justify-center mb-10">
                  <div className="transition ease-in-out delay-150 hover:-translate-y-1 duration-700 ... bg-gradient-to-r from-cyan-700 to-blue-900 flex items-center justify-center shadow-lg rounded-2xl shadow-md p-2 mt-12 mb-12 mr-10 ml-10 transition-transform transform-gpu hover:scale-105">
                    <img
                      src={`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/getcampaignimage/${item.filename}`}
                      alt="campaign"
                      className="w-96 h-96 object-cover rounded-2xl"
                      width={300}
                      height={300}
                    />
                    <div className="ml-4 flex flex-col justify-center mr-4">
                      <ul>
                        <h3 className="text-2xl text-gray-100 font-semibold mb-1">{item.campaignName}</h3>
                        <li className="text-sm text-gray-100 mb-1"><a className='font-bold'>Speciality:</a> {item.campaignSpeciality}</li>
                        <li className="text-sm text-gray-100 mb-1"><a className='font-bold'>Date:</a> {item.campaignDate}</li>
                        <li className="text-sm text-gray-100 mb-1 text-justify"><a className='font-bold'>Description:</a> {item.campaignDescription}</li>
                        <li className="text-sm text-gray-100 mb-1"><a className='font-bold'>Age Limit:</a> {item.ageLimit}</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get('https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/allCampaigns/');
  const data = await response.data;

  return { props: { data } };
}

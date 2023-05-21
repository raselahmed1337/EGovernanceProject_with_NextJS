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
                  <div className="transition ease-in-out delay-150 hover:-translate-y-1 duration-700 ... bg-gray-100 flex items-center justify-center shadow rounded-2xl shadow-md p-2 mr-12 ml-12 transition-transform transform-gpu hover:scale-105">
                    <img
                      src={`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/getcampaignimage/${item.filename}`}
                      alt="campaign"
                      className="w-92 h-96 object-cover rounded-md"
                      width={300}
                      height={300}
                    />
                    <div className="ml-4 flex flex-col justify-center">
                      <ul>
                        <h3 className="text-lg font-semibold mb-1">{item.campaignName}</h3>
                        <li className="text-sm text-gray-600 mb-1">Speciality: {item.campaignSpeciality}</li>
                        <li className="text-sm text-gray-600 mb-1">Date: {item.campaignDate}</li>
                        <li className="text-sm text-gray-600 mb-1 text-justify">Description: {item.campaignDescription}</li>
                        <li className="text-sm text-gray-600 mb-1">Age Limit: {item.ageLimit}</li>
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

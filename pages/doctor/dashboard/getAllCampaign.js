import Link from "next/link";
import axios from "axios";
import MyLayout from '../component/layout';
import DoctorDrawer from "../component/doctordrawer";
import SessionCheck from "../component/sessioncheck";

export default function GetAllDoctors({ data, totalDoctors }) {
  return (
    <>
    <SessionCheck/>
    <DoctorDrawer/>
      <MyLayout title="All Campaigns" />


      <div className="mb-28 bg-gray-200 relative flex justify-center items-center h-screen">
  <div className="flex justify-center flex-col items-center">
    <a className="text-center mb-4 text-bold shadow focus:shadow-outline">Total Available Doctors : {totalDoctors}</a>
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2 ">
      {data.map((item) => (
        <div
          key={item.id}
          className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-100 hover:bg-blue-700 duration-700 ... shadow focus:shadow-outline rounded-lg p-4 flex flex-col items-center justify-center bg-blue-500 hover:bg-blue-700 text-white"
        >
          <Link className="mb-5" href={"/doctor/dashboard/campaign/" + item.id}>
            {item.campaignName}
            <h2 className="text-center">Date: {item.campaignDate}</h2>
          </Link>
        </div>
      ))}
    </div>
  </div>
</div>

    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.get("https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/allCampaigns");
  const data = await response.data;

  const totalResponse = await axios.get("https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/totaldoctors/");
  const totalDoctors = await totalResponse.data;

  return { props: { data, totalDoctors } };
}


import axios from "axios";
import MyLayout from "./component/layout";

export default function GetAllDoctors({ data }) {
  return (
    <>
      <MyLayout title="All Doctors" />
      <div className="bg-gray-200 ">
        <div className="py-96 pt-28 pb-25 flex flex-row-right justify-center items-center scroll-smooth hover:scroll-auto shadow focus:shadow-outline">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {data.map((item) => (
              <div
                key={item.id}
                className=" transition ease-in-out delay-150 hover:-translate-y-1 duration-700 ... shadow rounded-2xl p-4 flex flex-col items-center justify-center text-white bg-blue-500 hover:text-cyan hover:bg-blue-700 shadow shadow-full focus:shadow-outline bg-gradient-to-r from-cyan-700 to-blue-900 transition-all duration-500 transform  hover:-translate-x-2"
              >
                <img
                  className="w-48 h-48 object-cover rounded-full"
                  src={"https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/getimage/" + item.filename}
                  alt={item.name}
                  width={200} // Set the desired width
                  height={200} // Set the desired height
                />
                <div className="mb-5">
                  <ul>
                    <li>Name: {item.name}</li>
                    <li>Specialist: {item.specialist}</li>
                    <li>College Name: {item.collegeName}</li>
                    <li>Email: {item.email}</li>
                  </ul>
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
  const response = await axios.get('https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/alldoctors');
  const data = await response.data;
  
  return { props: { data } };
}

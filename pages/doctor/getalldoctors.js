
import axios from "axios";
import MyLayout from "./component/layout";

export default function GetAllDoctors({ data }) {
  return (
    <>
      <MyLayout title="All Doctors" />
      <div className="bg-gray-200">
        <div className="py-72 pt-28 pb-25 flex flex-row-right justify-center items-center">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {data.map((item) => (
              <div
                key={item.id}
                className="bg-black-200 rounded-lg p-4 flex flex-col items-center justify-center bg-blue-300 hover:bg-blue-700 text-white transition-all duration-500 transform hover:-translate-x-2"
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

import MyLayout from "../../component/layout";
import axios from "axios";
import { useRouter } from "next/router";
import UserLayout from "../../component/userlayout";
import DoctorDrawer from "../../component/doctordrawer";


export default function UserProfile({ data }) {
  const router = useRouter();
  return (
    <>
    <MyLayout title={data.id} />
    <DoctorDrawer/>
    
      <UserLayout
      id={data.id}
      filename={data.filename} 
      name={data.name}
      age={data.age}
      collegeName={data.collegeName}
      specialist={data.specialist}
      phoneNumber={data.phoneNumber}
      email={data.email}
      password={data.password}
      />
   
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
    </>
  );
}



export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get(`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/finddoctor/` + id);
  const data = await response.data;

  return { props: { data } };
}

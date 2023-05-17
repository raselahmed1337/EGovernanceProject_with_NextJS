import MyLayout from "../../component/layout";
import axios from "axios";
import { useRouter } from "next/router";
import CampaignLayout from "../../component/campaignlayout";
import DoctorDrawer from "../../component/doctordrawer";


export default function CampaignProfile({ data }) {
  const router = useRouter();
  return (
    <>
    <MyLayout title={data.id} />
    <DoctorDrawer/>
    
      <CampaignLayout
      id={data.id}
      campaignName={data.campaignName}
      campaignSpeciality={data.campaignSpeciality}
      campaignDate={data.campaignDate}
      campaignDescription={data.campaignDescription}
      ageLimit={data.ageLimit}
      filename={data.filename} 
      />
   
      <button type="button" onClick={() => router.back()}>
        Click here to go back
      </button>
    </>
  );
}



export async function getServerSideProps(context) {
  const id = context.params.id;

  const response = await axios.get(`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/findCampaignById/` + id);
  const data = await response.data;

  return { props: { data } };
}

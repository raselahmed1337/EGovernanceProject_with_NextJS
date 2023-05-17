import BlogLayout from "../component/bloglayout";
import MyLayout from "../component/layout";
import axios from "axios";
import SessionCheck from "../component/sessioncheck";

export default function BlogDetails({data}){
  return (
    <>
    <SessionCheck/>
    <MyLayout Title="Blog"/>

    <BlogLayout data={{ id: data.id, blogtitle: data.blogtitle, blogpost: data.blogpost }} />
    </>
  )
}

export async function getServerSideProps(context) {
  const id = context.params.id;

  console.log(id);
  const response = await axios.get(`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/finddoctorbyblog/` + id);
  const data = await response.data;

  console.log(data);

  return { props: { data } };
}
import Link from "next/link";
import MyLayout from "../component/layout"
import axios from "axios";


export default function Blog({data}){
return (
  <>
    <MyLayout title="Blogs" />

    <div class="bg-gray-200">
    <div className="pt-20 pb-10 overflow-y-auto" style={{ height: "calc(100vh - 4rem)" }}>
  <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
    
  {data.map((post) => (
  <div className="py-6 transition duration-300 transform hover:scale-105 hover:shadow-lg hover:opacity-75" key={post.id}>
    <Link href={`/doctor/blogs/${post.id}`}>
      <h1 className="font-bold text-white bg-red-800 text-lg">{post.blogtitle}</h1>
    </Link>
    <p>{post.blogpost}</p>
  </div>
))}


  </div>
</div>
</div>


  </>
);
}


export async function getServerSideProps() {
 
    const response = await axios.get('https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/allBlogs');
    const data = await response.data;

return { props: { data } }
}
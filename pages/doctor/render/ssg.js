import axios from "axios";

export default function SSG({ data }) {
    
    return (
        <>
        <h1>This SSG request!</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>{item.blogtitle}</li>
          ))}
        </ul>
      </>
    );
    }
    
   export async function getStaticProps() {

    const response = await axios.get('https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/allBlogs');
    const data = await response.data;

    return { props: { data } }
    }
import axios from "axios";
export default function SSR({ data }) {
  return (
    <>
      <h1>This SSR request!</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            <p>email: {item.email}</p>
            <p>password: {item.password}</p>
          </li>
        ))}
      </ul>
    </>
  );
}

export async function getServerSideProps() {
  const response = await axios.fetch("https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/finddoctors/");
  const data = await response.data;


  return { props: { data } };
}

import Header from "./header";
import Link from "next/link";
import Footer from "./footer";
import Session from "./session";

export default function MyLayout(props) {
  return (
    <>
      <Header title={props.title} />

      <nav className="fixed top-0 left-0 w-full bg-blue-900 py-4 z-40 shadow shadow-full focus:shadow-outline bg-gradient-to-r from-cyan-700 to-blue-900">
  <div className="flex flex-wrap justify-end items-end max-h-auto max-w-auto mr-2">
    <Link href="/doctor/" className="absolute left-2 flex items-center">
      <img src="/giphy.gif" alt="me" width="30" height="30" className="mr-1" />
      <span className="text-white text-lg font-bold">EGovernance</span>
    </Link>
    
    <Link href="/doctor" className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-100 duration-700 ... text-white mr-5 font-bold hover:text-gray-500">Home</Link>
    <Link href="/doctor/aboutDoctor" className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-100 duration-700 ... text-white mr-5 font-bold hover:text-gray-500">About</Link>
    <Link href="/doctor/blogs/" className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-100 duration-700 ... text-white mr-5 font-bold hover:text-gray-500">Blog</Link>
    <Link href="/doctor/getalldoctors/" className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-100 duration-700 ... text-white mr-5 font-bold hover:text-gray-500">Doctors</Link>
    <Link href="/doctor/getallCampaigns/" className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-100 duration-700 ... text-white mr-5 font-bold hover:text-gray-500">Campaign</Link>
    <Link href="/doctor/makeAppointment/" className="transition ease-in-out delay-150 text-white hover:-translate-y-1 hover:scale-100 duration-700 ... text-white mr-5 font-bold hover:text-gray-500">Appointment</Link>
    <Session/>
  </div>
</nav>


      <main></main>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
          textAlign: "center",
        }}
      >
        <Footer />
      </div>
    </>
  );
}



{/* 

<header class="text-gray-600 body-font">
<div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
  <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
    <Image src="/giphy.gif" width="30" height="30"/>
    <span class="ml-1 text-xl">EGovernance</span>
  </a>
  <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
    <Link href="/doctor/" class="mr-5 hover:text-gray-900">Home</Link>
    <Link href="/doctor/aboutDoctor/" class="mr-5 hover:text-gray-900">About</Link>
    <Link href="/doctor/blogs/" class="mr-5 hover:text-gray-900">Blogs</Link>
    <Link href="/doctor/getalldoctors" class="mr-5 hover:text-gray-900">Doctors</Link>
  </nav>
</div>
</header> 

*/}


{/* <header class="text-white body-font bg-blue-900">
<div class="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">
  <a class="flex title-font font-medium items-center text-white-500 mb-2 md:mb-0">
    <Image src="/giphy.gif" width="30" height="30"/>
    <span class="ml-1 text-white">EGovernance</span>
  </a>

<nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">          
    <Link href="/doctor/" class="absolute left-3">
      <Image src="/giphy.gif" alt="me" width="30" height="30" />
    </Link>
    <Session/>
    <Link href="/doctor" className="text-white mr-4 font-bold hover:text-gray-500">Home</Link>
    <Link href="/doctor/aboutDoctor" className="text-white mr-4 font-bold hover:text-gray-500">About</Link>
    <Link href="/doctor/blogs/" className="text-white mr-4 font-bold hover:text-gray-500">Blog</Link>
    <Link href="/doctor/getalldoctors/" className="text-white mr-4 font-bold hover:text-gray-500">Doctors</Link>
</nav>
</div>
</header> */}
import { useState } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import MyLayout from '../component/layout';
import DoctorDrawer from '../component/doctordrawer';
import SessionCheck from '../component/sessioncheck';

export default function InsertBlog() {
  const { register, handleSubmit, formState: { errors },reset } = useForm();
  const [errorMessage, setErrorMessage] = useState('');

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/insertblog', data);
      console.log(response.data);
      setErrorMessage('');
      reset();
    } catch (error) {
      console.log(error);
      setErrorMessage('Failed to send blogtitle');
    }
  };

  return (
    <>
    <SessionCheck/>
      <MyLayout title="Write Blog"/>
      <DoctorDrawer/>
      <div className="h-screen flex justify-center items-center bg-gray-200">
  <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
    <div className="mb-6">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="blogtitle">
        Blog Title:
      </label>
      <input
        {...register("blogtitle", { required: true })}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="blogtitle"
        type="text"
        placeholder="Enter your blog title"
      />
      {errors.blogtitle && (
        <p className="text-red-600 text-sm mt-1">
          {errors.blogtitle.type === "required"
            ? "Blog Title is required"
            : "Invalid Blog Title"}
        </p>
      )}
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="blogpost">
        Blog Post:
      </label>
      <textarea
        {...register("blogpost", { required: true })}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="blogpost"
        placeholder="Enter your blog post"
      />
      {errors.blogpost && (
        <p className="text-red-600 text-sm mt-1">
          {errors.blogpost.type === "required"
            ? "Blog Post is required"
            : "Invalid Blog Post"}
        </p>
      )}
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 font-bold mb-2" htmlFor="doctorid">
        Doctor ID:
      </label>
      <input
        {...register("doctorid", { required: true })}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        id="doctorid"
        type="text"
        placeholder="Enter your doctor ID"
      />
      {errors.doctorid && (
        <p className="text-red-600 text-sm mt-1">
          {errors.doctorid.type === "required"
            ? "Doctor ID is required"
            : "Invalid Doctor ID"}
        </p>
      )}
    </div>
    <div className="flex items-center justify-center">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit">
        Send
      </button>
    </div>
    {errorMessage && <p>{errorMessage}</p>}
  </form>
</div>

    </>
  );
}




// import { useForm } from "react-hook-form";
// import axios from "axios";
// import { useState } from "react";
// import { useRouter } from "next/router";
// import MyLayout from "../component/layout";


// export default function BlogForm() {
//   const router = useRouter();
//   const {register, handleSubmit, formState: { errors }, reset,} = useForm();

//   const [success, setSuccess] = useState("");
//   const onSubmit = async (data) => {
//     console.log(data);
//     const formData = new FormData();
//     formData.append("blogtitle", data.blogtitle);
//     formData.append("blogpost", data.blogpost);
//     formData.append("doctorid", data.doctorid); 
//     console.log(formData);

//     try {
//       const response = await axios.post("http://localhost:3000/doctor/insertblog",formData,{
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       setSuccess("blog successful");
//       reset();
//     } catch (error) {
//       //console.log(error.response.data.message);
//       setSuccess("blog unsuccessfull " + error.response.data.message);
//     }
//   };

//   return (
//     <>
//       <MyLayout title="Write Blog" />
//       <div class="p-12 mt-20 flex justify-center">
//   <section className="text-gray-600 body-font mx-auto w-full sm:w-3/4 md:w-1/2 lg:w-1/3">
//     <div className="bg-blue-300 rounded-lg p-8">
//       <form class="mx-auto max-w-lg" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
//         <div class="grid grid-cols-1 gap-2 sm:grid-cols-2">

//           <div>
//             <label class="block text-gray-700 font-sm mb-0" for="blogtitle">Blog Title</label>
//             <input class="input-field rounded-sm" id="blogtitle" placeholder="Enter Blog Title" type="text"{...register("blogtitle", { required: true })}/>
//             {errors.blogtitle && (
//               <p class="text-red-600 text-sm mt-1">
//                 {errors.blogtitle.type === "required"
//                   ? "Blog Title is required"
//                   : "Invalid Blog Title"}
//               </p>
//             )}
//           </div>

//           <div>
//             <label class="block text-gray-700 font-sm mb-0" for="age">Doctor ID</label>
//             <input class="input-field" id="doctorid" placeholder="Enter Doctor ID" type="number"{...register("doctorid", { required: true })}/>
//             {errors.doctorid && (
//               <p class="text-red-600 text-sm mt-1">
//                 {errors.doctorid.type === "required"
//                   ? "Doctor ID is required"
//                   : "Invalid Doctor ID"}
//               </p>
//             )}
//           </div>

//           <div>
//             <label class="block textareatext-gray-700 font-sm mb-0" for="blogpost" >Blog Post</label>
//             <input class="input-field rounded-sm pt-2 px-24 py-10" id="blogpost" placeholder="Enter Blog Post" type="text"{...register("blogpost", { required: true })}/>
//             {errors.blogpost && (
//               <p class="text-red-600 text-sm mt-1">
//                 Blog Post is required
//               </p>
//             )}
//           </div>

//           <button
//             type="submit"
//             className="text-white font-sm bg-blue-500 border-0 py-1 px-1 focus:outline-none hover:bg-blue-600 rounded text-lg col-span-2"
//           >
//             Submit
//           </button>
//         </div>
//       </form>
//     </div>
//   </section>
// </div>

//     </>
//   );
// }

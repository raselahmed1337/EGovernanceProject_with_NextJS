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
  <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-8" onSubmit={handleSubmit(onSubmit)}>
  <h2 class="text-gray-900 text-lg font-medium title-font mb-5 text-center ">Add Blog</h2>
    <div class="grid grid-cols-1 mb-6 ">
      
      <label className="block text-gray-700 font-sm mb-0" htmlFor="blogtitle">Blog Title:</label>
      <input {...register("blogtitle", { required: true })}
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
      <label className="block text-gray-700 font-sm mb-0" htmlFor="blogpost">
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
      <label className="block text-gray-700 font-sm mb-0" htmlFor="doctorid">
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
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Post</button>
    </div>
    {errorMessage && <p>{errorMessage}</p>}
  </form>
</div>

    </>
  );
}
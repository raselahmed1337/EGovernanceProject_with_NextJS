import { useState } from "react";
import axios from 'axios';
import { useRouter } from 'next/router';
import MyLayout from "./layout";

export default function BlogLayout(props) {
  const [message, setMessage] = useState('');
  const router = useRouter();
  
  const [blogTitle, setBlogTitle] = useState(props.blogtitle);
  const [blogPost, setBlogPost] = useState(props.blogpost);

  const handleUpdateBlog = async () => {
    try {
      const updatedBlog = {
        blogtitle: blogTitle,
        blogpost: blogPost
      };

      const response = await axios.put(`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/updateblog/${router.query.id}`, updatedBlog);
      setMessage(`Blog with ID ${router.query.id} updated successfully`);
      router.push('/doctor/blogs');
    } catch (error) {
      console.log(error);
      setMessage(`Error updating blog with ID ${router.query.id}`);
    }
  };

  const handleDeleteDoctor = async () => {
    try {
      const response = await axios.delete(`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/deleteblog/${router.query.id}`);
      setMessage(`Blog with ID ${router.query.id} deleted successfully`);
      router.push('/doctor/blogs');
    } catch (error) {
      console.log(error);
      setMessage(`Error deleting blog with ID ${router.query.id}`);
    }
  };

  return (
    <>
      <MyLayout title={router.query.id} />
      <div className="p-10 mt-12">
        <div className="mx-auto py-8 px-8 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-8">
            <input
              type="text"
              value={blogTitle}
              onChange={(e) => setBlogTitle(e.target.value)}
              className="mt-2 mb-4 p-2 border border-gray-300 rounded-md w-80"
              placeholder="Blog Title"
            />
            <textarea
              value={blogPost}
              onChange={(e) => setBlogPost(e.target.value)}
              className="w-full h-48 p-2 border border-gray-300 rounded-md resize-none"
              placeholder="Blog Post"
            />
            <div className="flex mt-4 space-x-3 md:mt-6">
              <button
                onClick={handleUpdateBlog}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300"
              >
                Update
              </button>
              <button
                onClick={handleDeleteDoctor}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200"
              >
                Delete
              </button>
            </div>
            {message && (
              <p className="text-center mt-4 text-green-700 font-bold">
                {message}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

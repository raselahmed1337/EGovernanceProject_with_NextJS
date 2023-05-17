export default function BlogLayout({ data }) {
  if (!data) {
    // Handle the case when 'data' is undefined
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-200 pb-28 p-10 rounded-md shadow-lg hover:bg-blue-300 text-white transition-all duration-500 transform hover:-translate-x-2">
        <h1 className="text-4xl font-bold mb-6 text-black">Blogs Details</h1>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2 text-black">ID:</label>
            <p className="text-gray-900 text-lg">{data.id}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2 text-black">Blog Title:</label>
            <p className="text-gray-900 text-lg">{data.blogtitle}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2 text-black">Blog Post:</label>
            <p className="text-gray-900 text-lg">{data.blogpost}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

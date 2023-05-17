export default function UserLayout({ data }) {
  if (!data) {
    // Handle the case when 'data' is undefined
    return <p>Loading...</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="bg-gray-200 pb-15 px-11 rounded-md shadow-lg hover:bg-blue-300 text-white transition-all duration-500 transform hover:-translate-x-2">
        <h1 className="text-4xl text-center font-bold mb-2 text-black">Doctor Details</h1>

        <div className="flex justify-between mb-4">
          <div className="relative">
            <span className="absolute top-2 right-2 text-gray-400">
              <path
                fillRule="evenodd"
                d="M13.865 13.865a8 8 0 111.414-1.414l4.142 4.142a1 1 0 01-1.414 1.414l-4.142-4.142zM8.5 15a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
                clipRule="evenodd"
              />
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2 text-black">ID:</label>
            <p className="text-gray-900 text-lg">{data.id}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2 text-black">Name:</label>
            <p className="text-gray-900 text-lg">{data.name}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2 text-black">Age:</label>
            <p className="text-gray-900 text-lg">{data.age}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2 text-black">College Name:</label>
            <p className="text-gray-900 text-lg">{data.collegeName}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2 text-black">Specialist:</label>
            <p className="text-gray-900 text-lg">{data.specialist}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2 text-black">Phone:</label>
            <p className="text-gray-900 text-lg">{data.phoneNumber}</p>
          </div>
          <div className="flex flex-col">
            <label className="text-lg font-medium mb-2 text-black">Email:</label>
            <p className="text-gray-900 text-lg mb-2">{data.email}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

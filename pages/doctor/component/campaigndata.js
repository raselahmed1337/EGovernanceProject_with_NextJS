export default function CampaignLayout({data}){
  if (!data) {
    // Handle the case when 'data' is undefined
    return <p>Loading...</p>;
  }

    return(
        <>
       <div class="flex flex-col items-center justify-center h-screen ">
  <div class="bg-gray-200 pb-15 px-11 rounded-md shadow-lg hover:bg-blue-300 text-white transition-all duration-500 transform hover:-translate-x-2">
    <h1 class="text-4xl text-center font-bold mb-2 text-black">Campaign Details</h1>

    <div class="flex justify-between mb-4">
      <div class="relative">
        <span class="absolute top-2 right-2 text-gray-400">
            <path
              fill-rule="evenodd"
              d="M13.865 13.865a8 8 0 111.414-1.414l4.142 4.142a1 1 0 01-1.414 1.414l-4.142-4.142zM8.5 15a6.5 6.5 0 100-13 6.5 6.5 0 000 13z"
              clip-rule="evenodd"
            />
        </span>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-4">
      <div class="flex flex-col">
        <label class="text-lg font-medium mb-2 text-black">Campaign ID:</label>
        <p class="text-gray-900 text-lg">{data.id}</p>
      </div>
      <div class="flex flex-col">
        <label class="text-lg font-medium mb-2 text-black">campaign Name:</label>
        <p class="text-gray-900 text-lg">{data.campaignName}</p>
      </div>
      <div class="flex flex-col">
        <label class="text-lg font-medium mb-2 text-black">campaign Speciality:</label>
        <p class="text-gray-900 text-lg">{data.campaignSpeciality}</p>
      </div>
      <div class="flex flex-col">
        <label class="text-lg font-medium mb-2 text-black">campaign Date:</label>
        <p class="text-gray-900 text-lg">{data.campaignDate}</p>
      </div>
      <div class="flex flex-col">
        <label class="text-lg font-medium mb-2 text-black">campaign Description:</label>
        <p class="text-gray-900 text-lg">{data.campaignDescription}</p>
      </div>
      <div class="flex flex-col">
        <label class="text-lg font-medium mb-2 text-black">age Limit :</label>
        <p class="text-gray-900 text-lg">{data.ageLimit}</p>
      </div>
    </div>
  </div>
</div>

      
        </>
    )
}
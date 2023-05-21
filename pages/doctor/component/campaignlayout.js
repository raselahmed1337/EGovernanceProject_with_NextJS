import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import SessionCheck from "./sessioncheck";
import MyLayout from "./layout";

export default function CampaignLayout(props) {
  const [message, setMessage] = useState("");
  const router = useRouter();

  const [updatedCampaignName, setUpdatedCampaignName] = useState(
    props.campaignName
  );
  const [updatedCampaignSpeciality, setUpdatedCampaignSpeciality] = useState(
    props.campaignSpeciality
  );
  const [updatedCampaignDate, setUpdatedCampaignDate] = useState(
    props.campaignDate
  );
  const [updatedCampaignDescription, setUpdatedCampaignDescription] = useState(
    props.campaignDescription
  );
  const [updatedAgeLimit, setUpdatedAgeLimit] = useState(props.ageLimit);

  const handleUpdateCampaign = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(
        `https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/updatecampaign/${router.query.id}`,
        {
          campaignName: updatedCampaignName,
          campaignSpeciality: updatedCampaignSpeciality,
          campaignDate: updatedCampaignDate,
          campaignDescription: updatedCampaignDescription,
          ageLimit: updatedAgeLimit,
        }
      );
      setMessage(`Campaign with ID ${router.query.id} updated successfully`);
      router.push("/doctor/dashboard/getAllCampaign");
    } catch (error) {
      setMessage(`Error updating Campaign with ID ${router.query.id}`);
    }
  };

  const handleDeleteCampaign = async () => {
    try {
      const response = await axios.delete(
        `https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/deleteCampaign/${router.query.id}`
      );
      setMessage(`Campaign with ID ${router.query.id} deleted successfully`);
      router.push("/doctor/dashboard/getAllCampaign");
    } catch (error) {
      console.log(error);
      setMessage(`Error deleting Campaign with ID ${router.query.id}`);
    }
  };

  return (
    <>
      <SessionCheck />
      <MyLayout title={router.query.id} />
      <div className="h-screen flex justify-center items-center bg-gray-200">
        {/* <img
              className="py-1 px-1 w-24 h-24 md:w-28 md:h-28 mb-0 rounded-full shadow-lg"
              src={`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/getcampaignimage/${props.filename}`}
              alt="me"
              width="450"
              height="450"
            /> */}

        <form onSubmit={handleUpdateCampaign} className="w-full max-w-lg bg-white shadow-lg rounded-2xl px-8 pt-6 pb-8 mb-7">
        <h2 class="text-gray-900 text-lg font-medium title-font mb-5 text-center ">Update Campaign</h2>
        <div class="grid grid-cols-2 gap-2 mb-6 ">
          <div>
            <label htmlFor="campaignName" className="block text-gray-700 font-sm mb-0">Campaign Name</label>
            <div className="mt-1">
              <input
                type="text"
                name="campaignName"
                id="campaignName"
                value={updatedCampaignName}
                onChange={(e) => setUpdatedCampaignName(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>


          <div className="mt-1">
            <label htmlFor="campaignSpeciality" className="block text-gray-700 font-sm mb-0">Campaign Speciality</label>
            <div className="mt-1">
              <input
                type="text"
                name="campaignSpeciality"
                id="campaignSpeciality"
                value={updatedCampaignSpeciality}
                onChange={(e) => setUpdatedCampaignSpeciality(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="mt-2">
            <label htmlFor="campaignDate" className="block text-gray-700 font-sm mb-0">Campaign Date</label>
            <div className="mt-1">
              <input
                type="text"
                name="campaignDate"
                id="campaignDate"
                value={updatedCampaignDate}
                onChange={(e) => setUpdatedCampaignDate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="mt-2">
            <label
              htmlFor="ageLimit"
              className="block text-gray-700 font-sm mb-0"
            >
              Age Limit
            </label>
            <div className="mt-1">
              <input
                type="text"
                name="ageLimit"
                id="ageLimit"
                value={updatedAgeLimit}
                onChange={(e) => setUpdatedAgeLimit(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              />
            </div>
          </div>

          <div className="mt-2">
            <label
              htmlFor="campaignDescription"
              className="block text-gray-700 font-sm mb-0"
            >
              Campaign Description
            </label>
            <div className="mt-1">
              <textarea
                type="text"
                name="campaignDescription"
                id="campaignDescription"
                value={updatedCampaignDescription}
                onChange={(e) => setUpdatedCampaignDescription(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 text-ml leading-tight focus:outline-none focus:shadow-outline"
              />
              </div>
            </div>
          </div>
          <div className="flex mt-4 space-x-3 md:mt-6 flex items-center justify-center gap-5">
          <button
            href="#"
            type="button"
            onClick={handleUpdateCampaign}
            className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-100 hover:bg-blue-700 duration-700 ... inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Update
          </button>
          <button
            href="#"
            type="button"
            onClick={handleDeleteCampaign}
            className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-100 hover:bg-blue-700 duration-700 ... inline-flex items-center px-4 py-2 text-sm font-medium text-center text-red-900 bg-red border border-gray-300 rounded-lg hover:bg-red-100 focus:ring-4 focus:outline-none focus:ring-red-200 dark:bg-red-500 dark:text-white dark:border-red-500 dark:hover:bg-red-500 dark:hover:border-red-500 dark:focus:ring-red-500"
          >
            Delete
          </button>
        </div>
        {message && (
          <p className="text-green-600 text-sm mt-1">{message}</p>
        )}
        </form>
      </div>
    </>
  );
}

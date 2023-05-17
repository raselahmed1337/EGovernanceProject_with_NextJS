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
      <div className="px-96 md:py-28 bg-gray-200 p-4 md:p-8">
        <div className="mx-auto w-96 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-col items-center pb-4 md:pb-8">
            {/* <img
              className="py-1 px-1 w-24 h-24 md:w-28 md:h-28 mb-0 rounded-full shadow-lg"
              src={`https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/getcampaignimage/${props.filename}`}
              alt="me"
              width="450"
              height="450"
            /> */}

            <form
              onSubmit={handleUpdateCampaign}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2"
            >
              <div className="mt-2">
                <label
                  htmlFor="campaignName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Campaign Name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="campaignName"
                    id="campaignName"
                    value={updatedCampaignName}
                    onChange={(e) => setUpdatedCampaignName(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="campaignSpeciality"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Campaign Speciality
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="campaignSpeciality"
                    id="campaignSpeciality"
                    value={updatedCampaignSpeciality}
                    onChange={(e) =>
                      setUpdatedCampaignSpeciality(e.target.value)
                    }
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="campaignDate"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Campaign Date
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="campaignDate"
                    id="campaignDate"
                    value={updatedCampaignDate}
                    onChange={(e) => setUpdatedCampaignDate(e.target.value)}
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>
              </div>



              <div className="mt-2">
                <label
                  htmlFor="ageLimit"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
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
                    className="shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>
              </div>


              <div className="mt-2">
                <label
                  htmlFor="campaignDescription"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-400"
                >
                  Campaign Description
                </label>
                <div className="mt-1">
                  <textarea
                    type="text"
                    name="campaignDescription"
                    id="campaignDescription"
                    value={updatedCampaignDescription}
                    onChange={(e) =>
                      setUpdatedCampaignDescription(e.target.value)
                    }
                    className="px-20 shadow-sm focus:ring-blue-500 focus:border-blue-500 block w-full sm:text-sm border-gray-300 rounded-sm"
                  />
                </div>
              </div>


            </form>

            <div className="flex mt-4 space-x-3 md:mt-6">
              <button
                href="#"
                type="button"
                onClick={handleUpdateCampaign}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Update
              </button>
              <button
                href="#"
                type="button"
                onClick={handleDeleteCampaign}
                className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
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

import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import MyLayout from '../component/layout';
import DoctorDrawer from '../component/doctordrawer';
import SessionCheck from '../component/sessioncheck';


export default function AddCampaign() {
  const {register, handleSubmit, formState: { errors }, reset,} = useForm();

  const validateFile = (value) => {
    const file = value[0];
    const allowedtypes = ["image/jpg", "image/png", "image/jpeg"];

    if (!allowedtypes.includes(file.type)) {
      return false;
    }
  };

  const [success, setSuccess] = useState("");

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("campaignName", data.campaignName);
    formData.append("campaignSpeciality", data.campaignSpeciality);
    formData.append("campaignDate", data.campaignDate);
    formData.append("campaignDescription", data.campaignDescription);
    formData.append("ageLimit", data.ageLimit);
    formData.append("myfile", data.myfile[0]);
    console.log(formData);

    try {
      const response = await axios.post("https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/insertCampaign",formData,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccess("Campaign Added successfully");
      reset();
    } catch (error) {
      setSuccess("Campaign Failed to Add " + error.response.data.message);
    }
  };

  return (
    <>
  <SessionCheck/>
      <MyLayout title="Add Campaign"/>
      <DoctorDrawer/>
      <div className="h-screen flex justify-center items-center bg-gray-200">

        <form className="w-full max-w-lg bg-white shadow-md rounded px-8 pt-6 pb-8 mb-7" onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
          <h2 class="text-gray-900 text-lg font-medium title-font mb-5 text-center ">Add Campaign</h2>
          <div class="grid grid-cols-2 gap-2 mb-6 ">
            <div>
              <label class="block text-gray-700 font-sm mb-0" for="campaignName">Campaign Name</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="campaignName" placeholder="Enter campaign name" type="text" {...register("campaignName", { required: true })}/>
              {errors.campaignName && (<p class="text-red-600 text-sm mt-1">{errors.campaignName.type === "required" ? "Campaign name is required" : "Invalid campaign name"}</p>)}
            </div>
            <div>
              <label class="block text-gray-700 font-sm mb-0" for="campaignSpeciality">Campaign Speciality</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="campaignSpeciality" placeholder="Enter campaign speciality" type="text" {...register("campaignSpeciality", { required: true })}/>
              {errors.campaignSpeciality && (<p class="text-red-600 text-sm mt-1">Campaign speciality is required</p>)}
            </div>
            <div>
              <label class="block text-gray-700 font-sm mb-0" for="campaignDate">Campaign Date</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="campaignDate" placeholder="Enter campaign date" type="date" {...register("campaignDate", { required: true })}/>
              {errors.campaignDate && (<p class="text-red-600 text-sm mt-1">Campaign date is required</p>)}
            </div>
            <div>
              <label class="block text-gray-700 font-sm mb-0" for="campaignDescription">Campaign Description</label>
              <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="campaignDescription" placeholder="Enter campaign description" type="textarea" {...register("campaignDescription", { required: true })}/>
              {errors.campaignDescription && (<p class="text-red-600 text-sm mt-1">Campaign description is required</p>)}
            </div>
            <div>
              <label class="block text-gray-700 font-sm mb-0" for="ageLimit">Age Limit</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ageLimit" placeholder="Enter age limit" type="text" {...register("ageLimit", { required: true })}/>
              {errors.ageLimit && (<p class="text-red-600 text-sm mt-1">Age limit is required</p>)}
            </div>
            <div>
              <label for="myfile">Upload Image:</label>
              <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="file" id="myfile" name="myfile" {...register("myfile", { required: true, validate: validateFile })} accept=".png, .jpg, .jpeg, .gif"/>
              {errors.myfile && (
                <p>
                  {errors.myfile.type === "required" ? (
                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                      <span class="font-medium">File is required</span>
                    </p>
                  ) : (
                    <p id="outlined_error_help" class="mt-2 text-xs text-red-600 dark:text-red-400">
                      <span class="font-medium">Invalid file</span>
                    </p>
                  )}
                </p>
              )}
            </div>
            <div className="flex items-center justify-center ml-52">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit </button>
            </div>
          </div>
          {success && (
            <p class="text-green-600 text-sm mt-1">{success}</p>
          )}
        </form>
      </div>

    </>
  );
}
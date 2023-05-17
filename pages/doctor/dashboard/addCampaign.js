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
      <div class="px- py-12 mx-auto max-w-screen-full">

      <div class="px-96 py-12">
        <section className="text-gray-600 body-font mx-auto ">
          <div className="bg-blue-300 rounded-lg p-8 md:ml-auto w-sm mt-10 md:mt-0">
          
          <form class="mx-auto max-w-lg" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Add Campaign</h2>

            <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="block text-gray-700 font-sm mb-0" htmlFor="campaignName">
                Campaign Name
              </label>
              <input
                className="input-field px-4 rounded-sm"
                id="campaignName"
                placeholder="Enter campaign name"
                type="text"
                {...register("campaignName", { required: true })}
              />
              {errors.campaignName && (
                <p className="text-red-600 text-sm mt-1">
                  {errors.campaignName.type === "required"
                    ? "Campaign name is required"
                    : "Invalid campaign name"}
                </p>
              )}
            </div>



            <div>
              <label className="block text-gray-700 font-sm mb-0" htmlFor="campaignSpeciality">
                Campaign Speciality
              </label>
              <input
                className="input-field px-4 rounded-sm"
                id="campaignSpeciality"
                placeholder="Enter campaign speciality"
                type="text"
                {...register("campaignSpeciality", { required: true })}
              />
              {errors.campaignSpeciality && (
                <p className="text-red-600 text-sm mt-1">
                  Campaign speciality is required
                </p>
              )}
            </div>



            <div>
              <label className="block text-gray-700 font-sm mb-0" htmlFor="campaignDate">
                Campaign Date
              </label>
              <input
                className="input-field px-4 rounded-sm"
                id="campaignDate"
                placeholder="Enter campaign date"
                type="text"
                {...register("campaignDate", { required: true })}
              />
              {errors.campaignDate && (
                <p className="text-red-600 text-sm mt-1">
                  Campaign date is required
                </p>
              )}
            </div>



            <div>
                  <label className="block text-gray-700 font-sm mb-0" htmlFor="campaignDescription">
                    Campaign Description
                  </label>
                  <textarea
                    className="input-field px-4 rounded-sm"
                    id="campaignDescription"
                    placeholder="Enter campaign description"
                    type="textarea"
                    {...register("campaignDescription", { required: true })}
                  />
                  {errors.campaignDescription && (
                    <p className="text-red-600 text-sm mt-1">
                      Campaign description is required
                    </p>
                  )}
                </div>



                <div>
                  <label className="block text-gray-700 font-sm mb-0" htmlFor="ageLimit">
                    Age Limit
                  </label>
                  <input
                    className="input-field px-4 rounded-sm"
                    id="ageLimit"
                    placeholder="Enter age limit"
                    type="text"
                    {...register("ageLimit", { required: true })}
                  />
                  {errors.ageLimit && (
                    <p className="text-red-600 text-sm mt-1">
                      Age limit is required
                    </p>
                  )}
                </div>


              
                <div>
                  <label for="myfile">Upload Image:</label>
                  <input
                    type="file"
                    id="myfile"
                    name="myfile"
                    {...register("myfile", {
                      required: true,
                      validate: validateFile,
                    })}
                    accept=".png, .jpg, .jpeg, .gif"
                  />
                  {errors.myfile && (
                    <p>
                      {" "}
                      {errors.myfile.type === "required" ? (
                        <p
                          id="outlined_error_help"
                          class="mt-2 text-xs text-red-600 dark:text-red-400"
                        >
                          <span class="font-medium">file is required</span>
                        </p>
                      ) : (
                        <p
                          id="outlined_error_help"
                          class="mt-2 text-xs text-red-600 dark:text-red-400"
                        >
                          <span class="font-medium">invalid file</span>
                        </p>
                      )}
                    </p>
                  )}
                </div>





                <button
                  type="submit"
                  className="text-white font-sm bg-blue-500 border-0 py-1 px-1 focus:outline-none hover:bg-blue-600 rounded text-lg"
                >
                  Submit
                </button>
              </div>
              {success && (
                <p className="text-green-600 text-sm mt-1">{success}</p>
              )}


            </form>
          </div>
        </section>
      </div>
      </div>
    </>
  );
}
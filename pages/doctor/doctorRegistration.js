import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import MyLayout from "./component/layout";

export default function Registration() {
  const router = useRouter();
  const {register, handleSubmit, formState: { errors }, reset,} = useForm();

  const validateFile = (value) => {
    const file = value[0];
    const allowedtypes = ["image/jpg", "image/png", "image/jpeg"];

    if (!allowedtypes.includes(file.type)) {
      return false;
    }
  };

  const [success, setSuccess] = useState("");
  const [emailExists, setEmailExists] = useState(false); // State variable to track email existence
  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("age", data.age);
    formData.append("collegeName", data.collegeName);
    formData.append("specialist", data.specialist);
    formData.append("phoneNumber", data.phoneNumber);
    formData.append("email", data.email);
    formData.append("password", data.password);
    formData.append("myfile", data.myfile[0]);
    console.log(formData);

    try {
      const response = await axios.post("https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/signup",formData,{
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setSuccess("Registration successful");
      setEmailExists(false); // Reset the email existence state
      reset();
    } catch (error) {
      console.log(error.response.data.message);
      if (error.response.data.message === "Email already exists") {
        setEmailExists(true); // Set the email existence state to true
      }
      setSuccess("Registration unsuccessful " + error.response.data.message);
    }
  };

  return (
    <>
      <MyLayout title="Registration Doctor" />

      <div class="px-72 py-5 mt-20">
        <section className="text-gray-600 body-font mx-auto ">
          <div className="bg-blue-300 rounded-lg p-8 md:ml-auto w-auto mt-10 md:mt-0">
          
          <form class="mx-auto max-w-lg" onSubmit={handleSubmit(onSubmit)} encType="multipart/form-data">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">Registration</h2>

              <div class="grid grid-cols-2 gap-2">
                <div>
                  <label class="block text-gray-700 font-sm mb-0" for="name">
                    Name
                  </label>
                  <input
                    class="input-field px-4 rounded-sm"
                    id="name"
                    placeholder=" Enter your name"
                    type="text"
                    {...register("name", { required: true })}
                  />
                  {errors.name && (
                    <p class="text-red-600 text-sm mt-1">
                      {errors.name.type === "required"
                        ? "Name is required"
                        : "Invalid name"}
                    </p>
                  )}
                </div>

                <div>
                  <label class="block text-gray-700 font-sm mb-0" for="age">
                    Age
                  </label>
                  <input
                    class="input-field px-4 px-4 rounded-sm"
                    id="age"
                    placeholder=" Enter your age"
                    type="text"
                    {...register("age", { required: true })}
                  />
                  {errors.age && (
                    <p class="text-red-600 text-sm mt-1">
                      {errors.age.type === "required"
                        ? "Age is required"
                        : "Invalid age"}
                    </p>
                  )}
                </div>

                <div>
                  <label
                    class="block text-gray-700 font-sm mb-0"
                    for="collegeName"
                  >
                    College Name
                  </label>
                  <input
                    class="input-field px-4 rounded-sm"
                    id="collegeName"
                    placeholder=" Enter your college name"
                    type="text"
                    {...register("collegeName", { required: true })}
                  />
                  {errors.collegeName && (
                    <p class="text-red-600 text-sm mt-1">
                      College Name is required
                    </p>
                  )}
                </div>

                <div>
                  <label
                    class="block text-gray-700 font-sm mb-0"
                    for="specialist"
                  >
                    Specialist
                  </label>
                  <input
                    class="input-field px-4 rounded-sm"
                    id="specialist"
                    placeholder=" Enter your specialist"
                    type="text"
                    {...register("specialist", { required: true })}
                  />
                  {errors.specialist && (
                    <p class="text-red-600 text-sm mt-1">
                      Specialist is required
                    </p>
                  )}
                </div>

                <div>
                  <label
                    class="block text-gray-700 font-sm mb-0"
                    for="phoneNumber"
                  >
                    Phone Number
                  </label>
                  <input
                    class="input-field px-4 rounded-sm"
                    id="phoneNumber"
                    placeholder=" Enter your phone number"
                    type="text"
                    {...register("phoneNumber", { required: true })}
                  />
                  {errors.phoneNumber && (
                    <p class="text-red-600 text-sm mt-1">
                      Phone Number is required
                    </p>
                  )}
                </div>

                <div>
                  <label class="block text-gray-700 font-sm mb-0" for="email">
                    Email
                  </label>
                  <input
                    class="input-field px-4 rounded-sm"
                    id="email"
                    placeholder=" Enter your email"
                    type="email"
                    {...register("email", { required: true })}
                  />
                  {errors.email && (
                    <p class="text-red-600 text-sm mt-1">
                      {errors.email.type === "required"
                        ? "Email is required"
                        : "Invalid email address"}
                    </p>
                  )}
                </div>
                {/* {emailExists && (
                <p className="text-red-600 text-sm mt-1">
                  Email already exists
                </p>
              )} */}

                <div class="flex flex-col md:flex-row md:space-x-4">
                  <div class="w-full md:w-1/2">
                    <label
                      htmlFor="password"
                      class="block text-gray-700 font-sm mb-0 "
                    >
                      Password
                    </label>
                    <input
                      type="password"
                      id="password"
                      placeholder=" Enter your password"
                      {...register("password", { required: true })}
                      class="mt-1 input-field px-4 rounded-sm"
                    />
                    {errors.password && (
                      <p class="mt-1 text-red-600 text-xs">
                        {errors.password.type === "required"
                          ? "Password is required"
                          : "Invalid password"}
                      </p>
                    )}
                  </div>
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
    </>
  );
}

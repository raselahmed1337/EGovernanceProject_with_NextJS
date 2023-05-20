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
      <div className="h-screen flex justify-center items-center bg-gray-200">
      
      <form className="w-full max-w-lg bg-blue-300 shadow-md rounded px-8 pt-6 pb-8 mb-7" onSubmit={handleSubmit(onSubmit)} enctype="multipart/form-data">
        <h1 class="text-gray-900 text-center text-lg md:text-xl lg:text-1xl font-medium title-font mb-4">Doctor's Registration</h1>
        <div class="grid grid-cols-2 gap-3">
          <div>
            <label class="block text-gray-700 font-sm mb-1" for="name">Name</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" placeholder="Enter your name" type="text" {...register("name", { required: true })}/>
            {errors.name && (<p class="text-red-600 text-sm mt-1">{errors.name.type === "required" ? "Name is required" : "Invalid name"}</p>)}
          </div>
          <div>
            <label class="block text-gray-700 font-sm mb-1" for="age">Age</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="age" placeholder="Enter your age" type="text" {...register("age", { required: true })}/>
            {errors.age && (<p class="text-red-600 text-sm mt-1">{errors.age.type === "required" ? "Age is required" : "Invalid age"}</p>)}
          </div>
          <div>
            <label class="block text-gray-700 font-sm mb-1" for="collegeName">College Name</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="collegeName" placeholder="Enter your college name" type="text" {...register("collegeName", { required: true })}/>
            {errors.collegeName && (<p class="text-red-600 text-sm mt-1">College Name is required</p>)}
          </div>
          <div>
            <label class="block text-gray-700 font-sm mb-1" for="specialist">Specialist</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="specialist" placeholder="Enter your specialist" type="text" {...register("specialist", { required: true })}/>
            {errors.specialist && (<p class="text-red-600 text-sm mt-1">Specialist is required</p>)}
          </div>
          <div>
            <label class="block text-gray-700 font-sm mb-1" for="phoneNumber">Phone Number</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="phoneNumber" placeholder="Enter your phone number" type="text" {...register("phoneNumber", { required: true })}/>
            {errors.phoneNumber && (<p class="text-red-600 text-sm mt-1">Phone Number is required</p>)}
          </div>
          <div>
            <label class="block text-gray-700 font-sm mb-1" for="email">Email</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" placeholder="Enter your email" type="email" {...register("email", { required: true })}/>
            {errors.email && (<p class="text-red-600 text-sm mt-1">{errors.email.type === "required" ? "Email is required" : "Invalid email address"}</p>)}
          </div>
          {emailExists && (
            <p class="text-red-600 text-sm mt-1">Email already exists</p>
          )}
          <div>
            <label class="block text-gray-700 font-sm mb-1" for="password">Password</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" placeholder="Enter your password" type="password" {...register("password", { required: true })}/>
            {errors.password && (<p class="text-red-600 text-sm mt-1">{errors.password.type === "required" ? "Password is required" : "Invalid password"}</p>)}
          </div>
          <div>
            <label class="block text-gray-700 font-sm mb-1" for="myfile">Upload Image:</label>
            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="file" id="myfile" name="myfile" {...register("myfile", { required: true, validate: validateFile })} accept=".png, .jpg, .jpeg, .gif"/>
            {errors.myfile && (
              <p class="text-red-600 text-sm mt-1">
                {errors.myfile.type === "required" ? (
                  <span class="font-medium">File is required</span>
                ) : (
                  <span class="font-medium">Invalid file</span>
                )}
              </p>
            )}
          </div>
          <div className="flex items-center justify-center ml-52">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">Submit</button>
          </div>
        </div>
        {success && (
          <p class="text-green-600 text-sm mt-4">{success}</p>
        )}
      </form>
    </div>
</>
  );
}

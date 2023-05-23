import { useForm } from "react-hook-form";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import MyLayout from "./component/layout";

export default function AppointmentBooking() {
  const router = useRouter();
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const validateFile = (value) => {
    const file = value[0];
    const allowedTypes = ["image/jpg", "image/png", "image/jpeg"];

    if (!allowedTypes.includes(file.type)) {
      return false;
    }
  };

  const [success, setSuccess] = useState("");
  const [emailExists, setEmailExists] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    const formData = new FormData();
    formData.append("patientName", data.patientName);
    formData.append("patientAge", data.patientAge);
    formData.append("patientGender", data.patientGender);
    formData.append("patientAppointmentDate", data.patientAppointmentDate);
    formData.append("patientAppointmentTime", data.patientAppointmentTime);
    formData.append("patientAddress", data.patientAddress);
    formData.append("patientEmail", data.patientEmail);
    formData.append("patientEmargencyContact", data.patientEmargencyContact);
    formData.append("myfile", data.myfile[0]);
    formData.append("doctorName", data.doctorName);
    formData.append("doctorEmail", data.doctorEmail);

    try {
      const response = await axios.post("https://egovernanceprojectwithnestjs-production.up.railway.app/doctor/makeAppointment/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setSuccess("Appointment Booking successful");
      setEmailExists(false); // Reset the email existence state
      reset();
    } catch (error) {
      console.log(error.response.data.message);
      if (error.response.data.message === "Email already exists") {
        setEmailExists(true); // Set the email existence state to true
      }
      setSuccess("Appointment Booking unsuccessful " + error.response.data.message);
    }
  };

  return (
    <>
      <MyLayout title="Appointment Booking" />
      <div className="h-screen flex justify-center items-center bg-gray-200 ">
      <form className="ml-8 mr-8 mt-21 mb-21 bg-blue-300 shadow-lg rounded-2xl px-8 pt-3 pb-8` mb-8 " onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-gray-900 text-center text-lg md:text-xl lg:text-1xl font-medium title-font mb-3">Book an Appointment</h1>
          <div className="grid grid-cols-3 gap-3 max-px-auto max-py-auto">
            <div>
              <label className="block text-gray-700 font-sm mb-1" for="patientName">Patient Name</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="patientName"
                placeholder="Enter patient's name"
                type="text"
                {...register("patientName", { required: true })}
              />
              {errors.patientName && (
                <p className="text-red-600 text-sm mt-1">
                  Patient name is required
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-sm mb-1" for="patientAge">Patient Age</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="patientAge"
                placeholder="Enter patient's age"
                type="text"
                {...register("patientAge", { required: true })}
              />
              {errors.patientAge && (
                <p className="text-red-600 text-sm mt-1">
                  Patient age is required
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-sm mb-1" for="patientGender">Patient Gender</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="patientGender"
                placeholder="Enter patient's gender"
                type="text"
                {...register("patientGender", { required: true })}
              />
              {errors.patientGender && (
                <p className="text-red-600 text-sm mt-1">
                  Patient gender is required
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-sm mb-1" for="patientAppointmentDate">Appointment Date</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="patientAppointmentDate"
                placeholder="Enter appointment date"
                type="date"
                {...register("patientAppointmentDate", { required: true })}
              />
              {errors.patientAppointmentDate && (
                <p className="text-red-600 text-sm mt-1">
                  Appointment date is required
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-sm mb-1" for="patientAppointmentTime">Appointment Time</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="patientAppointmentTime"
                placeholder="Enter appointment time"
                type="time"
                {...register("patientAppointmentTime", { required: true })}
              />
              {errors.patientAppointmentTime && (
                <p className="text-red-600 text-sm mt-1">
                  Appointment time is required
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-sm mb-1" for="patientAddress">Patient Address</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="patientAddress"
                placeholder="Enter patient's address"
                type="text"
                {...register("patientAddress", { required: true })}
              />
              {errors.patientAddress && (
                <p className="text-red-600 text-sm mt-1">
                  Patient address is required
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-sm mb-1" for="patientEmail">Patient Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="patientEmail"
                placeholder="Enter patient's email"
                type="email"
                {...register("patientEmail", { required: true })}
              />
              {errors.patientEmail && (
                <p className="text-red-600 text-sm mt-1">
                  Patient email is required
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-sm mb-1" for="patientEmargencyContact">Emergency Contact</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="patientEmargencyContact"
                placeholder="Enter emergency contact"
                type="text"
                {...register("patientEmargencyContact", { required: true })}
              />
              {errors.patientEmargencyContact && (
                <p className="text-red-600 text-sm mt-1">
                  Emergency contact is required
                </p>
              )}
            </div>

            <div>
            <label class="block text-gray-700 font-sm mb-1" for="myfile">Patient Photo:</label>
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

            <div>
              <label className="block text-gray-700 font-sm mb-1" for="doctorName">Doctor Name</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="doctorName"
                placeholder="Enter doctor's name"
                type="text"
                {...register("doctorName", { required: true })}
              />
              {errors.doctorName && (
                <p className="text-red-600 text-sm mt-1">
                  Doctor name is required
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-700 font-sm mb-1" for="doctorEmail">Doctor Email</label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="doctorEmail"
                placeholder="Enter doctor's email"
                type="email"
                {...register("doctorEmail", { required: true })}
              />
              {errors.doctorEmail && (
                <p className="text-red-600 text-sm mt-1">
                  Doctor email is required
                </p>
              )}{emailExists && (
                <p class="text-red-600 text-sm mt-1">Email already exists</p>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-100 hover:bg-blue-700 duration-700 ... bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-6"
              type="submit"
              disabled={emailExists} // Disable the button if emailExists is true
            >
              Book Appointment
            </button>
          </div>
          {success && (
            <p className="text-green-600 text-sm mt-3">{success}</p>
          )}
        </form>
      </div>
    </>
  );
}

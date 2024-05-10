import React, { useState } from "react";
import { IoIosClose } from "react-icons/io";
import { useForm } from "react-hook-form";
import { emailService } from "../../../lib/api";
import Alert from "@mui/material/Alert";

const Popup = ({ onClose }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [showAlert, setShowAlert] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const dataResponse = await emailService({
      ...data,
      subject: "B|POS Request for demo",
    });
    if (dataResponse.status === 200) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      setIsLoading(false);
      reset();
    } else {
    }
  };
  return (
    <div className="fixed top-0 bottom-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-lg shadow-lg relative w-[75%] sm:w-auto">
        <div className="mb-1 sm:mb-3 mt-5 block text-xl sm:text-3xl font-medium text-center">
          Let us help you with a Demo
        </div>
        <IoIosClose
          onClick={onClose}
          className="absolute top-0 right-0 cursor-pointer"
          size={"50px"}
        />
        <div className="flex items-center justify-center py-3 sm:p-6">
          <div className="mx-auto w-full max-w-[550px] bg-white">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="poppins_medium flex flex-col sm:flex-row gap-2">
                <div className="mb-2 w-full sm:w-1/2">
                  <label className="mb-2 text-base">First Name</label>
                  <input
                    {...register("firstName", { required: true })}
                    type="text"
                    placeholder="First Name"
                    className="w-full poppins_light rounded-md border bg-[#EEEEEE] py-3 px-6 text-base font-medium outline-none shadow-md"
                  />
                  {errors.firstName?.type === "required" && (
                    <p className="m-2 text-red-600" role="alert">
                      First name is required
                    </p>
                  )}
                </div>
                <div className="mb-2 w-full sm:w-1/2">
                  <label className="mb-2 text-base">Last Name</label>
                  <input
                    type="text"
                    {...register("lastName", { required: true })}
                    placeholder="Last Name"
                    className="w-full poppins_light rounded-md border bg-[#EEEEEE] py-3 px-6 text-base font-medium outline-none shadow-md"
                  />
                  {errors.lastName?.type === "required" && (
                    <p className="m-2 text-red-600" role="alert">
                      Last name is required
                    </p>
                  )}
                </div>
              </div>
              <div className="poppins_medium mb-2">
                <label className="mb-2 text-base">Company Name</label>
                <input
                  {...register("companyName", { required: true })}
                  type="text"
                  placeholder="Company Name"
                  className="w-full poppins_light rounded-md border bg-[#EEEEEE] py-3 px-6 text-base font-medium outline-none shadow-md"
                />
                {errors.companyName?.type === "required" && (
                  <p className="m-2 text-red-600" role="alert">
                    Company name is required
                  </p>
                )}
              </div>
              <div className="poppins_medium flex flex-col sm:flex-row gap-2">
                <div className="mb-2 w-full sm:w-1/2">
                  <label className="mb-2 text-base">Email</label>
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    placeholder="Email Address"
                    className="w-full poppins_light rounded-md border bg-[#EEEEEE] py-3 px-6 text-base font-medium outline-none shadow-md"
                  />
                  {errors.email?.type === "required" && (
                    <p className="m-2 text-red-600" role="alert">
                      Enter valid email
                    </p>
                  )}
                </div>
                <div className="mb-2 w-full sm:w-1/2">
                  <label className="mb-2 text-base">Phone Number</label>
                  <input
                    {...register("phoneNumber", {
                      required: "Phone number is required",
                      pattern: {
                        value: /^[0-9]*$/,
                        message: "Please enter a valid phone number",
                      },
                    })}
                    type="text"
                    placeholder="Phone Number"
                    className="w-full poppins_light rounded-md border bg-[#EEEEEE] py-3 px-6 text-base font-medium outline-none shadow-md"
                  />
                  {errors.phoneNumber && (
                    <p className="m-2 text-red-600">
                      {errors.phoneNumber.message}
                    </p>
                  )}
                </div>
              </div>
              <div className="pt-3 sm:pt-1.5">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="poppins_medium hover:shadow-form w-full rounded-md bg-[#FF8000] py-2 px-8 text-center text-base font-semibold text-white outline-none"
                >
                  {isLoading ? "Submitting..." : "Submit"}
                </button>
              </div>
              <div className="mt-2">
                {showAlert && (
                  <Alert severity="success">
                    Your request has been successfully processed.
                  </Alert>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;

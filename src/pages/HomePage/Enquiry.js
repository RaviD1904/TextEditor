import { useState } from "react";
import Products from "./homeData.json";
import { useForm } from "react-hook-form";
import { emailService } from "../../lib/api";
import Alert from "@mui/material/Alert";
import { Link } from "react-router-dom";
import { RouteNavigation } from "../../Routes";

const Enquiry = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const [isChecked, setIsChecked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showAlert, setShowAlert] = useState(false);

  const onSubmit = async (data) => {
    setIsLoading(true);
    const dataResponse = await emailService({
      ...data,
      subject: "B|POS Product Regarding Enquiry",
    });
    if (dataResponse.status === 200) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 5000);
      setIsChecked(false);
      setIsLoading(false);
      reset();
    } else {
    }
  };
  return (
    <section id="enquiry">
      <div className="bg-[#F3F3F3] text-center py-16">
        <h2 className="mellow_light text-center text-2xl lg:text-3xl font-semibold">
          Enquiry Now
        </h2>
        <p className="poppins_light text-[11px] lg:text-xl leading-5 lg:leading-8 mt-5">
          Facilitating swift responses and efficient communication for
          inquiries,
          <br className="hidden sm:flex" /> ensuring timely and effective
          customer engagement.
        </p>
      </div>

      <div className="flex items-center justify-center p-4">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="poppins_medium flex flex-col sm:flex-row gap-2">
              <div className="mb-5 w-full sm:w-1/2">
                <label className="mb-3 block text-base font-medium">
                  First Name
                </label>
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
              <div className="mb-5 w-full sm:w-1/2">
                <label className="mb-3 block text-base font-medium">
                  Last Name
                </label>
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
            <div className="poppins_medium mb-5">
              <label className="mb-3 block text-base font-medium">
                Company Name
              </label>
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
              <div className="mb-5 w-full sm:w-1/2">
                <label className="mb-3 block text-base font-medium">
                  Email
                </label>
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
              <div className="mb-5 w-full sm:w-1/2">
                <label className="mb-3 block text-base font-medium">
                  Phone Number
                </label>
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
            <div className="poppins_medium mb-5">
              <label className="mb-3 block text-base font-medium">
                Product Name
              </label>
              <select
                {...register("productName", {
                  required: true,
                  validate: (value) => value !== "0",
                })}
                defaultValue="0"
                className="w-full poppins_light rounded-md border bg-[#EEEEEE] py-3 px-6 text-base font-medium outline-none shadow-md text-[#AEAEAE] focus:text-black"
              >
                <option value="0" disabled>
                  Select Product
                </option>
                {Products.products.map((product) => {
                  return (
                    <option key={product.id} value={product.title}>
                      {product.title}
                    </option>
                  );
                })}
                <option value="other">Others</option>
              </select>
              {errors.productName && (
                <p className="m-2 text-red-600" role="alert">
                  Please select a product
                </p>
              )}
            </div>

            <div className="poppins_medium mb-5 pt-3">
              <label className="mb-3 block text-base font-medium">
                Enter Your Message
              </label>
              <textarea
                {...register("Message", {
                  required: "Enter your enquiry",
                  minLength: { value: 20, message: "Message too small" },
                })}
                rows="6"
                className="w-full poppins_light rounded-md border bg-[#EEEEEE] py-3 px-6 text-base font-medium outline-none shadow-md"
                placeholder="Enter Your Message"
              ></textarea>
              {errors.Message && (
                <p className="m-2 text-red-600">{errors.Message.message}</p>
              )}
            </div>
            <div className="poppins_regular flex gap-2 mb-5 items-start">
              <input
                onClick={() => setIsChecked(!isChecked)}
                className="mt-[5px]"
                type="checkbox"
              />
              <span>
                By Selecting This you Agree our{" "}
                <Link
                  className="underline text-blue-600"
                  to={RouteNavigation.termsAndConditions}
                >
                  Terms & Conditions
                </Link>
              </span>
            </div>
            <div>
              <button
                type="submit"
                disabled={!isChecked || isLoading}
                className="poppins_medium hover:shadow-form w-full rounded-md bg-[#FF8000] py-3 px-8 text-center text-base font-semibold text-white outline-none"
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
    </section>
  );
};
export default Enquiry;

import { useState } from "react";
import { BiLogoInstagramAlt } from "react-icons/bi";
import { LuPhoneCall } from "react-icons/lu";
import {
  FaHome,
  FaEnvelope,
  FaFacebook,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { emailService } from "../../lib/api";
import { Link } from "react-router-dom";
import Alert from "@mui/material/Alert";
const ContactUs = () => {
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
      subject: "B|POS Contact Details",
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
    <>
      <div className="bg-[#DEDEDE] h-[150px] md:h-[300px] flex items-center justify-center">
        <span className="orkney_medium text-4xl md:text-6xl uppercase">
          Contact Us
        </span>
      </div>
      <section className="max-w-[1024px] m-auto px-4 py-5">
        <div className="container">
          <div className="-mx-4 flex flex-wrap lg:justify-between">
            <div className="w-full px-4 lg:w-1/2 xl:w-6/12">
              <div className="mb-12 max-w-[570px] lg:mb-0">
                <h2 className="mb-6 text-[32px] font-bold uppercase sm:text-[40px] lg:text-[36px] xl:text-[40px]">
                  GET IN TOUCH WITH US
                </h2>
                <p className="mb-9 text-base leading-relaxed ">
                  Feel free to reach out to us for inquiries, support, or
                  collaboration opportunities.
                </p>
                <div className="mb-8 flex w-full sm:w-[410px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-full bg-[#FF8000] text-white">
                    <FaHome size={"30px"} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold">Our Location</h4>
                    <p className="text-base">
                      D D Milestone, SPIDERTECHNO SOFT 63/154,{" "}
                      <br className="hidden sm:block" /> Room No-80, building,
                      Kadavanthra,
                      <br className="hidden sm:block" /> Ernakulam, Kerala
                      682020
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-full bg-[#FF8000] text-white">
                    <LuPhoneCall size={"30px"} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold">Phone Number</h4>
                    <p className="text-base">
                      +91 95624 54666 <br /> +91 73562 52888
                    </p>
                  </div>
                </div>

                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-full bg-[#FF8000] text-white">
                    <FaEnvelope size={"30px"} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold">Email Address</h4>
                    <p className="text-base">marketing@spidertechnosoft.com</p>
                  </div>
                </div>
                <div className="mb-8 flex w-full max-w-[370px]">
                  <div className="mr-6 flex h-[60px] w-full max-w-[60px] items-center justify-center overflow-hidden rounded-full bg-[#FF8000] text-white">
                    <IoShareSocialOutline size={"30px"} />
                  </div>
                  <div className="w-full">
                    <h4 className="mb-1 text-xl font-bold">Social Media</h4>
                    <span className="inline-flex gap-5">
                      <Link
                        to={"https://www.facebook.com/vyaparstore"}
                        target="_blank"
                      >
                        <FaFacebook size={"25px"} />
                      </Link>
                      <Link
                        to={"https://www.instagram.com/vyaparstore/"}
                        target="_blank"
                      >
                        <BiLogoInstagramAlt size={"25px"} />
                      </Link>
                      <Link
                        to={
                          "https://www.youtube.com/channel/UCEb4HGMa9zynqgO-IJ9m7yw"
                        }
                        target="_blank"
                      >
                        <FaYoutube size={"25px"} />
                      </Link>
                      <Link
                        to={
                          "https://api.whatsapp.com/send/?phone=9562454666&text&type=phone_number&app_absent=0"
                        }
                        target="_blank"
                      >
                        <FaWhatsapp size={"25px"} />
                      </Link>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full px-4 lg:w-1/2 xl:w-5/12 content-center">
              <div className="relative rounded-lg bg-white p-4 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="mb-2 w-full">
                    <label className="mb-2 block text-base font-medium">
                      First Name
                    </label>
                    <input
                      {...register("firstName", { required: true })}
                      type="text"
                      placeholder="First Name"
                      className="w-full poppins_light rounded-md border bg-[#EEEEEE] py-3 px-6 text-base font-medium outline-none shadow-md"
                    />
                    {errors.firstName?.type === "required" && (
                      <p className="ml-2 text-red-600" role="alert">
                        First name is required
                      </p>
                    )}
                  </div>
                  <div className="mb-2 w-full">
                    <label className="mb-2 block text-base font-medium">
                      Last Name
                    </label>
                    <input
                      type="text"
                      {...register("lastName", { required: true })}
                      placeholder="Last Name"
                      className="w-full poppins_light rounded-md border bg-[#EEEEEE] py-3 px-6 text-base font-medium outline-none shadow-md"
                    />
                    {errors.lastName?.type === "required" && (
                      <p className="ml-2 text-red-600" role="alert">
                        Last name is required
                      </p>
                    )}
                  </div>
                  <div className="mb-2 w-full">
                    <label className="mb-2 block text-base font-medium">
                      Email
                    </label>
                    <input
                      {...register("email", { required: true })}
                      type="email"
                      placeholder="Email Address"
                      className="w-full poppins_light rounded-md border bg-[#EEEEEE] py-3 px-6 text-base font-medium outline-none shadow-md"
                    />
                    {errors.email?.type === "required" && (
                      <p className="ml-2 text-red-600" role="alert">
                        Enter valid email
                      </p>
                    )}
                  </div>
                  <div className="mb-2 w-full">
                    <label className="mb-2 block text-base font-medium">
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
                      <p className="ml-2 text-red-600">
                        {errors.phoneNumber.message}
                      </p>
                    )}
                  </div>
                  <div className="poppins_medium mb-2">
                    <label className="mb-3 block text-base font-medium">
                      Enter Your Message
                    </label>
                    <textarea
                      {...register("Message", {
                        required: "Enter your enquiry",
                        minLength: { value: 20, message: "Message too small" },
                      })}
                      rows="4"
                      className="w-full poppins_light rounded-md border bg-[#EEEEEE] py-3 px-6 text-base font-medium outline-none shadow-md"
                      placeholder="Enter Your Message"
                    ></textarea>
                    {errors.Message && (
                      <p className="m-2 text-red-600">
                        {errors.Message.message}
                      </p>
                    )}
                  </div>
                  <div className="mt-2">
                    {showAlert && (
                      <Alert severity="success">
                        Your request has been successfully processed.
                      </Alert>
                    )}
                  </div>
                  <div>
                    <button
                      type="submit"
                      disabled={isLoading}
                      className="poppins_medium hover:shadow-form w-full rounded-md bg-[#FF8000] py-3 px-8 text-center text-base font-semibold text-white outline-none"
                    >
                      {isLoading ? "Sending..." : "Send"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;

import * as React from "react";
import { useState } from "react";
import Product from "./product.json";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { RiCloseFill } from "react-icons/ri";
import Popup from "../../../components/common/PopUp";
import POS_MACHINE_BANNER from "../../../image/home/POS-Banner-large_01.png"
const oddProductsList = Product.filter((obj) => obj.id % 2 !== 0);
const EvenProductList = Product.filter((obj) => obj.id % 2 === 0);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function Signage() {
  const [open, setOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const handleClickOpen = (productId) => {
    const product = Product.find((item) => item.id === productId);
    if (product) {
      setSelectedProduct(product);
      setOpen(true);
    }
  };

  const handleClose = (value) => {
    setOpen(false);
  };
  return (
    <>
      <div className="max-w-[1024px] px-4 pt-10 m-auto flex flex-col lg:flex-row items-center justify-between">
        <div>
          <img
            className="w-80 sm:w-96 md:w-full"
            src={POS_MACHINE_BANNER}
            alt="POS-machine-banner"
          />
        </div>
        <div className="text-center lg:text-right pt-5 w-full lg:w-[85%]">
          <h2 className="poppins_semibold text-2xl lg:text-5xl xl:text-6xl leading-8 lg:leading-[80px] xl:leading-[90px] text-black">
            B|POS
            <br /> Digital Signages
          </h2>
          <h4 className="poppins_light text-sm md:text-lg py-5">
            Captivate Your Audience with Vibrant <br /> Digital Signage
            Solutions.
          </h4>
        </div>
      </div>
      <div className="max-w-[1024px] m-auto">
        <div className="hidden lg:grid grid-cols-2 py-16 gap-10">
          <div>
            <h4 className="text-2xl poppins_semibold text-[#F5811E] pb-5">
              Digital Signages
            </h4>
            <p className="text-sm poppins_regular text-justify">
              Digital Signages are dynamic display systems used for advertising,
              information dissemination, and branding. They offer versatility,
              allowing for real-time content updates and interactive engagement
              to captivate audiences in various settings.
            </p>
            {EvenProductList.map((product) => {
              return (
                <div className="mt-10">
                  <img
                    onClick={() => handleClickOpen(product.id)}
                    src={product.cover}
                    alt="Digital Signages Cover"
                  />
                  <h4 className="poppins_semibold text-2xl py-2">
                    {product.title}
                  </h4>
                  <h2 className="poppins_medium text-lg text-[#F5801E] mb-2">
                    {product.type}
                  </h2>
                  <p className="poppins_regular text-justify text-sm">
                    {product.description}
                  </p>
                  <div className="mt-2 md:mt-5 flex flex-col sm:flex-row gap-5">
                    <button
                      onClick={() => handleClickOpen(product.id)}
                      className="w-fit text-xs tracking-[2px] poppins_light border border-black bg-white text-black rounded-md py-2 px-4"
                    >
                      Read More
                    </button>
                    <button className="w-fit text-xs tracking-[2px] poppins_light border border-black bg-white text-black rounded-md py-2 px-4">
                      Download Brochure
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <div>
            {oddProductsList.map((product) => {
              return (
                <div className="mt-10">
                  <img
                    onClick={() => handleClickOpen(product.id)}
                    src={product.cover}
                    alt="Digital Signages Cover"
                  />
                  <h4 className="poppins_semibold text-2xl  py-2">
                    {product.title}
                  </h4>
                  <h2 className="poppins_medium text-lg text-[#F5801E] mb-2">
                    {product.type}
                  </h2>
                  <p className="poppins_regular text-justify text-sm">
                    {product.description}
                  </p>
                  <div className="mt-2 md:mt-5 flex flex-col sm:flex-row gap-5">
                    <button
                      onClick={() => handleClickOpen(product.id)}
                      className="w-fit text-xs tracking-[2px] poppins_light border border-black bg-white text-black rounded-md py-2 px-4"
                    >
                      Read More
                    </button>
                    <button className="w-fit text-xs tracking-[2px] poppins_light border border-black bg-white text-black rounded-md py-2 px-4">
                      Download Brochure
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="lg:hidden px-4 py-6">
          <h4 className="text-2xl poppins_semibold text-[#F5811E] pb-5 text-center">
            Digital Signages
          </h4>
          <p className="text-sm poppins_regular text-justify">
            Digital Signages are dynamic display systems used for advertising,
            information dissemination, and branding. They offer versatility,
            allowing for real-time content updates and interactive engagement to
            captivate audiences in various settings.
          </p>
          <div>
            {Product.map((product) => {
              return (
                <div className="mt-10">
                  <img
                    onClick={() => handleClickOpen(product.id)}
                    className="m-auto"
                    src={product.cover}
                    alt="Digital Signages Cover"
                  />
                  <h4 className="poppins_semibold text-2xl  py-2">
                    {product.title}
                  </h4>
                  <h2 className="poppins_medium text-lg text-[#F5801E] mb-2">
                    {product.type}
                  </h2>
                  <p className="poppins_regular text-justify text-sm">
                    {product.description}
                  </p>
                  <div className="mt-2 md:mt-5 flex flex-col sm:flex-row gap-5">
                    <button
                      onClick={() => handleClickOpen(product.id)}
                      className="w-fit text-xs tracking-[2px] poppins_light border border-black bg-white text-black rounded-md py-2 px-4"
                    >
                      Read More
                    </button>
                    <button className="w-fit text-xs tracking-[2px] poppins_light border border-black bg-white text-black rounded-md py-2 px-4">
                      Download Brochure
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <React.Fragment>
          <Dialog
            open={open}
            TransitionComponent={Transition}
            keepMounted
            fullWidth
            onClose={handleClose}
            PaperProps={{
              style: {
                borderRadius: "10px",
                minHeight: "80%",
              },
            }}
          >
            {selectedProduct && (
              <div className="bg-white p-4 rounded-xl relative scrollbar-hide overflow-auto">
                <div className="flex flex-col md:flex-row">
                  <div className="flex flex-col-reverse gap-10 w-full md:w-1/2">
                    <div className="flex flex-row">
                      {Object.values(selectedProduct.details.images).map(
                        (imageUrl, index) => (
                          <div
                            key={index}
                            className="bg-[#E8E8E8] p-2 m-0.5 sm:m-2 flex items-center"
                          >
                            <img
                              className="w-1/2 md:w-12 m-auto"
                              src={imageUrl}
                              alt={`signage ${index + 1}`}
                            />
                          </div>
                        )
                      )}
                    </div>
                    <div className="m-auto lg:m-0">
                      <img
                        className="w-1/3 md:w-1/2 m-auto"
                        src={selectedProduct.details.baseImage}
                        alt="device"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2 mt-5 md:mt-[15%]">
                    <h4 className="poppins_semibold text-2xl py-2">
                      {selectedProduct.title}
                    </h4>
                    <h2 className="poppins_medium text-lg text-[#F5801E] mb-2">
                      {selectedProduct.type}
                    </h2>
                    <p className="poppins_regular text-justify text-sm ">
                      {selectedProduct.description}
                    </p>
                    <h2 className="poppins_bold text-justify text-sm">
                      Available Size: {selectedProduct.details.size}
                    </h2>
                  </div>
                </div>
                <RiCloseFill
                  onClick={handleClose}
                  className="absolute top-5 right-5 cursor-pointer"
                  size={"30px"}
                />
              </div>
            )}
          </Dialog>
        </React.Fragment>
      </div>
      <div className="bg-[#EBEBEB]">
        <div className="flex flex-col lg:flex-row py-14 max-w-[1024px] mx-auto justify-between px-4">
          <img
            className="w-1/2 lg:w-[45%] m-auto lg:m-0"
            src={POS_MACHINE_BANNER}
            alt="pos_machine"
          />
          <div className="text-center lg:text-end self-center pt-10 lg:pt-0">
            <h1
              className="poppins_bold text-2xl md:text-5xl leading-relaxed"
              style={{ lineHeight: "1.2" }}
            >
              Let us help you <br /> with a Demo.
            </h1>
            <button
              onClick={handleButtonClick}
              className="poppins_medium mt-5 bg-[#FF962B] p-2 rounded-md text-white"
            >
              Book Free Demo
            </button>
          </div>
        </div>
        {isPopupOpen && <Popup onClose={handleClosePopup} />}
      </div>
    </>
  );
}

import React, { useState } from "react";
import Devices from "./bpos.json";
import Specification from "./specification";
import { AnimativeLeftRight } from "../../../components/ui/FadeAnimation";
import Popup from "../../../components/common/PopUp";

export default function Desktop() {
  const [currentId, setCurrentId] = useState(1);
  const handleClick = (newId) => {
    setCurrentId(newId);
  };
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };
  const currentProduct = Devices?.details.find(
    (product) => product.id === currentId
  );
  return (
    <div>
      <div className="bg-[#EBEBEB]">
        <div className="flex flex-col-reverse lg:flex-row py-16 lg:py-28 max-w-[1024px] mx-auto">
          <div className="w-auto lg:w-[35%] text-center lg:text-start self-center pt-10 lg:pt-0">
            <div className="poppins_semibold w-auto lg:w-[400px] text-2xl lg:text-5xl xl:text-6xl leading-8 lg:leading-[80px] xl:leading-[90px]">
              <AnimativeLeftRight>
                B|POS <br />
                POS Machine
              </AnimativeLeftRight>
            </div>
            <div className="poppins_light text-xl md:text-3xl leading-5 lg:leading-[43px] mt-4 lg:mt-8">
              <AnimativeLeftRight>
                Desktop POS
                <div className="mt-4 md:mt-8">
                  <button className="tracking-[2px] w-fit text-base poppins_light border border-black bg-white text-black rounded-md py-2 px-4">
                    Download Brochure
                  </button>
                </div>
              </AnimativeLeftRight>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <img
              className="w-[75%]"
              src="/image/desktop/pos_02.png"
              alt="pos_machine"
            />
          </div>
        </div>
        <div className="max-w-[1024px] mx-auto px-4 pb-5">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-[12px] gap-10">
            {Specification.map((spec) => {
              return (
                <div
                  key={spec.id}
                  className="flex flex-col lg:flex-row gap-3 flex-1 align-center items-center"
                >
                  <div>
                    <img
                      className="w-[40px]"
                      src={`${spec.image}`}
                      alt="spec"
                    />
                  </div>
                  <div className="flex flex-col text-center lg:text-start">
                    <span>{spec.line_1}</span>
                    <span>{spec.line_2}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="max-w-[1024px] m-auto px-4">
        <div className="pt-8">
          <div className="flex flex-col items-center justify-between w-full lg:flex-row gap-10">
            <div className="flex items-center justify-center lg:w-1/3">
              <img
                src="/image/desktop/pos_01.png"
                className="bg-[#F5F5F5] p-10"
                alt="pos_01"
              />
            </div>
            <div className="mb-16 lg:mb-0 w-full lg:w-2/3 lg:pr-5 ">
              <div className="max-w-xl mb-16">
                <h2 className="poppins_regular text-center lg:text-start text-2xl md:text-4xl font-bold tracking-tight text-gray-900 sm:leading-none max-w-lg mb-6">
                  B|POS POS Machine
                </h2>
                <p className="poppins_regular text-center lg:text-start text-gray-700 text-lg md:text-2xl">
                  Model : {currentProduct.model}
                </p>
              </div>
              <div className="grid grid-cols-2 gap-5">
                {Devices.details.map((device, index) => {
                  return (
                    <div
                      key={index}
                      className={`${
                        currentId === device.id
                          ? "bg-[#FF972E] text-white"
                          : "bg-[#F5F5F5] text-black"
                      } montserrat_regular text-center py-4 transform-all duration-300 cursor-pointer text-[10px] sm:text-[16px] border`}
                      onClick={() => handleClick(device.id)}
                    >
                      {device.model}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <hr className="h-1 bg-[#F3F3F3] my-10" />
        <div className="mb-10 flex flex-wrap gap-10 justify-center">
          {currentProduct?.specs?.map((spec) => {
            return (
              <div className="w-[40%] sm:w-52 sm:h-60 rounded-xl overflow-hidden shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)] transform-all duration-300">
                <div className="bg-[#F3F3F3] flex flex-col justify-center h-24 sm:h-28 items-center">
                  <img className="h-6" src={`${spec.image}`} alt="spec_01" />
                  <span>{spec.item}</span>
                </div>
                <div className="bg-white p-5 flex items-center justify-center text-center font-bold h-28">
                  {spec.name}
                </div>
              </div>
            );
          })}
        </div>
        <div>
          <div className="montserrat_medium bg-[#EBEBEB] text-center py-2 mb-2 font-semibold text-lg sm:text-2xl">
            Screen, Touch & Colour
          </div>

          <table className="sm:ml-36 leading-10 mb-10">
            <tbody>
              {Object.entries(currentProduct.design).map(([key, value]) => (
                <tr>
                  <td className="text-start font-semibold align-top text-base sm:text-xl">
                    {key}
                  </td>
                  <td className="pl-4 sm:pl-36 align-top text-base sm:text-xl">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div className="montserrat_medium bg-[#EBEBEB] text-center py-2 mb-2 font-semibold text-[18px]">
            Optional
          </div>
          <table className="sm:ml-36 leading-10 mb-10">
            <tbody>
              {Object.entries(currentProduct.optional).map(([key, value]) => (
                <tr>
                  <td className="text-start font-semibold align-top text-base sm:text-xl">
                    {key}
                  </td>
                  <td className="pl-4 sm:pl-36 align-top text-base sm:text-xl">
                    {value}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-[#EBEBEB]">
        <div className="flex flex-col lg:flex-row py-14 sm:py-28 max-w-[1024px] mx-auto">
          <div className="flex justify-center">
            <img
              className="w-[75%]"
              src="/image/desktop/pos_02.png"
              alt="pos_machine"
            />
          </div>
          <div className="text-center lg:text-end self-center pt-10 lg:pt-0">
            <h1 className="text-2xl md:text-4xl">
              Let us help you <br /> with a Demo.
            </h1>
            <button
              onClick={handleButtonClick}
              className="mt-5 bg-[#FF962B] p-2 rounded-md text-white"
            >
              Book Free Demo
            </button>
          </div>
        </div>
      </div>
      {isPopupOpen && <Popup onClose={handleClosePopup} />}
    </div>
  );
}

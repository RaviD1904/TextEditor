import { useState } from "react";
import { useParams } from "react-router-dom";
import thermalDevice from "../product.json";
import Enquiry from "../../../HomePage/Enquiry";

const BarcodeScanners = () => {
  let { id } = useParams();
  let res = thermalDevice.filter((device) => {
    return device.id === parseInt(id);
  });
  let product = res[0];
  const [currentId] = useState(1);
  const currentProduct = product.variants.find(
    (product) => product.id === currentId
  );

  return (
    <>
      <div className="bg-[#DEDEDE] h-[150px] md:h-[300px] flex flex-col items-center justify-center px-4 text-center">
        <h2 className="poppins_regular text-2xl md:text-4xl">
          {product.title}
        </h2>
      </div>
      <div className="max-w-[1024px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row mt-10 gap-10">
          <div className="flex flex-col-reverse sm:flex-row gap-10 lg:w-1/2 items-center">
            <div className="flex flex-row flex-wrap sm:flex-col">
              <div className="bg-[#E8E8E8] p-2 sm:p-5 m-0.5 sm:m-2 flex items-center">
                <img
                  className="w-16 sm:w-20"
                  src={currentProduct.image}
                  alt="device"
                />
              </div>
              <div className="bg-[#E8E8E8] p-2 sm:p-5 m-0.5 sm:m-2 flex items-center">
                <img
                  className="w-16 sm:w-20"
                  src={currentProduct.image}
                  alt="device"
                />
              </div>
              <div className="bg-[#E8E8E8] p-2 sm:p-5 m-0.5 sm:m-2 flex items-center">
                <img
                  className="w-16 sm:w-20"
                  src={currentProduct.image}
                  alt="device"
                />
              </div>
            </div>
            <div className="m-auto lg:m-0">
              <img
                className="w-[90%] m-auto"
                src={currentProduct.image}
                alt="device"
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="poppins_regular text-2xl md:text-4xl">
              {currentProduct.item}
            </h2>
            <h4 className="poppins_regular text-xl md:text-3xl my-5">
              {currentProduct.model}
            </h4>
          </div>
        </div>
        <div className="py-10">
          <h2 className="font-bold text-xl mb-5">Product Specification</h2>
          <div className="overflow-auto w-50% sm:w-auto">
            <table className="leading-10 w-full">
              <tbody>
                {currentProduct.specification.map((item, index) => {
                  const key = Object.keys(item)[0];
                  const value = item[key];
                  const borderTopClass =
                    key !== ""
                      ? "border-t-[1px] border-gray-200"
                      : "border-t-0";
                  return (
                    <tr
                      key={index}
                      className={`border-b-[1px] border-gray-200 ${borderTopClass}`}
                    >
                      <td className="text-start align-top text-base sm:text-xl py-2">
                        {key}
                      </td>
                      <td className="pl-4 sm:pl-20 align-top text-base sm:text-xl py-2">
                        {value}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
        <div className="pb-10">
          <h2 className="font-bold text-xl mb-2">Product Description</h2>
          <span className="text-lg py-2">Features</span>
          <ul className="ml-5 leading-8" style={{ listStyle: "disc" }}>
            {currentProduct.description.map((item, index) => {
              return (
                <li className="text-base sm:text-xl pb-1" key={index}>
                  {item}
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {/* Enquiry form */}
      <Enquiry />
    </>
  );
};
export default BarcodeScanners;

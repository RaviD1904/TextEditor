import { useState } from "react";
import printers from "./product.json";
import Enquiry from "../../HomePage/Enquiry";

const BarcodePrinter = () => {
  const [currentId] = useState(1);
  const device = printers.variants[0];
  const [enlargedImage, setEnlargedImage] = useState(device.images[0].image);
  const [mappedImages, setMappedImages] = useState(device.images.slice(1, 4));

  const handleImageClick = (clickedImage) => {
    setEnlargedImage(clickedImage.image);
    setMappedImages((prevImages) => {
      const updatedImages = prevImages.map((image) =>
        image === clickedImage ? { id: 1, image: enlargedImage } : image
      );
      return updatedImages;
    });
  };
  return (
    <>
      <div className="bg-[#DEDEDE] h-[150px] md:h-[300px] flex flex-col items-center justify-center px-4 text-center">
        <h2 className="poppins_regular text-2xl md:text-4xl">
          {printers.title}
        </h2>
        <h4 className="poppins_regular text-lg md:text-2xl mt-4">
          {printers.type}
        </h4>
      </div>
      <div className="max-w-[1024px] mx-auto px-4">
        <div className="flex flex-col lg:flex-row mt-10 gap-10">
          <div className="flex flex-col-reverse sm:flex-row gap-10 lg:w-1/2 items-center select-none">
            <div className="flex flex-row flex-wrap sm:flex-col">
              {mappedImages.map((imageObj) => (
                <div
                  key={imageObj.id}
                  className="bg-[#E8E8E8] p-2 sm:p-5 m-0.5 sm:m-2 flex items-center"
                  onClick={() => handleImageClick(imageObj)}
                >
                  <img
                    className="w-16"
                    src={imageObj.image}
                    alt={`device-${imageObj.id}`}
                  />
                </div>
              ))}
            </div>
            <div className="m-auto lg:m-0">
              <img
                className="w-[90%] m-auto"
                src={enlargedImage}
                alt={`device-4`}
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <h2 className="poppins_regular text-2xl md:text-4xl">
              {device.item}
            </h2>
            <h4 className="poppins_regular text-xl md:text-3xl my-5">
              {device.model}
            </h4>
            <div className="grid grid-cols-1">
              {printers.variants.map((variant, index) => {
                return (
                  <div
                    key={index}
                    className={`${
                      currentId === variant.id
                        ? "bg-[#FF972E] text-white"
                        : "bg-[#F5F5F5] text-black"
                    } montserrat_regular w-fit px-4 text-center py-4 transform-all duration-300 cursor-pointer text-sm sm:text-lg border`}
                  >
                    {variant.model}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="py-10">
          <h2 className="font-bold mb-5">Product Specification</h2>
          <div className="overflow-auto w-50% sm:w-auto">
            <table className="leading-10 w-full">
              <tbody>
                {device.specification.map((item, index) => {
                  const key = Object.keys(item)[0];
                  const value = item[key];
                  return (
                    <tr key={index} className="border-b-[1px] border-gray-200">
                      <td className="text-start align-top text-base sm:text-xl py-2">
                        {key}
                      </td>
                      <td className="pl-4 sm:pl-36 align-top text-base sm:text-xl py-2">
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
          <h2 className="font-bold mb-2">Product Description</h2>
          <span className="text-lg py-2">Features</span>
          <ul className="ml-5 leading-8" style={{ listStyle: "disc" }}>
            {device.description.map((item, index) => {
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
export default BarcodePrinter;

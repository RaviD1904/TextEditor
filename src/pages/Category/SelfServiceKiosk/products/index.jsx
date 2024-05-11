import { useState } from "react";
import { useParams } from "react-router-dom";
import KioskDevices from "../kioskProduct.json";
import Popup from "../../../../components/common/PopUp";

function KioskProducts() {
  let { id } = useParams();
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  let res = KioskDevices.kiosk.filter((kiosk) => {
    return kiosk.id === parseInt(id);
  });
  let product = res[0];
  const createHTMLString = (text) => {
    return { __html: text.replace(/\n/g, "<br />") };
  };
  const [currentImageId, setCurrentImageId] = useState(1);

  const handleChangeImage = (imageId) => {
    setCurrentImageId(imageId);
  };

  const handleButtonClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div className="max-w-[1024px] px-4 py-10 m-auto flex flex-col-reverse lg:flex-row items-center justify-between">
        <div className="text-center lg:text-left pt-5 w-full lg:w-[75%]">
          <h2 className="poppins_semibold text-2xl lg:text-5xl xl:text-6xl leading-8 lg:leading-[80px] xl:leading-[90px] text-black">
            B|POS
            <br /> {product.detail.name}
          </h2>
          <h4 className="poppins_light text-sm md:text-lg py-5">
            {product.detail.description}
          </h4>
          <div className="mt-2 md:mt-5">
            <button className="tracking-[2px] w-fit text-base poppins_light border border-black bg-white text-black rounded-md py-2 px-4">
              Download Brochure
            </button>
          </div>
        </div>
        <div className="md:w-[50%]">
          <img
            src={
              product.product_images.find(
                (image) => image.id === currentImageId
              )?.image
            }
            alt="kiosk_device"
          />
          <div className="flex mt-5">
            <span className="mr-3 text-lg font-semibold">
              Available Colors :
            </span>
            {product.product_images.map((imageData) => {
              const isSelected = currentImageId === imageData.id;
              return (
                <button
                  key={imageData.id}
                  onClick={() => handleChangeImage(imageData.id)}
                >
                  <span className="relative flex h-fit w-fit ml-2 border border-gray-600 rounded-full">
                    {isSelected && (
                      <span
                        className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75`}
                      ></span>
                    )}
                    <span
                      className={`relative inline-flex rounded-full h-4 w-4 ${imageData.color}`}
                    ></span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
      <div className="pb-10 px-4 max-w-[1024px] m-auto">
        <div className="text-center">
          <h2 className="poppins_medium text-2xl md:text-4xl font-semibold">
            Options & Specs
          </h2>
          <h4 className="poppins_light text-sm md:text-lg py-5">
            {product.detail.specs.description}
          </h4>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4">
          {product.detail.specs.options?.map((option, index) => {
            return (
              <div key={index} className="text-center lg:h-44 self-center">
                <div className="flex justify-center h-20">
                  <img
                    className="w-8 sm:w-10 flex justify-center"
                    src={option.image}
                    alt="Options"
                  />
                </div>
                <div className="poppins_light">
                  <span className="text-xs md:text-lg">{option.item}</span>
                  <p
                    className="text-xs md:text-lg"
                    dangerouslySetInnerHTML={createHTMLString(option.option)}
                  ></p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <img
          className="mb-5 w-full"
          src={product.detail.performance_image_01}
          alt="description"
        />
        <img
          className="w-full"
          src={product.detail.performance_image_02}
          alt="description"
        />
      </div>
      <div className="max-w-[1024px] mx-auto px-4 text-center">
        {product?.detail?.dimension?.status === true && (
          <div>
            <div className="py-10">
              <h2 className="poppins_medium text-2xl md:text-4xl font-medium">
                Dimension
              </h2>
              <p className="poppins_light text-sm md:text-lg py-5">
                {product.detail.dimension.description}
              </p>
            </div>
            <img
              className="mb-5"
              src={product.detail.dimension.image}
              alt="description"
            />
          </div>
        )}
        {product?.detail?.feature?.status === true && (
          <div>
            <div className="py-10">
              <h2 className="poppins_medium text-2xl md:text-4xl font-medium">
                Features
              </h2>
              <p className="poppins_light text-sm md:text-lg py-5">
                {product.detail.feature.description}
              </p>
            </div>
            {product.detail.feature.features.map((option, index) => {
              return (
                <div key={index} className="text-start mb-5">
                  <div className="text-justify">
                    <h2 className="poppins_medium text-xl md:text-2xl font-medium mb-2  sm:mb-5">
                      &bull; {option.title}
                    </h2>
                    <h4 className="poppins_light text-sm md:text-lg  ml-6">
                      {option.description}
                    </h4>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <div className="relative flex flex-col lg:flex-row justify-between w-full">
        <img
          className="w-full"
          src={`${product.detail.demo_image}`}
          alt="book_demo"
        />
        {/* <div className={`${}`}> */}
        <div
          className={`${
            product.detail.demo_style === "left"
              ? "absolute top-[10%] sm:top-1/2 sm:left-[25%] text-center lg:text-start text-white"
              : "absolute top-[10%] sm:top-1/2 right-0 sm:right-[200px] text-center lg:text-end text-white"
          }`}
        >
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
  );
}

export default KioskProducts;

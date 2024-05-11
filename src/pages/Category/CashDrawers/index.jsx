import Devices from "./product.json";
import Enquiry from "../../HomePage/Enquiry";

const CashDrawer = () => {
  return (
    <>
      <div className="bg-[#DEDEDE] h-[150px] md:h-[300px] flex items-center justify-center text-center px-4">
        <h2 className="poppins_regular text-2xl md:text-4xl">Cash Drawers</h2>
      </div>
      <div className="max-w-[1024px] mx-auto px-4 mb-10">
        {Devices.map((item, index) => {
          return (
            <div key={index} className="flex flex-col lg:flex-row mt-10 gap-10">
              <div className="flex flex-col-reverse gap-10 lg:w-1/2">
                <div className="flex flex-row flex-wrap justify-center sm:gap-10">
                  <div className="bg-[#E8E8E8] p-3 sm:p-5 m-0.5 sm:m-2 flex items-center">
                    <img className="w-16" src={item.image} alt="device" />
                  </div>
                  <div className="bg-[#E8E8E8] p-3 sm:p-5 m-0.5 sm:m-2 flex items-center">
                    <img className="w-16" src={item.image} alt="device" />
                  </div>
                  <div className="bg-[#E8E8E8] p-3 sm:p-5 m-0.5 sm:m-2 flex items-center">
                    <img className="w-16" src={item.image} alt="device" />
                  </div>
                </div>
                <div className="m-auto lg:m-0 flex justify-center">
                  <img className="w-[75%]" src={item.image} alt="device" />
                </div>
              </div>
              <div className="w-full lg:w-1/2">
                <h2 className="poppins_regular text-2xl">{item.title}</h2>
                <h4 className="poppins_regular text-xl my-5">
                  {item.sub_title}
                </h4>
                <div>
                  <ul className="ml-5 text-base" style={{ listStyle: "disc" }}>
                    {item.specifications.map((item, index) => {
                      return (
                        <li className="py-1" key={index}>
                          {item}
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      {/* Enquiry form */}
      <Enquiry />
    </>
  );
};
export default CashDrawer;

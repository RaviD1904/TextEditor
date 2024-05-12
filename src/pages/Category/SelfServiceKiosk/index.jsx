import kioskDevices from "./kioskProduct.json";
import { Link } from "react-router-dom";
import Enquiry from "../../HomePage/Enquiry";
import KIOSK_BANNER from "../../../image/kiosk/kiosk_banner.png"
import { kiosk, sector } from "./data";
export default function Kiosk() {
  const createHTMLString = (text) => {
    return { __html: text.replace(/\n/g, "<br />") };
  };
  return (
    <div>
      <img
        className="w-full"
        src={KIOSK_BANNER}
        alt="banner"
      />
      <div className="max-w-[1024px] m-auto px-4">
        <div className="py-10 text-center m-auto">
          <h2 className="poppins_semibold text-[#F5811E] text-2xl">
            Self Service Kiosks
          </h2>
          <p className="poppins_regular flex justify-center text-sm">
            Self-service kiosks offer convenient, efficient transactions,
            reducing wait times and enhancing customer satisfaction across
            diverse industries.
          </p>
        </div>
        {kiosk && kiosk.map((kiosk, index) => {
          return (
            <div key={index} className="mb-10">
              <Link to={`${kiosk.id}`}>
                <img className="w-full" src={`${kiosk.image}`} alt="banner" />
              </Link>
              <h4 className="poppins_semibold text-2xl py-2">{kiosk.title}</h4>
              <h2 className="poppins_medium text-lg text-[#F5801E] mb-2">
                {kiosk.type}
              </h2>
              <p className="poppins_regular text-justify text-sm">
                {kiosk.description}
              </p>
              <div className="mt-2 md:mt-5 flex flex-col sm:flex-row gap-5">
                <Link to={`${kiosk.id}`}>
                  <button className="w-fit text-xs tracking-[2px] poppins_light border border-black bg-white text-black rounded-md py-2 px-4">
                    Read More
                  </button>
                </Link>
                <button className="w-fit text-xs tracking-[2px] poppins_light border border-black bg-white text-black rounded-md py-2 px-4">
                  Download Brochure
                </button>
              </div>
            </div>
          );
        })}
      </div>
      <div className="max-w-[1024px] m-auto px-4 text-center sm:mt-28">
        <h2 className="poppins_semibold text-2xl py-2">
          Common uses of Self-Service Kiosks <br className="hidden sm:block" />{" "}
          across different sectors
        </h2>
        <h4 className="poppins_regular text-sm py-10">
          Self-service kiosks have become increasingly popular in various
          industries due to their efficiency, <br /> convenience, and ability to
          enhance customer experiences.
        </h4>
      </div>
      <div className="max-w-[1024px] mx-auto px-4 pb-5 mb-10">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 text-[12px] gap-10">
          {sector.map((sector) => {
            return (
              <div
                key={sector.id}
                className="text-center rounded-[20px] content-end h-40 sm:h-56 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px]"
              >
                <img
                  className="m-auto w-1/4 mb-5 sm:mb-10"
                  src={`${sector.image}`}
                  alt="spec"
                />
                <p
                  className="poppins_light text-lg mb-2.5 sm:mb-5"
                  dangerouslySetInnerHTML={createHTMLString(sector.title)}
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Enquiry Form */}
      <Enquiry />
    </div>
  );
}

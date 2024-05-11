import { Link } from "react-router-dom";
import { RouteNavigation } from "../../../Routes";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import LOGO_WHITE from "../../../image/logo_white.svg"; 
const Footer = () => {
  return (
    <footer className="bg-[#212121] pt-4">
      <div className="bg-[#212121] py-4">
        <div className="max-w-[1024px] px-4 mx-auto">
          <div className="flex flex-wrap justify-between">
            <div className="flex flex-wrap gap-x-20">
              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="poppins_medium inline-block text-2xl pb-4 mb-4 border-b-4 border-white text-white">
                    Instant links
                  </h2>
                </div>
                <ul className="poppins_light space-y-3 text-[#FF972E]">
                  <li>
                    <Link to={RouteNavigation.about}>About Us</Link>
                  </li>
                  <li>
                    <Link to={RouteNavigation.home}>Blog</Link>
                  </li>
                  <li>
                    <Link to={RouteNavigation.contact}>Contact Us</Link>
                  </li>
                  <li>
                    <Link to={RouteNavigation.privacy}>Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="px-4 my-4 w-full sm:w-auto">
                <div>
                  <h2 className="poppins_medium inline-block text-2xl pb-4 mb-4 border-b-4 border-white text-white">
                    Products
                  </h2>
                </div>
                <ul className="poppins_light space-y-3 text-[#FF972E]">
                  <li>
                    <Link to={RouteNavigation.kiosk}>Self Service Kiosks</Link>
                  </li>
                  <li>
                    <Link to={RouteNavigation.signage}>Digital Signages</Link>
                  </li>
                  <li>
                    <Link to={RouteNavigation.posMachine}>POS Machines</Link>
                  </li>
                  <li>
                    <Link to={RouteNavigation.thermalPrinter}>
                      Thermal Printers
                    </Link>
                  </li>
                  <li>
                    <Link to={RouteNavigation.barcodePrinterDevice}>
                      Barcode Printers
                    </Link>
                  </li>
                  <li>
                    <Link to={RouteNavigation.barcodeScanner}>
                      Barcode Scanners
                    </Link>
                  </li>
                  <li>
                    <Link to={RouteNavigation.cashCountingDevice}>
                      Cash Counting Machines
                    </Link>
                  </li>
                  <li>
                    <Link to={RouteNavigation.cashDrawers}>Cash Drawers</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="px-4 sm:pt-[12%] my-4 w-full sm:w-auto ">
              <div>
                <img
                  className="sm:m-auto"
                  src={LOGO_WHITE}
                  alt="logo"
                />
              </div>
              <div className="flex space-x-6 mt-8">
                <Link
                  to={"https://www.facebook.com/vyaparstore"}
                  target="_blank"
                >
                  <FaFacebookF size={"20px"} color="#FF972E" />
                </Link>
                <Link
                  to={"https://www.instagram.com/vyaparstore/"}
                  target="_blank"
                >
                  <FaInstagram size={"20px"} color="#FF972E" />
                </Link>
                <Link
                  to={
                    "https://www.youtube.com/channel/UCEb4HGMa9zynqgO-IJ9m7yw"
                  }
                  target="_blank"
                >
                  <FaYoutube size={"20px"} color="#FF972E" />
                </Link>
                <Link
                  to={
                    "https://api.whatsapp.com/send/?phone=9562454666&text&type=phone_number&app_absent=0"
                  }
                  target="_blank"
                >
                  <FaWhatsapp size={"20px"} color="#FF972E" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#000000] py-4 text-[#FF972E]">
        <div className="container mx-auto px-4">
          <div className="flex justify-center">
            <div className="poppins_light px-4 w-full text-center sm:w-auto sm:text-left">
              Copyright © 2024 B|POS All Rights Reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

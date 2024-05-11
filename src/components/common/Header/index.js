import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { RouteNavigation } from "../../../Routes";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosClose } from "react-icons/io";
import { AnimativeRightLeft } from "../../ui/FadeAnimation";
import "./Header.scss";
import LOGO_IMAGE from "../../../image/logo_black.svg"
const Header = () => {
  const location = useLocation();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProductMenuOpen, setIsProductMenuOpen] = useState(
    location.pathname === "/"
  );

  useEffect(() => {
    // Update isProductMenuOpen based on the current location
    setIsProductMenuOpen(location.pathname === "/");
  }, [location.pathname]);

  //Remove Scroll of the body based on Mobile view menu condition
  if (isMenuOpen === true) {
    document.body.classList.add("stop-scrolling");
  } else {
    document.body.classList.remove("stop-scrolling");
  }
  return (
    <div className="bg-white select-none">
      <div className="px-4 py-5 max-w-[1024px] mx-auto">
        <div className="relative flex items-center justify-between">
          <span className="ml-2 text-xl font-bold tracking-wide uppercase">
            <Link to={RouteNavigation.home}>
              <img src={LOGO_IMAGE} alt="logo" />
            </Link>
          </span>
          <ul className="orkney_light items-center hidden space-x-16 lg:flex">
            <li>
              <Link
                to={RouteNavigation.home}
                className="focus:border-none focus:ring-0 font-medium tracking-wide transition-colors duration-200 hover:text-gray-400"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to={RouteNavigation.about}
                className="focus:border-none focus:ring-0 font-medium tracking-wide transition-colors duration-200 hover:text-gray-400"
              >
                About Us
              </Link>
            </li>
            <li>
              <span
                className="focus:border-none focus:ring-0 font-medium tracking-wide transition-colors duration-200 hover:text-gray-400 cursor-pointer"
                onClick={(e) => setIsProductMenuOpen(!isProductMenuOpen)}
              >
                Product
              </span>
            </li>
            <li>
              <Link
                to={RouteNavigation.home}
                className="font-medium tracking-wide transition-colors duration-200 hover:text-gray-400"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                to={RouteNavigation.contact}
                className="font-medium tracking-wide transition-colors duration-200 hover:text-gray-400"
              >
                Contact us
              </Link>
            </li>
          </ul>
          <ul className="items-center hidden space-x-8 lg:flex">
            <li>
              <Link to="/#enquiry">
                <span className="mellow_light inline-flex items-center justify-center h-8 px-4 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-[#FF972E] focus:shadow-outline focus:outline-none gap-2">
                  <img src="/image/enquiry.png" alt="enquiry" />
                  {/* <img src=" alt="enquiry" /> */}
                  Enquiry
                </span>
              </Link>
            </li>
          </ul>
          <div className="lg:hidden flex gap-5 items-center">
            <Link to="/#enquiry">
              <span className="mellow_light flex flex-col items-center justify-center p-2 font-medium text-[12px] tracking-wide text-white rounded shadow-md bg-[#FF972E] focus:shadow-outline focus:outline-none">
                <img src="/image/enquiry.png" alt="enquiry" />
                Enquiry
              </span>
            </Link>
            <RxHamburgerMenu onClick={() => setIsMenuOpen(!isMenuOpen)} />
          </div>
        </div>
      </div>
      {isProductMenuOpen && (
        <div
          className={`border-t-2 border-b-2 flex overflow-x-auto scrollbar-hide`}
        >
          <div className="max-w-[1024px] mx-auto py-5 px-10">
            <div className="flex gap-14 w-full items-center justify-center">
              <Link to={RouteNavigation.kiosk}>
                <div className="flex flex-col items-center text-center">
                  <img
                    className="h-12 w-12 self-center"
                    src="./image/category/product_01.svg"
                    alt="product_icon"
                  />
                  <span className="poppins_semibold text-xs mt-3">
                    Self Service <br /> Kiosk
                  </span>
                </div>
              </Link>
              <Link to={RouteNavigation.signage}>
                <div className="flex flex-col items-center text-center">
                  <img
                    className="h-12 w-12 self-center"
                    src="./image/category/product_02.svg"
                    alt="product_icon"
                  />
                  <span className="poppins_semibold text-xs mt-3">
                    Digital <br /> Signage
                  </span>
                </div>
              </Link>
              <Link to={RouteNavigation.posMachine}>
                <div className="flex flex-col items-center text-center">
                  <img
                    className="h-12 w-12 self-center"
                    src="./image/category/product_03.svg"
                    alt="product_icon"
                  />
                  <span className="poppins_semibold text-xs mt-3">
                    POS <br /> Machines
                  </span>
                </div>
              </Link>
              <Link to={RouteNavigation.thermalPrinter}>
                <div className="flex flex-col items-center text-center">
                  <img
                    className="h-12 w-12 self-center"
                    src="./image/category/product_04.svg"
                    alt="product_icon"
                  />
                  <span className="poppins_semibold text-xs mt-3">
                    Thermal <br /> Printers
                  </span>
                </div>
              </Link>
              <Link to={RouteNavigation.barcodePrinterDevice}>
                <div className="flex flex-col items-center text-center">
                  <img
                    className="h-12 w-12 self-center"
                    src="./image/category/product_05.svg"
                    alt="product_icon"
                  />
                  <span className="poppins_semibold text-xs mt-3">
                    Barcode <br /> Printers
                  </span>
                </div>
              </Link>
              <Link to={RouteNavigation.barcodeScanner}>
                <div className="flex flex-col items-center text-center">
                  <img
                    className="h-12 w-12 self-center"
                    src="./image/category/product_06.svg"
                    alt="product_icon"
                  />
                  <span className="poppins_semibold text-xs mt-3">
                    Barcode <br /> Scanners
                  </span>
                </div>
              </Link>
              <Link to={RouteNavigation.cashCountingDevice}>
                <div className="flex flex-col items-center text-center">
                  <img
                    className="h-12 w-12 self-center"
                    src="./image/category/product_07.svg"
                    alt="product_icon"
                  />
                  <span className="poppins_semibold text-xs mt-3">
                    Cash Counting <br /> Machines
                  </span>
                </div>
              </Link>
              <Link to={RouteNavigation.cashDrawers}>
                <div className="flex flex-col items-center text-center">
                  <img
                    className="h-12 w-12 self-center"
                    src="./image/category/product_08.svg"
                    alt="product_icon"
                  />
                  <span className="poppins_semibold text-xs mt-3">
                    Cash <br /> Drawers
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
      {isMenuOpen && (
        <div className="absolute top-0 left-0 right-0 bottom-0 h-[130%] z-50 lg:hidden">
          <div
            className="p-5 bg-white border rounded shadow-sm h-full bg-cover no-repeat"
            style={{ backgroundImage: "url('image/bg-menu.webp')" }}
          >
            <div
              className="flex justify-end"
              onClick={() => setIsMenuOpen(false)}
            >
              <IoIosClose size={"35px"} />
            </div>
            <div>
              <AnimativeRightLeft>
                <nav>
                  <ul className="space-y-4 text-center font-medium text-xl text-gray-900 tracking-wide">
                    <li>
                      <Link
                        to={RouteNavigation.home}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={RouteNavigation.about}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        About Us
                      </Link>
                    </li>
                    <li className="flex justify-center">
                      <span
                        onClick={() => {
                          setIsMenuOpen(false);
                          setIsProductMenuOpen(!isProductMenuOpen);
                        }}
                      >
                        Products
                      </span>
                    </li>
                    <li>
                      <Link
                        to={RouteNavigation.home}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link
                        to={RouteNavigation.contact}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Contact Us
                      </Link>
                    </li>
                  </ul>
                </nav>
              </AnimativeRightLeft>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Header;

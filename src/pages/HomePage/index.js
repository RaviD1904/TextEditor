import CountUp from "react-countup";
import Sponsors from "./SponsorListing";
import PosMachines from "./PosMachines";
import Enquiry from "./Enquiry";
import {
  AnimativeBottomTop,
  AnimativeLeftRight,
} from "../../components/ui/FadeAnimation";
import { Link, useLocation } from "react-router-dom";
import { RouteNavigation } from "../../Routes";
import { useEffect, useRef } from "react";

const Home = () => {
  const location = useLocation();
  const enquiry = useRef();

  useEffect(() => {
    if (location.hash === "#enquiry" && enquiry.current) {
      setTimeout(() => {
        enquiry.current.scrollIntoView();
      }, 100);
    }
  }, [location]);
  return (
    <>
      {/* Top section */}
      <Link to={RouteNavigation.kiosk}>
        <div className="relative" id="home-top-banner">
          <div className="bg-[#FF972E] h-[220px] sm:h-[300px] md:h-[460px] 2xl:h-[600px] " />
          <div className="bg-[#F6F6F6] h-[340px] md:h-[560px] lg:h-[320px] " />
          <div className="m-auto flex justify-center">
            <div className="flex flex-col-reverse lg:flex-row justify-center absolute top-5 px-4 py-5 md:px-24 lg:px-8">
              <div className="flex flex-col gap-5 lg:gap-11 lg:mt-40 2xl:mt-72 text-center lg:text-start">
                <div className="poppins_semibold text-2xl lg:text-5xl xl:text-6xl leading-8 lg:leading-[80px] xl:leading-[90px] text-black lg:text-white">
                  <AnimativeLeftRight>
                    B|POS <br />
                    Self Service Kiosk
                  </AnimativeLeftRight>
                </div>
                <div className="poppins_light text-[11px] lg:text-3xl leading-5 lg:leading-[43px] mt-0 lg:mt-16">
                  <AnimativeLeftRight>
                    Engage Your Audience with <br /> Captivating Kiosk and
                    Digital Signage
                    <div className="mt-2 md:mt-5">
                      <button className="w-fit text-xs md:text-xl poppins_light border border-black bg-white text-black rounded-md py-1 px-4">
                        Read More
                      </button>
                    </div>
                  </AnimativeLeftRight>
                </div>
              </div>
              <div className="flex gap-24">
                <img
                  className="w-80 sm:w-96 md:w-full"
                  src="/image/home/Kiosk_1.png"
                  alt="kiosk"
                />
              </div>
            </div>
          </div>
        </div>
      </Link>

      <Link to={RouteNavigation.signage}>
        <div className="mb-5 relative max-w-[1024px] px-4 py-10 m-auto flex flex-col lg:flex-row items-center justify-between">
          <div>
            <img
              className="w-80 sm:w-96 md:w-full"
              src="/image/home/kiosk_2.png"
              alt="POS-machine-banner"
            />
          </div>
          <div className="text-center lg:text-right pt-5">
            <h2 className="poppins_semibold text-2xl lg:text-5xl xl:text-6xl leading-8 lg:leading-[80px] xl:leading-[90px] text-black">
              B|POS
              <br /> Digital Signages
            </h2>
            <h4 className="poppins_light text-[13px] sm:text-3xl leading-[15px] sm:leading-[43px] py-5">
              Captivate Your Audience with Vibrant <br className="lg:hidden" />{" "}
              Digital Signage Solutions.
            </h4>
            <div className="mt-2 md:mt-5">
              <button className="w-fit text-xs md:text-xl poppins_light border border-black bg-white text-black rounded-md py-1 px-4">
                Read More
              </button>
            </div>
          </div>
        </div>
      </Link>

      <AnimativeBottomTop>
        <div className="text-center m-auto w-auto py-10 bg-[#F1EDEB]">
          <h2 className="poppins_medium text-2xl lg:text-5xl font-semibold leading-[42px] pb-5">
            Point of Sale Terminals
          </h2>
          <p className="poppins_light text-[11px] lg:text-xl leading-5 lg:leading-8">
            Streamlining transactions, managing inventory, and enhancing
            customer experience, these devices <br className="hidden md:flex" />{" "}
            revolutionize retail with seamless and efficient payment processing.
          </p>
        </div>
      </AnimativeBottomTop>

      {/* Home Banner 01 */}
      <Link to={RouteNavigation.posMachine}>
        <div className="mb-5 relative">
          <img
            className="w-full flex md:hidden"
            src="/image/home/Home-Banner-01.jpg"
            alt="pos-machine-banner"
          />
          <img
            className="w-full hidden md:flex"
            src="/image/home/Home-Banner-large_01.png"
            alt="POS-machine-banner"
          />
          <div className="absolute left-[5%] top-[35%] md:top-[20%] lg:top-[30%]">
            <h2 className="poppins_semibold text-[18px] sm:text-4xl lg:text-6xl leading-[20px] sm:leading-[50px] lg:leading-[76px]">
              B|POS <br /> POS Machine
            </h2>
            <h4 className="poppins_light text-[13px] sm:text-3xl leading-[15px] sm:leading-[43px]">
              Desktop POS
            </h4>
            <div className="mt-2 md:mt-5">
              <Link to={RouteNavigation.posMachine}>
                <button className="w-fit text-xs md:text-xl poppins_light border border-none bg-white text-black shadow-xl rounded-md py-1 px-4">
                  Read More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Link>

      {/* POS Machines grid */}
      <PosMachines />

      {/* POS Banner 01 */}
      <div className="mt-5 relative max-w-[1024px] m-auto">
        <img
          className="w-full flex md:hidden"
          src="/image/home/POS-Banner-01.jpg"
          alt="pos-machine-banner"
        />
        <img
          className="w-full hidden md:flex"
          src="/image/home/POS-Banner-large_01.png"
          alt="pos-machine-banner"
        />
        <div className="absolute right-[20px] w-[41%] lg:w-[420px] top-[15%] md:top-[5px] lg:top-[60px]">
          <AnimativeBottomTop>
            <h2 className="poppins_semibold text-[14px] sm:text-[20px] lg:text-[30px] pb-2 sm:pb-5 lg:pb-7">
              B|POS <br /> Barcode Scanners
            </h2>
            <p className="poppins_light text-[7px] sm:text-[13px] leading-2 sm:leading-6">
              Boost efficiency with precise barcode scanners for seamless
              inventory management.
            </p>
            <div className="mt-0 md:mt-5">
              <button className="w-fit text-xs md:text-xl poppins_light border border-none bg-white text-black shadow-xl rounded-md py-1 px-4">
                Read More
              </button>
            </div>
          </AnimativeBottomTop>
        </div>
      </div>

      {/* POS Banner 02 */}
      <Link to={RouteNavigation.cashCountingDevice}>
        <div className="mt-5 relative max-w-[1024px] m-auto">
          <img
            className="w-full flex md:hidden"
            src="/image/home/POS-Banner-02.jpg"
            alt="pos-machine-banner"
          />
          <img
            className="w-full hidden md:flex"
            src="/image/home/POS-Banner-large_02.png"
            alt="pos-machine-banner"
          />
          <div className="absolute w-[56%] sm:w-[40%] left-[20px] sm:left-[60px] top-[15%] md:top-[5px] lg:top-[60px]">
            <AnimativeBottomTop>
              <h2 className="poppins_semibold text-[14px] sm:text-[20px] lg:text-[30px] pb-2 sm:pb-5 lg:pb-7">
                B|POS <br /> Cash Counting Machine
              </h2>
              <p className="poppins_light w-[75%] sm:w-auto text-[7px] sm:text-[13px] leading-2 sm:leading-6">
                Ensuring accuracy and efficiency in financial{" "}
                <br className="hidden lg:flex" /> transactions. Streamlining
                cash handling processes.
              </p>
              <div className="mt-0 sm:mt-5">
                <button className="w-fit text-xs md:text-xl poppins_light border border-none bg-white text-black shadow-xl rounded-md py-1 px-4">
                  Read More
                </button>
              </div>
            </AnimativeBottomTop>
          </div>
        </div>
      </Link>

      {/* POS Banner 03 */}
      <Link to={RouteNavigation.cashDrawers}>
        <div className="mt-5 relative max-w-[1024px] m-auto">
          <img
            className="w-full flex md:hidden"
            src="/image/home/POS-Banner-03.jpg"
            alt="pos-machine-banner"
          />
          <img
            className="w-full hidden md:flex"
            src="/image/home/POS-Banner-large_03.png"
            alt="pos-machine-banner"
          />
          <div className="absolute right-[20px] w-[40%] lg:w-[420px] top-[15%] md:top-[5px] lg:top-[60px]">
            <AnimativeBottomTop>
              <h2 className="poppins_semibold text-sm sm:text-4xl leading-4 sm:leading-10 sm:pb-7">
                B|POS <br /> Cash Drawers
              </h2>
              <p className="poppins_light text-[7px] sm:text-[13px] leading-2 sm:leading-6">
                Cash drawers store cash securely, integrating with{" "}
                <br className="hidden lg:flex" /> point-of-sale systems for
                organized and efficient <br className="hidden lg:flex" /> cash
                management in businesses.
              </p>
              <div className="mt-2 md:mt-5">
                <button className="w-fit text-xs md:text-xl poppins_light border border-none bg-white text-black shadow-xl rounded-md py-1 px-4">
                  Read More
                </button>
              </div>
            </AnimativeBottomTop>
          </div>
        </div>
      </Link>

      {/* Sponsors images */}
      <section className="mt-16 md:mt-20 mb-16 md:mb-24">
        <h2 className="mellow_light text-center text-xl lg:text-3xl font-semibold pb-5">
          Our Prestigious Clients
        </h2>
        <AnimativeBottomTop>
          <div className="max-w-[1024px] m-auto">
            <Sponsors />
          </div>
        </AnimativeBottomTop>
      </section>

      {/* Stats section */}
      <div
        className="bg-fixed text-white h-96 bg-cover bg-no-repeat bg-center w-full"
        style={{ backgroundImage: "url('image/home/banner.png')" }}
      >
        <section className="body-font bg-black h-full bg-opacity-60">
          <div className="container px-5 py-10 sm:py-24 mx-auto">
            <div className="flex flex-wrap text-center">
              <div className="p-4 sm:w-1/3 w-full">
                <h2 className="poppins_bold title-font font-medium sm:text-7xl text-3xl">
                  <CountUp
                    start={0}
                    end={98}
                    delay={2}
                    duration={5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  %
                </h2>
                <p className="poppins_regular leading-relaxed text-xl">
                  Satisfied Cilents
                </p>
              </div>
              <div className="p-4 sm:w-1/3 w-full">
                <h2 className="poppins_bold title-font font-medium sm:text-7xl text-3xl">
                  <CountUp
                    start={0}
                    end={99}
                    delay={2}
                    duration={5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  %
                </h2>
                <p className="poppins_regular leading-relaxed text-xl">
                  Quality Assurance
                </p>
              </div>
              <div className="p-4 sm:w-1/3 w-full">
                <h2 className="poppins_bold title-font font-medium sm:text-7xl text-3xl">
                  <CountUp
                    start={0}
                    end={99}
                    delay={2}
                    duration={5}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                  %
                </h2>
                <p className="poppins_regular leading-relaxed text-xl">
                  Complete Billing Solution Provider
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      {/* Enquiry form */}
      <div id="google" ref={enquiry}>
        <Enquiry />
      </div>
    </>
  );
};
export default Home;

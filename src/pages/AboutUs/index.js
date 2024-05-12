import { useState } from "react";
import data from "./AboutUs.json";
import { AnimativeBottomTop } from "../../components/ui/FadeAnimation";
import Enquiry from "../HomePage/Enquiry";
import "./about.scss";
import MASK1 from "../../image/about/mask_1.svg";
import ABOUT_SMALL_1 from "../../image/about/about_small_1.png";
import ABOUT_LARGE_2 from "../../image/about/about_large_2.png";
import ABOUT_LARGE_1 from "../../image/about/about_large_1.png";
import ABOUT_SMALL_2 from "../../image/about/about_small_2.png";
import ABOUT_2 from "../../image/about/about_2.png";
import PRODUCT_01 from "../../image/category/product_01.svg";  
import PRODUCT_02 from "../../image/category/product_02.svg";  
import PRODUCT_03 from "../../image/category/product_03.svg";  
import PRODUCT_04 from "../../image/category/product_04.svg";  
import PRODUCT_05 from "../../image/category/product_05.svg";  
import PRODUCT_06 from "../../image/category/product_06.svg";  
import PRODUCT_07 from "../../image/category/product_07.svg";  
import PRODUCT_08 from "../../image/category/product_08.svg";  
import MASK_ABOUT_PRIMARY from "../../image/about/about_mask_primary.svg"
import MASK_ABOUT_SECONDARY from "../../image/about/about_mask_secondary.svg"

const AboutUs = () => {
  const [textVisible, setTextVisible] = useState(false);
  return (
    <>
      <div className="bg-[#DEDEDE] h-[150px] md:h-[300px] flex items-center justify-center">
        <span className="orkney_medium text-4xl md:text-6xl uppercase">
          About us
        </span>
      </div>
      <div className="max-w-[1024px] mx-auto px-4">
        <div className="grid grid-cols-1 xl:grid-cols-3 my-10">
          <div className="flex xl:hidden">
            <img
              className="w-full shadow-xl"
              src={ABOUT_SMALL_1}
              alt="about"
            />
          </div>
          <div className="text-justify xl:col-span-2 py-4">
            <AnimativeBottomTop>
              <h4 className="poppins_medium text-2xl sm:text-3xl underline mb-5">
                18 Years Of Excellence
              </h4>
              <p className="orkney_regular leading-9 mb-2 text-lg">
                Spider Techno Soft Pvt. Ltd offers you 18+ years of expertise in
                providing integrated business software solutions & POS hardware
                to clients across different verticals and segments. Our
                dedicated team of developers and researchers ensure that your
                business reaps benefits.
              </p>
              <p className="orkney_regular leading-9 text-lg">
                The customer lies at the heart of all the activities at Spider
                Techno Soft Pvt. Ltd. We realize that delivering a solution that
                caters to all the discerning needs of a customer is of utmost
                importance. We believe in creating a structured framework for
                identifying customer's requirements, developing and delivering a
                cost-effective and time-bound solution. Our solutions are put
                through a rigorous quality control procedure for detecting
                faults and areas of improvement. This is why we boldly proclaim
                that we deliver nothing short of the best when it comes to
                giving your business that extra edge.
              </p>
            </AnimativeBottomTop>
          </div>
          <div className="relative mx-5 items-center hidden xl:flex">
            <img
              className="-translate-y-10 translate-x-20 xl:translate-x-10 w-full"
              src={MASK1}
              alt="mask"
            />
            <img
              className="absolute top-[45px] xl:top-[80px] -right-5 xl:right-0 w-[90%] shadow-xl rounded-2xl"
              src={ABOUT_LARGE_1}
              alt="about"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3 my-5">
          <div>
            <img
              className="w-[50%] m-auto xl:w-full shadow-xl"
              src={ABOUT_2}
              alt="about"
            />
          </div>
          <div className="xl:col-span-2 text-justify py-4 xl:py-0 ml-0 xl:ml-5">
            <AnimativeBottomTop>
              <h4 className="poppins_medium text-2xl sm:text-3xl underline mb-5">
                About B|POS
              </h4>
              <p className="orkney_regular leading-9 text-lg">
                At B|POS, we are dedicated to transforming retail technology
                through innovative hardware solutions. With a focus on quality
                assurance, we ensure that each product meets the highest
                standards for reliability and performance. Our commitment to
                cost-effectiveness means that businesses of all sizes can access
                cutting-edge technology without breaking the bank. As a
                solutions provider, we work closely with our clients to
                understand their unique needs and tailor our offerings
                accordingly, whether they require POS machines, thermal
                printers, barcode printers, kiosk machines, or digital signage.
              </p>
              <div className="mt-2 md:mt-5">
                <button
                  onClick={(e) => setTextVisible(!textVisible)}
                  className="w-fit text-xs tracking-[2px] poppins_light border border-black bg-white text-black rounded-md py-2 px-4"
                >
                  Read {textVisible ? "Less" : "More"}
                </button>
              </div>
            </AnimativeBottomTop>
          </div>
        </div>
        <div
          className={`pt-0 overflow-hidden transition-[max-height] duration-500 ease-in ${
            textVisible ? "max-h-[1000px]" : "max-h-0"
          }`}
        >
          {textVisible ? (
            <p className="text-justify orkney_regular leading-9 text-lg">
              However, our dedication doesn't stop at providing top-notch
              products. We believe in going the extra mile for our customers,
              offering unparalleled customer service and technical support to
              ensure their success. With B|POS, businesses can trust that they
              are not just investing in hardware but partnering with a company
              that is invested in their growth and prosperity. Join us as we
              revolutionize the retail landscape and pave the way for a more
              efficient and seamless shopping experience.
            </p>
          ) : null}
        </div>
        <div className="py-5">
          <div className="text-center py-16">
            <AnimativeBottomTop>
              <h4 className="poppins_medium text-4xl">Why Choose B|POS</h4>
              <p className="orkney_regular text-base mt-5">
                Choose B|POS for unparalleled reliability, superior performance,
                and unmatched customer service. Elevate your business with our
                innovative hardware solutions designed for seamless operations
                and enhanced efficiency.
              </p>
            </AnimativeBottomTop>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {data.why_us.map((data) => {
              return (
                <div
                  key={data.id}
                  className="group border border-[#FF8000] rounded-lg p-5 hover:-translate-y-2 duration-300 cursor-pointer"
                >
                  <div className="relative h-16">
                    <img
                      className={`absolute top-4 left-[17px] z-10`}
                      src={data.image}
                      alt="icon"
                    />
                    <img
                      className="absolute top-1 left-1"
                      src={MASK_ABOUT_PRIMARY}
                      alt="element"
                    />
                    <img
                      className="absolute top-0 group-hover:rotate-[110deg] duration-500"
                      src={MASK_ABOUT_SECONDARY}
                      alt="element"
                    />
                  </div>
                  <div>
                    <h4 className="poppins_semibold text-[20px] py-3">
                      {data.title}
                    </h4>
                    <p className="font-base orkney_light text-justify">
                      {data.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="bg-[#F0FCFF] py-8 lg:py-20">
        <div className="max-w-[1024px] m-auto text-center">
          <AnimativeBottomTop>
            <h4 className="poppins_medium text-4xl mb-5">Our Mission</h4>
            <p className="orkney_regular mb-10">
              Revolutionizing retail technology with innovative BPOS hardware
              solutions for seamless transactions and enhanced customer
              experiences.
            </p>
          </AnimativeBottomTop>
          <AnimativeBottomTop>
            <h4 className="poppins_medium text-4xl mb-5">Our Vision</h4>
            <p className="orkney_regular mb-10">
              To be the foremost provider of cutting-edge BPOS hardware,
              empowering businesses globally with efficient and futuristic
              retail solutions.
            </p>
          </AnimativeBottomTop>
        </div>
      </div>

      <div className="max-w-[1024px] m-auto lg:mt-32">
        <div className="grid lg:grid-cols-2">
          <div className="self-end pb-5 px-5 text-center lg:text-justify">
            <img
              className="relative z-10 flex lg:hidden"
              src={ABOUT_LARGE_2}
              alt="about-us"
            />
            <h4 className="poppins_medium text-[35px] leading-[50px] mt-6 lg:mt-0 mb-6">
              B|POS <br /> Hardware Solutions
            </h4>
            <p className="poppins_regular text-lg leading-[35px]">
              B|POS is a leading brand in the realm of Merchant Hardware
              Solutions. BPOS stands at the forefront, providing a comprehensive
              suite of hardware designed to transform and optimize various
              facets of business operations.
            </p>
          </div>
          <div className="relative hidden lg:flex">
            <img
              className="relative z-10"
              src={ABOUT_LARGE_2}
              alt="about-us"
            />
            <div className="border-2 border-black h-[300px] w-[350px] absolute -top-20 -left-36" />
            <img
              className="absolute -top-[7.7rem] -left-80 z-20 h-[220px] w-[400px] grayscale"
              src={ABOUT_SMALL_2}
              alt="about-us"
            />
            <div
              id="circle"
              className="absolute top-[6.3rem] -left-[18.6rem] z-20 rotate-[90deg]"
            />
            <div className="absolute top-0 z-20 h-24 inset-0 backdrop-filter backdrop-grayscale clip-path-[polygon(0 0, 100% 0, 100% 50%, 0 50%)]"></div>
          </div>
        </div>
      </div>

      <main className="background py-5">
        <div className="max-w-[1024px] m-auto">
          <ul className="background infoGraphic grid grid-cols-4">
            <li>
              <div className="numberWrap">
                <div className="number fontColor1">1</div>
                <div className="coverWrap">
                  <div className="numberCover"></div>
                </div>
              </div>
              <div className="content">
                <div className="flex justify-center">
                  <img
                    className="h-12 w-12 self-center"
                    src={PRODUCT_01}
                    alt="product_icon"
                  />
                </div>
                <h2>
                  Self Service <br /> Kiosk
                </h2>
                <p className="text-justify">
                  Kiosks are interactive self-service terminals that streamline
                  transactions and information dissemination. They enhance
                  efficiency, convenience, and customer experience across
                  various industries, from retail and hospitality to healthcare
                  and transportation.
                </p>
              </div>
            </li>
            <li>
              <div className="numberWrap">
                <div className="number fontColor2">2</div>
                <div className="coverWrap">
                  <div className="numberCover"></div>
                </div>
              </div>
              <div className="content">
                <div className="flex justify-center">
                  <img
                    className="h-12 w-12 self-center"
                    src={PRODUCT_02}
                    alt="product_icon"
                  />
                </div>
                <h2>
                  Digital <br /> Signage
                </h2>
                <p className="text-justify">
                  Signage is vital for communication, guiding, and branding.
                  From traditional static signs to dynamic digital displays, it
                  enhances visibility, informs, and creates memorable
                  experiences for diverse audiences.
                </p>
              </div>
            </li>
            <li>
              <div className="numberWrap">
                <div className="number  fontColor3">3</div>
                <div className="coverWrap">
                  <div className="numberCover"></div>
                </div>
              </div>
              <div className="content">
                <div className="flex justify-center">
                  <img
                    className="h-12 w-12 self-center"
                    src={PRODUCT_03}
                    alt="product_icon"
                  />
                </div>
                <h2>
                  POS <br /> Machines
                </h2>
                <p className="text-justify">
                  BPOS POS machines redefine transaction efficiency, offering
                  businesses a seamless and reliable point of sale experience.
                  Tailored to diverse industries, our POS machines are a
                  cornerstone for streamlined operations.
                </p>
              </div>
            </li>
            <li>
              <div className="numberWrap">
                <div className="number  fontColor4">4</div>
                <div className="coverWrap">
                  <div className="numberCover"></div>
                </div>
              </div>
              <div className="content">
                <div className="flex justify-center">
                  <img
                    className="h-12 w-12 self-center"
                    src={PRODUCT_04}
                    alt="product_icon"
                  />
                </div>
                <h2>
                  Thermal <br /> Printers
                </h2>
                <p className="text-justify">
                  Experience precision in every print with B|POS thermal
                  printers. From generating clear receipts to producing detailed
                  labels, our printers ensure a swift and high-quality printing
                  process, meeting the demands of modern businesses.
                </p>
              </div>
            </li>
            <li>
              <div className="numberWrap">
                <div className="number  fontColor5">5</div>
                <div className="coverWrap">
                  <div className="numberCover"></div>
                </div>
              </div>
              <div className="content">
                <div className="flex justify-center">
                  <img
                    className="h-12 w-12 self-center"
                    src={PRODUCT_05}
                    alt="product_icon"
                  />
                </div>
                <h2>
                  Barcode <br /> Printers
                </h2>
                <p className="text-justify">
                  Simplify inventory management with BPOS barcode printers.
                  These devices empower businesses to create and print accurate
                  barcode labels, facilitating efficient stock tracking and
                  management.
                </p>
              </div>
            </li>
            <li>
              <div className="numberWrap">
                <div className="number  fontColor6">6</div>
                <div className="coverWrap">
                  <div className="numberCover"></div>
                </div>
              </div>
              <div className="content">
                <div className="flex justify-center">
                  <img
                    className="h-12 w-12 self-center"
                    src={PRODUCT_06}
                    alt="product_icon"
                  />
                </div>
                <h2>
                  Barcode <br /> Scanners
                </h2>
                <p className="text-justify">
                  BPOS barcode scanners are designed for precision and speed.
                  Enhance the checkout process, streamline inventory tracking,
                  and reduce errors with our reliable range of barcode scanners.
                </p>
              </div>
            </li>
            <li>
              <div className="numberWrap">
                <div className="number  fontColor7">7</div>
                <div className="coverWrap">
                  <div className="numberCover"></div>
                </div>
              </div>
              <div className="content">
                <div className="flex justify-center">
                  <img
                    className="h-12 w-12 self-center"
                    src={PRODUCT_07}
                    alt="product_icon"
                  />
                </div>
                <h2>
                  Cash Counting <br /> Machines
                </h2>
                <p className="text-justify">
                  Simplify inventory management with BPOS barcode printers.
                  These devices empower businesses to create and print accurate
                  barcode labels, facilitating efficient stock tracking and
                  management.
                </p>
              </div>
            </li>
            <li>
              <div className="numberWrap">
                <div className="number  fontColor8">8</div>
                <div className="coverWrap">
                  <div className="numberCover"></div>
                </div>
              </div>
              <div className="content">
                <div className="flex justify-center">
                  <img
                    className="h-12 w-12 self-center"
                    src={PRODUCT_08}
                    alt="product_icon"
                  />
                </div>
                <h2>
                  Cash <br /> Drawers
                </h2>
                <p className="text-justify">
                  Secure your transactions with BPOS cash drawers. Engineered
                  for durability and ease of use, our cash drawers are an
                  essential component of any point of sale setup, ensuring a
                  smooth and secure transaction process.
                </p>
              </div>
            </li>
          </ul>
        </div>
      </main>

      {/* Enquiry form */}
      <Enquiry />
    </>
  );
};
export default AboutUs;

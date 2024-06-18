import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { RouteNavigation } from "../../Routes";
import HOME_GRID_01 from "../../image/home/home-grid-01.jpg"
import HOME_GRID_02 from "../../image/home/home-grid-02.jpg"
const PosMachines = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.5 }}
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 100 },
      }}
    >
      <div className="m-auto max-w-[1024px]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          <Link to={RouteNavigation.thermalPrinter}>
            <div className="relative group cursor-pointer mx-4 my-2 sm:mx-0 sm:my-0">
              <img
                className="w-full"
                src={HOME_GRID_01}
                alt="pos-machine"
              />
              <span className="poppins_medium absolute top-0 left-0 text-lg sm:text-[27px] leading-5 sm:leading-[25px] xl:leading-[40px] px-5 py-5">
                Thermal Printers & <br /> Thermal Bluetooth Printers
              </span>
              <div className="group">
                <div className="flex transition-opacity duration-500 ease-in-out delay-100 group-hover:opacity-100 group-hover:visible opacity-0 invisible absolute top-0 bottom-0 left-0 right-0 w-full">
                  <div className="absolute bottom-0 left-0 right-0 top-0 bg-black opacity-50 backdrop-filter backdrop-blur-lg h-full w-full" />
                  <div className="poppins_light opacity-100 m-auto relative z-10 text-white text-center text-[11px] lg:text-xl leading-5 lg:leading-8">
                    Ensuring accuracy and efficiency in financial <br />
                    transactions. Streamlining cash handling processes
                    <div className="mt-2 md:mt-5">
                      <button className="w-[70px] tracking-[2px] sm:w-36 poppins_light border border-white bg-white text-black shadow-xl rounded-md py-1 md:py-2 text-[8px] sm:text-xl">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
          <Link to={RouteNavigation.barcodePrinterDevice}>
            <div className="relative group cursor-pointer mx-4 my-2 sm:mx-0 sm:my-0">
              <img
                className="w-full"
                src={HOME_GRID_02}
                alt="pos-machine"
              />
              <span className="poppins_medium absolute top-0 left-0 text-lg sm:text-[27px] leading-5 sm:leading-[40px] px-5 py-5">
                B|POS <br />
                Barcode Printers
              </span>
              <div className="group">
                <div className="flex transition-opacity duration-500 ease-in-out delay-100 group-hover:opacity-100 group-hover:visible opacity-0 invisible absolute top-0 bottom-0 left-0 right-0 w-full">
                  <div className="absolute bottom-0 left-0 right-0 top-0 bg-black opacity-50 backdrop-filter backdrop-blur-lg h-full w-full" />
                  <div className="poppins_light opacity-100 m-auto relative z-10 text-white text-center text-[11px] lg:text-xl leading-5 lg:leading-8">
                    Ensuring accuracy and efficiency in financial <br />
                    transactions. Streamlining cash handling processes
                    <div className="mt-2 md:mt-5">
                      <button className="w-[70px] tracking-[2px] sm:w-36 poppins_light border border-white bg-white text-black shadow-xl rounded-md py-1 md:py-2 text-[8px] sm:text-xl">
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PosMachines;

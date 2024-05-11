import Product from "./product.json";
import { Link } from "react-router-dom";

export default function BarcodeScanner() {
  return (
    <>
      <img
        className="w-full"
        src="/image/barcodeScanner/banner.png"
        alt="banner"
      />
      <div className="max-w-[1024px] m-auto sm:px-0">
        <div className="grid md:grid-cols-2 gap-5 mb-10 px-4">
          {Product.map((product, index) => {
            return (
              <div key={index} className="mt-5 ">
                <Link to={`${product.id}`}>
                  <img
                    className="h-[300px] sm:h-[350px] w-full"
                    src={product.image}
                    alt="thermal_printer"
                  />
                </Link>
                <h4 className="poppins_semibold text-2xl py-2 mt-2">
                  {product.model}
                </h4>
                <h2 className="poppins_medium text-lg text-[#F5801E] mb-2">
                  {product.type}
                </h2>
                <p className="poppins_regular text-justify text-sm">
                  {product.description}
                </p>
                <div className="mt-2 md:mt-5 flex flex-col sm:flex-row gap-5">
                  <Link to={`${product.id}`}>
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
      </div>
    </>
  );
}

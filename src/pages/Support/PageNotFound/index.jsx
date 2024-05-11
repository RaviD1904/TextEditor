import Lottie from "lottie-react";
import animationData from "../../../lib/animation/pageNotFound.json";
import { Link } from "react-router-dom";
import { RouteNavigation } from "../../../Routes";

function PageNotFound() {
  return (
    <div className="bg-gray-100 py-10">
      <div className="px-5 text-gray-700">
        <div>
          <div className="text-5xl font-dark font-bold flex justify-center">
            <Lottie
              animationData={animationData}
              loop={true}
              autoplay={true}
              speed={1.5}
              style={{ width: 300, height: 300 }}
            />
          </div>
          <p className="text-2xl md:text-3xl font-light leading-normal text-center">
            Sorry we couldn't find this page.{" "}
          </p>
          <p className="mb-8 text-center">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <Link to={RouteNavigation.home}>
            <button className="px-4 flex m-auto py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-blue-600 active:bg-blue-600 hover:bg-blue-700">
              back to homepage
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;

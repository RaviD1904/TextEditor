import React from "react";
import Lottie from "lottie-react";
import LoaderAnimation from "../../../lib/animation/Loader.json";

const Loader = () => {
  return (
    <div
      className="bg-white h-screen w-screen fixed top-0 left-0 flex justify-center items-center z-50"
      style={{ backdropFilter: "blur(4px)" }}
    >
      <div>
        <Lottie
          animationData={LoaderAnimation}
          loop={true}
          autoplay={true}
          speed={1.5}
          style={{ width: 200, height: 200 }}
        />
      </div>
    </div>
  );
};

export default Loader;

import React from "react";
import { Link } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
const Free = () => {
  const keyframes = `
    @keyframes moveHorizontal {
      from {
        transform: translateX(0);
      }
      to {
        transform: translateX(100%);
      }
    }
  `;
  return (
    <div className="px-4 py-8 ">
      <div className="flex flex-col md:flex-row justify-between items-center w-full bg-blue-50 h-auto md:h-30 lg:px-10 md:px-10 sm:px-1 py-6 md:py-8 rounded-xl">
        <div
          data-aos="flip-left"
          data-aos-delay="200"
          className="md:mr-4 flex-grow"
        >
    
          <p className="text-left text-2xl mb-2 px-2">
            List your property for{" "}
            <em className="font-bold italic text-2xl text-red-600">Free!</em>
          </p>

          <p className="pt-0 px-2">
            List your property today and engage with  buyers or
            sellers at free of cost.
          </p>
        </div>
        <div
          data-aos="flip-right"
          data-aos-delay="200"
          className="text-left md:text-left mt-4 md:mt-0 px-2 flex-shrink-0"
        >
          <Link to="/signin/" target="_top">
            <button className="text-black px-2 md:px-4 sm:px-2 bg-blue-300 py-2 md:py-3 rounded-full">
              List Property
              <span
                className="float-right text-white text-sm px-2 mx-2 rounded-full hidden sm:block bg-red-600"
                style={{ display: "flex", alignItems: "center" }}
              >
                <ScaleLoader color="#FFFFFF" height={20} width={3} />
                <style>{keyframes}</style>
                <span style={{ marginLeft: "8px" }}>Free </span>
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Free;

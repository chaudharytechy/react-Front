// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// const Search = ({ data1 }) => {
//   // const primeLocations = [
//   //   { name: "Golf Course Road", to: "/property-in-gurugram/golf-course/" },
//   //   { name: "NPR", to: "/property-in-gurugram/northern-peripheral-road/" },
//   //   { name: "Dwarka Expressway", to: "/property-in-gurugram/dwarka-expressway/" },
//   //   { name: "SPR", to: "/property-in-gurugram/southern-peripheral-road/" },
//   //   { name: "NH-48", to: "/property-in-gurugram/nh-48/" },
//   //   { name: "Golf Course Extn Road", to: "/property-in-gurugram/golf-course-extn-road/"},
//   // ];

//   const [formData, setFormData] = useState({
//     location: "",
//     query: "",
//     collectionName: data1,
//   });

//   useEffect(() => {
//     setFormData((prevState) => ({
//       ...prevState,
//       collectionName: data1,
//     }));
//   }, [data1]);

//   const handleInputChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleKeyPress = (event) => {
//     if (event.key === "Enter") {
//       document.getElementById("searchButton").click();
//     }
//   };

//   return (
//     <>
//       <div className="w-70 bg-white border-white border-none lg:h-14 md:h-10 sm:h-8 rounded-lg lg:rounded-2xl md:rounded-xl sm:rounded-lg px-2 lg:px-4 md:px-3  sm:px-2">
//         <div className="flex items-center xl:h-14 lg:h-14 md:h-10 sm:h-8">
//           <div className="w-60 mt-1 lg:mt-3 md:mt-3 sm:mt-2 ml-2 lg:ml-8 md:ml-6 sm:ml-4 lg:w-[820px] md:w-full sm:w-70 outline-none">
//             <input
//               className="outline-none w-full"
//               type="text"
//               name="query"
//               placeholder="Enter Your Query"
//               value={formData.query}
//               onChange={handleInputChange}
//               onKeyPress={handleKeyPress}
//             />
//           </div>

//           <Link
//             to={{
//               pathname: `/searchdata/${encodeURIComponent(
//                 JSON.stringify(formData)
//               )}`,
//               state: formData,
//             }}
//             id="searchButton"
//             className="ml-2 my-1 mt-1 lg:mt-3 md:mt-3 sm:mt-2 lg:ml-0 md:ml-0 sm:ml-0"
//           >
//             <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500">
//               <i className="fas fa-search text-white"></i>
//             </div>
//           </Link>
//         </div>
//       </div>

//       Horizontal scrolling

//       <div className="w-full hidden lg:flex justify-center pt-1  mx-auto">
//         <div className="flex animate-scroll pt-1">
//           {primeLocations.map((location, index) => (
//             <div key={index} className="w-auto flex-shrink-0 px-[1px]">
//               <Link
//                 to={location.to}
//                 target="_top"
//                 rel="noopener noreferrer"
//               >
//                 <span className="bg-white rounded-sm text-black font-semibold text-[12px] px-2 py-1 hover:text-red-500 hover:underline-offset-8 cursor-pointer text-center">
//                   {location.name}
//                 </span>
//               </Link>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default Search;
import { FaArrowRight } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Search = ({ data1 }) => {
  const [formData, setFormData] = useState({
    location: "",
    query: "",
    collectionName: data1,
  });

  const primeLocations = [
    { name: "Golf Course Road", to: "/property-in-gurugram/golf-course/" },
    { name: "NPR", to: "/property-in-gurugram/northern-peripheral-road/" },
    {
      name: "Dwarka Expressway",
      to: "/property-in-gurugram/dwarka-expressway/",
    },
    { name: "SPR", to: "/property-in-gurugram/southern-peripheral-road/" },
    { name: "NH-48", to: "/property-in-gurugram/nh-48/" },
    {
      name: "Golf Course Extn Road",
      to: "/property-in-gurugram/golf-course-extn-road/",
    },
    {
      name: "New Gurgaon",
      to: "/property-in-gurugram/new-gurgaon/",
    },
  ];

  useEffect(() => {
    setFormData((prevState) => ({
      ...prevState,
      collectionName: data1,
    }));
  }, [data1]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      document.getElementById("searchButton").click();
    }
  };

  return (
    <>
      <div className="w-70 bg-white border-white border-none lg:h-14 md:h-10 sm:h-8 rounded-lg lg:rounded-2xl md:rounded-xl sm:rounded-lg px-2 lg:px-4 md:px-3  sm:px-2">
        <div className="flex items-center xl:h-14 lg:h-14 md:h-10 sm:h-8">
          <div className="w-60 mt-1 lg:mt-3 md:mt-3 sm:mt-2 ml-2 lg:ml-8 md:ml-6 sm:ml-4 lg:w-[820px] md:w-full sm:w-70 outline-none">
            <input
              className="outline-none w-full"
              type="text"
              name="query"
              placeholder="Enter Your Query"
              value={formData.query}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
          </div>

          <Link
            to={{
              pathname: `/searchdata/${encodeURIComponent(
                JSON.stringify(formData)
              )}`,
              state: formData,
            }}
            id="searchButton"
            className="ml-2 my-1 mt-1 lg:mt-3 md:mt-3 sm:mt-2 lg:ml-0 md:ml-0 sm:ml-0"
          >
            <div className="w-8 h-8 flex items-center justify-center rounded-full bg-red-500">
              <i className="fas fa-search text-white"></i>
            </div>
          </Link>
        </div>
      </div>

      {/* Horizontal scrolling */}

      <div className="w-full hidden lg:flex justify-center pt-1  mx-auto">
        <span className="text-white  text-sm pt-1 font-semibold flex items-center">
          Popular Search
        </span>

        <div className="flex animate-scroll pt-1">
          {primeLocations.map((location, index) => (
            <div key={index} className="w-auto flex-shrink-0 px-[2px]">
              <Link to={location.to} target="_top" rel="noopener noreferrer">
                <span className="bg-white rounded-full  text-black font-semibold text-[12px] px-2 py-1 hover:text-red-500 hover:underline-offset-8 cursor-pointer text-center">
                  {location.name}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Search;

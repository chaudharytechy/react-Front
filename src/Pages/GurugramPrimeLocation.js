import React, { useContext } from "react";
import Nav from "../aadharhomes/Nav";
import Footer from "../Components/Actual_Components/Footer";
import { DataContext } from "../MyContext";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
const GurugramPrimeLocation = () => {
  const { allProjectData } = useContext(DataContext);

  const { location } = useParams();
  const stringWithSpaces = location.replace(/-/g, " ");
 // Split the stringWithSpaces into words
 const words = stringWithSpaces.toLowerCase().split(' ');

 // Capitalize the first letter of each word
 const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

 // Join the words back into a single string
 const primel = capitalizedWords.join(' ');
  const sohnaRoad = allProjectData.filter((project) =>
    project.projectAddress.includes(primel)
  );
console.log(sohnaRoad,)
  return (
    <div>
      <Nav />
      <section className="flex flex-col items-center pt-2">
        <div className="grid max-w-md  grid-cols-1 px-8 sm:max-w-lg md:max-w-screen-xl md:grid-cols-2 md:px-4 lg:grid-cols-4 sm:gap-4 lg:gap-4 w-full">
          {sohnaRoad.map((item, index) => {
            const pUrl = item.project_url;
            return (
              <Link to={`/${pUrl}/`} target="_top">
                <article
                  key={index}
                  className="mb-4 bg-white overflow-hidden rounded-xl  border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl"
                >
                  <div>
                    <img
                      src={item.frontImage.url}
                      alt="property In Gurugram"
                      className="w-full h-48 object-fit"
                    />
                  </div>
                  <div className="p-4">
                    <div className="pb-2">
                      <a className="text-[15px] font-semibold hover:text-red-600  duration-500 ease-in-out">
                        {item.projectName}
                      </a>

                      <br />
                      <a className="text-sm hover:text-red-600  duration-500 ease-in-out">
                        {item.projectAddress}
                      </a>
                    </div>
                    <ul className="m-0 flex list-none items-center justify-between px-0 pt-6 pb-0">
                      <li className="text-left">
                        <span className="text-sm font-extrabold text-black">
                          {item.city}
                        </span>
                      </li>

                      <li className="text-left">
                        <button
                          type="button"
                          className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-2  text-center me-2"
                        >
                          View Details
                        </button>
                      </li>
                    </ul>
                  </div>
                </article>
              </Link>
            );
          })}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GurugramPrimeLocation;

import React, { useContext } from "react";
import Nav from "../../aadharhomes/Nav";
import Footer from "../Actual_Components/Footer";
import { DataContext } from "../../MyContext";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import UpcomingSearch from "../../Pages/UpcomingSearch";
import Navbar from "../../aadharhomes/Navbar";
const UpComingProjects = () => {
  const { allupcomingProject } = useContext(DataContext);
  return (
    <div>
      <Navbar/>
      <UpcomingSearch />
      <Helmet>
        <meta
          name="description"
          content="Explore upcoming projects in Gurgaon at 100acress.com. Discover the latest upcoming affordable housing projects in Gurgaon and invest in real estate Projects."
        />
        <title>
          Upcoming Projects in Gurgaon at 100acress.com | Real Estate
        </title>
        <link
          rel="canonical"
          href="https://www.100acress.com/projects/upcoming-projects-in-gurgaon/"
        />
      </Helmet>
      <div className="max-w-screen pt-2 sm:pt-2 md:pt-2" target="_top">
     

        <h2 className="text-sm text-justify mb-4  sm:text-xl md:text-xl lg:text-sm font-normal lg:mx-20 md:mx-10 mx-5 sm:mx-4">
          Upcoming Projects in Gurugram include commercial and residential
          projects that will meet various requirements. These developments are
          equipped with modern amenities, great places close to business areas,
          as well as extensive green spaces. They're designed to meet the
          ever-changing demands of urban dwellers who want peace, convenience,
          and a vibrant lifestyle.
        </h2>
      </div>
      <section className="flex flex-col items-center">
        <div className="grid max-w-md  grid-cols-1 px-8 sm:max-w-lg md:max-w-screen-xl md:grid-cols-2 md:px-4 lg:grid-cols-4 sm:gap-4 lg:gap-4 w-full">
          {allupcomingProject.map((item, index) => {
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
                      <span style={{ float: "right" }} className="text-sm">
                        {item.builderName}
                      </span>
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

export default UpComingProjects;
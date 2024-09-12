import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import Nav from "../aadharhomes/Nav";
import Footer from "../Components/Actual_Components/Footer";
import { Link } from "react-router-dom";

const SearchData = () => {
  const location = useLocation();
  const encodedFormData = location.pathname.split("/searchdata/")[1];
  const decodedFormData = JSON.parse(decodeURIComponent(encodedFormData));

  function getFormDataValues({ query, location, collectionName }) {
    return {
      key1: query,
      key2: location,
      key3: collectionName,
    };
  }

  const { key1, key2, key3 } = getFormDataValues(decodedFormData);
  const key = `${key1}${key2}`;

  localStorage.setItem("myKey", key);
  const [searchData, setSearchData] = useState([]);
  const [buySearchData, setBuySearchData] = useState([]);
  const [rentSearchData, setRentSearchData] = useState([]);

  console.log(key, "key");

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (key3 === "Buy") {
          const res = await axios.get(
            `https://api.100acress.com/buyproperty/search/${key}`
          );
          setBuySearchData(res.data.data);
        } else if (key3 === "Rent") {
          const res = await axios.get(
            `https://api.100acress.com/rentproperty/search/${key}`
          );
          setRentSearchData(res.data.data1);
        } else {
          const res = await axios.get(
            `https://api.100acress.com/property/search/${key}`
          );
          setSearchData(res.data.searchdata);
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [key, key3]);

  useEffect(() => {}, [searchData, buySearchData, rentSearchData]);

  console.log(rentSearchData, "Rent Search Data");

  return (
    <div style={{ overflowX: "hidden" }}>
      <Nav />
      {/* Rendering searchData if available */}
      {searchData.length > 0 ? (
        <section className="flex flex-col items-center bg-white">
          <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:gap-8">
            {searchData.map((item, index) => {
              const pUrl = item.project_url;
              return (
                <Link to={`/${pUrl}/`} target="_top" key={index}>
                   <article
                  key={index}
                  className="mb-4 transition hover:scale-105 bg-white overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl"
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
                      <span className="text-[15px] font-semibold hover:text-red-600  duration-500 ease-in-out">
                        {item.projectName}
                      </span>
                      <br />
                      <span className="text-sm hover:text-red-600  duration-500 ease-in-out">
                        {item.city}, {item.state}
                      </span>
                    </div>

                    <ul className="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-2">
                      <li className="mr-4 flex items-center text-left">
                        <li className="text-left">
                          <span className="text-[13px] text-gray-400">
                            {item.projectAddress}
                          </span>
                          <p className="m-0 text-sm font-medium">{item.type}</p>
                        </li>
                      </li>
                    </ul>
                    <ul className="m-0 flex list-none items-center justify-between px-0  pb-0">
                      <li className="text-left">
                        <span className="text-sm font-extrabold text-red-600">
                          <span className="text-xl">₹</span>
                          {item.minPrice < 1 ? (
                            <>{item.minPrice * 100} L</>
                          ) : (
                            <>{item.minPrice}</>
                          )}
                          {" - "}
                          {item.maxPrice} Cr
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
      ) : null}

      {/* Rendering buySearchData if available */}
      {buySearchData.length > 0 ? (
        <section className="flex flex-col items-center bg-white">
          <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:gap-8">
            {buySearchData.map((item, index) => (
              <React.Fragment key={index}>
                {item.postProperty && item.postProperty.length > 0
                  ? item.postProperty.map((nestedItem, nestedIndex) => (
                      <article
                        key={nestedIndex}
                        className="mb-4 transition hover:scale-105 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl"
                      >
                        <div>
                          <img
                            src={nestedItem.frontImage.url}
                            alt="frontImage"
                            className="w-full h-48 object-cover"
                          />
                        </div>
                        <div className="p-4">
                          <div className="pb-2">
                            <a className="text-lg font-semibold hover:text-red-600 duration-500 ease-in-out">
                              {nestedItem.propertyName}
                            </a>
                            <br />
                            <a className="text-sm hover:text-red-600 duration-500 ease-in-out">
                              {nestedItem.city}
                            </a>
                          </div>
                          <ul className="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-2">
                            <li className="mr-4 flex items-center text-left">
                              <div className="text-left">
                                <span className="text-sm text-gray-400">
                                  {nestedItem.propertyAddress}
                                </span>
                                <div className="flex justify-between">
                                  <p className="m-0 text-base font-medium">
                                    {nestedItem.type}
                                  </p>
                                  <p className="pl-32 text-base font-medium">
                                    {nestedItem.price}
                                  </p>
                                </div>
                              </div>
                            </li>
                          </ul>
                          <ul className="m-0 flex list-none items-center justify-between px-0 pt-0 pb-0">
                            <li className="text-left">
                              <span className="text-sm font-extrabold text-black">
                                {nestedItem.state}
                              </span>
                            </li>
                            <Link
                              to={
                                nestedItem.propertyName && nestedItem._id
                                  ? `/buy-properties/${nestedItem.propertyName.replace(
                                      /\s+/g,
                                      "-"
                                    )}/${nestedItem._id}/`
                                  : "#"
                              }
                            >
                              <li className="text-left">
                                <button
                                  type="button"
                                  className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-2 text-center me-2"
                                >
                                  View Details
                                </button>
                              </li>
                            </Link>
                          </ul>
                        </div>
                      </article>
                    ))
                  : null}
              </React.Fragment>
            ))}
          </div>
        </section>
      ) : null}

      {/* Rendering rentSearchData if available */}

      {rentSearchData && rentSearchData.length > 0 ? (
  <section className="flex flex-col items-center bg-white">
    <div className="mt-10 grid max-w-md grid-cols-1 gap-6 px-2 sm:max-w-lg sm:px-20 md:max-w-screen-xl md:grid-cols-2 md:px-10 lg:grid-cols-4 lg:gap-8">
      {rentSearchData.map((item, index) => (
        <React.Fragment key={index}>
          {item.postProperty && item.postProperty.length > 0
            ? item.postProperty.map((nestedItem, nestedIndex) => (
                // <article
                //   key={nestedIndex}
                //   className="mb-4 transition hover:scale-105 overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl"
                // >
                //   <div>
                //     <img
                //       src={nestedItem?.frontImage?.url || '/default-image.jpg'} // Use default image if url is undefined
                //       alt="frontImage"
                //       className="w-full h-48 object-cover"
                //     />
                //   </div>
                //   <div className="p-4">
                //     <div className="pb-2">
                //       <a className="text-lg font-semibold hover:text-red-600 duration-500 ease-in-out">
                //         {nestedItem.propertyName || 'Unknown Property'}
                //       </a>
                //       <br />
                //       <a className="text-sm hover:text-red-600 duration-500 ease-in-out">
                //         {nestedItem.city || 'Unknown City'}
                //       </a>
                //     </div>
                //     <ul className="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-2">
                //       <li className="mr-4 flex items-center text-left">
                //         <div className="text-left">
                //           <span className="text-sm text-gray-400">
                //             {nestedItem.propertyAddress || 'No Address'}
                //           </span>
                //           <div className="flex justify-between">
                //             <p className="m-0 text-base font-medium">
                //               {nestedItem.type || 'N/A'}
                //             </p>
                //             <p className="pl-32 text-base font-medium">
                //               {nestedItem.price || 'Contact for Price'}
                //             </p>
                //           </div>
                //         </div>
                //       </li>
                //     </ul>
                //     <ul className="m-0 flex list-none items-center justify-between px-0 pt-0 pb-0">
                //       <li className="text-left">
                //         <span className="text-sm font-extrabold text-black">
                //           {nestedItem.state || 'Unknown State'}
                //         </span>
                //       </li>
                //       <Link
                //         to={
                //           nestedItem.propertyName && nestedItem._id
                //             ? `/buy-properties/${nestedItem.propertyName.replace(
                //                 /\s+/g,
                //                 "-"
                //               )}/${nestedItem._id}/`
                //             : "#"
                //         }
                //       >
                //         <li className="text-left">
                //           <button
                //             type="button"
                //             className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-2 py-2 text-center me-2"
                //           >
                //             View Details
                //           </button>
                //         </li>
                //       </Link>
                //     </ul>
                //   </div>
                // </article>
                <article
                  key={nestedIndex}
                  className="mb-4 transition hover:scale-105 bg-white overflow-hidden rounded-xl border text-gray-700 shadow-md duration-500 ease-in-out hover:shadow-xl"
                >
                  <div>
                    <img
                      src={nestedItem.frontImage.url}
                      alt="property In Gurugram"
                      className="w-full h-48 object-fit"
                    />
                  </div>
                  <div className="p-4">
                    <div className="pb-2">
                      <span className="text-[15px] font-semibold hover:text-red-600  duration-500 ease-in-out">
                        {nestedItem.projectName}
                      </span>
                      <br />
                      <span className="text-sm hover:text-red-600  duration-500 ease-in-out">
                        {nestedItem.city}, {nestedItem.state}
                      </span>
                    </div>

                    <ul className="box-border flex list-none items-center border-t border-b border-solid border-gray-200 px-0 py-2">
                      <li className="mr-4 flex items-center text-left">
                        <li className="text-left">
                          <span className="text-[13px] text-gray-400">
                            {nestedItem.projectAddress}
                          </span>
                          <p className="m-0 text-sm font-medium">{nestedItem.type}</p>
                        </li>
                      </li>
                    </ul>
                    <ul className="m-0 flex list-none items-center justify-between px-0  pb-0">
                      <li className="text-left">
                        <span className="text-sm font-extrabold text-red-600">
                          <span className="text-xl">₹</span>
                          {nestedItem.minPrice < 1 ? (
                            <>{nestedItem.minPrice * 100} L</>
                          ) : (
                            <>{nestedItem.minPrice}</>
                          )}
                          {" - "}
                          {nestedItem.maxPrice} Cr
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
              ))
            : null}
        </React.Fragment>
      ))}
    </div>
  </section>
) : null}

      <Footer />
    </div>
  );
};

export default SearchData;

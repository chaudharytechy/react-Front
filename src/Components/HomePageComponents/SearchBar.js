import React, { useState } from "react";
import styled from "styled-components";
import Search from "../../aadharhomes/Search";
import { Link } from "react-router-dom";

function SearchBar() {
  const [activeLink, setActiveLink] = useState("");
  const [data, setData] = useState(null);

  const handleLinkClick = (linkName) => {
    setActiveLink(linkName);
    setData(`${linkName}`);
  };

  return (
    <Wrapper className="section">
      <div
        className="qsbWrapper pt-0 px-2 lg:px-10 xl:px-10 md:px-4 sm:px-10 mr-auto ml-auto lg:mr-auto lg:pb-14 md:pb-14 md:ml-auto md:mr-auto sm:mr-4 sm:ml-4 xs:py-2 lg:h-14 md:h-10 sm:h-8 md:-mt-8 lg:mb-0 sm:mb-0 mb-0 md:mb-4 lg:mt-2"
        style={{ maxWidth: "760px" }}
      >
        <div className="SJDMls xl:h-14 lg:h-14 md:h-10 sm:h-8 lg:p-0 sm:p-0 md:p-0">
          {["Buy", "Rent", "New Launch", "Commercial", "Land/Plots", "SCO"].map(
            (linkName) => (
              <Link
                key={linkName}
                className={`options text-white hidden sm:block font-semibold hover:underline hover:underline-offset-8 cursor-pointer whitespace-nowrap ${
                  activeLink === linkName
                    ? "active underline underline-offset-8 text-red-500"
                    : ""
                } hover:text-red-500`}
                onClick={() => handleLinkClick(linkName)}
              >
                {linkName}
              </Link>
            )
          )}
        </div>

        <div>
          <Search data1={data} />
        </div>
      </div>
    </Wrapper>
  );
}

export default SearchBar;

const Wrapper = styled.section`
  font-weight: 400;
  line-height: 1.5;

  div {
    box-sizing: border-box;
  }

  /* Desktop and large screens */
  @media screen and (min-width: 1024px) {
    .qsbWrapper {
      display: flex;
      justify-content: center;
      flex-direction: column;
    }
  }

  /* Tablet screens */
  @media screen and (max-width: 1024px) {
    .SJDMls {
      width: 80%; /* Adjust width for tablet */
    }
  }

  /* Medium screens */
  @media screen and (max-width: 900px) {
    .SJDMls {
      width: 90%; /* Adjust width for medium screens */
    }
  }

  /* Small screens and mobile */
  @media screen and (max-width: 770px) {
    .SJDMls {
      width: 100%;
      flex-wrap: wrap; /* Allow wrapping for better alignment */
      justify-content: center; /* Center the options */
      margin-bottom: 10px; /* Add margin at the bottom */
    }

    .options {
      padding: 9px 15px; /* Reduce padding on smaller screens */
      font-size: 14px; /* Smaller font size for better fit */
    }
  }

  /* Extra small screens (mobile) */
  @media screen and (max-width: 500px) {
    .SJDMls {
      display: flex; /* Show SJDMls on small screens */
      flex-wrap: wrap; /* Allow wrapping */
    }
  }

  .SJDMls {
    display: flex;
    box-shadow: 0 25px 60px rgba(113, 106, 147, 0.2);
    width: fit-content;
    border-radius: 20px 20px 0px 0px;
    background: #EF4444;
    margin-left: 0px;
  }

  .options {
    padding: 9px 30px;
    font-size: 16px;
    transition: color 0.3s ease;
  }

  .options:hover {
    color: red;
  }

  .options.active {
    font-size: 18px;
    color: red;
  }

  .suggestor-wrapper {
    width: 90%;
  }
`;


// import React, { useState } from "react";
// import styled from "styled-components";
// import Search from "../../aadharhomes/Search";
// import { Link } from "react-router-dom";
// function SearchBar() {
//   const [activeLink, setActiveLink] = useState("");
//   const [data, setData] = useState(null);

//   const handleLinkClick = (linkName) => {
//     setActiveLink(linkName);
//     setData(`${linkName}`);
//   };

//   return (
//     <Wrapper className="section">
//       <div
//         className="qsbWrapper pt-2 mr-auto ml-auto lg:mr-auto md:ml-auto md:mr-auto ml:ml-auto sm:mr-4 sm:ml-4  xs:py-2 lg:h-14 md:h-10 sm:h-8"
//         style={{ maxWidth: "800px", marginTop: "110px" }}
//       >

//         <div className="SJDMls xl:h-14 lg:h-14 md:h-8 sm:h-8">
//           {["Buy", "Rent", "New Launch", "Commercial", "Land/Plots", "SCO"].map(
//             (linkName) => (
//               <Link
//                 key={linkName}
//                 className={`options font-semibold hover:underline hover:underline-offset-8 cursor-pointer ${
//                   activeLink === linkName ? "active underline underline-offset-8 text-red-500" : ""
//                 } hover:text-red-500`}
//                 onClick={() => handleLinkClick(linkName)}
//               >

//                 {linkName}
//               </Link>
//             )
//           )}

//         </div>

//         <Search data1={data} />
//       </div>
//     </Wrapper>
//   );
// }

// export default SearchBar;
// const Wrapper = styled.section`
//   font-weight: 400;
//   line-height: 18px;
//   div {
//     box-sizing: border-box;
//   }

//   .qsbWrapper {
//     display: flex;
//     justify-content: center;
//     flex-direction: column;
//   }

//   .SJDMls {
//     display: flex;
//     box-shadow: 0 25px 60px rgba(113, 106, 147, 0.2);
//     width: fit-content;
//     border-radius: 20px 20px 0px 0px;
//     background: #fff;
//     margin-left: 32px;
//   }
//   .options {
//     padding: 9px 30px 13px 30px;
//     font-size: 16px;
//   }
//   // .options:hover {
//   //   font-size: 18px;
//   // }
//   .SJDMls > div:hover {
//     cursor: pointer;
//   }
//   .SJDMls > div.active {
//     font-size: 20px;
//     color: red;
//   }
//   @media screen and (max-width: 500px) {
//     .SJDMls{
//       display: none;
//     }
//   }
//   @media screen and (max-width: 900px) {
//     .qsbWrapper {
//       margin: 8rem auto !important;
//     }
//     @media screen and (max-width: 640px) {
//       .qsbWrapper {
//         margin: 3rem auto !important;
//       }
//     .suggestor-wrapper {
//       width: 90%;
//     }

//   @media screen and (max-width: 500px) {
//     .qsbWrapper {
//       flex-direction: column-reverse;
//       align-items: center;
//     }
//   }
//   @media screen and (max-width: 885px) and (min-width: 860px) {
//     .qsbWrapper .qsb .keywordSugg .suggestor-box {
//       width: 293px;
//     }
//   }
//   @media screen and (max-width: 770px) and (min-width: 750px) {
//     .qsbWrapper .qsb .keywordSugg .suggestor-box {
//       width: 223px;
//     }
//   }
//   @media screen and (max-width: 1200px) and (min-width: 900px) {
//     .qsbWrapper {
//       margin: 10rem auto !important;
//     }
//   }
// `;

// import React from "react";
// import { Link } from "react-router-dom";
// import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
// const Footer = () => {
//   return (
//     <>
//       <footer className="bg-red-600 h-90">
//         <div className="mx-auto grid text-gray-50 lg:grid-cols-12 px-4">
//           <div className="flex flex-col lg:flex-row items-start border-slate-500 py-2 px-2 lg:col-span-12 xl:pl-32 2xl:pl-40">
//             <div className="mt-4  lg:w-1/2 max-w-screen-lg px-2">
//               <nav>
//                 <p className="font-bold text-xl pr-2 text-white ">
//                   Useful Links
//                 </p>

//                 {/* <p className="space-x-2 text-sm text-justify">
//                   <span className="hover:underline "><Link to="" target='_blank' style={{ color: 'white' }}>Property in Gurugram</Link></span> |
//                   <span className=" hover:underline"><Link to=""  target='_blank' style={{ color: 'white' }}>Property in Delhi</Link></span> |
//                   <span className=" hover:underline"><Link to="" target='_blank'  style={{ color: 'white' }}>Property in Noida</Link></span> |
//                   <span className=" hover:underline"><Link to="" target='_blank' style={{ color: 'white' }}>Property in Goa</Link></span> |
//                   <span className=" hover:underline"><Link to="https://www.affordablehomes.net.in/" target='_blank'  style={{ color: 'white' }}>Affordable Homes in Gurugram</Link></span> |
//                   <span className=" hover:underline"><Link to="https://www.m3mprojects.net.in/" target='_blank'  style={{ color: 'white' }}>M3M India Projects</Link></span> |
//                   <span className=" hover:underline"><Link to="https://www.rahejadeveloper.in/" target='_blank'  style={{ color: 'white' }}>Raheja Developers Projects</Link></span> |
//                   <span className=" hover:underline"><Link to="https://www.maxrealtyindia.com/" target='_blank'  style={{ color: 'white' }}>Max Estate Projects</Link></span> |
//                   <span className=" hover:underline"><Link to="https://www.krisumicitygurgaon.com/" target='_blank'  style={{ color: 'white' }}>Krisumi Projects</Link></span> |
//                   <span className=" hover:underline"><Link to="" target='_blank' style={{ color: 'white' }}>Luxury Flats</Link></span> |
//                   <span className=" hover:underline"><Link to="" target='_blank'  style={{ color: 'white' }}>Builder Floors</Link></span> |
//                   <span className=" hover:underline"><Link to="https://www.gurugramscoplots.com/" target='_blank'  style={{ color: 'white' }}>SCO Plots in Gurugram</Link></span> |
//                   <span className=" hover:underline"><Link to="" target='_blank'  style={{ color: 'white' }}>Deen Dayal Plots</Link></span> |
//                   <span className=" hover:underline"><Link to="https://www.whitelandgurgaon.com/" target='_blank'  style={{ color: 'white' }}>Whiteland Projects</Link></span> |
//                   <span className=" hover:underline"><Link to="https://www.experiondevelopers.com/" target='_blank'  style={{ color: 'white' }}>Experion Developers</Link></span> |
//                   <span className=" hover:underline"><Link to="https://www.aarizegurgaon.com/" target='_blank'  style={{ color: 'white' }}>Aarize Projects</Link></span> |
//                   <span className=" hover:underline"><Link to="https://www.purigurgaon.co.in/" target='_blank'  style={{ color: 'white' }}>Puri Construction Projects</Link></span> |
//                   <span className=" hover:underline"><Link to="https://www.orrisgroup.in/" target='_blank'  style={{ color: 'white' }}>Orris Group Projects</Link></span> |
//                   <span className=" hover:underline"><Link to="https://www.dlfbuilder.co.in/" target='_blank'  style={{ color: 'white' }}>DLF Homes</Link></span> |
//                   <span className=" hover:underline"><Link to="https://www.signatureprojects.co.in/" target='_blank'  style={{ color: 'white' }}>Signature Global Projects</Link></span> |
//                   <span className=" hover:underline"><Link to="https://www.maxrealtyindia.com/" target='_blank'  style={{ color: 'white' }}>Max Estate Projects</Link></span> |
//                   <span className=" hover:underline"><Link to="https://www.trevocrealty.com/" target='_blank'  style={{ color: 'white' }}>Trevoc Group</Link></span> |
//                 </p> */}

//                 <p className="space-x-2 text-sm text-bold text-justify">
//                   <span className="hover:underline ">
//                     <Link to="" target="_blank" style={{ color: "white" }}>
//                       Property in Gurugram
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link to="" target="_blank" style={{ color: "white" }}>
//                       Property in Delhi
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link to="" target="_blank" style={{ color: "white" }}>
//                       Property in Noida
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link to="" target="_blank" style={{ color: "white" }}>
//                       Property in Goa
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.affordablehomes.net.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Affordable Homes in Gurugram
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.m3mprojects.net.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       M3M India Projects
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.rahejadeveloper.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Raheja Developers Projects
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.maxrealtyindia.com/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Max Estate Projects
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.krisumicitygurgaon.com/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Krisumi Projects
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link to="" target="_blank" style={{ color: "white" }}>
//                       Luxury Flats
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link to="" target="_blank" style={{ color: "white" }}>
//                       Builder Floors
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.gurugramscoplots.com/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       SCO Plots in Gurugram
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link to="" target="_blank" style={{ color: "white" }}>
//                       Deen Dayal Plots
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.whitelandgurgaon.com/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Whiteland Projects
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.aarizegurgaon.com/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Aarize Projects
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.purigurgaon.co.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Puri Construction Projects
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.orrisgroup.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Orris Group Projects
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.dlfbuilder.co.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       DLF Homes
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.signatureprojects.co.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Signature Global Projects
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.maxrealtyindia.com/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Max Estate Projects
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.trevocrealty.com/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Trevoc Group
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.godrejrealtyindia.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Godrej Properties
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.sobhabuilder.co.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Sobha Projects
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.reachgroup.co.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Reach Group Projects
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.chintamanirealty.com/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Chintamani Gurugram
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.smartworldgroup.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Smartworld Projects
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.aipldevelopers.com/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       AIPL Developers
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.ameyasapphire.com/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Ameya Group Projects
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.tulipgurgaon.co.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Tulip Group Projects
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.pyramidgurugram.com/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Pyramid Project Gurugram
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.tridentrealty.net.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Trident Realty Projects
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.eldecoprojects.com/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Eldeco Projects Gurugram
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.trinityinfratech.com/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Trinity Infratech Projects in Gurugram
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.joyvillegurgaon.com/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Joyville Gurugram
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.bptpprojects.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       BPTP Projects in Gurugram
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.atsprojectsgurgaon.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       ATS Projects Gurugram
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.tarcprojects.net.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Tarc Projects Delhi NCR
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.gangarealtygurugram.com"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Ganga Realty Projects in Gurugram
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.adanigurgaon.co.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Adani Realty Gurugram
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.mrggurgaon.co.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       MRG World Projects
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.aradhyahomes.co.in/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Aradhya Homes Gurugram
//                     </Link>
//                   </span>{" "}
//                   |
//                   <span className=" hover:underline">
//                     <Link
//                       to="https://www.experiondevelopers.com/"
//                       target="_blank"
//                       style={{ color: "white" }}
//                     >
//                       Experion Developers Projects in Delhi NCR
//                     </Link>
//                   </span>{" "}
//                   |

                  
//                 </p>
//               </nav>
//             </div>

//             <div className="pt-4 text-sm leading-6 tracking-wide lg:w-1/2 px-3  lg:col-span-6">
//               <p className="font-bold text-xl text-white text-justify">
//                 About 100acress.com
//               </p>
//               <p className="text-md text-justify">
//                 100acress.com Gurugram based Fastest Growing Property Website
//                 dedicated to providing advisory and mediation services for
//                 discovering, renting, buying, selling, and financing residential
//                 apartments or commercial properties in Gurgaon. We are the
//                 management platform that extends its function beyond the
//                 purchase, sale, or rental of properties. Our aim is to be a
//                 one-stop solution for all apartment needs, from finding a best
//                 property in Gurgaon to managing and connecting with the
//                 apartment complex.
//               </p>

//               <div>
//                 <nav
//                   aria-label="Footer Navigation "
//                   className="flex flex-wrap  px-3 sm:py-4 sm:px-8 lg:col-span-8  lg:border-t-0 xl:flex-nowrap xl:space-x-16  ">
//                   <li className="flex space-x-3 ml-auto">
//                     <Link
//                       to="https://www.facebook.com/100Acress"
//                       className="flex items-center justify-center text-white bg-blue-400 w-10 h-10 rounded-full"
//                     >
//                       <FaFacebook size={20} />
//                     </Link>
//                     <Link
//                       to="https://twitter.com/100acressdotcom"
//                       className="flex items-center justify-center text-white bg-black w-10 h-10 rounded-full "
//                     >
//                       <i className="fa-brands fa-x-twitter text-sm"></i>
//                     </Link>

//                     <Link
//                       to="https://www.instagram.com/100acress_com/"
//                       className="flex items-center justify-center text-white w-10 h-10 rounded-full bg-[#c32aa3]"
//                     >
//                       <FaInstagram size={20} />
//                     </Link>
//                     <Link
//                       to="https://www.linkedin.com/company/100acress/"
//                       className="flex justify-center items-center text-white bg-blue-700 w-10 h-10 rounded-full"
//                     >
//                       <FaLinkedin size={20} />
//                     </Link>
//                     <Link
//                       to="https://www.youtube.com/@100acress"
//                       className="flex items-center justify-center text-red-600 rounded-full bg-white w-10 h-10"
//                     >
//                       <FaYoutube size={20} />
//                     </Link>
//                   </li>
//                 </nav>
//               </div>
              
//             </div>
//           </div>

//           <div
//             aria-label="Footer Navigation"
//             className="flex flex-wrap h-full rounded-xl pt-2 lg:col-span-12 lg:border-t-0 xl:flex-nowrap xl:space-r-16"
//           >
//             <ul className="mt-2 pl-0 text-md h-6 flex-grow flex flex-col sm:flex-row md:mt-0 sm:items-center">
//               <div className="flex flex-row sm:flex-row sm:justify-center flex-wrap">
//                 <li className=" sm:mb-0">
//                   <Link
//                     to="/"
//                     className="text-left px-1 text-sm hover:underline"
//                     target="_top"
//                     style={{ color: "white" }}
//                   >
//                     Home
//                   </Link>
//                 </li>
//                 <li className=" sm:mb-0">
//                   <Link
//                     to="/about"
//                     className="text-left px-1 text-sm hover:underline"
//                     target="_top"
//                     style={{ color: "white" }}
//                   >
//                     About
//                   </Link>
//                 </li>

//                 <li className=" sm:mb-0">
//                   <Link
//                     to="/contactus"
//                     className="text-left px-1 text-sm hover:underline"
//                     target="_top"
//                     style={{ color: "white" }}
//                   >
//                     Contact
//                   </Link>
//                 </li>
//                 <li className=" sm:mb-0">
//                   <Link
//                     to="/privacy"
//                     className="text-left px-1 text-sm hover:underline"
//                     target="_top"
//                     style={{ color: "white" }}
//                   >
//                     Privacy & Policy
//                   </Link>
//                 </li>
//                 <li className=" sm:mb-0">
//                   <Link
//                     to="/careerwithus"
//                     className="text-left px-1 text-md hover:underline"
//                     target="_top"
//                     style={{ color: "white" }}
//                   >
//                     Career
//                   </Link>
//                 </li>
//                 <li className=" sm:mb-0">
//                   <Link
//                     to="/blog"
//                     className="text-left px-1 text-sm hover:underline"
//                     target="_top"
//                     style={{ color: "white" }}
//                   >
//                     Blog
//                   </Link>
//                 </li>
//                 <li className=" sm:mb-0">
//                   <Link
//                     to="/termsandconditions"
//                     className="text-left px-1 text-md hover:underline"
//                     target="_top"
//                     style={{ color: "white" }}
//                   >
//                     Terms & Conditions
//                   </Link>
//                 </li>
//               </div>
//             </ul>
//           </div>

//           <div className="border-t border-white px-2 mt-2 py-2  lg:col-span-12">
//             <p className="text-left text-sm text-white">
//               Copyright © 2024,{" "}
//               <Link className="text-reset" to="https://100acress.com/">
//                 100acress.com.{" "}
//               </Link>
//               All Rights Reserved
//             </p>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// };

// export default Footer;



import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaYoutube,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <footer className="bg-red-600 h-90">
        <div className="mx-auto grid text-gray-50 lg:grid-cols-12 px-4">
          <div className="flex flex-col lg:flex-row items-start border-slate-500 py-2 px-2 lg:col-span-12 xl:pl-28 2xl:pl-32">
            <div className="mt-4 lg:mt-0 lg:ml-2 lg:w-full lg:col-span-6">
              <nav>
                <p className="font-bold text-xl  text-white ">Useful Links</p>

                <p className="space-x-2 text-sm text-bold text-justify">
                  <span className="hover:underline "><Link to="" target='_blank' style={{ color: 'white' }}>Property in Gurugram</Link></span> |
                  <span className=" hover:underline"><Link to="" target='_blank' style={{ color: 'white' }}>Property in Delhi</Link></span> |
                  <span className=" hover:underline"><Link to="" target='_blank' style={{ color: 'white' }}>Property in Noida</Link></span> |
                  <span className=" hover:underline"><Link to="" target='_blank' style={{ color: 'white' }}>Property in Goa</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.affordablehomes.net.in/" target='_blank' style={{ color: 'white' }}>Affordable Homes in Gurugram</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.m3mprojects.net.in/" target='_blank' style={{ color: 'white' }}>M3M India Projects</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.rahejadeveloper.in/" target='_blank' style={{ color: 'white' }}>Raheja Developers Projects</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.maxrealtyindia.com/" target='_blank' style={{ color: 'white' }}>Max Estate Projects</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.krisumicitygurgaon.com/" target='_blank' style={{ color: 'white' }}>Krisumi Projects</Link></span> |
                  <span className=" hover:underline"><Link to="" target='_blank' style={{ color: 'white' }}>Luxury Flats</Link></span> |
                  <span className=" hover:underline"><Link to="" target='_blank' style={{ color: 'white' }}>Builder Floors</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.gurugramscoplots.com/" target='_blank' style={{ color: 'white' }}>SCO Plots in Gurugram</Link></span> |
                  <span className=" hover:underline"><Link to="" target='_blank' style={{ color: 'white' }}>Deen Dayal Plots</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.whitelandgurgaon.com/" target='_blank' style={{ color: 'white' }}>Whiteland Projects</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.aarizegurgaon.com/" target='_blank' style={{ color: 'white' }}>Aarize Projects</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.purigurgaon.co.in/" target='_blank' style={{ color: 'white' }}>Puri Construction Projects</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.orrisgroup.in/" target='_blank' style={{ color: 'white' }}>Orris Group Projects</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.dlfbuilder.co.in/" target='_blank' style={{ color: 'white' }}>DLF Homes</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.signatureprojects.co.in/" target='_blank' style={{ color: 'white' }}>Signature Global Projects</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.maxrealtyindia.com/" target='_blank' style={{ color: 'white' }}>Max Estate Projects</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.trevocrealty.com/" target='_blank' style={{ color: 'white' }}>Trevoc Group</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.godrejrealtyindia.in/" target='_blank' style={{ color: 'white' }}>Godrej Properties</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.sobhabuilder.co.in/" target='_blank' style={{ color: 'white' }}>Sobha Projects</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.reachgroup.co.in/" target='_blank' style={{ color: 'white' }}>Reach Group Projects</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.chintamanirealty.com/" target='_blank' style={{ color: 'white' }}>Chintamani Gurugram</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.smartworldgroup.in/" target='_blank' style={{ color: 'white' }}>Smartworld Projects</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.aipldevelopers.com/" target='_blank' style={{ color: 'white' }}>AIPL Developers</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.ameyasapphire.com/" target='_blank' style={{ color: 'white' }}>Ameya Group Projects</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.tulipgurgaon.co.in/" target='_blank' style={{ color: 'white' }}>Tulip Group Projects</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.pyramidgurugram.com/" target='_blank' style={{ color: 'white' }}>Pyramid Project Gurugram</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.tridentrealty.net.in/" target='_blank' style={{ color: 'white' }}>Trident Realty Projects</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.eldecoprojects.com/" target='_blank' style={{ color: 'white' }}>Eldeco Projects Gurugram</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.trinityinfratech.com/" target='_blank' style={{ color: 'white' }}>Trinity Infratech Projects in Gurugram</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.joyvillegurgaon.com/" target='_blank' style={{ color: 'white' }}>Joyville Gurugram</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.bptpprojects.in/" target='_blank' style={{ color: 'white' }}>BPTP Projects in Gurugram</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.atsprojectsgurgaon.in/" target='_blank' style={{ color: 'white' }}>ATS Projects Gurugram</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.tarcprojects.net.in/" target='_blank' style={{ color: 'white' }}>Tarc Projects Delhi NCR</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.gangarealtygurugram.com" target='_blank' style={{ color: 'white' }}>Ganga Realty Projects in Gurugram</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.adanigurgaon.co.in/" target='_blank' style={{ color: 'white' }}>Adani Realty Gurugram</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.mrggurgaon.co.in/" target='_blank' style={{ color: 'white' }}>MRG World Projects</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.aradhyahomes.co.in/" target='_blank' style={{ color: 'white' }}>Aradhya Homes Gurugram</Link></span> |
                  <span className=" hover:underline"><Link to="https://www.experiondevelopers.com/" target='_blank' style={{ color: 'white' }}>Experion Developers Projects in Delhi NCR</Link></span> |

                </p>
              </nav>
            </div>
          </div>
          <div className='lg:w-1/2' >
            <nav
              aria-label="Footer Navigation "
              className="flex flex-wrap  px-3 sm:py-4 sm:px-8 lg:col-span-8 
            lg:border-t-0 xl:flex-nowrap xl:space-x-16 xl:pl-32 2xl:pl-40"
            >
              <li className="flex space-x-3">
                <Link
                  to="https://www.facebook.com/100Acress"
                  className="flex items-center justify-center text-white bg-blue-400 w-10 h-10 rounded-full"
                >
                  <FaFacebook size={20} />

                </Link>
                <Link
                  to="https://twitter.com/100acressdotcom"
                  className="flex items-center justify-center text-white bg-black w-10 h-10 rounded-full "
                >
                  <i className="fa-brands fa-x-twitter text-sm" ></i>
                </Link>

                <Link
                  to="https://www.instagram.com/100acress_com/"
                  className="flex items-center justify-center text-white w-10 h-10 rounded-full bg-[#c32aa3]"
                >
                  <FaInstagram size={20} />

                </Link>
                <Link
                  to="https://www.linkedin.com/company/100acress/"
                  className="flex justify-center items-center text-white bg-blue-700 w-10 h-10 rounded-full"
                >
                  <FaLinkedin size={20} />
                </Link>
                <Link
                  to="https://www.youtube.com/@100acress"
                  className="flex items-center justify-center text-red-600 rounded-full bg-white w-10 h-10"
                >
                  <FaYoutube size={20} />
                </Link>
              </li>
            </nav>
          </div>

          <div
            aria-label="Footer Navigation"
            className="flex flex-wrap h-full rounded-xl pt-2 lg:col-span-12 lg:border-t-0 xl:flex-nowrap xl:space-r-16 mb-2"
          >
            <ul className="mt-2 pl-0 text-md h-6 flex-grow flex flex-col sm:flex-row md:mt-0 sm:items-center px-2">
              <div className="flex flex-row sm:flex-row sm:justify-center flex-wrap">

                <li className=" sm:mb-0">
                  <Link to="/" className="text-left px-1 text-sm hover:underline" target='_top' style={{ color: 'white' }}>
                    Home
                  </Link>
                </li>
                <li className=" sm:mb-0">
                  <Link to="/about" className="text-left px-1 text-sm hover:underline" target='_top' style={{ color: 'white' }}>
                    About
                  </Link>
                </li>


                <li className=" sm:mb-0">
                  <Link to="/contactus" className="text-left px-1 text-sm hover:underline" target='_top' style={{ color: 'white' }}>
                    Contact
                  </Link>
                </li>
                <li className=" sm:mb-0">
                  <Link to="/privacy" className="text-left px-1 text-sm hover:underline" target='_top' style={{ color: 'white' }}>
                    Privacy & Policy
                  </Link>
                </li>
                <li className=" sm:mb-0">
                  <Link to="/careerwithus" className="text-left px-1 text-md hover:underline" target='_top' style={{ color: 'white' }}>
                    Career
                  </Link>
                </li>
                <li className=" sm:mb-0">
                  <Link to="/blog" className="text-left px-1 text-sm hover:underline" target='_top' style={{ color: 'white' }}>
                    Blog
                  </Link>
                </li>
                <li className=" sm:mb-0">
                  <Link to="/termsandconditions" className="text-left px-1 text-md hover:underline" target='_top' style={{ color: 'white' }}>
                    Terms & Conditions
                  </Link>
                </li>

                <li className=" sm:mb-0">
                  <Link to="new&artical" className="text-left px-1 text-md hover:underline" target='_top' style={{ color: 'white' }}>
                     News & Article
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          <div className="border-t border-white px-2 mt-2 py-2  lg:col-span-12">
            <p className="text-left text-sm text-white">
              Copyright © 2024,{" "}
              <Link className="text-reset" to="https://100acress.com/">

                100acress.com.{" "}
              </Link>
              All Rights Reserved
            </p>
          </div>
        </div>
      </footer>

    </>
  )
}

export default Footer;

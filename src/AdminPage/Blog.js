// import React, { useState } from "react";
// import Sidebar from "./Sidebar";
// const customStyle = {
//   position: "absolute",
//   top: "100px",
//   marginLeft: "250px",
//   right: "auto",
//   width: "80%"
// };

// const Blog = () => {
//   const [openForm, setOpenForm] = useState(false);
//   const formOpen = () => {
//     setOpenForm(true);
//   };

//   const closeForm = () => {
//     setOpenForm(false);
//   };

//   return (
//     <>
//       <Sidebar />
//       <div className="" style={customStyle}>
//         <div className="flex justify-end mb-2 mt-2 mr-20">
//           <button
//             onClick={formOpen}
//             className="bg-blue-700 p-2 sm:rounded-lg text-white"
//           >
//             Add Blog 
//           </button>
//         </div>
//         <div className="flex justify-center items-center mt-0">
//           <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-5/6 mt-0">
//             {openForm && (
//               <div className="modal-overlay shadow-2xl ">
//                 <div className="container w-full h-70  rounded-xl modal-content pt-4">
//                   <button className="text-white text-2xl absolute top-2 right-4 " onClick={closeForm}>
//                     ✖
//                   </button>
//                   <div>
//                     <textarea
//                       name="Title"
//                       placeholder="Blog Title"
//                       rows="1"
//                       className="w-full p-2 outline-none border-b-2 placeholder-black mt-4 rounded-md bg-white text-black  border-white  mobile-input"
//                     ></textarea>
//                     <textarea
//                       name="Description"
//                       placeholder="Blog Description"
//                       rows="1"
                    
//                       className="w-full p-2 outline-none border-b-2 placeholder-black mt-4 rounded-md border-white bg-white text-black mobile-input"
//                     ></textarea>


//                     <select
//                       className="text-black border p-2 outline-none w-full  ring-black focus:ring-1 mt-4 rounded-md"
                     
//                     >
//                       <option value="" className="text-gray-600">Blog Category</option>
//                       <option value="Commercial Property">Commercial Property</option>
//                       <option value="Residential Flats">Residential Flats</option>
//                       <option value="SCO Plots">SCO Plots</option>
//                       <option value="Deendayal Plots">Deen Dayal Plots</option>
//                       <option value="Residential Plots">Residential Plots</option>
//                       <option value="Independent Floors">Independent Floors</option>
//                       <option value="Builder Floors">Builder Floors</option>
//                       <option value="Affordable Homes">Affordable Homes</option>
//                     </select>

//                     <select
//                       className="text-black border p-2 outline-none w-full  ring-black focus:ring-1 mt-4 rounded-md"
//                     >
//                       <option value="" className="text-gray-600">Admin</option>
//                     </select>
//                      <div className="flex mt-3 ring-black">
//                       <div className="relative h-10  px-2 min-w-[160px] bg-white w-full ring-black rounded-md">
//                         <p className="mt-2 font-medium  text-black">
//                           Front Image<input
//                           type="file"
//                           name="frontImage"
//                           accept="image/*"    
//                           className="mx-2"         
//                         />
//                         </p>
                        
//                       </div>
//                     </div> 
//                     <div className="text-center  my-4 ">
//                       <button className="bg-white text-red-600 text-lg text-bold rounded-md px-4 py-2 mx-2 my-2" >Submit</button></div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Blog;



import React, { useState } from "react";
import Sidebar from "./Sidebar";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import axios from 'axios';

const customStyle = {
  position: "absolute",
  top: "100px",
  marginLeft: "250px",
  right: "auto",
  width: "80%",
};

const Blog = () => {
  const [openForm, setOpenForm] = useState(false);
  const [editorContent, setEditorContent] = useState("");

  const [fileData, setFileData] = useState({
    BlogImage: null,
  })

  const [editForm, setEditForm] = useState({
    blog_Title: "",
    blog_Description: "",
    author: "Admin",
    blog_Category: "",
  })

  const formOpen = () => {
    setOpenForm(true);
  };

  const closeForm = () => {
    setOpenForm(false);
  };

  const handleEditorChange = (content) => {
    setEditorContent(content);
    setEditForm({ ...editForm, blog_Description: content });
  };

  const handleEditTitle = (e) => {
    const { name, value } = e.target;
    setEditForm({ ...editForm, [name]: value })
  }

  const handleEditCategory = (e) => {
    setEditForm({
      ...editForm,
      blog_Category: e.target.value
    })
  }



  // const handleSubmitForm = async (e) => {
  //   e.preventDefault();
  //   const formDataAPI = new FormData();
  //   const apiEndpoint = "https://api.100acress.com/blog/insert";

  //   for (const key in editForm) {
  //     formDataAPI.append(key, editForm[key]);
  //   }

  //   formDataAPI.append("BlogImage", fileData.BlogImage)
  //   try {
  //     const response = await axios.post(apiEndpoint, formDataAPI);
  //     console.log(response,"response")
  //     alert("Data submitted successfully");
  //     resetData();
  //   } catch (error) {
  //     if (error.response) {
  //       console.error("Server error:", error.response.data);
  //     }
  //   }
  // }

  const handleSubmitForm = async (e) => {
    e.preventDefault();
  
    // Ensure file data exists and is valid
    if (!fileData || !fileData.BlogImage) {
      console.error("File data is missing or invalid.");
      return;
    }
  
    // Create a new FormData object
    const formDataAPI = new FormData();
  
    // Set the API endpoint
    const apiEndpoint = "https://api.100acress.com/blog/insert";
  
    // Append form data to the FormData object
    for (const key in editForm) {
      formDataAPI.append(key, editForm[key]);
    }
  
    // Append the file data to the FormData object
    formDataAPI.append("BlogImage", fileData.BlogImage);
    
    try {
      // Send a POST request to the API endpoint with FormData
      const response = await axios.post(apiEndpoint, formDataAPI);
      // Check if the request was successful
      if (response.status === 200) {
        console.log(response.data, "response");
        alert("Data submitted successfully");
        resetData();
      } else {
        console.error("Failed to submit data:", response.data);
      }
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
      if (error.response) {
        console.error("Server error:", error.response.data);
      }
    }
  };
  

  const handleFileChange = (e, key) => {
    const newFileData = { ...fileData };
    newFileData[key] = e.target.files[0];
    setFileData(newFileData);
  };

  const resetData = () => {
    setEditForm({
      blog_Title: "",
      blog_Description: "",
      author: "Admin",
      blog_Category: "",
      BlogImage: ""
    })
  }

 

  return (
    <>
      <Sidebar />
      <div className="" style={customStyle}>
        <div className="flex justify-end mb-2 mt-2 mr-20">
          <button
            onClick={formOpen}
            className="bg-blue-700 p-2 sm:rounded-lg text-white"
          >
            Add Blog
          </button>
        </div>

        <div className="flex justify-center items-center mt-0">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg w-5/6 mt-0">
            {openForm && (
              <div className="modal-overlay bg-white shadow-2xl">
                <div className="container w-full h-70 rounded-xl  pt-4">
                  <button
                    className="text-black text-2xl absolute top-2 right-4 "
                    onClick={closeForm}
                  > ✖
                  </button>
                  <div>
                    <input
                      name="blog_Title"
                      placeholder="Blog Title"
                      className="w-full mb-4 p-2 outline-none border-2 placeholder-black mt-4 rounded-md  text-black  border-gray-200  mobile-input"
                      value={editForm.blog_Title}
                      onChange={handleEditTitle}
                    />

                     <ReactQuill
                      value={editorContent}
                      onChange={handleEditorChange}
                      modules={{
                        toolbar: [
                          ['bold', 'italic', 'underline', 'strike'],
                          ['blockquote', 'code-block'],
                          [{ 'header': 1 }, { 'header': 2 }],
                          [{ 'list': 'ordered' }, { 'list': 'bullet' }],
                          [{ 'script': 'sub' }, { 'script': 'super' }],
                          [{ 'indent': '-1' }, { 'indent': '+1' }],
                          [{ 'direction': 'rtl' }],
                          [{ 'size': ['small', false, 'large', 'huge'] }],
                          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
                          [{ 'color': [] }, { 'background': [] }],
                          [{ 'font': [] }],
                          [{ 'align': [] }],
                          ['clean'],
                        ],
                      }}
                    /> 

        
                    <select
                      className="text-black border-2 p-2 outline-none w-full border-gray-200 mt-4 rounded-md"
                      value={editForm.blog_Category}
                      onChange={handleEditCategory}
                    >
                      <option value="" className="text-gray-600">Blog Category</option>
                      <option value="Commercial Property">Commercial Property</option>
                      <option value="Residential Flats">Residential Flats</option>
                      <option value="SCO Plots">SCO Plots</option>
                      <option value="Deendayal Plots">Deen Dayal Plots</option>
                      <option value="Residential Plots">Residential Plots</option>
                      <option value="Independent Floors">Independent Floors</option>
                      <option value="Builder Floors">Builder Floors</option>
                      <option value="Affordable Homes">Affordable Homes</option>
                    </select>

                    <div className="flex mt-3 border-2 border-gray-200  rounded-md">
                      <div className="relative h-10  px-2 min-w-[160px]  w-full  rounded-md">
                        <p className="mt-2 font-medium border-gray-200 text-black">
                          Front Image
                          <input
                            type="file"
                            name="BlogImage"
                            accept="image/*"
                            onChange={(e) => handleFileChange(e, "BlogImage")}
                            className="mx-2 border-gray-200"
                          />
                        </p>
                      </div>
                    </div>
                    <div className="text-center  my-4 ">
                      <button className="bg-white text-black text-lg border-2 rounded-md px-4 py-2 mx-2 my-2"
                        onClick={(e) => handleSubmitForm(e)}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;

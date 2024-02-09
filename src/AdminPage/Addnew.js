import React, { useState, useEffect } from "react";
import axios from "axios";
const AddNew = () => {
  const [editFromData, setEditFromData] = useState({
    projectName: "",
    state: "",
    projectAddress: "",
    project_discripation: "",
    AboutDeveloper: "",
    builderName: "",
    projectRedefine_Connectivity: [],
    projectRedefine_Education: [],
    projectRedefine_Business: [],
    projectRedefine_Entertainment: [],
    Amenities: [],
    meta_title: "",
    meta_description: "",
    projectBgContent: "",
    projectReraNo: "",
    type: "",
    city: "",
    projectOverview: "",
    project_url:""
  });

  const resetData = () => {
    setEditFromData({
      projectName: "",
      state: "",
      projectAddress: "",
      project_discripation: "",
      AboutDeveloper: "",
      builderName: "",
      projectRedefine_Connectivity: [],
      projectRedefine_Education: [],
      projectRedefine_Business: [],
      projectRedefine_Entertainment: [],
      Amenities: [],
      meta_title: "",
      meta_description: "",
      projectBgContent: "",
      projectReraNo: "",
      type: "",
      city: "",
      projectOverview: "",
      project_url:""
    });
  };

  const resetImageData = () => {
    setFileData({
      frontImage: "",
      logo: "",
      project_locationImage: "",
      project_floorplan_Image: "",
    });
  };

  const handleProjectOverviewChange = (event) => {
    setEditFromData({
      ...editFromData,
      projectOverview: event.target.value,
    });
  };

  const [fileData, setFileData] = useState({
    frontImage: null,
    logo: null,
    project_locationImage: null,
    project_floorplan_Image: [null],
  });

  const handleChangeProjectData = (e) => {
    setEditFromData({
      ...editFromData,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputChange = (event, category) => {
    let newArray = [];

    if (event.target.name === category) {
      newArray = event.target.value.split(" ");
    }
    console.log(newArray, "shkhs");
    setEditFromData((prevState) => ({
      ...prevState,
      [category]: newArray.length > 0 ? newArray : event.target.value,
    }));
  };

  // Amenities
  const handleChangeValueAmenities = (event) => {
    handleInputChange(event, "Amenities");
  };

  // Connectivity
  const handleChangeValueprojectRedefine_Connectivity = (event) => {
    handleInputChange(event, "projectRedefine_Connectivity");
  };

  // Education
  const handleChangeValueprojectRedefine_Education = (event) => {
    handleInputChange(event, "projectRedefine_Education");
  };

  // Business
  const handleChangeValueprojectRedefine_Business = (event) => {
    handleInputChange(event, "projectRedefine_Business");
  };

  // Entertainment
  const handleChangeValueprojectRedefine_Entertainment = (event) => {
    handleInputChange(event, "projectRedefine_Entertainment");
  };

  const handleOtherImageChange = (e) => {
    var files = e.target.files;
    if (files) {
      const updatedOtherImage = [];
      for (let i = 0; i < files.length; i++) {
        updatedOtherImage.push(files[i]);
      }
      setFileData({
        ...fileData,
        project_floorplan_Image: updatedOtherImage,
      });
    } else {
      console.error("No files selected");
    }
  };

  const otherImageLength = fileData.project_floorplan_Image.length;

  const handleSubmitProject = async (e) => {
    e.preventDefault();
    const apiEndpoint = "https://acre.onrender.com/projectInsert";

    const formDataAPI = new FormData();

    for (const key in editFromData) {
      formDataAPI.append(key, editFromData[key]);
    }
    for (let i = 0; i < otherImageLength; i++) {
      formDataAPI.append(
        "project_floorplan_Image",
        fileData.project_floorplan_Image[i]
      );
    }

    formDataAPI.append("logo", fileData.logo);
    formDataAPI.append("project_locationImage", fileData.project_locationImage);
    formDataAPI.append("frontImage", fileData.frontImage);

    try {
      const response = await axios.post(apiEndpoint, formDataAPI);
      alert("Data Posted")
      resetData();
      resetImageData();

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleFileChange = (e, key) => {
    const newFileData = { ...fileData };
    newFileData[key] = e.target.files[0];
    setFileData(newFileData);
  };

  return (
    <div className="">
      <div className=" sm:w-[38rem] lg:w-full mx-auto lg:h-auto my-10 overflow-hidden rounded-2xl mt-0 mb-0 bg-white shadow-lg sm:max-w-lg">
        <div
          className="bg-red-500 pb-1
         pt-2 text-center text-white"
        >
          <p className="font-serif text-2xl font-semibold tracking-wider">
            Add New Project
          </p>
        </div>

        <div className="space-y-4 px-8  py-3 pt-3">
          <select
            className="text-gray-600 border px-2 py-1 outline-none w-full rounded-md ring-black focus:ring-1"
            value={editFromData.projectOverview}
            onChange={handleProjectOverviewChange}
          >
            <option value="">Select Project Overview</option>
            <option value="trending">Trending</option>
            <option value="featured">Featured</option>
            <option value="none">None</option>
          </select>

          <label className="block" for="name">
            <input
              className="w-full  rounded-md border bg-white px-2 py-1 outline-none ring-black focus:ring-1"
              type="text"
              placeholder="Project Name"
              name="projectName"
              value={editFromData.projectName}
              onChange={handleChangeProjectData}
            />
          </label>

          <label className="block" for="name">
            <input
              className="w-full  rounded-md border bg-white px-2 py-1 outline-none ring-black focus:ring-1"
              type="text"
              placeholder="State"
              name="state"
              value={editFromData.state}
              onChange={handleChangeProjectData}
            />
          </label>
          <label className="block" for="name">
            <input
              className="w-full  rounded-md border bg-white px-2 py-1 outline-none ring-black focus:ring-1"
              type="text"
              placeholder="Project Address"
              name="projectAddress"
              value={editFromData.projectAddress}
              onChange={handleChangeProjectData}
            />
          </label>

          <label className="block" for="name">
            <input
              className="w-full  rounded-md border bg-white px-2 py-1 outline-none ring-black focus:ring-1"
              type="text"
              placeholder="Project Description"
              name="project_discripation"
              value={editFromData.project_discripation}
              onChange={handleChangeProjectData}
            />
          </label>

          <label className="block" for="name">
            <input
              className="w-full  rounded-md border bg-white px-2 py-1 outline-none ring-black focus:ring-1"
              type="text"
              placeholder="About Developer"
              name="AboutDeveloper"
              value={editFromData.AboutDeveloper}
              onChange={handleChangeProjectData}
            />
          </label>

          <label className="block" for="name">
            <input
              className="w-full  rounded-md border bg-white px-2 py-1 outline-none ring-black focus:ring-1"
              type="text"
              placeholder="Builder Name"
              name="builderName"
              value={editFromData.builderName}
              onChange={handleChangeProjectData}
            />
          </label>

          <label className="block" for="name">
            <input
              className="w-full  rounded-md border bg-white px-2 py-1 outline-none ring-black focus:ring-1"
              type="text"
              placeholder="Connectivity"
              name="projectRedefine_Connectivity"
              value={editFromData.projectRedefine_Connectivity.join(" ")}
              onChange={handleChangeValueprojectRedefine_Connectivity}
            />
          </label>

          <label className="block" for="name">
            <input
              className="w-full  rounded-md border bg-white px-2 py-1 outline-none ring-black focus:ring-1"
              type="text"
              placeholder="Education"
              name="projectRedefine_Education"
              value={editFromData.projectRedefine_Education.join(" ")}
              onChange={handleChangeValueprojectRedefine_Education}
            />
          </label>

          <label className="block" for="name">
            <input
              className="w-full  rounded-md border bg-white px-2 py-1 outline-none ring-black focus:ring-1"
              type="text"
              placeholder="Business"
              name="projectRedefine_Business"
              value={editFromData.projectRedefine_Business.join(" ")}
              onChange={handleChangeValueprojectRedefine_Business}
            />
          </label>

          <label className="block" for="name">
            <input
              className="w-full  rounded-md border bg-white px-2 py-1 outline-none ring-black focus:ring-1"
              type="text"
              placeholder="Entertainment"
              name="projectRedefine_Entertainment"
              value={editFromData.projectRedefine_Entertainment.join(" ")}
              onChange={handleChangeValueprojectRedefine_Entertainment}
            />
          </label>

          <label className="block" for="name">
            <input
              className="w-full  rounded-md border bg-white px-2 py-1 outline-none ring-black focus:ring-1"
              type="text"
              placeholder="Amenities"
              name="Amenities"
              value={editFromData.Amenities.join(" ")}
              onChange={handleChangeValueAmenities}
            />
          </label>

          <label className="block" for="name">
            <input
              className="w-full  rounded-md border bg-white px-2 py-1 outline-none ring-black focus:ring-1"
              type="text"
              placeholder="Banner Content Heading"
              name="projectBgContent"
              value={editFromData.projectBgContent}
              onChange={handleChangeProjectData}
            />
          </label>

          <label className="block" for="name">
            <input
              className="w-full  rounded-md border bg-white px-2 py-1 outline-none ring-black focus:ring-1"
              type="text"
              placeholder="Project ReraNo"
              name="projectReraNo"
              value={editFromData.projectReraNo}
              onChange={handleChangeProjectData}
            />
          </label>

          <label className="block" for="name">
            <input
              className="w-full  rounded-md border bg-white px-2 py-1 outline-none ring-black focus:ring-1"
              type="text"
              placeholder="type"
              name="type"
              value={editFromData.type}
              onChange={handleChangeProjectData}
            />
          </label>

          <label className="block" for="name">
            <input
              className="w-full  rounded-md border bg-white px-2 py-1 outline-none ring-black focus:ring-1"
              type="text"
              placeholder="City"
              name="city"
              value={editFromData.city}
              onChange={handleChangeProjectData}
            />
          </label>

          <label className="block" for="name">
            <input
              className="w-full  rounded-md border bg-white px-2 py-1 outline-none ring-black focus:ring-1"
              type="text"
              placeholder="Project URL"
              name="project_url"
              value={editFromData.project_url}
              onChange={handleChangeProjectData}
            />
          </label>

          <p className="mt-2 font-medium mb-1 grid grid-cols-4 text-gray-500">
            Project Logo
          </p>
          <div className="flex mt-3 ring-black">
            <div class="relative h-10 w-40 min-w-[160px] ring-black">
              <input
                type="file"
                name="logo"
                accept="image/*"
                // value={editFromData.logo}
                onChange={(e) => handleFileChange(e, "logo")}
              />
            </div>
          </div>

          <p className="mt-2 font-medium mb-1 grid grid-cols-4 text-gray-500">
            Front Image
          </p>

          <div className="flex mt-3 ring-black">
            <div class="relative h-10 w-40 min-w-[160px] ring-black">
              <input
                type="file"
                name="frontImage"
                accept="image/*"
                // value={editFromData.frontImage}
                onChange={(e) => handleFileChange(e, "frontImage")}
              />
            </div>
          </div>

          <p className="mt-2 font-medium mb-1 grid grid-cols-1 text-gray-500">
            Project Location Image
          </p>
          <div className="flex mt-3 ring-black">
            <div class="relative h-10 w-40 min-w-[160px] ring-black">
              <input
                type="file"
                name="project_locationImage"
                accept="image/*"
                // value={editFromData.project_locationImage}
                onChange={(e) => handleFileChange(e, "project_locationImage")}
              />
            </div>
          </div>

          <p className="mt-2 font-medium mb-1 grid grid-cols-1 text-gray-500">
            Project Floor plan Image
          </p>
          <div className="flex mt-3 ring-black">
            <div class="relative h-10 w-40 min-w-[160px] ring-black">
              <input
                type="file"
                name="project_floorplan_Image"
                accept="image/*"
                multiple
                onChange={handleOtherImageChange}
              />
            </div>
          </div>

          <input
            className="w-full mt-4 rounded-md border bg-white px-2 py-2 outline-none ring-black focus:ring-1"
            type="email"
            placeholder="Meta Title*"
            name="meta_title"
            value={editFromData.meta_title}
            onChange={handleChangeProjectData}
          />

          <input
            className="w-full mt-4 rounded-md border bg-white px-2 py-2 outline-none ring-black focus:ring-1"
            type="email"
            placeholder="Meta Description*"
            name="meta_description"
            value={editFromData.meta_description}
            onChange={(e) => handleChangeProjectData(e)}
          />

          <button
            className="mt-4 rounded-full bg-red-500 px-5
             py-2 font-semibold text-white"
            onClick={(e) => handleSubmitProject(e)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddNew;

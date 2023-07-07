import React, { useEffect, useState, useContext } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import useUnsplashById from "../Components/useUnsplashById";
import "../App.css";
import numeral from "numeral";
import { toast } from "react-toastify";
import PrimaryButton from "../Components/PrimaryButton";
import AuthContext from "../Context/AuthContext/AuthContext";

const AuthImages = () => {
  const { setIsLoggedIn, fetchDataFromDB, setResponseData, responseData } = useContext(AuthContext);

  // Custom hooks
  const { getImagesById } = useUnsplashById();

  // Router hooks
  const location = useLocation();

  const finalData = location.state;
  const { source } = useParams();

  // State variables
  const [selectedImages, setSelectedImages] = useState([]);
  const [imageId, setImageId] = useState([]);
  const [fetchedImageId, setFetchedImageId] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [selectionCount, setSelectionCount] = useState(0);
  const [selectedImageId, setSelectedImageId] = useState("");

  // Navigate function from router
  const navigate = useNavigate();

  // Function to shuffle an array
  const shuffle = (array) => {
    let oldElement;
    for (let i = array.length - 1; i > 0; i--) {
      let rand = Math.floor(Math.random() * (i + 1));
      oldElement = array[i];
      array[i] = array[rand];
      array[rand] = oldElement;
    }
    return array;
  };

  // Function to fetch images from Unsplash API
  const getImages = async (page, keyword, per_page) => {

    const accessKey = "PWfASWCbDwGikA6mqUs5JUZASXlrQVYpFiEAEUtJfJ0";

    try {
      // Send a GET request to the Unsplash API to fetch images
      const response = await fetch(
        `https://api.unsplash.com/search/photos?page=${page}&per_page=${per_page}&query=${keyword}&client_id=${accessKey}`
      );

      // Convert the response to JSON format
      const finalOutput = await response.json();
      let newShuffledArray = [];

      // Check the source to determine the additional image list
      if (source === "userlogin") {
        // If the source is "userlogin", fetch images by ID from customHook function
        const imageList = await getImagesById(fetchedImageId);
        // Concatenate the fetched image list with the results from the API
        newShuffledArray = shuffle(finalOutput.results.concat(imageList));
      } else {
        // If the source is not "userlogin", use the results from the API directly
        newShuffledArray = finalOutput && finalOutput.results;
      }
      // Set the selected images state with the shuffled array
      setSelectedImages(newShuffledArray);
    } catch (error) {
      // Catch any errors that occur during the API request or JSON parsing
      console.error(error.message);
    }
  };

  // Update fetchedImageId and keyword when responseData changes
  useEffect(() => {
    const fetchImages = async () => {
      if (source === 'userlogin' && responseData && responseData.isUserRegistered) {
        const { imageSet, keyword } = responseData.isUserRegistered;
        setFetchedImageId(imageSet);
        setKeyword(keyword);
      }
    };
    fetchImages();
  }, [responseData]);

  // Fetch images when fetchedImageId or keyword changes
  useEffect(() => {
    if (fetchedImageId.length > 0 && keyword !== "") {
      const randomNumber = Math.floor(Math.random() * 100) + 1;
      const per_page = source === "usersignup" ? 15 : 11;
      getImages(randomNumber, keyword, per_page);
    }
  }, [fetchedImageId, keyword]);

  // Handle change in keyword input
  const handleKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  // Handle the "Next" button click
  const handleNext = (e) => {
    e.preventDefault();

    // Check if an image is selected
    if (e.target.tagName !== "FORM" && selectedImageId !== "") {
      // Checking is image already selected, if yes then choose another image
      if (imageId.includes(selectedImageId)) {
        toast("Already Selected, Please Choose Another One", {
          position: "top-center",
        });
        return;
      }
      const updatedImageId = [...imageId, selectedImageId]; // Add selectedImageId to imageId array
      setSelectedImageId("");
      setImageId(updatedImageId); // Update imageId state with the new array
      setSelectionCount((prevCount) => prevCount + 1); // Increment selectionCount

      // Check if the selectionCount is 3
      if (selectionCount === 3) {
        submitData(updatedImageId); // Call submitData with updatedImageId
        return;
      }
    }
    // Handle case when no image is selected
    else if (selectedImageId === "" && e.target.tagName !== "FORM") {
      toast("Please Select An Image", { position: "top-center" });
      return;
    }

    const randomNumber = Math.floor(Math.random() * 100) + 1;
    const per_page = source === "usersignup" ? 15 : 11;
    getImages(randomNumber, keyword, per_page);
  };

  // Function to submit the form data
  const submitData = async (updatedImageId) => {
    if (source === "usersignup") {
      const fetchDataInDB = {
        ...finalData,
        imageId: updatedImageId,
        keyword,
      };

      const result = await fetchDataFromDB(source, fetchDataInDB);
      setResponseData(result);
      if (result) {
        toast.success("Successfull Signup");
        navigate("/login");
      } else {
        toast.error("Signup Fail");
        navigate("/singup");
      }
    } else {
      if (updatedImageId.every((id) => fetchedImageId.includes(id))) {
        setIsLoggedIn(true);
        toast.success("Sucessfully Login");
        navigate("/");
      } else {
        toast.error("Login Fail");
        navigate("/login");
      }
    }
  };

  // Function to get the imageId of the clicked image
  const getImageId = (id) => {
    setSelectedImageId(id);
  };

  return (
    <div className="flex flex-col-reverse w-full gap-6 px-12 py-16 lg:flex-row">
      {/* left-section */}
      <div className="w-[90%] mx-auto">
        <div
          className={`max-w-4xl w-11/12 ${
            selectedImages.length === 0 ? `h-[550px]` : ``
          } p-2 shadow-2xl bg-[#000a1a] mx-auto`}
        >
          <div className="flex flex-wrap content-center w-full mx-auto overflow-hidden">
            {selectedImages.map((image) => (
              <div
                key={image.id}
                className={`flex p-1 w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 md:p-2`}
              >
                <img
                  className={`block object-cover object-center mx-auto transition-all duration-200 rounded-lg cursor-pointer aspect-square hover:skew-y-3 hover:scale-105 ${
                    selectedImageId === image.id ? `changeEffect` : ""
                  }`}
                  onClick={() => getImageId(image.id)}
                  src={image.urls.small}
                  loading="lazy"
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>

        {/* addition  */}
        <div className="grid mt-8 lg:hidden place-items-center">
          <PrimaryButton
            handleNext={handleNext}
            selectionCount={selectionCount}
            source={source}
          ></PrimaryButton>
        </div>
      </div>

      {/* right-section */}
      <div className="flex flex-col space-y-8 text-white">
        <h1 className="text-5xl font-bold tracking-wide text-center lg:text-left">
          Set Graphical Password
        </h1>
        <div className="">
          {source === "userlogin" ? (
            <p className="text-2xl font-normal text-center lg:text-left">
              Select Images For Your Graphical Password
            </p>
          ) : (
            <p className="text-2xl font-normal text-center lg:text-left">
              Enter Keywords To Get Images
            </p>
          )}

          <p className="text-2xl font-normal text-center lg:text-left">
            Select The {numeral(selectionCount + 1).format("0o")} Image
          </p>
        </div>
        {selectionCount === 0 && source === "usersignup" && (
          <form className="flex items-center" onSubmit={handleNext}>
            <label for="simple-search" className="sr-only">
              Search
            </label>
            <div className="relative w-full">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  class="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                value={keyword}
                onChange={handleKeywordChange}
                id="simple-search"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
            </div>
            <button
              type="submit"
              className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                ></path>
              </svg>
              <span className="sr-only">Search</span>
            </button>
          </form>
        )}
        <div className="hidden lg:block">
          <PrimaryButton
            handleNext={handleNext}
            selectionCount={selectionCount}
            source={source}
          ></PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default AuthImages;

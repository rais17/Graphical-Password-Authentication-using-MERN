import { useState } from "react";

const useUnsplashById = () => {

  const getImagesById = async (imageIds) => {
    const accessKey = "PWfASWCbDwGikA6mqUs5JUZASXlrQVYpFiEAEUtJfJ0";

    try {
      const fetchedImages = [];
      for (const imageId of imageIds) {
        const response = await fetch(
          `https://api.unsplash.com/photos/${imageId}?client_id=${accessKey}`
        );
        const result = await response.json();
        fetchedImages.push(result);
      }
      return fetchedImages
    } catch (error) {
      return [];
    }
  };

  return { getImagesById };
};

export default useUnsplashById;

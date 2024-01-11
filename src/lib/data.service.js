import dbConnect from "./db/dbConnect.mjs";
import authorModel from "./db/models/author.model.mjs";
import galleryModel from "./db/models/gallery.model.mjs";
import imageModel from "./db/models/image.model.mjs";

/*

    Get all galleries

*/
export const fetchGalleries = async () => {
  console.log("fetchGalleryById");

  try {
    await dbConnect();
    return await galleryModel.find({});
  } catch (error) {
    console.log(error);
  }
};

/*

    Get gallery by name

*/
export const fetchGalleryById = async (name) => {
  console.log("fetchGalleryById", name);

  try {
    await dbConnect();
    let result = await galleryModel.find({ name: name });

    return JSON.parse(JSON.stringify(result[0]));
  } catch (error) {
    console.log(error);
  }
};

/*

    Get Gallery for Author by gallery name

*/
export const fetchAuthorsByGalleryName = async (name) => {
  console.log("fetchAuthorsByGalleryName", name);
  try {
    await dbConnect();
    let result = await authorModel.find({ gallery: name });

    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.log(error);
  }
};

/*

    Get Author by name

*/
export const fetchAuthorsByName = async (name) => {
  console.log("fetchAuthorsByGalleryName", name);
  try {
    await dbConnect();
    let result = await authorModel.find({
      author: { $regex: name, $options: "i" },
    });

    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.log(error);
  }
};

/*

    Get Images for author by author name

*/
export const fetchImagesForAuthor = async (author) => {
  console.log("fetchImagesForAuthor", author);

  try {
    await dbConnect();
    let result = await imageModel.find({
      author: { $regex: author, $options: "i" },
    });

    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.log(error);
  }
};

/*

    Get all images for gallery

*/
export const fetchImagesForGallery = async (name) => {
  console.log("fetchImagesForGallery", name);

  try {
    await dbConnect();
    let result = await imageModel.find({
      gallery: { $regex: name, $options: "i" },
    });

    return JSON.parse(JSON.stringify(result));
  } catch (error) {
    console.log(error);
  }
};

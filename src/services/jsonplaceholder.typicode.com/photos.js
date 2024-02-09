/**
 * Utility functions for fetching photo data from the JSONPlaceholder API (https://jsonplaceholder.typicode.com).
 */

/**
 * Fetches a list of photos from JSONPlaceholder based on pagination.
 *
 * @param {number} page - The current page number for pagination.
 * @returns {Promise<Array>} A promise that resolves to an array of photo objects.
 */
const getPhotos = async (page) => {
  try {
    const firstImage = (page - 1) * 100 + 1;

    console.log(
      `Load photos: ${firstImage} - ${firstImage + 99} ( from jsonplaceholder.typicode.com )`,
    );

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=100`,
    );
    return await response.json();
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
};

/**
 * Fetches detailed information for a single photo by its ID from JSONPlaceholder.
 *
 * @param {number} id - The unique identifier for the photo.
 * @returns {Promise<Object>} A promise that resolves to an object containing detailed information about the photo.
 */
const getPhoto = async (id) => {
  try {
    console.log(`Load photo: ${id} ( from jsonplaceholder.typicode.com )`);

    const response = await fetch(
      `https://jsonplaceholder.typicode.com/photos/${id}`,
    );
    const photo = await response.json();
    return { ...photo, ...{ title: `${id} - ${photo.title}` } };
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
};

export { getPhotos, getPhoto };

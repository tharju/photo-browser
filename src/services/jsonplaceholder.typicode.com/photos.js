/**
 * Utility functions for fetching photo data from the JSONPlaceholder API (https://jsonplaceholder.typicode.com).
 */

/**
 * Fetches a list of photos from JSONPlaceholder based on pagination.
 *
 * @param {number} page - The current page number for pagination.
 * @param {number} limit - The number of photos to fetch per page.
 * @returns {Promise<Array>} A promise that resolves to an array of photo objects.
 */
const getPhotos = async (page, limit) => {
  const firstImage = (page - 1) * limit + 1;
  console.log(
    `Load photos: ${firstImage} - ${firstImage + limit - 1} ( from jsonplaceholder.typicode.com )`,
  );

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=${limit}`,
  );
  return await response.json();
};

/**
 * Fetches detailed information for a single photo by its ID from JSONPlaceholder.
 *
 * @param {number} id - The unique identifier for the photo.
 * @returns {Promise<Object>} A promise that resolves to an object containing detailed information about the photo.
 */
const getPhoto = async (id) => {
  console.log(`Load photo: ${id} ( from jsonplaceholder.typicode.com )`);

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/photos/${id}`,
  );
  const photo = await response.json();
  return { ...photo, ...{ title: `${id} - ${photo.title}` } };
};

export { getPhotos, getPhoto };

/**
 * Utility functions for fetching photo data from the Lorem Picsum API.
 */

/**
 * Fetches a list of photos from Lorem Picsum based on pagination.
 *
 * @param {number} page - The current page number for pagination.
 * @returns {Promise<Array>} A promise that resolves to an array of photo objects.
 */
const getPhotos = async (page) => {
  try {
    const firstImage = (page - 1) * 100 + 1;

    console.log(
      `Load photos: ${firstImage} - ${firstImage + 99} ( from picsum.photos )`,
    );

    const response = await fetch(
      `https://picsum.photos/v2/list?page=${page}&limit=100`,
    );
    const photos = await response.json();

    return photos.map((photo) => {
      return {
        ...photo,
        ...{
          thumbnailUrl: "https://picsum.photos/id/" + photo.id + "/200/150",
        },
      };
    });
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
};

/**
 * Fetches detailed information for a single photo by its ID from Lorem Picsum.
 *
 * @param {number} id - The unique identifier for the photo.
 * @returns {Promise<Object>} A promise that resolves to an object containing detailed information about the photo.
 */
const getPhoto = async (id) => {
  try {
    const response = await fetch(`https://picsum.photos/id/${id}/info`);
    const photo = await response.json();

    return {
      ...photo,
      ...{
        title: `${id} - ${photo.author}`,
        url: `https://picsum.photos/id/${id}/800/600`,
      },
    };
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
};

export { getPhotos, getPhoto };

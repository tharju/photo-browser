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
};

/**
 * Fetches detailed information for a single photo by its ID from Lorem Picsum.
 *
 * @param {number} id - The unique identifier for the photo.
 * @param {number} [width=1600] - The desired width of the photo. Default is 1600 pixels.
 * @param {number} [height=1200] - The desired height of the photo. Default is 1200 pixels.
 * @returns {Promise<Object>} A promise that resolves to an object containing detailed information about the photo.
 */
const getPhoto = async (id, width = 1600, height = 1200) => {
  const response = await fetch(`https://picsum.photos/id/${id}/info`);
  const photo = await response.json();

  return {
    ...photo,
    ...{
      title: `${id} - ${photo.author}`,
      url: `https://picsum.photos/id/${id}/${width}/${height}`,
    },
  };
};

export { getPhotos, getPhoto };

/**
 * Utility functions for fetching user data from the JSONPlaceholder API (https://jsonplaceholder.typicode.com).
 */

/**
 * Fetches a list of users with a limit of 100 users per request.
 *
 * @returns {Promise<Array>} A promise that resolves to an array of user objects.
 */
const getUsers = async () => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users?_limit=100`,
    );
    return await response.json();
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
};

/**
 * Fetches detailed information for a single user by its ID from JSONPlaceholder.
 *
 * @param {number} id - The unique identifier for the user.
 * @returns {Promise<Object>} A promise that resolves to an object containing detailed information about the user.
 */
const getUser = async (id) => {
  try {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users/${id}`,
    );
    return await response.json();
  } catch (error) {
    console.log("ERROR: ", error);
    throw error;
  }
};

export { getUsers, getUser };

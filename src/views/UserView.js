import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Service for fetching user information.
import { getUser } from "../services/jsonplaceholder.typicode.com/users";

/**
 * UserView Component
 * Displays detailed information about a user.
 */
const UserView = () => {
  let { id } = useParams();

  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  // Fetch the users's details.
  useEffect(() => {
    getUser(id)
      .then((user) => {
        setUser(user);
        setError(null);
      })
      .catch((error) => {
        console.error("Failed to fetch user:", error);
        setError(error);
      });
  }, [id]);

  // Error when fetching details.
  if (error) {
    return <div>Error loading user data.</div>;
  }

  // Fetching details.
  if (!user) {
    return null;
  }

  const { name, username, email, address, phone, website, company } = user;

  return (
    <div>
      <table className="table">
        <tbody>
          <tr>
            <td>
              <b>Name</b>
            </td>
            <td>{name}</td>
          </tr>
          <tr>
            <td>
              <b>Username</b>
            </td>
            <td>{username}</td>
          </tr>
          <tr>
            <td>
              <b>Email</b>
            </td>
            <td>{email}</td>
          </tr>
          <tr>
            <td>
              <b>Address</b>
            </td>
            <td>{address.street}</td>
          </tr>
          <tr>
            <td></td>
            <td>{address.suite}</td>
          </tr>
          <tr>
            <td></td>
            <td>{address.city}</td>
          </tr>
          <tr>
            <td></td>
            <td>{address.zipcode}</td>
          </tr>
          <tr>
            <td>
              <b>Phone</b>
            </td>
            <td>{phone}</td>
          </tr>
          <tr>
            <td>
              <b>Phone</b>
            </td>
            <td>{website}</td>
          </tr>
          <tr>
            <td>
              <b>Company</b>
            </td>
            <td>{company.name}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserView;

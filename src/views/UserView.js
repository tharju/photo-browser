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

  const userInfo = [
    { label: "Name", value: user.name },
    { label: "Username", value: user.username },
    { label: "Email", value: user.email },
    {
      label: "Address",
      value: `${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`,
    },
    { label: "Phone", value: user.phone },
    { label: "Website", value: user.website },
    { label: "Company", value: user.company.name },
  ];

  return (
    <div>
      <table className="table">
        <tbody>
          {userInfo.map((item, index) => (
            <tr key={index}>
              <td className="text-start user-info-label">{item.label}</td>
              <td className="text-start">{item.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserView;

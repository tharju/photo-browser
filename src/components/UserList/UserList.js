import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

import UserListItem from "./UserListItem";
import Card from "../Card";

import { getUsers } from "../../services/jsonplaceholder.typicode.com/users";

/**
 * UserList Component
 * Renders a list of users fetched from an external API.
 *
 * Props:
 * - selectedUser (Number): The ID of the currently selected user.
 * - onSelect (Function): Callback function invoked when a user in the list is selected. Receives the selected user's ID as an argument.
 */
const UserList = ({ selectedUser, onSelect }) => {
  const [users, setUsers] = useState([]);

  // Fetch users.
  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <Card title="Users">
      <ul className="list-group">
        {users.map((user) => {
          return (
            <UserListItem
              key={user.id}
              user={user}
              isActive={selectedUser === user.id}
              onSelect={onSelect}
            />
          );
        })}
      </ul>
    </Card>
  );
};

UserList.propTypes = {
  selectedUser: PropTypes.number,
  onSelect: PropTypes.func,
};

export default UserList;

import React from "react";
import PropTypes from "prop-types";

import userSvg from "../../assets/images/user.svg";

/**
 * UserListItem Component
 * Represents a single user item in a list of users.
 *
 * Props:
 * - user (Object): The user object containing at least `id` and `name` properties.
 * - isActive (Boolean): Indicates if the current user item is selected, affecting the item's styling to highlight it.
 * - onSelect (Function): Callback function invoked when the user item is clicked.
 */
const UserListItem = ({ user, isActive, onSelect }) => {
  const { id, name } = user;

  const handleSelect = () => {
    onSelect(id);
  };

  const classes = `list-group-item d-flex align-items-center mb-1 user-list-item ${isActive ? "active" : ""}`;

  return (
    <li className={classes} onClick={handleSelect} tabIndex="0">
      <div style={{ border: "1px solid #ccc", marginRight: "1rem" }}>
        <img className="rounded" src={userSvg} alt="..." />
      </div>
      <div className="small">
        <div className="fw-bold">{name}</div>
      </div>
    </li>
  );
};

UserListItem.propTypes = {
  user: PropTypes.object,
  isActive: PropTypes.bool,
  onSelect: PropTypes.func,
};

export default UserListItem;

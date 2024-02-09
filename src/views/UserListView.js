import React from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import Page from "../components/Page";
import UserList from "../components/UserList/UserList";
import TextBlock from "../components/TextBlock";
import ContainerBlock from "../components/ContainerBlock";
import Column from "../components/Column";
import Card from "../components/Card";
import { getUserId } from "../utilities/Utilities";

/**
 * UserListView Component
 * Renders a view for displaying a list of users and the selected user's information.
 */
const UserListView = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = getUserId(location.pathname);

  // Navigate to single user view.
  const handleNavigate = (id) => {
    navigate("/users/" + id);
  };

  // Render the view. The single user view is rendered inside this view using the Outlet.
  return (
    <Page>
      <TextBlock title="Users" />
      <ContainerBlock>
        <Column>
          <UserList selectedUser={userId} onSelect={handleNavigate} />
        </Column>
        <Column>
          <Card title="User information">
            <Outlet />
          </Card>
        </Column>
      </ContainerBlock>
    </Page>
  );
};

export default UserListView;

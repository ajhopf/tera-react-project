import React from 'react';

import Default from '../templates/Default';
import AppLoading from '../organisms/AppLoading';

import UserListWrapper from '../molecules/UserListWrapper';

export default function Users(props) {
  const [users, setUsers] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const endpoint = `https://62c4e487abea8c085a7e022a.mockapi.io/users`;

    fetch(endpoint)
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setIsLoading(false);
      });
  }, []);

  return isLoading ? (
    <AppLoading />
  ) : (
    <div className="wrapper">
      <Default>
        <div className="users">
          <h1>Users</h1>
          <UserListWrapper users={users} />
        </div>
      </Default>
    </div>
  );
}

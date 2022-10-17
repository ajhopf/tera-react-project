import React from 'react';

import UserListItem from './UserListItem';

export default function UserListWrapper(props) {
  return (
    <div className="users__list">
      {props.users.map(user => (
        <UserListItem
          key={user.id}
          id={user.id}
          src={user.avatar}
          fn={user.fn}
          ln={user.ln}
        />
      ))}
    </div>
  );
}

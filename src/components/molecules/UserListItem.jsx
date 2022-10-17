import React from 'react';
import { Link } from 'react-router-dom';
import Avatar from '../atoms/Avatar';

export default function UserListItem(props) {
  return (
    <Link to={{ pathname: `/users/${props.id}` }} className="users__list-item">
      <div className="users__list-item-photo">
        <Avatar src={props.src} />
      </div>
      <div className="users__list-item-name">
        {props.fn} {props.ln}
      </div>
    </Link>
  );
}

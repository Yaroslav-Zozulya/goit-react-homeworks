import React from 'react';
import { ListItem, OnlineStatus } from './FriendListItem.styled';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const checkStatus = isOnline ? 'online' : 'offline';
  return (
    <ListItem className="item">
      <OnlineStatus className={checkStatus} isOnline={isOnline}></OnlineStatus>
      <img className="avatar" src={avatar} alt="User avatar" width="48" />
      <p className="name">{name}</p>
    </ListItem>
  );
};

export default FriendListItem;

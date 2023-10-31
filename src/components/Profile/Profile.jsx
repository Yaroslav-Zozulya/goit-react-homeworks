import ProfileDescription from 'components/ProfileDescription/ProfileDescription';
import ProfileStats from 'components/ProfileStats/ProfileStats';
import React from 'react';
import { Wrapper } from './Profile.styled';

const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <Wrapper>
      <ProfileDescription
        avatar={avatar}
        username={username}
        tag={tag}
        location={location}
      />
      <ProfileStats followers={followers} views={views} likes={likes} />
    </Wrapper>
  );
};

export default Profile;

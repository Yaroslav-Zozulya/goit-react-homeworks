import {
  Avatar,
  DescriptionWrapper,
  Name,
  Tag,
  Location,
} from './ProfileDescription.styled';

const ProfileDescription = ({ avatar, username, tag, location }) => {
  return (
    <DescriptionWrapper>
      <Avatar src={avatar} alt="User avatar" />
      <Name>{username} </Name>
      <Tag>@{tag}</Tag>
      <Location>{location}</Location>
    </DescriptionWrapper>
  );
};

export default ProfileDescription;

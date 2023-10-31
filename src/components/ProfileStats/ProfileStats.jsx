import { Wrapper, StatsItem, Label, Quantity } from './ProfileStats.styled';
const ProfileStats = ({ followers, views, likes }) => {
  return (
    <Wrapper>
      <StatsItem>
        <Label>Followers</Label>
        <Quantity>{followers}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Views</Label>
        <Quantity>{views}</Quantity>
      </StatsItem>
      <StatsItem>
        <Label>Likes</Label>
        <Quantity>{likes}</Quantity>
      </StatsItem>
    </Wrapper>
  );
};

export default ProfileStats;

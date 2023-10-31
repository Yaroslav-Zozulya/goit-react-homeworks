import styled from 'styled-components';

export const ListItem = styled.li`
  padding: 16px;
  :not(:last-child) {
    margin-bottom: 16px;
  }

  display: flex;
  align-items: center;
  gap: 16px;
  box-shadow: 0 0 5px 1px #595959;
`;

export const OnlineStatus = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${p => (p.isOnline ? 'green' : 'red')};
`;

import styled from 'styled-components';

export const Wrapper = styled.ul`
  display: flex;
  background-color: #e8e8e8;
`;

export const StatsItem = styled.li`
  padding: 16px;
  width: calc(100% / 3);
  display: flex;
  flex-direction: column;
  text-align: center;
  border-top: 1px solid black;

  :not(:last-child) {
    border-right: 1px solid black;
  }
`;

export const Label = styled.span`
  font-size: 24px;
  color: grey;
`;

export const Quantity = styled.span`
  font-size: 32px;
  font-weight: 700;
`;

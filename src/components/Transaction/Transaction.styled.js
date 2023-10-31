import styled from 'styled-components';

export const Cell = styled.td`
  border: 1px solid grey;
  padding: 10px;
`;

export const Row = styled.tr`
  background-color: ${p => (p.index % 2 ? 'white' : 'grey')};
`;

import styled from 'styled-components';

export const Item = styled.li`
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
  font-size: 28px;
  font-weight: 600;
  background-color: ${p => {
    switch (p.label) {
      case '.docx':
        return p.theme.colors.blue;

      case '.pdf':
        return p.theme.colors.purple;

      case '.mp3':
        return p.theme.colors.tomato;

      case '.psd':
        return p.theme.colors.green;

      default:
        return 'grey';
    }
  }};
`;

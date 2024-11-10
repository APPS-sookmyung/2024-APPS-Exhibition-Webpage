import styled from 'styled-components';

export const Layout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  background: ${({ background }) => background};
  background-color: #000000;
`;

import styled from 'styled-components';

export const Container = styled.section`
  padding: 0;
  margin: 0;
`;

export const Icons = styled.section `
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  a {
    text-decoration: none;
    color: #222;
  }
  a:hover {
    cursor: pointer;
    opacity: 0.7;
    margin-top: 2px;
  }
`
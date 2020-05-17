import styled from 'styled-components';

export const Input = styled.input `
  display: flex;
  margin: 0 auto;
  margin-bottom: 1rem;
  width: 70%;
  padding: 2rem 2rem 10px 2rem;
  border: none;
  box-shadow: 0px 1px 1px -1px rgba(0,0,0,0.75);
  outline: none;
  text-align: center;
  font-size: 16px;
  color: #333;

  &:focus {
    box-shadow: 0px 1px 1px -1px rgba(16, 48, 194, 1);
    &::placeholder {
      color: #aeb8e6;
    }
  }

  &::placeholder {
    text-align: center;
    font-size: 16px;
  }

`;

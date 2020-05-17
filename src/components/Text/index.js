import styled from 'styled-components';

export const Text = styled.span`
  display: flex;
  justify-content: ${({align}) => align || ''};
  font-size: ${({size}) => size};
  margin-bottom: 0.5rem;
`
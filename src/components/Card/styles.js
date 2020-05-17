import styled from 'styled-components';

export const Card = styled.section`
  box-shadow: ${({outlined}) => outlined ? '1px 1px 5px 1px rgba(212,212,212,1)' : ''};
  margin: ${({center}) => center && '0 auto' || ''};
  display: ${({display}) => display || ''};
  width: ${({width}) => width || 'auto'};
  padding-top: 2rem;
  word-break: break-all;
  justify-content: ${({center}) => center && 'center' || ''};
`;


export const CardItem = styled.section`
  display: ${({display}) => display || ''};
  width: ${({width}) => width || 'auto'};
  margin: ${({margin}) => margin || ''};
  
  @media screen and (max-width: 900px) {
    display: block;
    width: 100%;
    padding: 0;
    margin: 3rem 0 0 0;
    justify-content: center;
  }
`;


/*
export const CardList = styled.ol`
  display: ${({flex}) => flex && 'flex' || ''};
  padding: 0;
`;

export const CardItem = styled.li`
  list-style: none;
  width: ${({width}) => width + 'px' || 'auto'};

`;

export const CardContent = styled.section`
  margin: 2rem;
`
*/
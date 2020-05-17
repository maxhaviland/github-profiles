import styled from 'styled-components';

export const List = styled.ol`
  display: ${({ display }) => display || ''};
  text-align: start;
  padding: 0;
  margin: 0;
  text-decoration: none;
`;

export const ListItem = styled.li`
  list-style: none;
  box-shadow: ${({ outlined }) => outlined && '0px 0px 4px 0px rgba(212,212,212,1)' || ''};
  border-radius: 2px;
  margin: ${({ margin }) => margin || '0'};
  padding: ${({ padding }) => padding || '1rem'};
  word-wrap: break-word;
  text-align: justify;
  background-color: ${({ color }) => color || ''};
  height: ${({ height }) => height};
  white-space: nowrap;
  text-overflow: ellipsis;
  direction: ltr;
  overflow: hidden;
  transition: 0.5s;

  &:hover {
    animation: swing ease-in-out 0.8s infinite alternate;
    background-color: #433;
    color: white;
    @keyframes swing {
      0% { transform: translateY(5px); }
      100% { transform: translateY(-5px);}
    }
  }
`;

export const ListSubItem = styled.section`
  border-top: ${({ outlined }) => outlined && 'solid 1px #e6e3e3;' || ''};
  margin: ${({ margin }) => margin || '4px 0 0 0'};
  display: ${({ display }) => display || ''};
  white-space: nowrap;
  text-overflow: ellipsis;
  direction: ltr;
  overflow: hidden;
`

export const Title = styled.section`
  margin: 0px 0 2px 10px;
  opacity: 0.9;
`;
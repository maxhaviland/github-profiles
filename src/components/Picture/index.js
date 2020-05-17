import React from 'react';
import styled from 'styled-components';

const responsivePicture = (height) => {
  if (height >= 700 && height <= 1000 ) {
    return height / (height * 0.02)
  }
  if (height >= 1000) {
    return height / (height * 0.03)
  }
  return height / (height * 0.01)
}

const Picture = styled.div`
  border-radius: ${({rounded}) => rounded && '100%' || ''};
  padding: 0;
  margin: 0 auto;
  height: ${({height}) => height + 'px'};
  width: ${({height}) => height + 'px'};
  background : ${({src}) => src && `url("${src}") no-repeat center` || 'green'};
  background-size: 100% 100%;

  @media screen and (max-width: 900px) {
    height: ${({height, responsive}) => responsive && responsivePicture(height) + 'px'};
    width: ${({height, responsive}) => responsive && responsivePicture(height) + 'px'};
  }
`;
export default ({...props}) => <Picture {...props}/>;

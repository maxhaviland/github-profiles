import Octicon, { MarkGithub } from '@primer/octicons-react';
import React from 'react';
import { Container } from './styles';

function Footer() {
  return (
    <Container>
      Developed by Max Haviland
      <a href="https://github.com/maxhaviland" target='blank'>
        <Octicon icon={MarkGithub} />
      </a>
    </Container>
  )
}

export default Footer;
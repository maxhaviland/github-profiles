import Octicon, { MarkGithub, Organization, Repo } from '@primer/octicons-react';
import React from 'react';
import Picture from '../Picture';
import { Text } from '../Text';
import { Container, Icons } from './styles';

function User({ user }) {
  return (
    <Container>
      <Text align='center' size='22px'>{user.username}</Text>
      <Picture responsive rounded height='200' src={user.avatar} />
      <Icons>
        <a href={user.url} target='blank'>
          <Octicon size={22} icon={MarkGithub} />
        </a>
        <a href={`https://github.com/${user.username}?tab=repositories`} target='blank'>
          <Octicon size={22} icon={Repo} /> {user.repos || 0}
        </a>
        <a href={`https://github.com/${user.username}?tab=followers`} target='blank'>
          <Octicon size={22} icon={Organization} /> {user.followers || 0}
        </a>
      </Icons>
    </Container>
  )
}

export default User;
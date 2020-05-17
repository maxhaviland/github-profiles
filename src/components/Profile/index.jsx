import React from 'react';
import { Card, CardItem } from '../Card/styles';
import Repositories from '../Repositories';
import User from '../User';
import { Container } from './styles';
function Profile({ profile: { user, repositories } }) {

  return (
    <Container>
      <Card center display='flex'>
        <CardItem display='flex'>
          <User user={user} totalRepositories={repositories.length} totalFollowers={user.followers} />
          <CardItem width='50vw' margin='0 0 0 5rem'>
            <Repositories repositories={repositories} />
          </CardItem>
        </CardItem>
      </Card>
    </Container>
  )
}

export default Profile;

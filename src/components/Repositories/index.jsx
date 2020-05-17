import Octicon, { Repo, RepoForked, Star } from '@primer/octicons-react';
import React from 'react';
import { List, ListItem, ListSubItem } from '../List';
import { Text } from '../Text';
import { Link } from './styles';

function Repositories({ repositories }) {
  const repositoryList = repositories.map((repository, index) => {
    return index < 4 && (
      <Link href={repository.url} target='blank'>
        <ListItem
          key={repository.id}
          outlined
          margin="0 0 10px 0"
          color=''
        >
          {repository.name}
          <ListSubItem >
            <section>
              <span>
                <Octicon icon={RepoForked} />
                {repository.forks || 0}
              </span>
              <span style={{ marginLeft: 30 }}>
                <Octicon icon={Star} />
                {repository.stars || 0}
              </span>
            </section>
          </ListSubItem>
        </ListItem>
      </Link>
    )
  })
  return (
    <List display="">
      <Text align='initial' size='22px'>
        <span><Octicon size={24} icon={Repo} /></span>
        Main repositories
      </Text>
      {repositories.length && repositoryList || 'The user doesn’t have repositories'}
    </List>
  )
}

export default Repositories;
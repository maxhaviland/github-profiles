import React, { useContext, useRef } from 'react';
import { Context } from '../../context/Context';
import { Input } from './styles';

function Search() {
  const { setUsername } = useContext(Context);

  const usernameRef = useRef()

  const search = (event) => {
    event.preventDefault();
    if (usernameRef.current.value === '') return;
    setUsername(usernameRef.current.value);
    usernameRef.current.value = '';
  }

  return (
    <form onSubmit={search}>
      <Input ref={usernameRef} placeholder='search by username' type="text" />
    </form>
  )
}

export default Search;
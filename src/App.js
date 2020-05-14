import React, { useState, useEffect } from 'react';
import { start } from './services/fetch/start'

function App() {
  const [user, setUser] = useState({
    id: 0
  })
  const [username, setUsername] = useState('diego3g')

  const startUserProfile = async () => {
    const userProfile = await start(username)
    //setUser(userProfile)
    console.log(userProfile)
  }


  return (
    <>
      {user.id}
      {user.username}
      <img src={user.avatar}/>
      <button onClick={startUserProfile}>teste</button>
    </>
  );
}

export default App;

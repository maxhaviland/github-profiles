import React, { createContext, useState } from 'react';

export const Context = createContext({});

function ContextProvider({ children }) {
  const [username, setUsername] = useState('');

  return (
    <Context.Provider value={{ setUsername, username }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider;
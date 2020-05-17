import React from 'react';
import Footer from './components/Footer';
import Search from './components/Search';
import ProfileContainer from './containers/ProfileContainer';

function App() {
  return (
    <>
      <Search type="text" />
      <ProfileContainer />
      <Footer />
    </>
  );
}

export default App;

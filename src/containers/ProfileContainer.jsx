import Octicon, { MarkGithub } from '@primer/octicons-react';
import React, { useContext, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from '../components/Profile';
import Spinner from '../components/Spinner';
import { Context } from '../context/Context';
import { alert } from '../services/alert';
import { start } from '../services/fetch/start';

function ProfileContainer() {
  const { username } = useContext(Context);

  const [profile, setProfile] = useState({
    user: {},
    repositories: [],
    followers: [],
    isLoading: false,
    status: 0,
  })

  const gitHubProfile = async (username) => {
    setProfile({ ...profile, isLoading: true });
    const response = await start(username)
    setProfile({ ...response, isLoading: false });
    if (response.status !== 200) alert('User not found');
  };

  useEffect(() => {
    username && gitHubProfile(username)
  }, [username])

  const IconGitHub = () => <center><Octicon size={100} icon={MarkGithub} /></center>;

  if (profile.isLoading) return <Spinner isLoading={profile.isLoading} />

  return (
    <>
      {profile.status === 200 && <Profile profile={profile} /> || <IconGitHub />}
      <ToastContainer />
    </>
  )
};

export default ProfileContainer;
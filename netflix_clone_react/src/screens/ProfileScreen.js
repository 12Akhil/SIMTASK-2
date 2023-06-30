import React from 'react';
import './ProfileScreen.css';
import Nav from '../Nav';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { auth } from '../firebase';

function ProfileScreen() {
  const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
      <Nav />
      <div className='profileScreen_body'>
        <h1 className='profileScreen_title'>Edit Profile</h1>
        <div className='profileScreen_info'>
          <img className='profileScreen_avatar' src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt='User Avatar' />
          <div className='profileScreen_details'>
            <h2 className='profileScreen_email'>{user.email}</h2>
            <div className='profileScreen_plans'>
              <h3>Plans</h3>
              <button onClick={() => auth.signOut()} className='profileScreen_signout'>
                Sign Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;

import React from 'react'
import { useUser } from '../context/UserContext';

function Photoprofile() {
    const userInfo  = useUser() || {};
  return (
    <div className='Photoprofile'>
        <img src={userInfo.photo} alt='profile' />
    </div>
  )
}

export default Photoprofile
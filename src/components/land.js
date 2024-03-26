import { useState } from 'react';
import Auth from './auth'

export default function Land() {
  return (
    <div className='land' >
      
      <div className='P3 flex'>
        <h1 className='title' style={{fontSize:"6vw"}}>MARKETFY</h1>
        <h4>Your favorite shopping place</h4>
      </div>
      <Auth></Auth>

    </div>
  );
};
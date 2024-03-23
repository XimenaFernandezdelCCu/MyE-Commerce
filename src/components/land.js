import { useState } from 'react';
import Auth from './auth'

export default function Land() {
  const [validMail, setValidMail] = useState(true);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleEmailValidation =(event)=>{
      setValidMail(false);
      console.log(event.target.value);
      if (emailRegex.test(event.target.value)){
      setValidMail(true);
      } else {
      setValidMail(false);
      }
  }

  return (
    <div className='land' >
      
      <div className='P3 flex'>
        <h1 className='title' style={{fontSize:"6vw"}}>MARKETFY</h1>
        <h4>Your favorite shopping place</h4>
      </div>
      <Auth handleEmailValidation={handleEmailValidation} validMail={validMail} ></Auth>

    </div>
  );
};
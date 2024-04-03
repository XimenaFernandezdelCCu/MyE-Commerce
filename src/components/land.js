//components
import Auth from './small/auth'
import ValidationProvider from '../context/ValidationProvider';

export default function Land() {
  return (
    <div className='land' >
      <div className='P3 flex'>
        <h1 className='title' style={{fontSize:"6vw"}}>MARKETFY</h1>
        <h4>Your favorite shopping place</h4>
      </div>
      <ValidationProvider>
        <Auth></Auth>
      </ValidationProvider>
      

    </div>
  );
};
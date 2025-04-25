import React from 'react';

const LoadingScreen = ({headline,msg}) => {
  return (
    <div className='loading-screen'>
         <div className="loading-screen__loader"></div> 
      <h2 className='loading-screen__headline'>{headline}</h2>
      {msg && <p>{msg}</p>}
    </div>
  );
};

export default LoadingScreen;

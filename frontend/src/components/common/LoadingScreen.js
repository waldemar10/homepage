// src/components/common/LoadingScreen.jsx
import React from 'react';

const LoadingScreen = ({headline,msg, backendOffline }) => {
  return (
    <div className='loading-screen'>
         <div className="loading-screen__loader"></div> 
      <h2 className='loading-screen__headline'>{headline}</h2>
      {backendOffline && <p>⚠️ Backend offline.</p>}
      {msg && <p>{msg}</p>}
    </div>
  );
};

export default LoadingScreen;

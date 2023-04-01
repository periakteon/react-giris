import React from 'react';

export const Home = () => {
  const redirectFunc = () => {
    window.location.href = '/detail';
  };

  return (
    <div>
      <button onClick={redirectFunc}>details'a yönlendir</button>
    </div>
  );
};

export default Home;

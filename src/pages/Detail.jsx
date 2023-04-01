import React from 'react';

export const Detail = () => {
  const redirectFunc = () => {
    window.location.href = '/';
  };

  return (
    <div>
      <button onClick={redirectFunc}>anasayfaya yönlendir</button>
    </div>
  );
};

export default Detail;

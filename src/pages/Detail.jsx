import React from 'react';
import { useParams } from 'react-router-dom';

export const Detail = () => {

  const { id } = useParams();

  const redirectFunc = () => {
    window.location.href = '/';
  };

  return (
    <div>
      <h1>Ürün ID'si: {id} </h1>
      <button onClick={redirectFunc}>anasayfaya yönlendir</button>
    </div>
  );
};

export default Detail;

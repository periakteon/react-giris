import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import arr from '../data';

export const Detail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);

  // sayfa yüklendiğinde
  useEffect(() => {
    setData(arr);
  }, [id]);

  console.log("data array'i: ", data);

  const redirectFunc = () => {
    window.location.href = '/';
  };

  return (
    <div>
      <button onClick={redirectFunc}>anasayfaya yönlendir</button>
      {
        data.filter(dt => dt.id === parseInt(id)).map((dat) => (
          <div key={dat.id}>
            <h1>Ürün ismi: {dat.name}</h1>
            <br></br>
            <h2>Ürün ID'si: {dat.id}</h2>
          </div>
        ))
      }
    </div>
  );
};

export default Detail;

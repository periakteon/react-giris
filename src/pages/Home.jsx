import React from 'react';
import arr from '../data';

export const Home = () => {
  const redirectFunc = (id) => {
    window.location.href = `/detail/${id}`;
  };

  return (
    <div>
      {arr.map((ar) => {
        return (
          <div
            key={ar.id}
            style={{
              margin: '10px',
              border: '2px solid black',
              padding: '5px',
            }}
          >
            Ürün ismi:
            <br></br>
            <button style={{ cursor: 'pointer' }} onClick={() => redirectFunc(ar.id)}>{ar.name}</button>
          </div>
        );
      })}
    </div>
  );
};

export default Home;

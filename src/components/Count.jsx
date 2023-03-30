import React, { useState } from 'react';

function CountExample() {

  const [count, setCount] = useState(0);
  const clickFuncPlus = () => {
    setCount(count+1);
  }
  const clickFuncMinor = () => {
    setCount(count-1);
  }
  const clickFuncReset = () => {
    setCount(0);
  }

  return (
    <div>
      <button onClick={clickFuncPlus}>artır beni</button>
      <button onClick={clickFuncMinor}>azalt beni</button>
      <button onClick={clickFuncReset}>sıfırla beni</button>
      <p>count sayısı: {count}</p>
    </div>
  );
}

export default CountExample;

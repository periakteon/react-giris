import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const dispatch = useDispatch();

  // aşağıdaki kod ile store'daki state değerlerini alabiliriz.
  // baktığımızda state'in içerisinde change key'ini ve bunun da içerisinde "init"i görüyoruz
  // o zaman bunu yorum satırına alıp aşağıda "init"i alalım
  // console.log("object:", useSelector(state => state));

  const {init} = useSelector(state => state.change);
  console.log("init değeri:", init); // Output: "başlangıç değeri"

  const getData = () => {
    dispatch({ type: 'CHANGE', payload: 'değişti' });
  }
  return (
    <>
     <button onClick={getData}>verileri al (butona tıklandığında payload aktif olur ve 'init' değeri 'değişti' olarak güncellenir</button>
     <br></br>
     {init}
    </>
  );
}

export default App;

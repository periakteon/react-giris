import { useEffect, useRef, useState } from 'react';

function App() {
  const [status, setStatus] = useState("status'un ilk hâli");
  const firstRef = useRef();

  useEffect(() => {
    setStatus("status'un set edilmiş hâli")
  }, [])

  console.log('Ref örneğimiz: ', firstRef.current);
  // Ref örneğimiz:  <input placeholder=​"useRef ile referans aldığımız element.. '.current' ile de ilk key'e ulaşıyoruz">​
    return (
      <>
      <div>{status}</div>
      <input ref={firstRef} placeholder="useRef ile referans aldığımız element.. '.current' ile de ilk key'e ulaşıyoruz"/>
      </>
    );
}

export default App;

import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchCountry = async () => {
      const data = await axios.get('https://restcountries.com/v3.1/all');
      console.log('Data:', data);
      setCountry(data);
    };
    fetchCountry();
  }, [])

  return (
    <>
     {
      country?.data?.map((country, index) => (
        <div key={index}>
          <h1>{country.name.common}</h1>
          <img src={country.flags.png} alt={country.name.official} />
        </div>
      ))
     }
    </>
  );
}

export default App;

import { useState } from 'react';

function App() {

  const [renk, setRenk] = useState('');

  const handleInputChange = (event) => {
    setRenk(event.target.value);
  };
  

  return (
    <div className='app'>
      <input type="text" value={renk} onChange={handleInputChange} />
      <div style={{color: renk}} >
        asd
      </div>
      
    </div>
  );
}

export default App;

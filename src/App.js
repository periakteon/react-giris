import { useState } from 'react';

function App() {

  const [status, setStatus] = useState(false);

  // eğer 'status' değeri TRUE ise
  if (status) {
    return (
      <div> status durumu: true
        <button onClick={ () => setStatus(!status) }> status'un tersini (yani, '!status'u) al </button>
      </div>
    )
  } else {
    return (
      <div>status durumu: false
        <button onClick={ () => setStatus(!status) }> status'un tersini (yani, '!status'u) al </button>
      </div>
    )
  }
}

export default App;

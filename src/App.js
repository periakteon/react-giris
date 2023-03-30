import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  // This useEffect will run after every render
  useEffect(() => {
    console.log('Component has rendered');
  });

  // This useEffect will only run when `count` changes
  useEffect(() => {
    console.log(`Count has changed to ${count}`);
  }, [count]);

  return (
    <div>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;

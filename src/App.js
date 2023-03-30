import { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleAccordion}>Toggle Accordion</button>
      {isOpen && <div>isOpen TRUE olduğunda bu gösterilir: This is the content of the accordion</div>}
    </div>
  );
}

export default App;

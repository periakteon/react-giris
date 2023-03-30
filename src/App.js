import { useState } from 'react';

function App() {

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <div>
          <div>This is the content of the modal</div>
          <button onClick={closeModal}>Close Modal</button>
        </div>
      )}
    </div>
  );
}

export default App;

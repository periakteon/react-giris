import { useState } from 'react';

function App() {
  // text'i tutmak için state oluşturduk
  const [text, setText] = useState('');
  const onChangeFunc = (e) => {
    setText(e.target.value);
  }
  return (
    <>
      <input value={text} onChange={onChangeFunc} type='text' placeholder='Ekle' />
      <button>Ekle</button>
    </>
  );
}

export default App;

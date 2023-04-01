import { useState } from 'react';

function App() {
  // text'i tutmak için state oluşturduk
  const [text, setText] = useState('');

  // (eklemek için) girilen text'i textStore içerisinde muhafaza etmek için array oluşturduk
  const [textStore, setTextStore] = useState([]);
  const onChangeFunc = (e) => {
    setText(e.target.value);
  };

  const addTextStore = () => {
    // önceden var olan tüm text'leri al, sonra yeni text'i ekle
    setTextStore(prev => [...prev, text]);
    // text'i temizle
    setText('');
  };

  console.log("textStore:", textStore);

  return (
    <>
      <input
        value={text}
        onChange={onChangeFunc}
        type='text'
        placeholder='Ekle'
      />
      <button onClick={addTextStore}>Ekle</button>
    </>
  );
}

export default App;

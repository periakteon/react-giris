import React, { useState } from 'react';

function StringExample() {
  // inputText'in başlangıç değerini boş bir string olarak belirliyoruz
  const [inputText, setInputText] = useState('');

  // listedeki tüm metinleri depolamak için bir state kullanacağız
  const [list, setList] = useState([]);

  // her bir olay olduğunda olayın değerini setInputText olarak ayarla. Yani, girilen her değer setInputText olmuş olacak ve bu da inputText'i güncelleyecek
  const handleChange = (event) => {
    setInputText(event.target.value);
    console.log('mevcut inputText', inputText);
  };

  const addString = () => {
    // mevcut listedeki tüm metinleri kopyalayın
    const newList = [...list];
    console.log('newList şu şekilde: ', newList)

    // inputText'i listeye ekleyin
    newList.push(inputText);

    // listeyi güncelle. Yani, setList fonksiyonu "newList" dizisini alıp "list" dizisine aktaracak. Yani, "list" dizisi güncellenmiş olacak
    setList(newList);

    // inputText'i boş bir dizeye ayarlayın, böylece sonraki metin girişi için hazır oluruz
    setInputText('');
  };

  return (
    <div>
      <input type='text' value={inputText} onChange={handleChange} />
      <p>You typed: {inputText}</p>
      <button onClick={addString}>ekle beni</button>
      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default StringExample;
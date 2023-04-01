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
    setTextStore((prev) => [...prev, text]);
    // input içerisindeki text'i temizle (bir öncekinden kalan text'i yani)
    setText('');
  };

  const deleteText = (index) => {
    // textStore içerisindeki ilgili öğeyi kaldır
    // setTextStore fonksiyonu, prev parametresi olarak önceki textStore değerini alır. filter fonksiyonu, prev array'indeki öğeleri filtreleyip yeni bir array oluşturur. filter fonksiyonu, her bir öğe ve onun index'ine erişim sağlayan item ve i parametreleri alır. Yani, prev.filter((item, i) => i !== index) ifadesi, prev array'indeki her bir öğeyi kontrol eder. Eğer öğenin index'i, index değişkenine eşit değilse (yani silinmek istenen öğe değilse), bu öğe yeni oluşturulacak array'de kalır. Eğer öğenin index'i index değişkenine eşitse (yani silinmek istenen öğe), bu öğe yeni oluşturulacak array'de yer almaz.
    setTextStore((prev) => prev.filter((item, i) => i !== index));
  };

  console.log('textStore:', textStore);

  return (
    <>
      <input
        value={text}
        onChange={onChangeFunc}
        type='text'
        placeholder='Ekle'
      />
      <button onClick={addTextStore}>Ekle</button>
      {
        // "?" işareti kullanmamızın sebebi textStore'in undefined olabileceğini belirtiyoruz
        // yani "?" işareti ile textStore undefined ise map fonksiyonunu çalıştırmayacak
        // yani "?" işareti "var mı?" anlamına gelir
        textStore?.map((item, index) => (
          <div key={index}>
            {item}
            <button onClick={() => deleteText(index)}>Delete</button>
          </div>
        ))
      }
    </>
  );
}

export default App;

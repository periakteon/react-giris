# react-giris

React giriş notları: https://www.youtube.com/watch?v=u2B75HWI2JI&amp;t=1432s


# Önemli React Notları

## 1) React, `component` mantığıyla çalışır.

Yani, birden çok küçük parçaların birleştirilmesi esastır. Mesela bir sitenin birden çok sayfa yapısı olabiliyor. Ürünü sepete ekleme, anasayfa, ürün detayı görüntüleme vb. Bunların hepsi esasen `component` mantığını ihtiva eder. Tüm kodları `App.js` içerisine yazmamak için kodları parçalara bölüyoruz.

***


## 2) `Component` nasıl `import` edilir?

Yazılan `component`leri de uygulama içerisinde <ComponentName/> şeklinde import edebiliyoruz. Tabii bunu yaparken ilgili `component`in içerisinde `export default ComponentName` yazılı olmalıdır.

***

## 3) `Props` nedir? `Props geçme` nedir?

Bir `props` esas itibariyle bir bileşende vb. tanımlayıp başka bileşenlerde erişebildiğimiz bir şeydir. Mesela elimizde aşağıdaki gibi bir `App.js` kodu olsun:

```
function App() {
  const propsDeneme = "props mantığı: ben bir propsum"
  return (
    <div className="app">
      <Masum propsIcınBoyleYapiyoruz = {propsDeneme}/>
      <Deneme/>
    </div>
  );
}
```

Yukarıdaki bu kodda `<Masum propsIcınBoyleYapiyoruz = {propsDeneme}/>` şeklinde yazdığımız kısımda aslında şunu yapmış oluyoruz:

**1.** `<Masum`dan sonra gelen `propsIcınBoyleYapiyoruz` ifadesi tamamen keyfidir. Biz bunu istediğimiz şekilde değiştirebiliriz. Meselâ `props` da yazabiliriz kısaltma amacıyla. `propsIcınBoyleYapiyoruz` ifadesine değer olarak yukarıda oluşturduğumuz `propsDeneme` değişkenini veriyoruz. Burada **dikkat** edilmesi gereken, bu değişkeni verirken **süslü parantez** içerisinde vermemiz. Yani: `{propsDeneme}` şeklinde veriyoruz.

**2.** Verdiğimiz bu `props`u `Masum` adındaki `component`te nasıl kullanacağız peki? `Masum.jsx` dosyamız şu şekilde olsun:

```
import "../App.css"

const Masum = ({propsIcınBoyleYapiyoruz}) => {

  console.log("ilk prop:", propsIcınBoyleYapiyoruz);
  return (
    <div>
      Masum componenti denemesi
      <br />
      Ayrıca gelen props'u şöyle kullanıyoruz: {propsIcınBoyleYapiyoruz}
    </div>
  )
}

export default Masum;
```
**3.** Görüldüğü üzere, `Masum` adındaki fonksiyona argüman olarak **süslü parantez içerisinde** `propsIcınBoyleYapiyoruz` adındaki `props` ismini yazıyoruz. Yani `Masum` adındaki arrow fonksiyona argüman olarak `propsIcınBoyleYapiyoruz` adındaki `props`u `props geçiyoruz`.`Masum` adındaki fonksiyon bundan sonra, `propsIcınBoyleYapiyoruz` adındaki `props`u almış olacak ve biz de bu `component`te, yani `Masum.jsx` dosyasının içerisinde `App.js` dosyasının içerisinde tanımladığımız `propsDeneme` değişkenini kullanabileceğiz.

Tüm bunları birlikte çalıştırdığımızda, aşağıdaki gibi bir ekranla karşı karşıya kalırız:

```
Masum componenti denemesi
Ayrıca gelen props'u şöyle kullanıyoruz: props mantığı: ben bir propsum
```

***

## *4)* `Map` metodu hakkında: `Map` nedir? Ne iş yapar?

`Map` fonksiyonuyla oluşturduğumuz diziler içerisindeki elemanları ekrana bastırabiliriz. Meselâ aşağıdaki gibi bir `App.js` kodumuz olsun:

```
function App() {

  const arr = [
    { name: 'array 1', id: 0 },
    { name: 'array 2', id: 1 },
    { name: 'array 3', id: 2 },
  ];

  return (
    <div className='app'>

      {
        arr.map((ar) => (
        <div key={ar.id}>{ar.name}</div>
      ))
      }
    </div>
  );
}
```

**1.** Yukarıdaki kodda `arr` adında bir dizi oluşturuyoruz. Daha sonra uygulamamızın içerisine `{diziIsmi.map( (dizi) => () )}` şeklinde bir kod yazıyoruz. Burada parantez içerisindeki `(dizi)` tamamen keyfidir. `diziIsmi`nin içerisindeki her bir elemanı temsil eder. 

**2.** `Map` fonksiyonunu arrow fonksiyon olarak oluşturduk. Daha sonra ise dizinin her bir elemanını bir `div` içerisinde döndürmek istiyoruz. Bunun için `div` arasında `{diziIsmi.value}` yazıyoruz. Yani, bracket notation esasında `key/value` pairini kullanıyoruz. Peki `div`e neden `key` özelliği verdik? Çünkü vermezsek console'da şöyle bir hata alırız: **Warning: Each child in a list should have a unique "key" prop.**

**3.** Bu hatanın sebebi dizideki her bir elemanın aslında `unique` olması gerektiğidir. Yani, dizideki hiçbir elemanın **birbirinin aynısı olmadığını** belirtmemiz gerekiyor. Bunun için yukarıda olduğu gibi `key` özelliğine dizideki her bir elemanın `id`'sini verebiliriz.

**4.** `key` özelliğiyle ilgili alternatif bir çözüm de aşağıdaki gibidir. Aşağıdaki çözümde `key` özelliğine eklemek üzere `map` fonksiyonuna `i`, yani bir *index* parametresi daha ekliyoruz ve bunu da `key` özelliğine **süslü parantez içerisinde** veriyoruz.

```
arr.map( (ar, i) => ( <div key={i}>{ar.name}</div>))
```

**5.** Son olarak, `map` metodunun *syntax*i şu şekildedir:

```
// Arrow function
map((element) => { /* … */ })
map((element, index) => { /* … */ })
map((element, index, array) => { /* … */ })
```

Yani, `arr.map()` fonksiyonu, bir dizi (array) üzerinde bir fonksiyonu her eleman için çalıştırarak yeni bir dizi döndürür. Arrow function ise bu fonksiyonun işleyişini belirler. Arrow function'un aldığı parametreler, `map()` fonksiyonunun işleyişini etkiler.

*Örnekler*:

**1)** Sadece elemanları kullanarak bir dizi oluşturma:

```
const arr = [1, 2, 3];
const newArr = arr.map((element) => {
  return element * 2;
});

console.log(newArr); // [2, 4, 6]

```

Burada, arrow function sadece elemanı alıyor ve elemanın iki katını döndürüyor. `map()` fonksiyonu, bu arrow function'ı her eleman için çalıştırıyor ve yeni bir dizi oluşturuyor.

**2)** Elemanın yanı sıra, elemanın index numarasını da kullanarak bir dizi oluşturma:

```
const arr = [1, 2, 3];
const newArr = arr.map((element, index) => {
  return `Element ${index} is ${element}`;
});

console.log(newArr); // ["Element 0 is 1", "Element 1 is 2", "Element 2 is 3"]
```

Burada, arrow function, hem elemanı hem de elemanın `index` numarasını alıyor ve bir string döndürüyor. `map()` fonksiyonu, bu arrow function'ı her eleman (`element`) için çalıştırıyor ve yeni bir dizi oluşturuyor.

**3)** Elemanın yanı sıra, elemanın index numarası ve dizinin kendisi de kullanılarak bir dizi oluşturma:

```
const arr = [1, 2, 3];
const newArr = arr.map((element, index, array) => {
  const total = array.reduce((acc, val) => {
    return acc + val;
  });
  return `Element ${index} is ${element} and the total is ${total}`;
});

console.log(newArr); // ["Element 0 is 1 and the total is 6", "Element 1 is 2 and the total is 6", "Element 2 is 3 and the total is 6"]
```

Burada, arrow function, elemanı, elemanın `index` numarasını ve **dizinin kendisini** alıyor. Daha sonra, `reduce()` fonksiyonunu kullanarak dizideki tüm elemanların toplamını hesaplıyor ve bir string döndürüyor. `map()` fonksiyonu, bu arrow function'ı her eleman için çalıştırıyor ve yeni bir dizi oluşturuyor.

***

## 5) `Hooks` kullanımları: `useState`

`useState` hook'u React'ta `state yönetimi` için kullanılan bir fonksiyondur. `useState` hook'u bir fonksiyon çağrısıdır ve geriye bir `dizi` döndürür. Bu dizi iki eleman içerir: `mevcut state değeri (initial state)` ve `state değerini güncellemek için kullanılacak bir fonksiyon`. 

Meselâ elimizde aşağıdaki gibi bir kod olsun:

```
import React, { useState } from 'react';

function CountExample() {

  const [count, setCount] = useState(0);
  const clickFuncPlus = () => {
    setCount(count+1);
  }
  const clickFuncMinor = () => {
    setCount(count-1);
  }
  const clickFuncReset = () => {
    setCount(0);
  }

  return (
    <div>
      <button onClick={clickFuncPlus}>artır beni</button>
      <button onClick={clickFuncMinor}>azalt beni</button>
      <button onClick={clickFuncReset}>sıfırla beni</button>
      <p>count sayısı: {count}</p>
    </div>
  );
}

export default CountExample;

```

Burada ilk olarak `useState` hook'unda kullanmak üzere bir **dizi** oluşturuyoruz (`useState` hook'u **dizi** içerisinde değişken isimleri verilerek tanımlanır.)

Bu kod, React Hooks'ın bir özelliği olan `useState` fonksiyonunu kullanarak bir değişken (count) oluşturur ve bu değişkenin başlangıç ​​değerini **0** olarak ayarlar.

Sonra, `clickFuncPlus` adlı bir fonksiyon tanımlar. Bu fonksiyon, `count` değişkenine **1** eklemek için `setCount` fonksiyonunu kullanır. `setCount` fonksiyonu, React'ta state'in güncellenmesini tetikler ve React, bileşenin yeniden render edilmesi gerektiğini anlar.

Yani, `clickFuncPlus` fonksiyonu çağrıldığında, `count` değişkeni **1** artar ve React, bu değişikliği fark ederek bileşeni yeniden render eder. Bu, ekranda görüntülenen sayının artmasıyla sonuçlanır.

Bu kod örneği, bir sayaç bileşeni için basit bir örnek oluşturur. Kullanıcı sayaç üzerinde artı düğmesine tıkladıkça, sayı artar ve bu, kullanıcının uygulamanın geri kalanında ne olacağına bağlı olarak farklı işlevlerde kullanılabilir.

Benzer mantığı string, array ve object için de kullanabiliriz.

**1.** **String** örneği:

```
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

```

**2**. **Array** örneği:

```
import React, { useState } from "react";

function ArrayExample() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleAddItem = () => {
    setItems([...items, inputValue]);
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleAddItem}>Add Item</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArrayExample;

```
**3**. **Object** örneği:

```
import { useState } from "react";

function ObjectExample() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const addItem = () => {
    setItems([...items, { text: inputValue, id: Date.now() }]);
    setInputValue("");
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={addItem}>Add Item</button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
    </div>
  );
}

export default ObjectExample;

```

Ayrıca basit bir renk değiştirme uygulaması da yapabiliriz:

```
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

```
Meselâ yukarıdaki örnekte ilk olarak `renk` değişkeninin `initial state`'ini boş olarak ayarlıyoruz. Daha sonra bir event listener ekliyoruz ve input alanına girilen değeri `setRenk` fonksiyonuyla `renk` değişkenine yeniden atıyoruz. Böylece ekranda görünen yazının rengi, kullanıcının yazdığı renkte olacaktır.

Ayrıca `boolean` değerler ile de benzer bir örneği yapabiliriz:

```
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

```

Bu örneklerin incelenmesi veya kopyalanıp denenmes, `useState`in kullanımını anlamaya yardımcı olacaktır.
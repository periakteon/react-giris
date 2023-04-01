# react-giris

React giriş notları: https://www.youtube.com/watch?v=u2B75HWI2JI&amp;t=1432s


# Önemli React Notları

## 1) React, `component` mantığıyla çalışır.

Yani, birden çok küçük parçaların birleştirilmesi esastır. Mesela bir sitenin birden çok sayfa yapısı olabiliyor. Ürünü sepete ekleme, anasayfa, ürün detayı görüntüleme vb. Bunların hepsi esasen `component` mantığını ihtiva eder. Tüm kodları `App.js` içerisine yazmamak için kodları parçalara bölüyoruz.

Özetle: React uygulamaları bileşenlerden oluşur. Bir bileşen, kendi mantığı ve görünümü olan bir UI (kullanıcı arayüzü) parçasıdır. Bir bileşen bir düğme kadar küçük veya tüm bir sayfa kadar büyük olabilir.

React bileşenleri, markup döndüren JavaScript fonksiyonlarıdır:

```js
function MyButton() {
  return (
    <button>I'm a button</button>
  );
}
```

***


## 2) `Component` nasıl `import` edilir?

Yazılan `component`leri de uygulama içerisinde <ComponentName/> şeklinde import edebiliyoruz. Tabii bunu yaparken ilgili `component`in içerisinde `export default ComponentName` yazılı olmalıdır.

Elimizde `MyButton,jsx` dosyasında tanımladığımız bir fonksiyon olsun. Biz bunu başka bir `component`in içerisine geçirebiliriz (*nest*).

```js
export default function MyApp() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
    </div>
  );
}
```
**ÖNEMLİ**: `<MyButton />` öğesinin **büyük harfle** başladığına dikkat edin. Bunun bir React bileşeni olduğunu bu şekilde anlarsınız. React bileşen adları *her zaman* büyük harfle başlamalıdır, HTML etiketleri ise küçük harf olmalıdır.

***

## 3) `Props` nedir? `Props geçme` nedir?

Bir `props` esas itibariyle bir bileşende vb. tanımlayıp başka bileşenlerde erişebildiğimiz bir şeydir. Mesela elimizde aşağıdaki gibi bir `App.js` kodu olsun:

```js
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

```js
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

```js
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

```js
arr.map( (ar, i) => ( <div key={i}>{ar.name}</div>))
```

**5.** Son olarak, `map` metodunun *syntax*i şu şekildedir:

```js
// Arrow function
map((element) => { /* … */ })
map((element, index) => { /* … */ })
map((element, index, array) => { /* … */ })
```

Yani, `arr.map()` fonksiyonu, bir dizi (array) üzerinde bir fonksiyonu her eleman için çalıştırarak yeni bir dizi döndürür. Arrow function ise bu fonksiyonun işleyişini belirler. Arrow function'un aldığı parametreler, `map()` fonksiyonunun işleyişini etkiler.

*Örnekler*:

**1)** Sadece elemanları kullanarak bir dizi oluşturma:

```js
const arr = [1, 2, 3];
const newArr = arr.map((element) => {
  return element * 2;
});

console.log(newArr); // [2, 4, 6]

```

Burada, arrow function sadece elemanı alıyor ve elemanın iki katını döndürüyor. `map()` fonksiyonu, bu arrow function'ı her eleman için çalıştırıyor ve yeni bir dizi oluşturuyor.

**2)** Elemanın yanı sıra, elemanın index numarasını da kullanarak bir dizi oluşturma:

```js
const arr = [1, 2, 3];
const newArr = arr.map((element, index) => {
  return `Element ${index} is ${element}`;
});

console.log(newArr); // ["Element 0 is 1", "Element 1 is 2", "Element 2 is 3"]
```

Burada, arrow function, hem elemanı hem de elemanın `index` numarasını alıyor ve bir string döndürüyor. `map()` fonksiyonu, bu arrow function'ı her eleman (`element`) için çalıştırıyor ve yeni bir dizi oluşturuyor.

**3)** Elemanın yanı sıra, elemanın index numarası ve dizinin kendisi de kullanılarak bir dizi oluşturma:

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

```js
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

Başka bir `boolean` örneğimiz ise `Accordion` örneği olsun:

```js
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

```

Bu da çok kullanışlı bir `boolean` örneğidir.

**Modal pencere** örnekleri de `useState`in en çok kullanıldığı yerlerden birisidir:

```js
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

```

Bu örneklerin incelenmesi veya kopyalanıp denenmes, `useState`in kullanımını anlamaya yardımcı olacaktır.

***

## 6) `Hooks` kullanımları: `useEffect`

`useEffect`'in syntax'ı şu şekildedir:

```js
useEffect ( () => {

}, [] );
```

Yani, `useEffect()` metodunun içerisine **callback function** olarak bir arrown function koyarız ve daha sonra da bir dizi `[]` ekleriz.

Peki `useEffect` hook'u ne işe yarar? Sayfa yüklendiğinde çalışmasını istediğimiz fonksiyonları bunun içerisine yazarız. Arrayler, yani diziler `[]` de aslında bizim **render etme şeklimiz**dir. Meselâ arrown function'ın içerisine bir fonksiyon yazdığımızı düşünelim. Bu fonksiyon sayfa her render edildiğinde bir kere çalışır - eğer array'in içerisi boşsa. Biz bu fonksiyonun nasıl, kaç kere vb. çalışacağını array içerisinden belirtiriz.

Meselâ elimizde aşağıdaki gibi bir kod olsun:

```js
import { useEffect, useState } from 'react';

function App() {

  const [status, setStatus] = useState("başlangıç değeri");

  useEffect(() => {
    setStatus("yenilendikten sonra görünecek olan status yazısı")
  }, []);

  return (
  
    <div>
      {status}
    </div>
  )
}

export default App;

```

Burada uygulamaya en nihayetinde bir div döndürüyoruz ve bu div, `status` değişkeni oluyor. `status` değişkenine baktığımızda da `useState` hook'unu kullandığını görüyoruz ve `status` değişkeninin `initial state`'i ise "başlangıç değeri" olarak belirlenmiş. Daha sonra ise `useEffect` hook'u kullanılıyor ve `status`un state'i `setStatus` ile değiştiriliyor. Bundan böyle sayfa yenilendiğinde `status`un değeri başka olacaktır.

Başka bir örnek verelim:

```js
import { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('https://api.example.com/data');
      const data = await response.json();
      setData(data);
    }
    fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }

  return <div>{data}</div>;
}


export default App;

```

Daha basit bir örnek verelim:

```js
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

```

Buradaki ilk `useEffect` hook'u sayfa her render edildiğinde çalışır. İkinci `useEffect` hook'u ise yalnızca `count`'ın state'i değiştiğinde çalışır.

Başka bir örneğe daha bakalım:

```js
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  return (
    <div>
      <p>You clicked the button {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}

export default App;

```

Yukarıdaki örnekte de sayfanın başlığını/title'ını `count` değişkeninin state'i olarak belirliyoruz.

## 6) `Hooks` kullanımları: `useRef`

`useRef`in kullanımı aslında bir HTML elementini JavaScript DOM'u üzerinden seçmeye benzer. Meselâ biz JavaScript kullanarak `input` id'sine sahip bir input alanını, meselâ bir textbox'ı seçmek istediğimizde aslında aşağıdaki gibi bir şey yapmamız gerekiyor:

HTML kodu:

```html
<input type="textbox" id="input" placeholder="search"> Ara... </input>
```

JavaScript kodu:

```js
const input = document.getElementById("input")
```

İşte React'teki `useRef` hook'uyla DOM elemanları üzerinde işlem yapabiliyoruz. Meselâ elimizde aşağıdaki gibi bir kod olsun:

```js
import { useEffect, useRef, useState } from 'react';

function App() {
  const [status, setStatus] = useState("status'un ilk hâli");
  const firstRef = useRef();

  useEffect(() => {
    setStatus("status'un set edilmiş hâli")
  }, [])

  console.log('Ref örneğimiz: ', firstRef.current);
  // Ref örneğimiz:  <input placeholder=​"useRef ile referans aldığımız element.. '.current' ile de ilk key'e ulaşıyoruz">​
    return (
      <>
      <div>{status}</div>
      <input ref={firstRef} placeholder="useRef ile referans aldığımız element.. '.current' ile de ilk key'e ulaşıyoruz"/>
      </>
    );
}

export default App;

```

Burada `firstRef` değişkeni tanımlıyoruz ve buna `useRef` hook'unu atıyoruz. Daha sonra bu `firstRef` değişkenini `return` içerisindeki `input`a `ref` özelliği olarak veriyoruz. Bundan böyle `firstRef` ile `input` elementine ulaşabiliriz.

Başka bir örnek:

```js
import { useEffect, useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  function handleClick() {
    setCount(count + 1);
    countRef.current = countRef.current + 1;
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>Count (ref): {countRef.current}</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
}

export default App;

```

Başka bir örnek daha:

```js
import { useEffect, useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const prevCountRef = useRef();

  useEffect(() => {
    prevCountRef.current = count;
    console.log( 'useEffect ile başladığında ilk prevCountRef değeri: ', prevCountRef);
  }, [count]);

  let message = '';
  if (prevCountRef.current !== undefined) {
    if (count > prevCountRef.current) {
      message = 'Count increased';
    } else {
      message = 'Count decreased';
    }
  }

  return (
    <div>
      <p>Count: {count}</p>
      <p>{message}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>Decrement</button>
    </div>
  );
}

export default App;

```

Başka bir örnek daha:

```js
import { useEffect, useRef, useState } from 'react';

function App() {
  const inputRef = useRef(null);

  // buton'a tıklandığında referansa focus etsin
  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input type="text" ref={inputRef} />
      <button onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default App;

```

## 7) `Hooks` kullanımları: `useMemo`

Yapı olarak `useEffect`'e benzer. Sayfaya çekilen veriyi **bir kere** çeker ve onu hafızada tutar. Sayfayı komple render etmiş olsak bile biz bu hook aracılığıyla o veriyi çekip istediğimiz zaman kullanabiliriz. Meselâ elimizde aşağıdaki gibi bir kod olsun:

```js
import { useEffect, useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  const func = (num) => {
    console.log('hesaplanıyor.... : ');
    for (let i = 0; i < 10000000000000; i++) {
      console.log(i);
      num++;
    }
    return num;
  };

  const memo = func(count);

  return (
  <>
  {memo}
  </>
  )
}

export default App;

```

Bu kod aslında çok büyük bir sayıya kadar hep işlem yapıyor ve bu da uygulamanın donmasına, kasmasına sebep oluyor. İşte bu tür sorunlarla karşılaşmamak için `useMemo` hook'u kullanılmaktadır. Meselâ elimizde aşağıdaki gibi bir kod olsun:

```js
import { useMemo, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const func = (num) => {
    console.log('hesaplanıyor.... : ');
    for (let i = 0; i < 10000; i++) {
      console.log(i);
      num++;
    }
    return num;
  };

  // useMemo syntax: useMemo(() => first, [second])
  // burada aslında şunu demiş oluyoruz: sayfada hangi render işlemi yapılırsa yapılsın (bu örnekte setText değeri değiştikçe sayfa render oluyor) "count" değerinde bir değişiklik olmadığı sürece count'u render etme. Yani yukarıdaki for döngüsü her render işleminde çalışmış olmayacak - count ile ilgili render işlemleri hariç.
  const memo = useMemo( () => func(count), [count]);

  return (
  <>
  {memo}
  <input value={text} onChange={e => setText(e.target.value)} placeholder='ara'/>
  </>
  )
}

export default App;

```

Bu örnekte aslında şunu yapmış oluyoruz: sayfada hangi render işlemi yapılırsa yapılsın (bu örnekte `setText` değeri değiştikçe sayfa render oluyor) `count` değerinde bir değişiklik olmadığı sürece `count`'u render etme. Yani yukarıdaki `for` döngüsü her render işleminde çalışmış olmayacak - `count` ile ilgili render işlemleri hariç.

Eğer biz,

```js
const memo = func(count);
```

kodu bu şekilde yazmış olsaydık, `input`'a girilen her değerde `count` yeniden render edilecekti ve bu da en nihayetinde kasmayla/yavaşlamayla nihayetlenecekti. Ancak biz `useMemo` hook'unu kullanarak `count`'u bir kez render etmiş oluyoruz ve artık `count` ile ilgili bir işlem olmadığı sürece `count` yeniden render edilmeyecektir.

Eğer biz kodu yukarıdaki gibi değil de aşağıdaki gibi yapsaydık:

```js
const memo = useMemo( () => func(count), [text]);
```

Bu durumda `input`'a girilen her `text` değiştiğinde bu fonksiyon yeniden çalışırdı. Yani `array` içerisinde belirttiğimiz değer/eleman, `useMemo` hook'unun ne zaman devreye gireceğini belirtir.

## 8) `React Router Dom` nedir? Ne işe yarar?

Öncelikle terminale `npm i react-router-dom` yazarak paketimizi kuruyoruz.

Devam etmeden önce ufak bir trick göstermek istiyorum.

#### **TRICK:** Yeni açtığımız bir `.jsx` dosyasına `rafce` yazıp tab'a/enter'a bastığımızda bizim için otomatik olarak şöyle bir şablon oluşturur:

```js
import React from 'react'

const DOSYAISMI = () => {
  return (
    <div>Home</div>
  )
}

export default Home
```

Routing işlemlerini yapabilmek için öncelikle `App.js`imizin içerisine import işlemi yapıyoruz:

```js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
```

Routing işlemleri genelde şöyle bir template üzerinden işlemektedir:

```js
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="details" element={<Details />} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
```

Routing işlemleri için `src` klasörünün içerisine `pages` adında bir klasör oluşturuyoruz. Bu klasör içerisine de sayfalarımızı oluşturabiliriz. Meselâ `Home.jsx` adında bir dosya oluşturduk:

```js
import React from 'react'

export const Home = () => {
  return (
    <div>Home</div>
  )
}

export default Home
```

Aynı şekilde `Detail.jsx` adında bir dosya daha oluşturalım:

```js
import React from 'react'

export const Detail = () => {
  return (
    <div>Detail</div>
  )
}

export default Detail
```

Bundan böyle `/` adresine gittiğimizde `Home.jsx` sayfasını, `/details` adresine gittiğimizde ise `Detail.jsx` sayfasını göreceğiz. Özetlemek gerekirse: Routing işlemleri yapabilmek için `Routes` içerisinde `Route`'ları tanımlıyoruz. `Route`'ların içerisinde `path` ve `element` adında iki prop var. `path` prop'u ile hangi adreslere gittiğimizde hangi sayfayı göreceğimizi belirliyoruz. `element` prop'u ile de hangi sayfayı göstereceğimizi belirtiyoruz. 

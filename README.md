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

## *4)* `Map` kavramı hakkında: `Map` nedir? Ne iş yapar?

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

## 5)
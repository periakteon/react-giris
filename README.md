# react-giris

React giriş notları: https://www.youtube.com/watch?v=u2B75HWI2JI&amp;t=1432s


# Önemli React Notları

1) React, `component` mantığıyla çalışır. Yani, birden çok küçük parçaların birleştirilmesi esastır. Mesela bir sitenin birden çok sayfa yapısı olabiliyor. Ürünü sepete ekleme, anasayfa, ürün detayı görüntüleme vb. Bunların hepsi esasen `component` mantığını ihtiva eder. Tüm kodları `App.js` içerisine yazmamak için kodları parçalara bölüyoruz.

***

2) Yazılan `component`leri de uygulama içerisinde <ComponentName/> şeklinde import edebiliyoruz. Tabii bunu yaparken ilgili `component`in içerisinde `export default ComponentName` yazılı olmalıdır.

***

3) `Props` nedir? `Props geçme` nedir?

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

1. `<Masum`dan sonra gelen `propsIcınBoyleYapiyoruz` ifadesi tamamen keyfidir. Biz bunu istediğimiz şekilde değiştirebiliriz. Meselâ `props` da yazabiliriz kısaltma amacıyla. `propsIcınBoyleYapiyoruz` ifadesine değer olarak yukarıda oluşturduğumuz `propsDeneme` değişkenini veriyoruz. Burada **dikkat** edilmesi gereken, bu değişkeni verirken **süslü parantez** içerisinde vermemiz. Yani: `{propsDeneme}` şeklinde veriyoruz.

2. Verdiğimiz bu `props`u `Masum` adındaki `component`te nasıl kullanacağız peki? `Masum.jsx` dosyamız şu şekilde olsun:

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
3. Görüldüğü üzere, `Masum` adındaki fonksiyona argüman olarak **süslü parantez içerisinde** `propsIcınBoyleYapiyoruz` adındaki `props` ismini yazıyoruz. Yani `Masum` adındaki arrow fonksiyona argüman olarak `propsIcınBoyleYapiyoruz` adındaki `props`u `props geçiyoruz`.`Masum` adındaki fonksiyon bundan sonra, `propsIcınBoyleYapiyoruz` adındaki `props`u almış olacak ve biz de bu `component`te, yani `Masum.jsx` dosyasının içerisinde `App.js` dosyasının içerisinde tanımladığımız `propsDeneme` değişkenini kullanabileceğiz.

Tüm bunları birlikte çalıştırdığımızda, aşağıdaki gibi bir ekranla karşı karşıya kalırız:

```
Masum componenti denemesi
Ayrıca gelen props'u şöyle kullanıyoruz: props mantığı: ben bir propsum
```

***

4) 
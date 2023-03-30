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

import { useState } from 'react';
import ArrayExample from './components/Array.jsx';
import CountExample from './components/Count.jsx';
import Deneme from './components/Deneme.jsx';
import Masum from './components/Masum.jsx';
import ObjectExample from './components/Object.jsx';
import StringExample from './components/Text.jsx';

function App() {

  // "useState" hook'u bir başlangıç hâli (initial state) alıyor
  // bu şu anlama geliyor: ben bir "count" oluşturacağım ve başlangıç değeri olarak da "0" vereceğim. "setCount" ne peki? "setCount" ise kendisi aracılığıyla "count"un içerisini güncelleyeceğimiz fonksiyon.
  const [countt, setCountt] = useState(0);
  console.log('count: ', countt); // 0

  // useState hook'u String de alabilir
  const [stringAlanHook, setStringAlanHook] = useState('Bu Hook string bir değer alıyor');
  console.log('string: ', stringAlanHook); // string: Bu Hook string bir değer alıyor

  // useState hook'u nesne de alabilir 
  const [nesneAlanHook, setNesneAlanHook] = useState( {name: 'Nesne alan Hook',} );
  console.log('nesne: ', nesneAlanHook); // nesne: {name: 'Nesne alan Hook'}

  // useState hook'u nesne de alabilir
  const [arrayAlanHook, setArrayAlanHook] = useState( ['array alan bir Hook'] );
  console.log('array: ', arrayAlanHook); // array: ['array alan bir Hook']

  return (
    <div className='app'>
      <div>String Hook'u:</div>
      <StringExample/>
      <hr></hr>
      <div>Number Hook'u</div>
      <CountExample/>
      <hr></hr>
      <div>Array Hook'u</div>
      <ArrayExample/>
      <hr></hr>
      <div>Object Hook'u</div>
      <ObjectExample/>
    </div>
  );
}

export default App;

import Deneme from './components/Deneme.jsx';
import Masum from './components/Masum.jsx';

function App() {
  const propsDeneme = 'props mantığı: ben bir propsum';

  const arr = [
    { name: 'array 1', id: 0 },
    { name: 'array 2', id: 1 },
    { name: 'array 3', id: 2 },
  ];

  const clickFunction = () => {
    console.log('butona tıklandı');
  };
  return (
    <div className='app'>
      <Masum propsIcınBoyleYapiyoruz={propsDeneme} />
      <Deneme />
      {
        arr.map((ar, i) => (
          <div key={i}>{ar.name}</div>
        ))
      }
      <button onClick={clickFunction}>tıkla bana</button>
    </div>
  );
}

export default App;

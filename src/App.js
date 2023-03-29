import Deneme from "./components/Deneme.jsx";
import Masum from "./components/Masum.jsx";

function App() {
  const propsDeneme = "props mantığı: ben bir propsum"

  const clickFunction = () => {
    console.log("butona tıklandı");
  }
  return (
    <div className="app">
      <Masum propsIcınBoyleYapiyoruz = {propsDeneme}/>
      <Deneme/>

      <button onClick={clickFunction}>tıkla bana</button>
    </div>
  );
}

export default App;
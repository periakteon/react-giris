import Deneme from "./components/Deneme.jsx";
import Masum from "./components/Masum.jsx";

function App() {
  const propsDeneme = "props mantığı: ben bir propsum"
  return (
    <div className="app">
      <Masum propsIcınBoyleYapiyoruz = {propsDeneme}/>
      <Deneme/>
    </div>
  );
}

export default App;
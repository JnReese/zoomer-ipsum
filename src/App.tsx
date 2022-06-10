import "./App.css";
import InputAndButtons from "./components/InputAndButtons";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <div className="zoom__container">
        <Header type="Zoomer Ipsum" />
        <InputAndButtons type="zoomer" />
      </div>
      <div className="boom__container">
        <Header type="Boomer Ipsum" />
        <InputAndButtons type="boomer" />
      </div>
    </div>
  );
}

export default App;

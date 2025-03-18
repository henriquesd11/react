import './App.css';
import FirstComponent from "./components/FirstComponent";
import Images from "./components/Images";
import Hooks from "./components/Hooks";
import List from "./components/List";
import RenderCond from "./components/RenderCond";
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
        <FirstComponent/>
        <Images />
        <Hooks />
        <List />
        <RenderCond x={5}/>
    </div>
  );
}

export default App;

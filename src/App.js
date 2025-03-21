import './App.css';
import FirstComponent from "./components/FirstComponent";
import Images from "./components/Images";
import Hooks from "./components/Hooks";
import List from "./components/List";
import RenderCond from "./components/RenderCond";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ContainerFooter from "./components/ContainerFooter";
function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
        <FirstComponent />
        <Images />
        <Hooks />
        <List />
        <RenderCond x={5}/>
        <Fragment />
        <Container>
          <h1>Esté é conteudo pelo filho do container</h1>
        </Container>
        <ContainerFooter>
            <h1>Este é mais um conteudo para container exemples</h1>
        </ContainerFooter>
    </div>
  );
}

export default App;

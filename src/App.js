import Header from './components/main/Header'
import Footer from './components/main/Footer'
import Main from './components/main/Main'
import Starfield from './components/starfield'
import "./styles/animations.css";

function App() {
  return (
    <div className="App">
      
      <Header></Header>
      <Main></Main>
      <Footer></Footer>

      <Starfield></Starfield>

    </div>
  );
}

export default App;

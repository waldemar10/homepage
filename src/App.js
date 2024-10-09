import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Main from './components/layout/Main'
import Starfield from './components/effects/Starfield'
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

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Impressum from "./pages/Impressum";
import Home from "./pages/Home";
import "./styles/animations.css";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>

        <Route path="/privacyPolicy" element={<PrivacyPolicy />} />
        <Route path="/impressum" element={<Impressum />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;

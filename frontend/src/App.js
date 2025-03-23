import { HashRouter as Router, Route, Routes } from "react-router-dom";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Impressum from "./pages/Impressum";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Header from "./components/layout/Header";
import "./styles/main.scss";

function App() {
  return (
    <Router>
      <Header />
      <div className="layout">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="privacyPolicy" element={<PrivacyPolicy />} />
          <Route path="impressum" element={<Impressum />} />
          <Route path="contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

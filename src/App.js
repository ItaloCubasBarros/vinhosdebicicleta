import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Sobre from "./pages/Sobre"
import Home from './pages/Home'
import Clube from "./pages/Clube"

import NavBar from './Components/NavBar'
import Container from "./Components/Container"


function App() {
  return (
    <div className="App">
      <Router>
          
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Sobre" element={<Sobre />} />
              <Route exact path="/Clube" element={<Clube />} />
            </Routes>
      </Router>
    </div>
  );
}
export default App;
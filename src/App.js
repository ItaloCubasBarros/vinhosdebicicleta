import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Sobre from "./pages/Sobre"
import Home from './pages/Home'
import NavBar from './Components/NavBar'
import Container from "./Components/Container"


function App() {
  return (
    <div className="App">
      <Router>
          
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/Sobre" element={<Sobre />} />
            </Routes>
      </Router>
    </div>
  );
}
export default App;
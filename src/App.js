import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './pages/Home'
import NavBar from './Components/NavBar'
import Container from "./Components/Container"

function App() {
  return (
    <div className="App">
      <Router>
          <NavBar />
          <Container>
            <Routes>
              <Route exact path="/" element={<Home />} />
            </Routes>
          </Container>
      </Router>
    </div>
  );
}
export default App;
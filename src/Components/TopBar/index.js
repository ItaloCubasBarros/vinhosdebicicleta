
import React, {useState} from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown,Form, FormControl, Button } from 'react-bootstrap';
import './TopBar.css'


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';

import logo from '../images/logo-top1.jpg';

function TopBar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
    <div className="text-center">
        <img src={logo} width={160} height={125}></img>
      </div>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <div className='Search'>
        <Form inline>
            <FormControl type="text" placeholder="Encontre seu vinho..." className="mr-sm-2" />
            <Button variant="outline-primary"><FontAwesomeIcon className="SearchIcon" size='30px' icon={faSearch} /></Button>
          </Form>
          </div>
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Clube de Assinatura
            </a>
          </li>
          <NavDropdown
              title="Vinhos"
              id="basic-nav-dropdown"
              show={showDropdown}
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <NavDropdown.Item href="#">VINHOS EM OFERTA</NavDropdown.Item>
              <NavDropdown.Item href="#">MELHORES DO ANO 2023</NavDropdown.Item>
              <NavDropdown.Item href="#">FESTIVAL DE VERÃO 2024</NavDropdown.Item>
              <NavDropdown.Item href="#">VINHOS PARA INICIANTES</NavDropdown.Item>
              <NavDropdown.Item href="#">DICAS PARA DIAS QUENTES</NavDropdown.Item>
              <NavDropdown.Item href="#">MAIS VENDIDOS</NavDropdown.Item>
              <NavDropdown.Item href="#">TODOS OS VINHOS</NavDropdown.Item>
            </NavDropdown>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Sobre
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pagina 1
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pagina 2
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pagina 3
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pagina 4
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Pagina 5
            </a>
          </li>
        </ul>
        <div className="user-links">
        <Nav.Link href="#"><FontAwesomeIcon icon={faUser} /> Login </Nav.Link>
        <Nav.Link href="#"><FontAwesomeIcon icon={faShoppingCart} />Carrinho </Nav.Link>
        </div>
      </div>
    </div>
  </nav>
  </>
  )
}

export default TopBar
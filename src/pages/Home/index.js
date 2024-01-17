//index.js do HOME
import React, {useState} from 'react'
import TopBar from '../../Components/TopBar'

import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

import './Home.Components.css';
function Home() {
  return (
    <div>
      <TopBar></TopBar>

      <Carousel className="fullscreen-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.betalabs.net/production/vinhosdebicicleta/extra_fields/492/phpXPNjKG1705513344.png"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.betalabs.net/production/vinhosdebicicleta/extra_fields/492/phpkLkt0r1704370469.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.betalabs.net/production/vinhosdebicicleta/extra_fields/492/phpovkxMZ1704370690.png"
          alt="Third slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.betalabs.net/production/vinhosdebicicleta/extra_fields/492/phpgXMgoN1675275191.png"
          alt="Fourth slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://assets.betalabs.net/production/vinhosdebicicleta/extra_fields/492/phpKM2AmS1675275147.png"
          alt="Fifth slide"
        />
      </Carousel.Item>
    </Carousel>

    </div>
  )
}

export default Home
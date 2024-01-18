//index.js do HOME
import React, { useState } from 'react'
import TopBar from '../../Components/TopBar'

import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import { Image } from 'primereact/image';
import { Card } from 'primereact/card';
import { Button } from 'primereact/button';

import Container from '../../Components/Container';

import './Home.Components.css';
function Home() {


  //Algumas informções para o cards.
  const cardData = [
    {
      id: 1,
      image: 'https://assets.betalabs.net/production/vinhosdebicicleta/extra_fields/488/phpa4vQsv1702492614.png',
      title: 'Produto 1',
      description: 'Descrição do Produto 1',
    },
    {
      id: 2,
      image: 'https://assets.betalabs.net/production/vinhosdebicicleta/extra_fields/488/phpG0UUR31702493039.png',
      title: 'Produto 2',
      description: 'Descrição do Produto 2',
    },
    {
      id: 3,
      image: 'https://assets.betalabs.net/production/vinhosdebicicleta/extra_fields/488/phprGam601705012505.png',
      title: 'Produto 3',
      description: 'Descrição do Produto 3',
    },
    {
      id: 4,
      image: 'https://assets.betalabs.net/production/vinhosdebicicleta/extra_fields/488/phpSEEqIT1702492846.png',
      title: 'Produto 4',
      description: 'Descrição do Produto 4',
    },

  ];

  const kitData = [
    {
      id: 1,
      image: 'https://assets.betalabs.net/production/vinhosdebicicleta/extra_fields/488/phpZY0LvS1705581297.png',
      title: 'Produto 1',
      description: 'Descrição do Produto 1'
    },
    {
      id: 2,
      image: 'https://assets.betalabs.net/production/vinhosdebicicleta/extra_fields/488/phpvv4AmZ1705581229.png',
      title: 'Produto 1',
      description: 'Descrição do Produto 1'
    },
    {
      id: 3,
      image: 'https://assets.betalabs.net/production/vinhosdebicicleta/extra_fields/488/phpa4CR1c1701887238.png',
      title: 'Produto 1',
      description: 'Descrição do Produto 1'
    },
    {
      id: 4,
      image: 'https://assets.betalabs.net/production/vinhosdebicicleta/extra_fields/488/phpJ50doJ1705580829.png',
      title: 'Produto 1',
      description: 'Descrição do Produto 1'
    },
  ]

  return (
    <>

      <TopBar />


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


      <div className="mt-1 d-flex justify-content-center align-items-center">
        <img
          src="https://assets.betalabs.net/production/vinhosdebicicleta/images/stores/1/home-YT.jpg"
          alt="Image"
          style={{ maxWidth: '80%', marginRight: '0.5rem', }}
        />
        <img
          src="https://assets.betalabs.net/production/vinhosdebicicleta/images/stores/1/home-Clube.jpg"
          alt="Image"
          style={{ maxWidth: '80%' }}
        />
      </div>

      {/* Embaixo das imagens e carousel */}

      <div className='container'>
        <Image src="https://assets.betalabs.net/production/vinhosdebicicleta/images/stores/1/t-homeofertas.png"
          alt="Image" width="45%"
          style={{
            marginTop: '300px', marginLeft: '350px',
          }}
        />
      </div>
      <div className="container mt-4">
        <div className="row">
          {cardData.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <img
                src={product.image}
                alt={product.title}
                style={{ maxWidth: '50%', height: 'auto', marginLeft: '50px' }}
              />
              <Card
                title={product.title}
                subTitle={product.description}
                style={{ width: '50%', maxWidth: '200px', margin: '0 auto' }}
              >
                <div className="text-center mt-4">
                  <button className="btn btn-primary">Comprar</button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>



      <div className="red-line">
        <p className="placeholder-text">Confira nossa seleção completa de rótulos</p>
        <Button label="Loja Online" className="p-button-secondary" />
      </div>

      <div className='container'>
        <Image src="https://assets.betalabs.net/production/vinhosdebicicleta/images/stores/1/t-homekits.png"
          alt="Image" width="35%"
          style={{
            marginTop: '300px', marginLeft: '390px',
          }}
        />
      </div>

      <div className="container mt-4">
        <div className="row">
          {kitData.map((product) => (
            <div key={product.id} className="col-md-3 mb-4">
              <img
                src={product.image}
                alt={product.title}
                style={{ maxWidth: '80%', height: 'auto', marginLeft: '80px' }}
              />
              <Card
                title={product.title}
                subTitle={product.description}
                style={{ width: '80%', maxWidth: '200px', margin: '0 auto' }}
              >
                <div className="text-center mt-4">
                  <button className="btn btn-primary">Comprar</button>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>


    </>
  )
}

export default Home
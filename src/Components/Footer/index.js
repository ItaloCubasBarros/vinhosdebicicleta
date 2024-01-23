import React from "react";
import './Footer.css'


import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Navbar, Nav, NavDropdown, Form, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'primereact/button';
// import { Link } from "react-router-dom";
// import { Navbar, Nav, NavDropdown,Form, FormControl,} from 'react-bootstrap';

function Rodape() {
    return (
        <>
            {/* <div className="newsletter-line">
                <p className="newsletter-text">NEWSLETTER</p>
                <p className="newsletter-text-2">Receba nossas novidades e promoções por email
                </p>
                <div className="form">
                    <Form inline>
                        <FormControl type="text" placeholder="Digite seu E-Mail..." className="mr-sm-2" />
                    </Form>
                </div>
            </div> */}

            <footer className="footer">
                <div className="container">
                    <div className="row">
                        <div className="footer-col">
                            <h4>Minha Conta</h4>
                            <ul>
                                <li><a href="#">Meus Pedidos</a></li>
                                <li><a href="#">Termos de Uso</a></li>
                                <li><a href="#">Entrega</a></li>
                                <li><a href="#">Privacidade</a></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4>Atendimento</h4>
                            <ul>
                                <h5 className="horario">Horário de Atendimento (Whatsapp e Telefone):
                                    De segunda a sexta, das 10h às 19h</h5>
                                <h5 className="number">(99) 9999-9999</h5>
                                <li><a href="#">(99) 9999-9999</a></li>
                                <li><a href="#">contato@vinhosdebicicleta.com.br</a></li>
                                <i className="pi pi-youtube" style={{ color: '#87212E', fontSize: '20px' }}></i>
                                <i className="pi pi-instagram" style={{ color: '#87212E', fontSize: '20px' }}></i>
                                <i className="pi pi-facebook" style={{ color: '#87212E', fontSize: '20px' }}></i>
                                <i className="pi pi-whatsapp" style={{ color: '#87212E', fontSize: '20px' }}></i>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <p className="Adress1">Avenida Doutor Adhemar de Barros, 999     - Vila Ema
                                São José dos Campos - SP - CEP 9999999
                            </p>
                            <p className="Adress2">VINHOS DE BICICLETA COMÉRCIO DE BEBIDAS LTDA
                                CNPJ: 99999999999</p>


                        </div>
                        <div className="footer-col">

                            <div className="social-links">
                                <img className="img-1" src="https://assets.betalabs.net/production/vinhosdebicicleta/images/stores/1/img-pagamento2.png" />
                                <img className="img-2" src="https://assets.betalabs.net/production/vinhosdebicicleta/images/stores/1/img-seguranca.png" />
                                <img className="img-3" src="https://assets.betalabs.net/production/vinhosdebicicleta/images/stores/1/logo-konduto.png" />

                            </div>
                        </div>
                        <div className="text">
                            <h5>SE BEBER, NÃO DIRIJA. APRECIE COM MODERAÇÃO. A VENDA DE BEBIDAS ALCOÓLICAS É PROIBIDA PARA MENORES DE 18 ANOS.
                            </h5>
                        </div>
                        <div className="img">
                            <img className="image-1" src="https://assets.betalabs.net/production/vinhosdebicicleta/images/stores/1/logovermelho.png" />
                            <img className="image-2" src="https://assets.betalabs.net/production/vinhosdebicicleta/images/stores/1/logo-followup.png" />
                            <img className="image-3" src="https://assets.betalabs.net/production/vinhosdebicicleta/images/stores/1/logo-wikt.png" />
                        </div>
                    </div>
                </div>



            </footer>
        </>
    )
}

export default Rodape
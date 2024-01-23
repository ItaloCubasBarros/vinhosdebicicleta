import React, { useState } from 'react'

import './Clube.Component.css'
import TopBar from '../../Components/TopBar';
import Rodape from '../../Components/Footer';
import PricingCard from '../../Components/PricingCard';
import DepoimentoCard from '../../Components/Depoimento';


import { Image } from 'primereact/image'
import { Rating } from 'primereact/rating';
import { FaCheck, FaTimes } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";

function Clube() {
    const totalAdvantages = 5; // Número total de vantagens que você deseja mostrar

    const anualAdvantages = ["Vantagem 1", "Vantagem 2", "Vantagem 3", "Vantagem 4", "Vantagem 5"];
    const semestralAdvantages = ["Vantagem 1", "Vantagem 2", "Vantagem 3", "Vantagem 4", "Vantagem 5"];
    const mensalAdvantages = ["Vantagem 1", "Vantagem 2", "Vantagem 3", "Vantagem 4", "Vantagem 5"];

    const includedAdvantagesAnual = [0, 1, 2, 3, 4, 5];
    const includedAdvantagesSemestral = [0, 1, 2, 3];
    const includedAdvantagesMensal = [0, 1, 2];

    const depoimentos = [
        { texto: "Adorei as vantagens exclusivas!",nome:"John Doe", estrelas: 5 },
        { texto: "Excelente atendimento ao cliente.",nome:"John Doe", estrelas: 5 },
        { texto: "Os produtos são de alta qualidade.",nome:"John Doe", estrelas: 5 },
        { texto: "Frete rápido e seguro.",nome:"John Doe", estrelas: 5 },
        { texto: "Recomendo a todos os meus amigos.", nome:"John Doe", estrelas: 5 },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
    };

    return (
        <>
            <TopBar />
            <div className='container-fluid p-3 bg-dark-subtle'>
                <div className='row'>
                    <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                        <div className='text-area'>
                            <h3 className='text-danger-emphasis'>Bem-vindo ao Clube de Assinatura</h3>
                            <p className='text-break text-danger-emphasis'>
                                Descubra uma experiência única de assinatura. Receba produtos exclusivos e vantagens
                                especiais reservadas para nossos membros.
                            </p>
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-12 mb-4 mb-lg-0'>
                        <div className='image-vinho'>
                            <Image src="https://www.emporiofreicaneca.com.br/wp-content/uploads/2022/11/Kit-Vinho-Norton-Malbec-Doc-750ml-c-Taca-1.png" width='100%' />
                        </div>
                    </div>

                    <div className='col-lg-4 col-md-12'>
                        <div className='text-area'>
                            <h3 className='text-danger-emphasis'>Algumas das Vantagens</h3>
                            <ul className='list-unstyled text-danger-emphasis'>
                                <li>Frete Grátis para todo Brasil</li>
                                <li>Conteúdo exclusivo para assinantes</li>
                                <li>Promoções exclusivas para assinantes</li>
                            </ul>
                            <button type="button" className="btn btn-danger">ASSINE AGORA!</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container-fluid bg-danger'>
                <h1 className='text-center text-light'>Conheça os Planos!</h1>
            </div>
            <div className="pricing-cards-container d-flex justify-content-center">
                <PricingCard
                    title="Anual"
                    price="99.99"
                    advantages={anualAdvantages}
                    includedAdvantages={includedAdvantagesAnual}
                />
                <PricingCard
                    title="Semestral"
                    price="59.99"
                    advantages={semestralAdvantages}
                    includedAdvantages={includedAdvantagesSemestral}
                />
                <PricingCard
                    title="Mensal"
                    price="29.99"
                    advantages={mensalAdvantages}
                    includedAdvantages={includedAdvantagesMensal}
                />
            </div>
            <div className="depoimentos-section">
                <h2 className="text-center text-light">Depoimentos</h2>
                <Slider {...settings}>
                    {depoimentos.map((depoimento, index) => (
                        <DepoimentoCard key={index} texto={depoimento.texto} nome={depoimento.nome} estrelas={depoimento.estrelas} />
                    ))}
                </Slider>
            </div>


            <Rodape />
        </>
    )
}


export default Clube;

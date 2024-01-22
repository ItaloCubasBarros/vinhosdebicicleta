import React, { useState } from 'react'
import TopBar from '../../Components/TopBar'
import RodaPé from '../../Components/Footer';

import './Sobre.Component.css'
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Sobre() {
    return (
        <>
            <TopBar />
            <div style={{ display: 'flex', flexDirection: 'row' }}>
                <div style={{ flex: '1', display: 'flex', flexDirection: 'column' }}>
                    {/* Cada link em um quadrado separado */}
                    <div className='cardStyle'>
                        <Link className='Links'  to="/">Nossa Essência</Link>
                    </div>
                    <div className='cardStyle'>
                        <Link className='Links' to="/">Clube De Asssinatura</Link>
                    </div>
                    <div className='cardStyle'>
                        <Link className='Links' to="/">FAQ Pedidos</Link>
                    </div>
                    <div className='cardStyle'>
                        <Link className='Links' to="/">Entrega</Link>
                    </div>
                    <div className='cardStyle'>
                        <Link className='Links' to="/">Termos e Privacidade</Link>
                    </div>
                    <div className='cardStyle'>
                        <Link className='Links' to="/">Fale Conosco</Link>
                    </div>
                </div>

                <div style={{ flex: '2', padding: '50px', position: 'relative', bottom: '30px', left: '-50px', overflow: 'hidden' }}>
                    {/* Texto "Lorem Ipsum" */}
                    <p className='text-information'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                        Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?</p>
                </div>
            </div>
        

            <RodaPé />
        </>
    )
}

export default Sobre;
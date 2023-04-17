import React from 'react';
import '../styles/sections/Proyectos.css';
import GamarraOnline from '../assets/img/logogamarraonline.png'
import MakiChat from '../assets/img/logomakichat.png'

const Proyectos = () => {
    return(
        <div className='proyectoscont'>
            <h2 className='proyectoscont__titulo'>🤫🤐🔒 TENEMOS NUESTROS PROPIOS PROYECTOS... pero shhh (son secretos). Na, no es cierto... JAKJSAKA 😂🙈🤣</h2>
            <div className='contproyectos'>
                <div className='proyecto gamarra'>
                    <img src={GamarraOnline} alt='gamarra' className='proyectos__img' />
                    <h3 className='proyecto__titulo'>GAMARRA ONLINE <br /> 👷‍♂️👷‍♀️🚧 EN PROCESO... 🚧👷‍♀️👷‍♂️ </h3>
                </div>
                <div className='proyecto makichat'>
                    <img src={MakiChat} alt='gamarra' className='proyectos__img' />
                    <h3 className='proyecto__titulo'>MAKI CHAT <br /> 👷‍♂️👷‍♀️🚧 EN PROCESO... 🚧👷‍♀️👷‍♂️ </h3>
                </div>
            </div>
        </div>
    );
}

export default Proyectos;
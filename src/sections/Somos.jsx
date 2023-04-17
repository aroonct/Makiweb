import React from 'react';
import '../styles/sections/Somos.css';
import ImgSomos from '../assets/img/makisomos.png'
import ImgCaja from '../assets/img/makicaja.png';

const Somos = () => {
    return (
        <div className="somoscont">
        <div className='somos'>
            
            <div className='somos__content'>
            <h1 className='somos__content__titulo'>Somos Maki</h1>
                <p className='somos__content__parrafo'>
                👋🎉👨‍💻👩‍💻🎨 ¡Bienvenidxs a Maki, la agencia de desarrollo de software y diseño digital donde la locura es nuestra herramienta principal! 🎨👩‍💻👨‍💻🎉👋 Somos un equipo de mentes creativas y apasionadas que trabajan juntas para hacer realidad lo que el mundo cree imposible. 💡💪🚀
                </p>
                <div className='somos__contimg'>
                    <img src={ImgSomos} alt='maki diseño' border='0' className='somos__img' />
                </div>
            </div>
            <div className="somos__content caja">
                <p className='somos__contentcaja__parrafo'>
                👉🚪📦💭 En Maki, no nos conformamos con lo ordinario. Nos encanta pensar fuera de la caja y hacer cosas que otrxs piensan que son imposibles, siempre estamos buscando la siguiente gran idea. 💡👀💪
                </p>
                <img src={ImgCaja} alt='maki diseño' border='0' className='somos__img' />
            </div>
        </div>
        </div>
    );
};

export default Somos;
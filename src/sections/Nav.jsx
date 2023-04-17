import React from 'react';
import '../styles/sections/Nav.css';
import { SiWhatsapp } from 'react-icons/si';
import LogoSmall from '../assets/img/logosmall.png';
import DecoraNav from '../assets/img/decorationnav.png';

const Nav = () => {
    return (
        <div className='contnav'>
            <div className='contnav__contlogo'>
                <img src={LogoSmall} alt='logo maki software diseño' className='contnav__logo' />
            </div>
            <div className='contnav__contfrase'>
                <div className='texto'>
                    <h1 className='texto__titulo'>Software y Diseño</h1>
                </div>
                <div className='imagen'>
                    <img src={DecoraNav} alt='software anime' className='imagen__logo' />
                </div>
            </div>
            <div className='contnav__contbtnwhatsapp'>
                <a href='https://wa.link/5ka2yk' target='_blank' rel='noreferrer' className='contnav__btnwhatsapp'> <SiWhatsapp /> WhatsApp</a>
            </div>
        </div>
    );
}

export default Nav;
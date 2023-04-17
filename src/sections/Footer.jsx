import React from 'react';
import '../styles/sections/Footer.css';
import { SiWhatsapp, SiTiktok } from 'react-icons/si';
import { FaTelegram, FaInstagram } from 'react-icons/fa';
import Footerimg from '../assets/img/imagenfooter.png';

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer__contimg'>
                <img src={Footerimg} alt='maki' className='footer__contimg__imgfooter'/>
            </div>
            <div className='footer__continfo'>
                <h2 className='footer__continfo__title'>👋😢👋 ¡Nos Juimos!</h2>
                <div className='enlacesfooter'>
                    <a href='https://wa.link/5ka2yk' target='_blank' rel='noreferrer' className='enlaces__link w'><SiWhatsapp /></a>
                    <a href='https://www.tiktok.com/@makileando?is_from_webapp=1&sender_device=pc' target='_blank' rel='noreferrer' className='enlaces__link t'><SiTiktok /></a>

                    <a href='https://t.me/+528661353953' target='_blank' rel='noreferrer' className='enlaces__link f'><FaTelegram /></a>
                    <a href='' target='_blank' rel='noreferrer' className='enlaces__link i'><FaInstagram/></a>
                </div>
                <h3 className='footer__continfo__cita'>©2023 Todo lo que hicimos es nuestro - Maki</h3>
            </div>
        </div>
    );
}

export default Footer;
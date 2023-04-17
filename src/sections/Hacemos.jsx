import React from 'react';
import '../styles/sections/Hacemos.css';
import { SiWhatsapp, SiTiktok } from 'react-icons/si';
import { FaTelegram, FaInstagram } from 'react-icons/fa';
import Locuramaki1 from '../assets/img/locuramaki1.png';
import Locuramaki2 from '../assets/img/locuramaki2.png';

const Hacemos = () => {
    return (
        <div className='hacemoscont'>
            <h2 className='hacemoscont__titulo' >🤪🌟💡 En Maki, hacemos cosas locas y nos encanta hacerlas. ¿Tienes una idea loca? ¡Permítenos ayudarte a hacerla realidad! 💡🌟🤪</h2>
            <div className='contenlaeimg'>
            <div className='enlaceseinfo'>
                <div className='enlaces'>
                    <a href='https://wa.link/5ka2yk' target='_blank' rel='noreferrer' className='enlaces__link w'><SiWhatsapp /></a>
                    <a href='https://www.tiktok.com/@makileando?is_from_webapp=1&sender_device=pc' target='_blank' rel='noreferrer' className='enlaces__link t'><SiTiktok /></a>

                    <a href='https://t.me/+528661353953' target='_blank' rel='noreferrer' className='enlaces__link f'><FaTelegram /></a>
                    <a href='' target='_blank' rel='noreferrer' className='enlaces__link i'><FaInstagram/></a>
                </div>
            </div>
            <div className='hacemos__contimg'>
                <img src={Locuramaki1} alt='maki' className='hacemos__img' />
                <img src={Locuramaki2} alt='maki' className='hacemos__img' />
            </div>
            </div>
        </div>
    );
}

export default Hacemos;
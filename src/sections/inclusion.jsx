import React from 'react';
import '../styles/sections/Inclusion.css';
import ImgVegan from '../assets/img/amoranimalmaki.png'
import ImgLgbt from '../assets/img/lgbtmaki.png'

const Inclusion = () => {
    return (
        <div className='inclusioncont'>
            <h2 className='inclusioncont__titulo'>🌟✨💖 En Maki, respetamos y amamos la inclusión 💖✨🌟</h2>
            <div className='inclusioncont__contdivs'>
                <div className='inclusioncont__div'>
                    <img src={ImgVegan} alt='veganismo' className='inclusioncont__div__img' />
                    <h3 className='inclusioncont__div__titulo dt'>🐾🌱💚 Respetamos, defendemos los derechos animales 🐾🌱💚 Y difundimos el veganismo... 🌱🐷🐮🐔🐟🌱</h3>
                </div>
                <div className='inclusioncont__div'>
                    <h3 className='inclusioncont__div__titulo it' >🌈👭👬👫💖 Respetamos y defendemos los derechos de la comunidad LGBT+ 💖👫👬👭🌈</h3>
                    <img src={ImgLgbt} alt='lgbt' className='inclusioncont__div__img' />
                </div>
            </div>
        </div>
    );
}

export default Inclusion;
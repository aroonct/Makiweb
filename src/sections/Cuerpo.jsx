import React from 'react';
import { SiWhatsapp } from 'react-icons/si';
import '../styles/sections/Cuerpo.css'
import imagen1 from '../assets/img/makidecoracion1.png';
import imagen2 from '../assets/img/makidecoracion2.png';
import imagen3 from '../assets/img/makidecoracion3.png';

const Cuerpo = () => {
    return (
        <div className='bodycontent' >
            <div className='bodycontent__content c1'>
                <img src={imagen1} className='imgdeco img1' alt='desarrollo de software' />
            </div>
            <div className='bodycontent__content c2'>
                <div className='contentimg'>
                <img src={imagen2} className='imgdeco img2' alt='ilustracion' />
                </div>
              
                <a href="https://wa.link/5ka2yk" target="_blank" rel="noreferrer" className='bodycontent__content2__btnwhatsapp'> <SiWhatsapp /> WhatsApp</a>
              
            </div>
            <div className='bodycontent__content c3'>
                <img src={imagen3} className='imgdeco img3' alt='anime maki sushi' />
            </div>
        </div>
    );
};

export default Cuerpo;
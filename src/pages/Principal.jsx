import React from 'react';
import Nav from '../sections/Nav';
import Cuerpo from '../sections/Cuerpo';
import Somos from '../sections/Somos';
import Hacemos from '../sections/Hacemos';
import Inclusion from '../sections/inclusion';
import Proyectos from '../sections/Proyectos';
import Footer from '../sections/Footer';

const Principal = () => {
    return (
        <div>
            <Nav />
            <Cuerpo />
            <Somos />
            <Hacemos />
            <Inclusion />
            <Proyectos />
            <Footer />
        </div>
    );
}

export default Principal;
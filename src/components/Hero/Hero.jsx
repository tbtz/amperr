import React from 'react';
import './Hero.scss';
import { Flash } from '../Icons'

function Hero() {
    return (
        <header className='hero'>
            <h1 id='heading'>
                amperr
                <Flash color='#ffc400' />
            </h1>
        </header>
    );
}

export default Hero;
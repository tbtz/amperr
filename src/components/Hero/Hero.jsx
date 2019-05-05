import React from 'react';
import './Hero.scss';
import { Flash } from '../Icons'

class Hero extends React.Component {
    constructor(props) {
        super(props);
        this.hero = React.createRef();
    }

    componentDidMount() {
        window.onresize = () => {
            this.hero.current.style.height = window.innerHeight + 'px';
        }
        window.onresize();
    }

    render() {
        return (
            <header className='hero' ref={this.hero}>
                <h1 id='heading'>
                    amperr
                <Flash color='#ffc400' />
                </h1>
            </header>
        );
    }
}

export default Hero;
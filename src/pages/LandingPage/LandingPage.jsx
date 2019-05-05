import React from 'react';
import './LandingPage.scss';
import Hero from '../../components/Hero/Hero'

export default function LandingPage() {
  return (
    <article className='landingPage'>
      <Hero />
      {/* <section>
        <hr />
        <h2>Hello, it's me<span>!</span></h2>
      </section> */}
    </article>
  );
}

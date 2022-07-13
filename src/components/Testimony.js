import React from 'react';
import '../styles/testimony.css'

export default function Testimony({name, src, country, occupation, company, testimony}) {

  return (
    <section className='testimony-container'>
      <img 
        className='testimony-img'
        src={require(`../img/${src}`)}
        alt={`${name} from ${country}`}
      />
      <article className='container-text-testimony'>
        <p className='name-testimony'><strong>{name}</strong> from {country}</p>
        <p className='occupation'>{occupation} at {company}</p>
        <p className='text-testimony'>{testimony}</p>
      </article>
    </section>
  );
}
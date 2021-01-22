/** @format */

import React from 'react';
import './Action.css';

const Action = ({ data, title, description, items }) => {
     if (!data) return <p>loading ...</p>;
     return (
          <div className='action'>
               <h1 className='action__title'>{title}</h1>
               {description && <p className='action__description'>{data.description}</p>}
               <ul className='action__list'>
                    {items.map((element) => (
                         <li className='action__item' key={element.id}>
                              <div className='action__cover'>
                                   <h1 className='action__cover-title'>{element.title}</h1>
                              </div>
                              <img className='action__image' src={`https://image.tmdb.org/t/p/w200/${element.backdrop_path}`} alt='' />
                         </li>
                    ))}
               </ul>
          </div>
     );
};

export default Action;

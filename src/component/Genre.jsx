/** @format */
import React from 'react';
import './Genre.css';

const Genre = ({ title, genre }) => {
     return (
          <div className='genre'>
               <h1 className='genre__title'>{title}</h1>
               {genre ? (
                    <div className='genre__list'>
                         {genre.map((element) => (
                              <div className='genre__item' key={element.id}>
                                   <p>{element.name}</p>
                              </div>
                         ))}
                    </div>
               ) : (
                    <p>loading genre ...</p>
               )}
          </div>
     );
};

export default Genre;

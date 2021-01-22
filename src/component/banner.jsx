/** @format */
import axios from 'axios';
import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './banner.css';
const API_TOKEN = '65c4433cfe8a206341c20d3329f4a5e7';

const Banner = ({ data }) => {
     const [video, setVideo] = useState();

     const playVideo = async () => {
          const response = await axios.get(`https://api.themoviedb.org/3/movie/${data?.id}/videos?api_key=${API_TOKEN}`);
          if (response.status === 200) {
               console.log(response.data.results[0]?.key);
               setVideo(response.data.results[0]?.key);
          } else console.log(response);
     };

     if (data) {
          const imageUrl = `https://image.tmdb.org/t/p/original/${data?.backdrop_path}`;
          if (video) {
               return (
                    <YouTube
                         videoId={video}
                         opts={{
                              height: '400px',
                              width: '100%',
                              playerVars: {
                                   autoplay: true,
                              },
                         }}
                    />
               );
          } else {
               return (
                    <div className='banner' style={{ backgroundImage: `url(${imageUrl})` }}>
                         <div className='banner__content'>
                              <h1 className='banner__title'>{data?.title}</h1>
                              <p className='banner__overview'>{data?.overview}</p>
                              <button onClick={playVideo} className='banner__play'>
                                   Play
                              </button>
                         </div>
                    </div>
               );
          }
     }
     return null;
};

export default Banner;

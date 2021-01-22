/** @format */

import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Action from './component/Action';
import Banner from './component/banner';
import Genre from './component/Genre';
const API_TOKEN = '65c4433cfe8a206341c20d3329f4a5e7';

const App = () => {
     const [genreMovie, setGenreMovie] = useState();
     const [genreTv, setGenreTv] = useState();
     const [actionSection, setActionSection] = useState();
     const [popular, setPopular] = useState();
     const [topRated, setTopRated] = useState();
     const [upCommingMovie, setUpCommingMovie] = useState();
     const [trandingMovie, setTrandingMovie] = useState();

     useEffect(() => {
          async function loadGnMovie() {
               const response = await axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=${API_TOKEN}`);
               if (response.status === 200) setGenreMovie(response.data.genres);
               else console.log(response);
          }

          async function loadGnTv() {
               const response = await axios.get(`https://api.themoviedb.org/3/genre/tv/list?api_key=${API_TOKEN}`);
               if (response.status === 200) setGenreTv(response.data.genres);
               else console.log(response);
          }

          async function loadAction() {
               const response = await axios.get(`https://api.themoviedb.org/3/list/28?api_key=${API_TOKEN}`);
               if (response.status === 200) setActionSection(response.data);
               else console.log(response);
          }

          async function loadPopular() {
               const response = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${API_TOKEN}`);
               if (response.status === 200) setPopular(response.data.results);
               else console.log(response);
          }

          async function loadTopRated() {
               const response = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_TOKEN}`);
               if (response.status === 200) setTopRated(response.data.results);
               else console.log(response);
          }

          async function loadUpComingMovie() {
               const response = await axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_TOKEN}`);
               if (response.status === 200) setUpCommingMovie(response.data.results);
               else console.log(response);
          }

          async function loadTrendingMovie() {
               const response = await axios.get(`https://api.themoviedb.org/3/trending/movie/day?api_key=${API_TOKEN}`);
               if (response.status === 200) {
                    const results = response.data.results;
                    const randomTrandingNum = Math.floor(Math.random() * (results.length + 1));
                    setTrandingMovie(results[randomTrandingNum]);
               } else console.log(response);
          }

          loadTrendingMovie();
          loadUpComingMovie();
          loadTopRated();
          loadPopular();
          loadAction();
          loadGnTv();
          loadGnMovie();
     }, []);
     return (
          <div>
               <Banner data={trandingMovie} />
               <Genre genre={genreMovie} title='Genre OF Movies' API_TOKEN={API_TOKEN} />
               <Genre genre={genreTv} title='Genre OF Tv' API_TOKEN={API_TOKEN} />
               <Action items={actionSection?.items} description title={`Action Movies - ${actionSection?.created_by}`} data={actionSection} />
               <Action title='Popular Movies' data={popular} items={popular} />
               <Action title='Top Rated Movies' data={topRated} items={topRated} />
               <Action title='Up Comming Movies' data={upCommingMovie} items={upCommingMovie} />
          </div>
     );
};

export default App;

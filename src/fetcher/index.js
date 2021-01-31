/** @format */

import axios from 'axios';

/** @format */
export const API_TOKEN = `65c4433cfe8a206341c20d3329f4a5e7`;
export const GenreMovieDB = `https://api.themoviedb.org/3/genre/movie/list?api_key=${API_TOKEN}`;
export const GenreTvDB = `https://api.themoviedb.org/3/genre/tv/list?api_key=${API_TOKEN}`;
export const ListLoadDB = (id) => `https://api.themoviedb.org/3/list/${id}?api_key=${API_TOKEN}`;
export const PopularMovieDB = `https://api.themoviedb.org/3/movie/popular?api_key=${API_TOKEN}`;
export const TopRatedMovieDB = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_TOKEN}`;
export const UpCommingMovieDB = `https://api.themoviedb.org/3/movie/upcoming?api_key=${API_TOKEN}`;
export const TrendingMovieDB = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_TOKEN}`;
export const MovieDB = (id) => `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${API_TOKEN}`;
export const ImageDB = (src) => `https://image.tmdb.org/t/p/original/${src}`;
export const fetcher = async (...args) => {
     const response = await axios.get(...args);
     if (response.status !== 200) {
          alert('Some Error Happen');
          return;
     }
     return response.data;
};

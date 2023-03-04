import React from 'react';
import TrendingMovieItem from './TrendingMovieItems';
const MovieList = (props) => {
    return (
        <div className='px-36 py-8 bg-gradient-to-r from-[#009FFF] to-[rgb(0,0,0,0.5)]'>
            <h1 className='text-center text-[3rem] mb-8'>Trending Movies</h1>
            <div className='flex'>
                <TrendingMovieItem trendingMovies = {props.trendingMovies} setLikedData={props.setLikedData}/>
            </div>
        </div>
    );
}

export default MovieList;
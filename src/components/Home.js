import React from 'react';
import TrendingMovies from './TrendingMovies'
import TrendingTV from './TrendingTV'
const Home = (props) => {
    return (
        <div className='bg-gradient-to-r from-[#EECDA3] to-[#EF629F] pt-24'>
            <h1 className='text-center text-5xl font-[Poppins]'>Welcome, discover among millions of Movie and TV Shows</h1>
            <input type="text" className='mt-16 mb-24 mx-auto w-[40rem] rounded-xl block p-4 focus:outline-0' autoFocus placeholder='Search for your favourite movies or TV Show. . .'></input>
            <TrendingMovies trendingMovies={props.trendingMovies} setLikedData={props.setLikedData} />
            <TrendingTV trendingMovies={props.trendingMovies} trendingTV={props.trendingTV} setLikedData={props.setLikedData} />
        </div>
    );
}

export default Home;
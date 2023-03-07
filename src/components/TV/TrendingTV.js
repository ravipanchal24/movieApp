import React from 'react';
import TrendingTVItems from './TrendingTVItems';
const MovieList = (props) => {
    return (
        <div className='pt-16 bg-gradient-to-r from-[#1D976C] to-[#93F9B9]'>
            <h1 className='text-center text-[3rem] mb-8'>Trending TV Shows</h1>
            <div className='flex'>
                <TrendingTVItems trendingTV = {props.trendingTV} setLikedData={props.setLikedData}/>
            </div>
        </div>
    );
}

export default MovieList;
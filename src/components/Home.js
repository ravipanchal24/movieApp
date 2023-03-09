import React, { useState, useEffect } from 'react';
import TrendingMovies from './Movie/TrendingMovies'
import TrendingTV from './TV/TrendingTV'
import axios from 'axios';
import { Link } from 'react-router-dom'
const Home = (props) => {
    const [searchInput, setSearchInput] = useState('');
    const [searchResults, setSearchResults] = useState('');

    useEffect(() => {
        (async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/search/multi?api_key=62e96d975b4bc3a23ae1727ea95caf4e&language=en-US&page=1&include_adult=false&query=${searchInput}`);
            setSearchResults(res.data);
        })();
    }, [searchInput]);

    return (
        <div className='bg-gradient-to-r from-[#EECDA3] to-[#EF629F] pt-32'>
            <h1 className='text-center text-5xl font-[Poppins]'>Welcome, discover among millions of Movies and TV Shows</h1>
            <div className='relative '>
                <input onChange={(e) => setSearchInput(e.target.value)} type="text" value={searchInput} className='mt-16 mb-24 mx-auto w-[40rem]  block p-4 focus:outline-0' autoFocus placeholder='Search for your favourite movies or TV Show. . .'></input>
                {searchInput !== '' && searchResults !== '' &&
                    <div className='absolute top-[100%] left-[29%] w-[40rem] z-[10] bg-[rgba(0,0,0,0.3)] text-white p-4 rounded-b-md'>
                        {searchResults.results.length !== 0 ? searchResults.results.map((item, index) =>
                        (
                            <div className=''>
                                {(item.original_language === 'en' || item.original_language === 'hi') &&
                                    <Link to={item.media_type === 'movie' ? `/movie/${item.id}` : `/tv/${item.id}`}>
                                        {item.poster_path &&
                                            <div className='flex items-center gap-4 p-2'>
                                                <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className='w-[10%] h-[15%]' alt='item_poster'></img>
                                                <p className='cursor-pointer '>{item.media_type === 'movie' ? item.original_title ? item.original_title : item.title : item.original_name}</p>
                                            </div>
                                        }
                                    </Link>
                                }
                            </div>
                        )) :
                            <div>
                                <p>No results found</p>
                            </div>}
                    </div>}
            </div>

            <TrendingMovies trendingMovies={props.trendingMovies} setLikedData={props.setLikedData} />
            <TrendingTV trendingMovies={props.trendingMovies} trendingTV={props.trendingTV} setLikedData={props.setLikedData} />
        </div >
    );
}

export default Home;
import React, { useState } from 'react';

const MovieItem = (props) => {

    const [fill, setFill] = useState(false)

    return (
        <div className='flex items-center justify-center gap-[9rem] flex-wrap'>
            {props.trendingTV?.results?.map((item, index) => (
                <div className='text-black w-[270px]' key={index}>
                    <h2 className='text-center text-xl' id="title">{(item.name) ? item.name : item.title}</h2>
                    <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className='h-[20rem] rounded-md my-4 mx-auto cursor-pointer hover:scale-125 transition-transform ease-in-out duration-300' id="poster" alt="movieThumbnail"></img>
                    <span className='flex justify-center items-center gap-4'>
                        <i className='fa-regular fa-clock fa-xl cursor-pointer'></i>
                        <p className='text-center' id="releaseDate">{(item.first_air_date) ? item.first_air_date : item.release_date}</p>
                        <i className={`${(fill) ? "fa-solid" : "fa-regular"} fa-heart fa-xl cursor-pointer text-[red]`} onClick={() => {
                            props.setLikedData(item);
                            setFill(!fill);
                        }}></i>
                    </span>

                </div >
            ))
            }
        </div>
    );
}

export default MovieItem;
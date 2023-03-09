import { useState } from 'react';
const WatchLater = (props) => {
    console.log(props.watchLater);
    return (
        <div className='bg-red-200 p-24'>
            <h1 className='text-center text-3xl mb-16'>Movies and TV Shows that you have added to watch later will appear here</h1>
            <div className='flex items-center justify-center gap-[9rem] flex-wrap'>
                {props.watchLater?.map((item, index) => (
                    <div className='text-black' key={index}>
                        <h2 className='text-center' id="title">{(item.name) ? item.name : item.title}</h2>
                        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`} className='h-[20rem] rounded-md my-4 mx-auto' id="poster" alt="movieThumbnail"></img>
                        <span className='flex justify-center items-center gap-4'>
                            <i className='fa-regular fa-clock fa-xl'></i>
                            <p className='text-center' id="releaseDate">{(item.first_air_date) ? item.first_air_date : item.release_date}</p>
                            <i className='fa-regular fa-heart fa-xl'></i>
                        </span>
                    </div >
                ))
                }
            </div>
        </div>
    );
}

export default WatchLater;
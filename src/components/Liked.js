import { useState } from 'react';
const Liked = (props) => {
    console.log(props.liked);
    return (
        <>
        <h1 className='text-center m-12 text-3xl'>Movies and TV Shows that you have liked will appear here</h1>
            <div className='flex items-center justify-center gap-[9rem] flex-wrap'>
                {props.liked?.map((item, index) => (
                    <div className='text-black w-[270px]' key={index}>
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
        </>
    );
}

export default Liked;
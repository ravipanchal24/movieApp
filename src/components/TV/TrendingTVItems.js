import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MovieItem = (props) => {

    const [fill, setFill] = useState(false)

    return (
        <div className='flex items-center justify-center gap-[7rem] flex-wrap pb-8'>
            {props.trendingTV?.results?.map((item, index) => (
                <div className='text-black ' key={index}>
                    <h2 className="text-center text-2xl w-[370px] h-[2.2rem] overflow-hidden whitespace-nowrap text-ellipsis" id="title">{(item.name) ? item.name : item.title}</h2>
                    <Link to={`/tv/${item.id}`}>
                        {item.poster_path ? <img
                            src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                            alt="tv-poster"
                            className="w-[250px] h-[350px] rounded-md my-4 mx-auto hover:scale-[1.3] transition-transform ease-in-out duration-300"
                        ></img> :
                            <div
                                className="w-[250px] h-[350px] rounded-md border border-black flex items-center justify-center my-4 mx-auto"
                            >
                                <p>Poster Not Available</p>
                            </div>}
                    </Link>
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
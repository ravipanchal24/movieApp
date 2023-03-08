import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
const TvInfo = () => {
    const [TvInfo, setTvInfo] = useState({});
    const [similarTvShows, setSimilarTvShows] = useState({});
    const [watchProvider, setWatchProvider] = useState('');

    const { id } = useParams();

    useEffect(() => {
        (async () => {
            const res = await axios.get(
                `https://api.themoviedb.org/3/tv/${id}?api_key=62e96d975b4bc3a23ae1727ea95caf4e&language=en-US`
            );
            setTvInfo(res.data);
        })();
        (async () => {
            const res = await axios.get(
                `https://api.themoviedb.org/3/tv/${id}/similar?api_key=62e96d975b4bc3a23ae1727ea95caf4e&language=en-US&page=1`
            );
            setSimilarTvShows(res.data);
        })();
        (async () => {
            const res = await axios.get(
                `https://api.themoviedb.org/3/tv/${id}/watch/providers?api_key=62e96d975b4bc3a23ae1727ea95caf4e`
            );
            const countryData = filterObject(res?.data?.results, 'IN');
            const flatrateData = filterObject(countryData.IN, 'flatrate');
            setWatchProvider(flatrateData?.flatrate);
        })();
        (() => {
            window.scrollTo(0, 0);
        })();
    }, [id]);

    const filterObject = (obj, name) => {
        return Object.fromEntries(
            Object.entries(obj).filter(([key, value]) => key === name)
        );
    }

    return (


        <>
            <div className="text-black bg-violet-400 py-[1rem]">
                <div className="flex items-center justify-center gap-16 py-8 px-20 ">
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${TvInfo.poster_path}`}
                        alt="tv-poster"
                        className="w-[300px] h-[450px] rounded-md"
                    ></img>
                    <div>
                        <h1 className="text-3xl my-4">{TvInfo
                            .name}</h1>
                        <h2 className="mb-2"><b>Genre</b></h2>
                        <h2 className="mb-8"><b>Release Date</b> : {TvInfo
                            .first_air_date}</h2>
                        <p className="mb-2"><b>Overview</b></p>
                        <p className="mb-8">{TvInfo
                            .overview}</p>
                        <p className="mb-2"><b>No. of Seasons</b> : {TvInfo
                            .number_of_seasons}</p>
                        <p className="mb-4"><b>No. of Episodes</b> : {TvInfo
                            .number_of_episodes}</p>
                        <p className="mb-4"><b>Cast</b> : Tom Cruise, Jenifer Lopez</p>
                        <div className="flex items-center gap-4">
                            <p className=""><b>Available on</b> : </p>
                            {watchProvider !== '' ?
                                watchProvider.map((item, index) => (
                                    <img key={index} src={`https://image.tmdb.org/t/p/w500/${item.logo_path}`} alt='logo_path'
                                        className="w-[50px] h-[50px] rounded-[50%] "></img>
                                ))
                                : <p>NA</p>
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="similar-tv p-8 bg-emerald-300">
                <h1 className="text-[3rem] text-center m-8">Similar TV Shows</h1>
                <div className="flex items-center justify-center gap-24 flex-wrap">
                    {similarTvShows?.results?.map((item, index) => (
                        <div className="" key={index}>
                            <h2 className="text-center text-2xl w-[370px] h-[2.2rem] overflow-hidden whitespace-nowrap text-ellipsis" >{item.name}</h2>
                            <Link to={`/tv/${item.id}`}>
                                {item.poster_path ? <img
                                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                                    alt="TV-poster"
                                    className="w-[250px] h-[350px] rounded-md my-4 mx-auto hover:scale-[1.3] transition-transform ease-in-out duration-300"
                                ></img> :
                                    <div
                                        className="w-[250px] h-[350px] rounded-md border border-black flex items-center justify-center my-4 mx-auto"
                                    >
                                        <p>Poster Not Available</p>
                                    </div>}
                            </Link>
                            <p className="text-center">{item.first_air_date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default TvInfo
    ;

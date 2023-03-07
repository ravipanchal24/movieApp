import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";
const MovieInfo = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const [similarMovies, setSimilarMovies] = useState({});

  const { id } = useParams();

  useEffect(() => {
    (async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=62e96d975b4bc3a23ae1727ea95caf4e&language=en-US`
      );
      setMovieInfo(res.data);
    })();
    (async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}/similar?api_key=62e96d975b4bc3a23ae1727ea95caf4e&language=en-US&page=1`
      );
      setSimilarMovies(res.data);
    })();
  }, [id]);

  return (
    <>
      <div className="text-black bg-violet-400 py-8">
        <div className="flex items-center justify-center gap-16 py-8 px-20 ">
          <img
            src={`https://image.tmdb.org/t/p/w500/${movieInfo.poster_path}`}
            alt="movie-poster"
            className="w-[300px] h-[450px] rounded-md"
          ></img>
          <div>
            <h1 className="text-3xl my-4">{movieInfo.original_title}</h1>
            <h2 className="mb-4">Genre</h2>
            <h2 className="mb-12">Release Date : {movieInfo.release_date}</h2>
            <p className="mb-4">Overview</p>
            <p className="mb-8">{movieInfo.overview}</p>
            <p className="mb-4">Runtime : {movieInfo.runtime} minutes</p>
            <p className="mb-4">Cast : { }</p>
            <p>Available on : </p>
          </div>
        </div>
      </div>
      <div className="similar-movies p-8 bg-emerald-300">
        <h1 className="text-[3rem] text-center m-8">Similar Movies</h1>
        <div className="flex items-center justify-center gap-24 flex-wrap">
          {similarMovies?.results?.map((item, index) => (
            <div className="" key={index}>
              <h1 className="text-center text-2xl w-[370px] h-[2.2rem] overflow-hidden whitespace-nowrap text-ellipsis" >{item.original_title}</h1>
              <Link to={`/movie/${item.id}`}>
                {item.poster_path ? <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  alt="movie-poster"
                  className="w-[250px] h-[350px] rounded-md my-4 mx-auto hover:scale-[1.3] transition-transform ease-in-out duration-300"
                ></img> :
                  <div
                    className="w-[250px] h-[350px] rounded-md border border-black flex items-center justify-center my-4 mx-auto"
                  >
                    <p>Poster Not Available</p>
                  </div>}
              </Link>
              <p className="text-center">{item.release_date}</p>
            </div>
          ))}
          <div></div>
        </div>
      </div>
    </>
  );
};

export default MovieInfo;

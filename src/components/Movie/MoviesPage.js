import React, { useState, useEffect, useRef } from "react";
import BrowseMovieModal from "./BrowseMovieModal";
import axios from "axios";
import { Link } from "react-router-dom";
const MoviesPage = () => {
  const [popularMovies, setPopularMovies] = useState();
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [bollywoodMovies, setBollywoodMovies] = useState();

  const apiKey = process.env.REACT_APP_API_KEY;

  const popular = useRef(null);
  const topRated = useRef(null);
  const bollywood = useRef(null);

  const slideLeft = (refer) => {
    refer.current.scrollLeft = refer.current.scrollLeft - 300;
  }

  const slideRight = (refer) => {
    refer.current.scrollLeft = refer.current.scrollLeft + 300;
  }

  useEffect(() => {
    (async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US`)
      setPopularMovies(res.data);
    })();
    (async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=1`)
      setTopRatedMovies(res.data);
    })();
    (async () => {
      const res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=hi&&with_original_language=hi&region=IN&page=1`)
      setBollywoodMovies(res.data);
    })();
  }, [])

  return (
    <div className="text-center text-3xl py-12 bg-purple-400">
      <BrowseMovieModal />
      <div className="text-[rgba(255,255,255,0.7)]">
        <div className="flex items-center gap-8 p-8 bg-[rgba(0,0,0,0.7)]">
          <h1 className="text-left  min-w-[10rem]"><b>Popular Movies</b></h1>
          <i className="fa-solid fa-angle-left text-black fa-3x cursor-pointer" onClick={() => slideLeft(popular)}></i>
          <div className="popular-movies p-8 flex items-center gap-16 overflow-auto rounded-md" ref={popular}>
            {popularMovies?.results.map((item, index) => (
              <div className="shrink-0">
                {/*<h1 className="text-center text-2xl w-[370px] h-[2.2rem] overflow-hidden whitespace-nowrap text-ellipsis" >{item.original_title}</h1> */}
                <Link to={`/movie/${item.id}`}>
                  {item.poster_path ? <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt="movie-poster"
                    className="w-[220px] h-[350px] rounded-md my-4 mx-auto hover:scale-[1.15] transition-transform ease-in-out duration-300"
                  ></img> :
                    <div
                      className="w-[220px] h-[350px] rounded-md border border-black flex items-center justify-center my-4 mx-auto">
                      <p>Poster Not Available</p>
                    </div>}
                </Link>
              </div>
            ))
            }
          </div>
          <i className="fa-solid fa-angle-right text-black fa-3x cursor-pointer" onClick={() => slideRight(popular)}></i>
        </div>
        <br />
        <div className="flex items-center gap-12 overflow-auto p-8 bg-[rgba(0,0,0,0.7)]">
          <h1 className="text-left min-w-[10rem]"><b>Top Rated Movies</b></h1>
          <i className="fa-solid fa-angle-left text-black fa-3x cursor-pointer" onClick={() => slideLeft(topRated)}></i>
          <div className="top-movies p-8 flex items-center gap-16 overflow-auto rounded-md " ref={topRated}>
            {topRatedMovies?.results.map((item, index) => (
              <div className="shrink-0">
                {/*<h1 className="text-center text-2xl w-[370px] h-[2.2rem] overflow-hidden whitespace-nowrap text-ellipsis" >{item.original_title}</h1> */}
                <Link to={`/movie/${item.id}`}>
                  {item.poster_path ? <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt="movie-poster"
                    className="w-[220px] h-[350px] rounded-md my-4 mx-auto hover:scale-[1.15] transition-transform ease-in-out duration-300"
                  ></img> :
                    <div
                      className="w-[220px] h-[350px] rounded-md border border-black flex items-center justify-center my-4 mx-auto">
                      <p>Poster Not Available</p>
                    </div>}
                </Link>
              </div>
            ))
            }
          </div>
          <i className="fa-solid fa-angle-right text-black fa-3x cursor-pointer" onClick={() => slideRight(topRated)}></i>
        </div>
        <br />
        <div className="flex items-center gap-12 overflow-auto p-8 bg-[rgba(0,0,0,0.7)]">
          <h1 className="text-left min-w-[10rem]"><b>Bollywood Movies</b></h1>
          <i className="fa-solid fa-angle-left text-black fa-3x cursor-pointer" onClick={() => slideLeft(bollywood)}></i>
          <div className="bollywood-movies p-8 flex items-center gap-16 overflow-auto rounded-md" ref={bollywood}>
            {bollywoodMovies?.results.map((item, index) => (
              <div className="shrink-0">
                {/*<h1 className="text-center text-2xl w-[370px] h-[2.2rem] overflow-hidden whitespace-nowrap text-ellipsis" >{item.original_title}</h1> */}
                <Link to={`/movie/${item.id}`}>
                  {item.poster_path ? <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt="movie-poster"
                    className="w-[220px] h-[350px] rounded-md my-4 mx-auto hover:scale-[1.15] transition-transform ease-in-out duration-300"
                  ></img> :
                    <div
                      className="w-[220px] h-[350px] rounded-md border border-black flex items-center justify-center my-4 mx-auto">
                      <p>Poster Not Available</p>
                    </div>}
                </Link>
              </div>
            ))
            }
          </div>
          <i className="fa-solid fa-angle-right text-black fa-3x cursor-pointer" onClick={() => slideRight(bollywood)}></i>
        </div>
      </div>
    </div>
  );
};

export default MoviesPage;

import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const BrowseModal = () => {
  let [showModal, setShowModal] = useState(false);
  let [movieGenreID, setMovieGenreID] = useState("");
  let [movieGenre, setMovieGenre] = useState("");
  let [movieByGenreList, setMovieByGenreList] = useState([]);

  const apiKey = process.env.REACT_APP_API_KEY;

  const genreID = {
    Action: { id: 28, name: "Action" },
    Adventure: { id: 12, name: "Adventure" },
    Animation: { id: 16, name: "Animation" },
    Comedy: { id: 35, name: "Comedy" },
    Crime: { id: 80, name: "Crime" },
    Documentary: { id: 99, name: "Documentary" },
    Drama: { id: 18, name: "Drama" },
    Family: { id: 10751, name: "Family" },
    Fantasy: { id: 14, name: "Fantasy" },
    History: { id: 36, name: "History" },
    Horror: { id: 27, name: "Horror" },
    Music: { id: 10402, name: "Music" },
    Mystery: { id: 9648, name: "Mystery" },
    Romance: { id: 10749, name: "Romance" },
    SciFi: { id: 878, name: "Science-Fiction" },
    Thriller: { id: 53, name: "Thriller" },
    War: { id: 10752, name: "War" },
  };

  const getMoviesByGenre = useCallback(async (e) => {
    const res = await axios.get(
      `https://api.themoviedb.org/4/discover/movie?api_key=${apiKey}&with_genres=${movieGenreID}&with_original_language=en&sort_by=popularity.desc`
    );
    setMovieByGenreList(res.data);
  }, [movieGenreID, apiKey])

  useEffect(() => {
    getMoviesByGenre();
  }, [movieGenreID, getMoviesByGenre])

  const onClick = (id, name) => {
    setMovieGenreID(id);
    setMovieGenre(name)
  }

  return (
    <>
      {movieGenreID === "" && (
        <div className="p-12 mt-16">
          <h2>Browse among your favourite Movies</h2>
          <button
            onClick={() => setShowModal(true)}
            className="border border-4 rounded-lg p-2 m-12 cursor-pointer hover:bg-[rgba(0,0,0,0.7)] hover:text-white"
          >
            Let's Browse
          </button>
          {showModal && (
            <div className="browse-modal border border-black border-4 rounded-2xl flex flex-wrap items-center justify-center gap-4 px-8 py-12 w-[70%] h-[22rem] my-0 mx-auto backdrop-blur-md">
              <i
                className="fa-solid fa-xmark absolute top-[1.5rem] right-[2rem] cursor-pointer"
                onClick={() => setShowModal(false)}
              ></i>
              {Object.keys(genreID).map((item, index) => (
                <button key={index} onClick={() => onClick(genreID[item].id, genreID[item].name)}
                  className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem] cursor-pointer"
                >
                  {genreID[item].name}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
      <></>
      {movieGenreID !== "" && (
        <div className="">
          <h1 className="m-8">
            Showing popular Movies with {movieGenre} genre
          </h1>
          <Link to="/movies">
            <button
              className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem] mb-8 hover:bg-[rgba(0,0,0,0.7)] hover:text-white "
              onClick={() => {
                setShowModal(false);
                setMovieGenreID("");
                setMovieByGenreList([]);
              }}
            >
              <i className="fa-solid fa-arrow-left mr-4"></i>Back to Browse
            </button>
          </Link>
          <div className="flex items-center justify-center gap-24 flex-wrap">
            {movieByGenreList?.results?.map((item, index) => (
              <div className="text-black" key={index}>
                <h1 className=" text-2xl w-[370px] h-[2.2rem] overflow-hidden whitespace-nowrap text-ellipsis" id="title">
                  {item.name ? item.name : item.title}
                </h1>
                <Link to={`/movie/${item.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    className="h-[20rem] rounded-md my-4 mx-auto cursor-pointer hover:scale-[1.3] transition-transform ease-in-out duration-300"
                    id="poster"
                    alt="Movie Thumbnail"
                  ></img>
                </Link>
                <p className="text-center text-[1.1rem]" id="releaseDate">
                  {item.first_air_date
                    ? item.first_air_date
                    : item.release_date}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
};

export default BrowseModal;

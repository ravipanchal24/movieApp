import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const BrowseModal = () => {
  let [showModal, setShowModal] = useState(false);
  let [movieGenre, setMovieGenre] = useState("");
  let [movieByGenreList, setMovieByGenreList] = useState([]);

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

  const getMoviesByGenre = async (e) => {
    setMovieGenre(e.target.innerText);
    let genre = genreID.movieGenre?.id;
    const res = await axios.get(
      `https://api.themoviedb.org/4/discover/movie?api_key=62e96d975b4bc3a23ae1727ea95caf4e&with_genres=${genre}&with_original_language=en&sort_by=popularity.desc`
    );
    setMovieByGenreList(res.data);
  };

  return (
    <>
      {movieGenre === "" && (
        <>
          <h2>Browse among your favourite movies</h2>
          <button
            onClick={() => setShowModal(true)}
            className="bo%rder border-4 rounded-lg p-2 m-4"
          >
            Let's Browse
          </button>
          {showModal && (
            <div className="browse-modal border border-4 rounded-2xl flex flex-wrap items-center justify-center gap-4 px-8 py-12 w-[70%] h-[22rem] my-0 mx-auto backdrop-blur-md">
              <i
                className="fa-solid fa-xmark absolute top-[1.5rem] right-[2rem] cursor-pointer"
                onClick={() => setShowModal(false)}
              ></i>
              <button
                onClick={getMoviesByGenre}
                className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem] "
              >
                Action
              </button>
              <button
                onClick={getMoviesByGenre}
                className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem]"
              >
                Adventure
              </button>
              <button
                onClick={getMoviesByGenre}
                className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem]"
              >
                Animation
              </button>
              <button
                onClick={getMoviesByGenre}
                className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem]"
              >
                Comedy
              </button>
              <button
                onClick={getMoviesByGenre}
                className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem]"
              >
                Crime
              </button>
              <button
                onClick={getMoviesByGenre}
                className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem]"
              >
                Documentry
              </button>
              <button
                onClick={getMoviesByGenre}
                className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem]"
              >
                Drama
              </button>
              <button
                onClick={getMoviesByGenre}
                className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem]"
              >
                Family
              </button>
              <button
                onClick={getMoviesByGenre}
                className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem]"
              >
                Fantasy
              </button>
              <button
                onClick={getMoviesByGenre}
                className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem]"
              >
                History
              </button>
              <button
                onClick={getMoviesByGenre}
                className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem]"
              >
                Horror
              </button>
              <button
                onClick={getMoviesByGenre}
                className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem]"
              >
                Music
              </button>
              <button
                onClick={getMoviesByGenre}
                className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem]"
              >
                Mystery
              </button>
              <button
                onClick={getMoviesByGenre}
                className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem]"
              >
                Romance
              </button>
              <button
                onClick={getMoviesByGenre}
                className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem]"
              >
                SciFi
              </button>
              <button
                onClick={getMoviesByGenre}
                className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem]"
              >
                Thriller
              </button>
              <button
                onClick={getMoviesByGenre}
                className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem]"
              >
                War
              </button>
            </div>
          )}
        </>
      )}
      <></>
      {movieGenre !== "" && (
        <>
          <h1 className="m-8">
            Showing popular movies with {movieGenre} genre
          </h1>
          <Link to="/movies">
            <button
              className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem] mb-8"
              onClick={() => {
                setShowModal(false);
                setMovieGenre("");
                setMovieByGenreList([]);
              }}
            >
              Back to Movies
            </button>
          </Link>
          <div className="flex items-center justify-center gap-[9rem] flex-wrap">
            {movieByGenreList?.results?.map((item, index) => (
              <div className="text-black w-[270px]" key={index}>
                <h2 className="text-center text-xl" id="title">
                  {item.name ? item.name : item.title}
                </h2>
                <img
                  src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                  className="h-[20rem] rounded-md my-4 mx-auto cursor-pointer hover:scale-125 transition-transform ease-in-out duration-300"
                  id="poster"
                  alt="movieThumbnail"
                ></img>
                <p className="text-center text-[1.1rem]" id="releaseDate">
                  {item.first_air_date
                    ? item.first_air_date
                    : item.release_date}
                </p>
              </div>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default BrowseModal;

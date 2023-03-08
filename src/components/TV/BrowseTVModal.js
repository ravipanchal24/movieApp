import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const BrowseModal = () => {
  let [showModal, setShowModal] = useState(false);
  let [TVGenreID, setTVGenreID] = useState("");
  let [TVGenre, setTVGenre] = useState("");
  let [TVByGenreList, setTVByGenreList] = useState([]);

  const genreID = {
    Action: { id: 10759, name: "Action & Adventure" },
    Animation: { id: 16, name: "Animation" },
    Comedy: { id: 35, name: "Comedy" },
    Crime: { id: 80, name: "Crime" },
    Documentary: { id: 99, name: "Documentary" },
    Drama: { id: 18, name: "Drama" },
    Family: { id: 10751, name: "Family" },
    Kids: { id: 10762, name: "Kids" },
    Soap: { id: 10766, name: "Soap" },
    Mystery: { id: 9648, name: "Mystery" },
    SciFi: { id: 10765, name: "Science-Fiction" },
    War: { id: 10768, name: "War" },
  };

  const getTvByGenre = useCallback(async (e) => {
    const res = await axios.get(
      `https://api.themoviedb.org/4/discover/tv?api_key=62e96d975b4bc3a23ae1727ea95caf4e&with_genres=${TVGenreID}&sort_by=popularity.desc`
    );
    setTVByGenreList(res.data);
  }, [TVGenreID])

  useEffect(() => {
    getTvByGenre();
  }, [TVGenreID, getTvByGenre])

  const onClick = (id, name) => {
    setTVGenreID(id);
    setTVGenre(name)
  }

  return (
    <>
      {TVGenreID === "" && (
        <>
          <h2>Browse among your favourite TV Shows</h2>
          <button
            onClick={() => setShowModal(true)}
            className="border border-4 rounded-lg p-2 m-12 cursor-pointer"
          >
            Let's Browse
          </button>
          {showModal && (
            <div className="browse-modal border border-black border-4 rounded-2xl flex flex-wrap items-center justify-center gap-[3rem] px-8 py-12 w-[70%] h-[22rem] my-0 mx-auto backdrop-blur-md">
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
        </>
      )}
      <></>
      {TVGenreID !== "" && (
        <>
          <h1 className="m-8">
            Showing popular TV Shows with {TVGenre} genre
          </h1>
          <Link to="/tv">
            <button
              className="border border-4 rounded-2xl py-1  px-4 text-[1.5rem] mb-8"
              onClick={() => {
                setShowModal(false);
                setTVGenreID("");
                setTVByGenreList([]);
              }}
            >
              Back to TV Shows
            </button>
          </Link>
          <div className="flex items-center justify-center gap-24 flex-wrap">
            {TVByGenreList?.results?.map((item, index) => (
              <div className="text-black" key={index}>
                <h2 className="text-center text-2xl w-[370px] h-[2.2rem] overflow-hidden whitespace-nowrap text-ellipsis" id="title">
                  {item.name ? item.name : item.title}
                </h2>
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

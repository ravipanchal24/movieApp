import React, { useEffect, useState } from "react";
import BrowseTVModal from "./BrowseTVModal";
import { Link } from "react-router-dom";
import axios from "axios";

const TVShowsPage = () => {
  const [popularShows, setPopularShows] = useState();
  const [topRatedShows, setTopRatedShows] = useState();
  const [bollywoodShows, setBollywoodShows] = useState();

  useEffect(() => {
    (async () => {
      const res = await axios.get("https://api.themoviedb.org/3/tv/popular?api_key=62e96d975b4bc3a23ae1727ea95caf4e&language=en-US&with_original_language=en")
      setPopularShows(res.data);
    })();
    (async () => {
      const res = await axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=62e96d975b4bc3a23ae1727ea95caf4e&language=en-US&with_original_language=en&page=1")
      setTopRatedShows(res.data);
    })();
    (async () => {
      const res = await axios.get("https://api.themoviedb.org/3/tv/top_rated?api_key=62e96d975b4bc3a23ae1727ea95caf4e&language=hi&&with_original_language=ko&region=IN&page=1")
      setBollywoodShows(res.data);
    })();
  }, [])
  return (
    <div className="text-center py-12 text-3xl bg-teal-400">
      <BrowseTVModal />
      <div>
        <div className="text-[rgba(255,255,255,0.7)]">
          <div className="popular-shows flex items-center gap-12 overflow-auto p-8 bg-[rgba(0,0,0,0.7)]">
            <h1 className="text-left min-w-[10rem]"><b>Popular TV Shows</b></h1>
            {popularShows?.results.map((item, index) => (
              <div className="shrink-0">
                {/*<h1 className="text-center text-2xl w-[370px] h-[2.2rem] overflow-hidden whitespace-nowrap text-ellipsis" >{item.original_title}</h1> */}
                <Link to={`/tv/${item.id}`}>
                  {item.poster_path ? <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt="tv-poster"
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
          <div className="top-shows flex items-center gap-12 overflow-auto p-8 bg-[rgba(0,0,0,0.7)]">
            <h1 className="text-left min-w-[10rem]"><b>Top Rated TV Shows</b></h1>
            {topRatedShows?.results.map((item, index) => (
              <div className="shrink-0">
                {/*<h1 className="text-center text-2xl w-[370px] h-[2.2rem] overflow-hidden whitespace-nowrap text-ellipsis" >{item.original_title}</h1> */}
                <Link to={`/tv/${item.id}`}>
                  {item.poster_path ? <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt="tv-poster"
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
          <div className="foreign-shows flex items-center gap-12 overflow-auto p-8 bg-[rgba(0,0,0,0.7)]">
            <h1 className="text-left min-w-[10rem]"><b>Foreign TV Shows</b></h1>
            {bollywoodShows?.results.map((item, index) => (
              <div className="shrink-0">
                {/*<h1 className="text-center text-2xl w-[370px] h-[2.2rem] overflow-hidden whitespace-nowrap text-ellipsis" >{item.original_title}</h1> */}
                <Link to={`/tv/${item.id}`}>
                  {item.poster_path ? <img
                    src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
                    alt="tv-poster"
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
        </div>
      </div>
    </div>
  );
};

export default TVShowsPage;

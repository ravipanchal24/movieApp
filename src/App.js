import './App.css';
import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Liked from './components/Liked';
import axios from 'axios';
import MoviesPage from './components/Movie/MoviesPage';
import TVShowsPage from './components/TV/TVShowsPage';
import MovieInfo from './components/Movie/MovieInfo';
import TVInfo from './components/TV/TVInfo';
import About from './components/About';
import Contact from './components/Contact';

function App() {

  useEffect(() => {
    getTrendingMovies();
    getTrendingTV();
  }, [])

  const [trendingMovies, setTrendingMovies] = useState(null);
  const [trendingTV, setTrendingTV] = useState(null);
  const [liked, setLiked] = useState([]);


  async function getTrendingMovies() {
    const res = await axios.get("https://api.themoviedb.org/3/trending/movie/week?api_key=62e96d975b4bc3a23ae1727ea95caf4e");
    setTrendingMovies(res.data)
  }
  async function getTrendingTV() {
    const res = await axios.get("https://api.themoviedb.org/3/trending/tv/week?api_key=62e96d975b4bc3a23ae1727ea95caf4e");
    setTrendingTV(res.data)
  }

  function setLikedData(data) {
    setLiked([...liked, data]);
    console.log("hey");
  }

  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path='/' exact element={<Home trendingMovies={trendingMovies} trendingTV={trendingTV} setLikedData={setLikedData} />}>
          </Route>
          <Route path='/liked' exact element={<Liked liked={liked} />}>
          </Route>
          <Route path='/movies' exact element={<MoviesPage />}>
          </Route>
          <Route path='/tv' exact element={<TVShowsPage />}>
          </Route>
          <Route path='/movie/:id' exact element={<MovieInfo />}>
          </Route>
          <Route path='/tv/:id' exact element={<TVInfo />}>
          </Route>
          <Route path='/aboutUs' exact element={<About />}>
          </Route>
          <Route path='/contactUs' exact element={<Contact />}>
          </Route>
        </Routes>
      </div>
    </BrowserRouter >
  );
}

export default App;

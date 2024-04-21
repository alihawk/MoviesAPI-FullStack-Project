// App.js
import React, { useState, useEffect } from 'react';
import api from './api/axiosConfig';
import Layout from './components/Layout';
import Home from './components/home/Home';
import { Routes, Route } from 'react-router-dom';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';
function App() {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState();
    const [reviews, setReviews] = useState([]);
  
    
  const getMovies = async () =>{
    
    try
    {

      const response = await api.get("/api/v1/movies");

      setMovies(response.data);

    } 
    catch(err)
    {
      console.log(err);
    }
  }

  const getMovieData = async (movieId) => {
     
    try 
    {
        const response = await api.get(`/api/v1/movies/imdb/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);

        setReviews(singleMovie.reviews);
        

    } 
    catch (error) 
    {
      console.error(error);
    }

  }

  useEffect(() => {
    getMovies();
  },[])

    return (
    <div className='App'>
        <Header/>

        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home movies={movies} />} />
           <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}/>
           <Route path="/Reviews/:movieId" element ={<Reviews getMovieData = {getMovieData} movie={movie} reviews ={reviews} setReviews = {setReviews} />}></Route>
            <Route path="*" element = {<NotFound/>}></Route>
            </Route>
            {/* If you have routes that should not use the Layout, they can be added here */}
        </Routes>
        </div>
    );
}

export default App;

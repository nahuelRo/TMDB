import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Grid from "./components/Grid/Grid.jsx";
import { Route, Routes } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);

  useEffect(() => {
    const getAllMovies = async () => {
      const movies = await axios("http://localhost:3000/api/movies");
      const data = await movies.data.results;
      setMovies(data);
    };

    getAllMovies();
  }, []);

  return (
    <>
      <Header setSearchMovies={setSearchMovies} />
      <Aside />
      <Routes>
        <Route path="/" element={<Grid movies={movies} />} />
        <Route path="/search" element={<Grid movies={searchMovies} />} />
      </Routes>
    </>
  );
}

export default App;

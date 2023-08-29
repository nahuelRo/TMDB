import axios from "axios";
import { useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
import Aside from "./components/Aside/Aside.jsx";

function App() {
  const [movies, setMovies] = useState([]);

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
      <Header />
      <Aside />
    </>
  );
}

export default App;

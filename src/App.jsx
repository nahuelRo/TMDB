import axios from "axios";
import { useContext, useEffect, useState } from "react";
import Header from "./components/Header/Header.jsx";
import Aside from "./components/Aside/Aside.jsx";
import Grid from "./components/Grid/Grid.jsx";
import Details from "./commons/Details/Details.jsx";
import Register from "./components/Register/Register.jsx";
import Login from "./components/Login/Login.jsx";
import { Route, Routes, useNavigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext.jsx";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [searchMovies, setSearchMovies] = useState([]);
  const [favoritesMovies, setFavoritesMovies] = useState([]);
  const { user, isAuthenticated } = useContext(AuthContext);
  const navigate = useNavigate();

  const addFavorite = (movie) => {
    setFavoritesMovies((prev) => {
      prev.push(movie);
      return prev;
    });

    toast.success("🚀 Movie added to favorites", {
      icon: false,
      autoClose: 2000,
      pauseOnHover: false,
    });
    navigate(`/movie/${movie.id}`);

    axios.post(
      `http://localhost:3000/api/users/${user.id}/favorites/${movie.id}`
    );
  };

  const removeFavorite = (movieId) => {
    setFavoritesMovies((prev) => {
      return prev.filter((favorite) => favorite.id !== movieId);
    });

    toast.success("🗑️ Movie removed from favorites", {
      icon: false,
      autoClose: 2000,
      pauseOnHover: false,
    });

    axios.delete(
      `http://localhost:3000/api/users/${user.id}/favorites/${movieId}`
    );
  };

  useEffect(() => {
    const getAllMovies = async () => {
      try {
        const movies = await axios("http://localhost:3000/api/movies");
        const data = await movies.data.results;
        setMovies(data);
      } catch (error) {
        console.log("");
      }
    };

    getAllMovies();
  }, []);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/users/${user?.id}/favorites`)
      .then((res) => res.data)
      .then((data) => setFavoritesMovies(data))
      .catch(() => {});
  }, [isAuthenticated]);

  return (
    <>
      <ToastContainer position="top-center" theme="dark" />

      <Header
        setSearchMovies={setSearchMovies}
        setFavoritesMovies={setFavoritesMovies}
        favoritesMovies={favoritesMovies}
      />
      <Aside />
      <Routes>
        <Route path="/" element={<Grid movies={movies} />} />
        <Route path="/search" element={<Grid movies={searchMovies} />} />
        <Route
          path="/movie/:id"
          element={
            <Details
              addFavorite={addFavorite}
              removeFavorite={removeFavorite}
              favoritesMovies={favoritesMovies}
            />
          }
        />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/favorites" element={<Grid movies={favoritesMovies} />} />
      </Routes>
    </>
  );
}

export default App;

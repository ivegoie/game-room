import React, { useEffect } from "react";

// REDUX
import { useDispatch } from "react-redux";
import { loadGames } from "../actions/gamesAction";

const Home = () => {
  // FETCH GAMES
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return (
    <main>
      <h1>Home</h1>
    </main>
  );
};

export default Home;

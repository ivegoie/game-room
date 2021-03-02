import React, { useEffect } from "react";

import { useDispatch } from "react-redux";
import { loadGames } from "./actions/gamesAction";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  return (
    <div className="App">
      <h1>Hello Game Room</h1>
    </div>
  );
}

export default App;

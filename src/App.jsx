import { useState } from "react";

import "./App.css";
import { Navigation } from "./components/Navigation";
import { Main } from "./components/Main";
import { Route, Routes } from "react-router-dom";
import { FavoriteCard } from "./components/FavoriteCard";
import { FavoriteComponent } from "./components/FavoriteComponent";
import { Cart } from "./components/Cart";

function App() {
  const [count, setCount] = useState(0);
  const data = null;
  return (
    <>
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Main></Main>}></Route>
        <Route path="/Favorite" element={<FavoriteComponent></FavoriteComponent>}></Route>
        <Route path="/Cart" element={<Cart></Cart>}></Route>
      </Routes>
    </>
  );
}

export default App;

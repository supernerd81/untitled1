import './App.css'
import {NavLink, Route, Router, Routes} from "react-router";
import Character from "./Character.tsx";

function App() {


  return (
    <>
        <header>
            <NavLink to={"/"} >Startseite</NavLink>
            <NavLink to="/characters">Characters</NavLink>
        </header>
        <div>
            <Routes>
                <Route path={"/"} element={
                    <h1>Welcome Home</h1>
                } />
                <Route path={"/characters"} element={<Character />} />
            </Routes>
        </div>
    </>
  )
}

export default App

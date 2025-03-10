import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Prénoms Africains</h2>
      <ul className="nav-links">
        <li>
          <button onClick={() => console.log("Accueil")}>Accueil</button>
        </li>
        <li>
          <button onClick={() => console.log("Catalogue")}>Catalogue</button>
        </li>
        <li>
          <button onClick={() => console.log("Favoris")}>Favoris</button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;

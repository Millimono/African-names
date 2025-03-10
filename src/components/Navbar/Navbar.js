import React, { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <h2 className="logo">Prénoms Africains</h2>

      {/* Bouton Menu Burger en Mobile */}
      <button className="burger-menu" onClick={() => setIsOpen(!isOpen)}>
        ☰
      </button>

      {/* Menu Responsive */}
      <ul className={`nav-links ${isOpen ? "open" : ""}`}>
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

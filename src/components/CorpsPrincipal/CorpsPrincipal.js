import React, { useState } from "react";
import Catalogue from "../Catalogue/Catalogue";
import "./CorpsPrincipal.css";

function CorpsPrincipal() {
  const [selectedThemes, setSelectedThemes] = useState([]);
  const [selectedOrigin, setSelectedOrigin] = useState(""); // Ajouter un état pour l'origine

  const themesDisponibles = ["amour", "pouvoir", "chance", "sagesse"];
  const originesDisponibles = [
    "Malinké",
    "Akan",
    "Peul",
    "Swahili",
    "Arabe/Africain",
    "Wolof",
    // Ajoute d'autres origines si nécessaire
  ];

  const handleThemeChange = (theme) => {
    setSelectedThemes((prevThemes) =>
      prevThemes.includes(theme)
        ? prevThemes.filter((t) => t !== theme)
        : [...prevThemes, theme]
    );
  };

  const handleOriginChange = (event) => {
    setSelectedOrigin(event.target.value); // Mettre à jour l'origine sélectionnée
  };

  return (
    <div className="corps-container">
      <section className="presentation">
        <h2>Découvrez les Prénoms par Thématique</h2>
        <p>
          Explorez un catalogue riche de prénoms, leur signification et leur
          origine, en fonction des thématiques que vous choisissez. 🌍✨
        </p>
      </section>

      <section className="themes">
        <h3>Choisissez vos thématiques</h3>
        <div className="theme-checkboxes">
          {themesDisponibles.map((theme) => (
            <label key={theme} className="theme-checkbox-label">
              <input
                type="checkbox"
                value={theme}
                onChange={() => handleThemeChange(theme)}
                checked={selectedThemes.includes(theme)}
              />
              {theme.charAt(0).toUpperCase() + theme.slice(1)}
            </label>
          ))}
        </div>
      </section>

      <section className="origines">
        <h3>Choisissez une origine</h3>
        <select value={selectedOrigin} onChange={handleOriginChange}>
          <option value="">Toutes les origines</option>
          {originesDisponibles.map((origine) => (
            <option key={origine} value={origine}>
              {origine}
            </option>
          ))}
        </select>
      </section>

      {/* Passer selectedThemes et selectedOrigin à Catalogue */}
      <Catalogue
        selectedThemes={selectedThemes}
        selectedOrigin={selectedOrigin}
      />
    </div>
  );
}

export default CorpsPrincipal;

import React, { useState, useEffect } from "react";
import PrenomCard from "../PrenomCard/PrenomCard";
import { supabase } from "../../supabaseClient"; // Assure-toi que ce fichier existe
import "./Catalogue.css";

function Catalogue({ selectedThemes, selectedOrigin }) {
  const [filtre, setFiltre] = useState("");
  const [favoris, setFavoris] = useState([]);
  const [prenoms, setPrenoms] = useState([]);
  const [loading, setLoading] = useState(true);

  // Charger les prénoms depuis Supabase
  useEffect(() => {
    const fetchPrenoms = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("prenoms").select("*");

      if (error) {
        console.error("Erreur lors de la récupération des prénoms :", error);
      } else {
        setPrenoms(data);
      }
      setLoading(false);
    };

    fetchPrenoms();
  }, []);

  const ajouterFavori = (prenom) => {
    if (!favoris.find((p) => p.nom === prenom.nom)) {
      setFavoris([...favoris, prenom]);
    }
  };

  // Filtrage des prénoms en fonction des critères
  const prenomsFiltres = prenoms.filter((p) => {
    const correspondAuFiltre = p.nom
      .toLowerCase()
      .includes(filtre.toLowerCase());
    const correspondAOrigine = selectedOrigin
      ? p.origine === selectedOrigin
      : true;
    const themeMatchCount = p.themes.filter((t) =>
      selectedThemes.includes(t)
    ).length;

    return (
      correspondAuFiltre &&
      correspondAOrigine &&
      (selectedThemes.length === 0 || themeMatchCount === selectedThemes.length)
    );
  });

  return (
    <div className="container">
      <h1>Catalogue de Prénoms Africains</h1>

      {/* Champ de recherche */}
      <input
        type="text"
        className="search-box"
        placeholder="Rechercher un prénom..."
        value={filtre}
        onChange={(e) => setFiltre(e.target.value)}
      />

      {loading ? (
        <p>Chargement des prénoms...</p>
      ) : (
        <div className="prenom-grid">
          {prenomsFiltres.length > 0 ? (
            prenomsFiltres.map((p) => (
              <PrenomCard key={p.id} prenom={p} ajouterFavori={ajouterFavori} />
            ))
          ) : (
            <p>
              Aucun prénom trouvé pour cette recherche, origine ou thématique.
            </p>
          )}
        </div>
      )}

      {favoris.length > 0 && (
        <div className="favoris">
          <h2>Favoris</h2>
          <div className="prenom-grid">
            {favoris.map((p) => (
              <PrenomCard key={p.id} prenom={p} ajouterFavori={() => {}} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Catalogue;

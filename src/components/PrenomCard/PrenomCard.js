import React, { useState } from "react";
import "./PrenomCard.css";

function PrenomCard({ prenom, ajouterFavori }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavori = () => {
    setIsFavorite(!isFavorite);
    ajouterFavori(prenom);
  };

  return (
    <>
      {/* Carte du prénom */}
      <div className="prenom-card">
        <h2>{prenom.nom}</h2>
        <p>
          <strong>Origine :</strong> {prenom.origine}
        </p>
        <p>
          <strong>Genre :</strong> {prenom.genre}
        </p>
        <p>
          <strong>Signification :</strong> {prenom.signification}
        </p>

        {/* Icône de cœur pour les favoris */}
        <span
          className={`heart ${isFavorite ? "favorite" : ""}`}
          onClick={toggleFavori}
        >
          ❤️
        </span>

        {/* Bouton pour ouvrir le modal */}
        <button className="details-button" onClick={() => setIsModalOpen(true)}>
          Voir plus
        </button>
      </div>

      {/* Modal (Fenêtre de détails) */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h2>{prenom.nom}</h2>
            <p>
              <strong>Origine :</strong> {prenom.origine}
            </p>
            <p>
              <strong>Genre :</strong> {prenom.genre}
            </p>
            <p>
              <strong>Signification :</strong> {prenom.signification}
            </p>
            {/* Détails supplémentaires */}
            {prenom.details && (
              <div className="extra-details">
                <h3>Détails supplémentaires</h3>
                <p>{prenom.details}</p>
              </div>
            )}
            <button
              className="close-button"
              onClick={() => setIsModalOpen(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export default PrenomCard;

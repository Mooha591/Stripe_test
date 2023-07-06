import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleDownload = () => {
    // Rediriger vers la page de paiement
    navigate("/payment");
  };

  const handleAdmin = () => {
    navigate("/Courses");
  };

  return (
    <div>
      <h1>Page d'accueil</h1>
      <h2>Télécharger des cours de développement web</h2>
      <ul>
        <li>
          <button onClick={handleDownload}>Cours 2</button>
        </li>
        <li>
          <button onClick={handleAdmin}> Administrateur</button>
        </li>
      </ul>
    </div>
  );
};

export default HomePage;

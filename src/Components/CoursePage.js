import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CoursePage = () => {
  const navigate = useNavigate();
  const [paymentCompleted, setPaymentCompleted] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [adminCode, setAdminCode] = useState(""); // Ajout de l'état pour le code administrateur

  const handlePaymentSuccess = () => {
    setPaymentCompleted(true);
  };

  const handleDownload = () => {
    if (paymentCompleted || isAdmin) {
      window.location.href = "/cours/cours2.rar";
    } else {
      navigate("/payment?amount=10");
    }
  };

  const handleAdminCodeSubmit = (event) => {
    event.preventDefault();

    // Vérifier le code administrateur
    if (adminCode === "mooha591") {
      // Remplacez "votre_code_admin" par votre code administrateur réel
      setIsAdmin(true);
    } else {
      alert("Code administrateur invalide");
    }
  };

  const handleAdminCodeChange = (event) => {
    setAdminCode(event.target.value);
  };

  return (
    <div>
      <h1>Cours 2</h1>
      {isAdmin ? (
        <button onClick={handleDownload}>Télécharger</button>
      ) : (
        <form onSubmit={handleAdminCodeSubmit}>
          <input
            type="text"
            value={adminCode}
            onChange={handleAdminCodeChange}
            placeholder="Code administrateur"
          />
          <button type="submit">Valider</button>
        </form>
      )}
    </div>
  );
};

export default CoursePage;

import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import {
  useStripe,
  useElements,
  CardElement,
  Elements,
} from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51NNboOIynajAYZaRpaNCOnMqd03SF4plqYZuynSlemnuhTqOF0XIl9kvYi2r6DgCFa5REOmqkGThImENkmfbzhtd00aN0MPWo7"
);

const PaymentForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [courseAmount, setCourseAmount] = useState(0);

  const location = useLocation();

  useEffect(() => {
    const searchParams = new URLSearchParams(location.search);
    const amount = searchParams.get("amount");
    setCourseAmount(amount);
  }, [location]);

  const handlePayment = async (event) => {
    event.preventDefault();

    setIsLoading(true);

    if (!stripe || !elements) {
      setIsLoading(false);
      return;
    }

    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    setIsLoading(false);

    if (error) {
      console.log(error);
      // Gérer les erreurs de paiement
    } else {
      console.log(paymentMethod);
      // Envoyer l'identifiant de paiement au serveur pour vérification et traitement
    }
  };

  return (
    <div className="container">
      <form onSubmit={handlePayment} className="PaymentForm">
        <CardElement />

        <div>Montant du cours : {courseAmount} EUR</div>

        <button type="submit" disabled={!stripe || isLoading}>
          {isLoading ? "Chargement..." : "Payer"}
        </button>
      </form>
    </div>
  );
};

const PaymentFormWithElements = () => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
};

export default PaymentFormWithElements;

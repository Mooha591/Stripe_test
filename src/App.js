import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CoursePage from "./Components/CoursePage";
import HomePage from "./Pages/Home";
import PaymentForm from "./Components/PaymentForm";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/courses" element={<CoursePage />} />
        <Route exact path="/payment" element={<PaymentForm />} />
      </Routes>
    </Router>
  );
};

export default App;

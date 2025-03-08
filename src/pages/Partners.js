import React from "react";
import "../styles/partners.css";
import { images } from "../assets/images";

const partners = [
  { id: 1, name: "Ledger Leopard", logo: images.partner1},
  { id: 2, name: "Stay Direct", logo: images.partner2},
  { id: 3, name: "Stay by Rafa", logo: images.partner3},
  
];

const Partners = () => {
  return (
    <div className="partners-container">
      {partners.map((partner) => (
        <div key={partner.id} className="partner-card">
          <img src={partner.logo} alt={partner.name} className="partner-logo" />
        </div>
      ))}
    </div>
  );
};

export default Partners;
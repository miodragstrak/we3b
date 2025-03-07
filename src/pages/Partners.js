import React from "react";
import "../styles/partners.css";
import { images } from "../assets/images";

const partners = [
  { id: 1, name: "Partner 1", logo: images.partner1},
  { id: 2, name: "Partner 2", logo: "/images/partner2.png" },
  { id: 3, name: "Partner 3", logo: "/images/partner3.png" },
  { id: 4, name: "Partner 4", logo: "/images/partner4.png" },
  { id: 5, name: "Partner 5", logo: "/images/partner5.png" },
  { id: 6, name: "Partner 6", logo: "/images/partner6.png" },
  { id: 7, name: "Partner 7", logo: "/images/partner7.png" },
  { id: 8, name: "Partner 8", logo: "/images/partner8.png" },
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
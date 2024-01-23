import React from "react";
import "../../pages/Clube/Clube.Component.css";
import { FaCheck, FaTimes } from "react-icons/fa";

function PricingCard({ title, price, advantages, includedAdvantages }) {
  return (
    <div className="pricing-card">
      <h2>{title}</h2>
      <p className="price">${price}/mês</p>
      <ul className="advantages-list">
        {advantages.map((advantage, index) => (
          <div key={index}>
            <li>
              {includedAdvantages.includes(index) ? (
                <FaCheck className="icon-check" />
              ) : (
                <FaTimes className="icon-times" />
              )}
              {advantage}
            </li>
            {index < advantages.length - 1 && <hr />}
          </div>
        ))}
      </ul>
      <button className="btn btn-primary">ASSINAR</button>
    </div>
  );
}

export default PricingCard;
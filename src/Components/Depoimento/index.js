import React from "react";
import { Rating } from 'primereact/rating';

function DepoimentoCard({ texto,nome, estrelas }) {
    return (
      <div className="depoimento-card">
        <Rating value={estrelas} disabled cancel={false} />
        <p>{texto}</p>
        <p>{nome}</p>
      </div>
    );
  }

export default DepoimentoCard
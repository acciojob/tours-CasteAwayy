import React from "react";
import { useState } from "react";

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article
      className="single-tour"
      style={{
        border: "1px solid #ddd",
        borderRadius: "8px",
        margin: "1rem",
        padding: "1rem",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", borderRadius: "8px" }}
      />
      <div style={{ marginTop: "1rem" }}>
        <h4 style={{ fontSize: "1.25rem", fontWeight: "bold" }}>{name}</h4>
        <h4
          className="tour-price"
          style={{ color: "#1e90ff", fontWeight: "bold" }}
        >
          ${price}
        </h4>
        <p id="tour-item-para-rec6d6T3q5EBIdCfD" className="tour-info" style={{ lineHeight: "1.6" }}>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            id="see-more-rec6d6T3q5EBIdCfD"
            style={{
              background: "none",
              color: "#1e90ff",
              border: "none",
              cursor: "pointer",
              marginLeft: "5px",
            }}
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show less" : "See more"}
          </button>
        </p>
        <button
          id="delete-btn-rec6d6T3q5EBIdCfD"
          className="delete-btn"
          style={{
            backgroundColor: "#ff6b6b",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "0.5rem 1rem",
            cursor: "pointer",
          }}
          onClick={() => removeTour(id)}
        >
          Not Interested
        </button>
      </div>
    </article>
  );
}
export default Tour;

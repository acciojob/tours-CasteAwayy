import React from "react";
import Tour from "./Tour";
function Tours({ tours, removeTour }) {
  return (
    <section style={{ width: "90%", maxWidth: "1200px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }} className="title">
          Our Tours
        </h2>
        <div
          style={{
            width: "6rem",
            height: "4px",
            backgroundColor: "#1e90ff",
            margin: "0.5rem auto",
          }}
        ></div>
      </div>
      <div>
        {tours.map((tour) => (
          <Tour key={tour.id} {...tour} removeTour={removeTour} />
        ))}
      </div>
    </section>
  );
}
export default Tours;

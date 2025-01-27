import { useState, useEffect } from "react";
import React from 'react';

function Loading() {
  return (
    <div style={{ textAlign: "center", marginTop: "2rem" }}>
      <h1>Loading...</h1>
    </div>
  );
}

function Tour({ id, name, info, image, price, removeTour }) {
  const [readMore, setReadMore] = useState(false);

  return (
    <article
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
        <h4 style={{ color: "#1e90ff", fontWeight: "bold" }}>${price}</h4>
        <p style={{ lineHeight: "1.6" }}>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            style={{
              background: "none",
              color: "#1e90ff",
              border: "none",
              cursor: "pointer",
              marginLeft: "5px",
            }}
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Show less" : "Read more"}
          </button>
        </p>
        <button
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

function Tours({ tours, removeTour }) {
  return (
    <section style={{ width: "90%", maxWidth: "1200px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <h2 style={{ fontSize: "2rem", fontWeight: "bold" }}>Our Tours</h2>
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

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    setLoading(true);
    try {
      const data = [
        {
          id: "rec6d6T3q5EBIdCfD",
          name: "Best of Paris in 7 Days Tour",
          info: "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
          image:
            "https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg",
          price: "1,995",
        },
        {
          id: "recIwxrvU9HfJR3B4",
          name: "Best of Ireland in 14 Days Tour",
          info: "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
          image:
            "https://dl.airtable.com/.attachments/6c24084000a3777064c5200a8c2ae931/04081a3e/ireland.jpeg",
          price: "3,895",
        },
        {
          id: "recJLWcHScdUtI3ny",
          name: "Best of Salzburg & Vienna in 8 Days Tour",
          info: "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
          image:
            "https://dl.airtable.com/.attachments/27f6cbfe631e303f98b97e9dafacf25b/6bbe2a07/vienna.jpeg",
          price: "2,695",
        },
        {
          id: "recK2AOoVhIHPLUwn",
          name: "Best of Rome in 7 Days Tour",
          info: "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
          image:
            "https://dl.airtable.com/.attachments/3efa7aa402d49c12b8769c581a96af42/d5b641e3/italy.jpeg",
          price: "2,095",
        },
        {
          id: "receAEzz86KzW2gvH",
          name: "Best of Poland in 10 Days Tour",
          info: "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
          image:
            "https://dl.airtable.com/.attachments/3feee7a93af0f4f809312132090c9a80/58e3e8ec/poland.jpeg",
          price: "2,595",
        },
      ];

      setTours(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching tours:", error);
      setLoading(false);
    }
  };

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  if (tours.length === 0) {
    return (
      <main style={{ textAlign: "center", marginTop: "2rem" }}>
        <div>
          <h2>No Tours Left</h2>
          <button
            style={{
              backgroundColor: "#1e90ff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "0.5rem 1rem",
              cursor: "pointer",
            }}
            onClick={fetchTours}
          >
            Refresh
          </button>
        </div>
      </main>
    );
  }

  return (
    <main id='main'>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App;

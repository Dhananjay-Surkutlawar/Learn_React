import React from "react";

const Card = ({ name, age, description, image }) => {
  return (
    <div style={styles.card}>
      {/* Image */}
      <img src={image} alt={name} style={styles.image} />

      {/* Name & Age */}
      <h3>{name}</h3>
      <p>Age: {age}</p>

      {/* Description */}
      <p>{description}</p>

      {/* Button */}
      <button style={styles.button}>Visit Profile</button>
    </div>
  );
};

const styles = {
  card: {
    width: "280px",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    textAlign: "center",
    backgroundColor: "#fff",
    color: "#000", // 👈 all text black
    margin: "16px"
  },
  image: {
    width: "100px",
    height: "100px",
    borderRadius: "50%", // 👈 circular image
    objectFit: "cover",
    marginBottom: "12px",
  },
  button: {
    marginTop: "12px",
    padding: "8px 14px",
    border: "none",
    borderRadius: "6px",
    backgroundColor: "#4f46e5",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Card;

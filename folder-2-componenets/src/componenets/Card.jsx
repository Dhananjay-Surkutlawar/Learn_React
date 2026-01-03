import React from "react";

const Card = ({ title, description, buttonText }) => {
  return (
    <div style={styles.card}>

      <div style={styles.content}>
        <h3 style={styles.title}>{title}</h3>
        <p style={styles.description}>{description}</p>

        {buttonText && (
          <button style={styles.button}>{buttonText}</button>
        )}
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "300px",
    borderRadius: "12px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    overflow: "hidden",
    backgroundColor: "#fff",
    transition: "transform 0.2s ease",
    margin: "16px", 
  },
  image: {
    width: "100%",
    height: "180px",
    objectFit: "cover",
  },
  content: {
    padding: "16px",
  },
  title: {
    margin: "0 0 8px",
    fontSize: "18px",
  },
  description: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "12px",
  },
  button: {
    padding: "8px 14px",
    borderRadius: "6px",
    border: "none",
    backgroundColor: "#4f46e5",
    color: "#fff",
    cursor: "pointer",
  },
};

export default Card;

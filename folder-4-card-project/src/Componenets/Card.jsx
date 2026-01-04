import React from 'react'

const Card  = ({ company, role, type, level, salary, location, logo }) => {
  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <img src={logo} alt={company} style={styles.logo} />
        <button style={styles.saveBtn}>Save</button>
      </div>

      <p style={styles.company}>
        {company} <span style={styles.time}>• 2 weeks ago</span>
      </p>

      <h2 style={styles.role}>{role}</h2>

      <div style={styles.tags}>
        <span style={styles.tag}>{type}</span>
        <span style={styles.tag}>{level}</span>
      </div>

      <hr style={styles.hr} />

      <div style={styles.footer}>
        <div>
          <h3 style={styles.salary}>{salary}</h3>
          <p style={styles.location}>{location}</p>
        </div>
        <button style={styles.applyBtn}>Apply Now</button>
      </div>
    </div>
  );
};

const styles = {
  card: {
    width: "320px",
    padding: "20px",
    borderRadius: "20px",
    background: "#fff",
    boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
    fontFamily: "Arial, sans-serif",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  logo: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
  },
  saveBtn: {
    background: "#f2f2f2",
    border: "none",
    padding: "5px 10px",
    borderRadius: "8px",
    cursor: "pointer",
  },
  company: {
    marginTop: "15px",
    fontSize: "14px",
    color: "#555",
  },
  time: {
    color: "#999",
  },
  role: {
    margin: "5px 0 15px",
    fontSize: "22px",
  },
  tags: {
    display: "flex",
    gap: "8px",
  },
  tag: {
    background: "#f2f2f2",
    padding: "5px 10px",
    borderRadius: "10px",
    fontSize: "12px",
  },
  hr: {
    margin: "20px 0",
    border: "none",
    borderTop: "1px solid #eee",
  },
  footer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  salary: {
    margin: 0,
    fontSize: "20px",
  },
  location: {
    margin: 0,
    fontSize: "13px",
    color: "#777",
  },
  applyBtn: {
    background: "#000",
    color: "#fff",
    border: "none",
    padding: "10px 15px",
    borderRadius: "10px",
    cursor: "pointer",
  },
};
export default Card

import React, { useState } from "react";

const ReportCard = ({ report }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      style={{
        ...styles.card,
        ...(isHovered ? styles.cardHover : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h3 style={styles.title}>{report.name}</h3>
      <div style={styles.meta}>
        <span style={styles.tag}>{report.category}</span>
        <span style={styles.tag}>{report.creation_date}</span>
      </div>
    </div>
  );
};

const styles = {
  card: {
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    borderLeft: "4px solid #3498db",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
    cursor: "pointer",
  },
  cardHover: {
    transform: "translateY(-3px)",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
  },
  title: {
    margin: "0 0 8px",
    fontSize: "1.1rem",
    color: "#333",
  },
  meta: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "12px",
    fontSize: "0.85rem",
    color: "#777",
    flexWrap: "wrap",
  },
  tag: {
    backgroundColor: "#eef2f7",
    padding: "4px 8px",
    borderRadius: "4px",
    fontSize: "0.9rem",
    color: "#555",
  },
};

export default ReportCard;

import React from "react";

const ReportList = ({ reports }) => {
  if (reports.length === 0)
    return (
      <p style={{ fontStyle: "italic", color: "#666" }}>No reports found.</p>
    );

  return (
    <div style={styles.listContainer}>
      {reports.map((report) => (
        <div key={report.id} style={styles.card}>
          <h3 style={styles.title}>{report.name}</h3>
          <div style={styles.meta}>
            <span style={styles.category}>{report.category}</span>
            <span style={styles.date}>{report.creation_date}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const styles = {
  listContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
    marginTop: "20px",
  },
  card: {
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: "#ffffff",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    borderLeft: "4px solid #3498db",
    transition: "transform 0.2s ease",
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
  },
  category: {
    fontSize: "0.9rem",
    color: "#777",
    backgroundColor: "#eef2f7",
    padding: "4px 8px",
    borderRadius: "4px",
  },
  date: {
    fontStyle: "italic",
    fontSize: "0.9rem",
    color: "#777",
    backgroundColor: "#eef2f7",
    padding: "4px 8px",
    borderRadius: "4px",
  },
};

export default ReportList;

import React from "react";
import ReportCard from "./ReportCard";

const ReportList = ({ reports, loading }) => {
  if (loading) {
    return <p style={styles.loading}>Loading reports...</p>;
  }
  if (reports.length === 0)
    return <p style={styles.emptyState}>No reports found.</p>;

  return (
    <div style={styles.listContainer}>
      {reports.map((report) => (
        <ReportCard key={report.id} report={report} />
      ))}
    </div>
  );
};

const styles = {
  loading: {
    fontStyle: "italic",
    color: "#444",
    fontSize: "1rem",
  },
  emptyState: {
    fontStyle: "italic",
    color: "#666",
  },
  listContainer: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "16px",
    marginTop: "20px",
  },
};

export default ReportList;

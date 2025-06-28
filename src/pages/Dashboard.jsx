import { useState, useEffect } from "react";
import Filter from "../components/Filter";
import ReportList from "../components/ReportList";

function Dashboard() {
  const [reports, setReports] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchReports = async () => {
      try {
        setLoading(true);
        const response = await fetch("/api/reports");
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setReports(data);
        setFiltered(data);
        setError(null);
      } catch (err) {
        setError("Failed to load reports.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, []);

  useEffect(() => {
    if (category) {
      setFiltered(reports.filter((report) => report.category === category));
    } else {
      setFiltered(reports);
    }
  }, [category, reports]);

  const categories = [...new Set(reports.map((report) => report.category))];

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Report Dashboard</h1>

      <div style={styles.filterSection}>
        <Filter
          categories={categories}
          selected={category}
          onChange={setCategory}
        />
      </div>

      {error ? (
        <div style={styles.cardError}>
          <p style={styles.errorText}>{error}</p>
        </div>
      ) : (
        <ReportList reports={filtered} loading={loading} />
      )}
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem 1rem",
    fontFamily: "system-ui, sans-serif",
    backgroundColor: "#f5f7fa",
    minHeight: "100vh",
    maxWidth: "100%",
    margin: "0 auto",
  },
  header: {
    marginBottom: "1.5rem",
    fontSize: "1.8rem",
    color: "#2c3e50",
  },
  filterSection: {
    marginBottom: "1.5rem",
  },
  cardError: {
    padding: "16px",
    borderRadius: "8px",
    backgroundColor: "#fff5f5",
    borderLeft: "4px solid #e74c3c",
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
    maxWidth: "480px",
  },
  errorText: {
    color: "#c0392b",
    fontWeight: "bold",
    margin: 0,
  },
};

export default Dashboard;

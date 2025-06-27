import { useState, useEffect } from "react";
import reportData from "../data/reports.json";
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
        await new Promise((res) => setTimeout(res, 1000));
        setReports(reportData);
        setFiltered(reportData);
        setError(null);
      } catch (err) {
        setError("Failed to load reports.");
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
    <div>
      <h1>Report Dashboard</h1>
      <Filter
        categories={categories}
        selected={category}
        onChange={setCategory}
      />
      <ReportList reports={filtered} />
    </div>
  );
}

export default Dashboard;

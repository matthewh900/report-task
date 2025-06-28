import React from "react";

const Filter = ({ categories, selected, onChange }) => {
  return (
    <div style={styles.container}>
      <label style={styles.label}>
        Filter by Category:{" "}
        <select
          value={selected || ""}
          onChange={(e) => onChange(e.target.value)}
          style={styles.select}
        >
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

const styles = {
  container: {
    marginBottom: "24px",
  },
  label: {
    fontSize: "1rem",
    color: "#2c3e50",
    fontWeight: "600",
    userSelect: "none",
  },
  select: {
    marginLeft: "12px",
    padding: "6px 12px",
    fontSize: "1rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    backgroundColor: "#fff",
    color: "#2c3e50",
    cursor: "pointer",
    transition: "border-color 0.2s ease",
  },
};

export default Filter;

import React from 'react';

const Filter = ({ categories, selected, onChange }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <label>
        Filter by Category:{' '}
        <select value={selected || ''} onChange={(e) => onChange(e.target.value)}>
          <option value="">All</option>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default Filter;

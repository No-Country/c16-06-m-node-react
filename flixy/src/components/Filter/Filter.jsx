import React from 'react';

const Filter = ({ label, options, selectedValue, onChange }) => {
  return (
    <div style={{display:"flex", gap:"10px"}}>
      <label style={{alignSelf:"center", fontSize:"var(--body-2)"}}>{label}</label>
      <select value={selectedValue || 'all'} onChange={(e) => onChange(e.target.value)}>
        <option value="all">Todos</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Filter;

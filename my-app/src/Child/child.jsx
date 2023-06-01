import React from "react";


export const Child = (props) => {
  const { handleChange } = props;

  return (
    <li>
      <input
        
        type="text"
        onChange={() => handleChange}
      />
      <button>Add</button>
    </li>
  );
};














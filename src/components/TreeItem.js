import React from 'react';

function TreeItem({ tree }) {
  return (
    <div className="tree-item">
      <h2>{tree.name}</h2>
      <p>Height: {tree.height} meters</p>
      <p>Price: ${tree.price}</p>
    </div>
  );
}

export default TreeItem;
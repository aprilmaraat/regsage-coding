import React from 'react';
import TreeItem from './TreeItem';

function TreeList({ trees }) {
  return (
    <div>
      {trees.length === 0 ? (
        <p>No trees data available.</p>
      ) : (
        trees.map((tree) => <TreeItem key={tree.id} tree={tree} />)
      )}
    </div>
  );
}

export default TreeList;
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TreeList from './components/TreeList';
import './App.css';

function App() {
  const [trees, setTrees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Replace with the actual API URL provided in the assignment
    const fetchTrees = async () => {
      try {
        const response = await axios.get('YOUR_API_URL_HERE');
        setTrees(response.data);
      } catch (err) {
        setError('Error fetching trees data');
      }
    };

    fetchTrees();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Taller Trees and Prices Analysis</h1>
        {error && <p>{error}</p>}
        <TreeList trees={trees} />
      </header>
    </div>
  );
}

export default App;
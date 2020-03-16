import React from 'react';
import './App.css';
import ImageGrid from './components/ImageGrid';
import GraphicsGrid from './components/GraphicsGrid';

function App() {
  return (
    <div className="App">
      <h1>Search Images and Graphics</h1>
      <h2>Image Results</h2>
      <ImageGrid />
      <GraphicsGrid />
    </div>
  );
}

export default App;

import React from 'react'
import NavBar from './Componenets/NavBar';
import Card from './Componenets/Card';

const App = () => {
  return (
    <>
      <NavBar />
      <div style={{ marginTop: "40px", display: "flex", justifyContent: "center" }}>
        <Card />
      </div>
    </>
  );
};
export default App

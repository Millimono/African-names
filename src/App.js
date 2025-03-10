import React from "react";
import Navbar from "./components/Navbar/Navbar";
import CorpsPrincipal from "./components/CorpsPrincipal/CorpsPrincipal";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main className="content">
        <CorpsPrincipal />
      </main>
      <Footer />
    </div>
  );
}

export default App;

import React from "react";
import Header from "./Components/Header/Header"
import GoldenLearnSection from "./Components/GoldenLearnSection/GoldenLearnSection";
import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <GoldenLearnSection />
      </main>
    </div>
  )
}

export default App;
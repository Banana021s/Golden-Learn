import React from "react";
import Header from "./Components/Header/Header"
import GoldenLearnSection from "./Components/GoldenLearnSection/GoldenLearnSection";
import ContainerCard from "./Components/ContainerCard/ContainerCard";
import "./App.css"

function App() {
  return (
    <div>
      <Header />
      <main className="main">
          <ContainerCard>
            <GoldenLearnSection />
          </ContainerCard>
      </main>
    </div>
  )
}

export default App;
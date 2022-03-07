import React from "react";
import Header from "./Components/Header/Header"
import GoldenLearnSection from "./Components/GoldenLearnSection/GoldenLearnSection";
import MostVisitedCoursesSection from "./Components/MostCoursesVisitedSection/MostCoursesVisitedSection"
import ContainerCard from "./Components/ContainerCard/ContainerCard";
import "./App.css"

const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <ContainerCard>
          <GoldenLearnSection />
          <MostVisitedCoursesSection />
        </ContainerCard>
      </main>
    </div>
  )
}

export default App;
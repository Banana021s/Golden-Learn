import "./App.css"

import Header from "./Components/Header/Header"
import GoldenLearnSection from "./Components/GoldenLearnSection/GoldenLearnSection";
import MostVisitedCoursesSection from "./Components/MostCoursesVisitedSection/MostCoursesVisitedSection"
import ContainerCard from "./Components/ContainerCard/ContainerCard";
import InstagramSocial from "./Components/InstagramSocial/InstagramSocial";

const App = () => {
  return (
    <div>
      <Header />
      <main className="main">
        <GoldenLearnSection />
        <MostVisitedCoursesSection />
        <InstagramSocial />
      </main>
    </div>
  )
}

export default App;
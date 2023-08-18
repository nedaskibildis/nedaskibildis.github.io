import LandingText from "./LandingPage/LandingText";
import AboutMe from "./AboutMe";
import ProjectList from "./Projects/ProjectList";
import ExperienceList from "./Experience/ExperienceList";
import "./index.css"

function App() {
  return (
    <div className="bg-white h-screen">
        <LandingText/>
        <AboutMe />
        <ProjectList />
        <ExperienceList />
    </div>
  );
}

export default App;

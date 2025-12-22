import Landpage from "./components/landpage.jsx";
import About from "./components/aboutus.jsx";
import Member from "./components/members.jsx";
import Contactus from "./components/contact.jsx";
import Achiev from "./components/achievements.jsx";
import Projct from "./components/projects.jsx";
import Evnt from "./components/events.jsx";
const App = () => {
  return (
    <main className="bg-white">
      <Landpage />
      <About />
      <Projct />
      <Evnt />
      <Achiev />
      <Member />
      <Contactus />
    </main>
  );
};

export default App;

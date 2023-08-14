import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/Footer";
import Socials from "./components/Socials";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Socials />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Particles from "react-particles-js";

function App() {
  return (
    <>
    <Particles
    className="particles-canvas"
      params={{
        particles :{
          number: {
            value: 15,
            density: {
              enable: true,
              value_area: 900
            }
          },
          shape: {
            type: "circle",
            stroke: {
              width: 6,
              color: "#ffffff"
            }
          }
        }
      }}
    />
    <Navbar />
    <Header />
    </>
  );
}

export default App;

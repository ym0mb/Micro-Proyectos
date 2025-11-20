import Navbar from "./components/Navbar/Navbar";
import Micro1 from "./components/Micro1/Micro1"
import Footer from "./components/Footer/Footer"
import Fondo from "./assets/Fondo.png"

function App() {

  const bgImagen = {
    backgroundImage: `url(${Fondo})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize:"cover",
    position: "relative"
  }

  return (
    <div style={bgImagen} className="overflow-hidden min-h-screen ">
      <Micro1 className="flex-grow"/>
      <Navbar/>
      <Footer/>
    </div>
  );
}

export default App;

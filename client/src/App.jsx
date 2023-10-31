import Canvas from "./canvas";
import Home from "./pages/Home";
import Customizer from "./pages/Customizer";

function App() {
  return (
    <>
      <main>
        <h1 className="app transition-all ease-in">
          <Home />
          <Canvas />
          <Customizer />
        </h1>
      </main>
    </>
  );
}

export default App;

import { BrowserRouter } from "react-router-dom";
import Routers from "./routers/routers";
import Navbar from "./components/navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routers />
    </BrowserRouter>
  );
}

export default App;

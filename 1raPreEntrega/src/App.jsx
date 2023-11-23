import "./App.css";
import { NavBar } from "./components/NavBar/NavBar";
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer";

export function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje=' Soy una lista de items ' />
    </>
  );
}

export default App;

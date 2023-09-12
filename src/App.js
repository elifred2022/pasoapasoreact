//import Congratulations from "./Desafios";
import Gallery from "./Importexport";
import { Profile } from "./Importexport";
import Profileprops from "./Props";
import PackingList from "./Renderizado";

export default function App() {
  return (
    <div>
      <h2>primeros pasos</h2>
      <Gallery />
      <Profile />
      <h2>de aqui props</h2>
      <Profileprops />
      <h2>Randerizado</h2>
      <PackingList />
    </div>
  );
}

// https://es.react.dev/learn/rendering-lists rendirizado de listas

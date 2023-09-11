//import Congratulations from "./Desafios";
import Gallery from "./Importexport";
import { Profile } from "./Importexport";
import Profileprops from "./Props";

export default function App() {
  return (
    <div>
      <h2>primeros pasos</h2>
      <Gallery />
      <Profile />
      <h2>de aqui props</h2>
      <Profileprops />
    </div>
  );
}

// https://es.react.dev/learn/importing-and-exporting-components Las props te permiten considerar

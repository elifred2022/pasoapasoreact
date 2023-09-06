/*
function Profile() {
  return <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Cientificos increibles</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
*/

// desafio 1
/*
//export default// function Profile() {
  return <img src="https://i.imgur.com/lICfvbD.jpg" alt="Aklilu Lemma" />;
}
 */

// desafio 2
/*
export default function Profile() {
  return (
    <div>
      <img src="https://i.imgur.com/jA8hHMpm.jpg" alt="Katsuko Saruhashi" />;
    </div>
  );
} */

// desafio 3

/*

function Profile() {
  return <img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Científicos increíbles</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
} */

// desafio 4 crear mi propio componente

export default function Congratulations() {
  return (
    <section>
      <h1>¡Buen trabajo!</h1>
    </section>
  );
}

// Desafío 1 de 3: Arreglar el error
/*
Este código se bloquea con un error que dice Objects are not valid as a React child:

const person = {
  name: 'Gregorio Y. Zara',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>Tareas pendientes de {person}</h1>
      <img
        className="avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt="Gregorio Y. Zara"
      />
      <ul>
      <li>Mejorar el videoteléfono</li>
      <li>Preparar clases de aeronáutica</li>
      <li>Trabajar en el motor de alcohol</li>
      </ul>
    </div>
  );
} */

/* Desafío 2 de 3: Extraer información hacia un objeto 
Extrae la URL de la imagen hacia el objeto person.

const person = {
  name: 'Gregorio Y. Zara',
  imageUrl: "https://i.imgur.com/7vQD0fPs.jpg",
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>Tareas pendientes de {person.name}</h1>
      <img
        className="avatar"
        src={person.imageUrl}
        alt="Gregorio Y. Zara"
      />
      <ul>
      <li>Mejorar el videoteléfono</li>
      <li>Preparar clases de aeronáutica</li>
      <li>Trabajar en el motor de alcohol</li>
      </ul>
    </div>
  );
}

/*

Desafío 3 de 3: Escribe una expresión dentro de llaves JSX 
En el objeto a continuación, la URL de la imagen completa está dividida en 4 partes: la URL de base, imageId, imageSize y la extensión del archivo.

Queremos que la URL de la imagen combine estos atributos juntos: la URL de base (siempre 'https://i.imgur.com/'), imageId ('7vQD0fP'), imageSize ('s'), y la extensión del archivo (siempre '.jpg'). Sin embargo, algo está mal con la forma en que la etiqueta <img> especifica su src.

¿Puedes arreglarlo?

const baseUrl = 'https://i.imgur.com/';
const person = {
  name: 'Gregorio Y. Zara',
  imageId: '7vQD0fP',
  imageSize: 's',
  theme: {
    backgroundColor: 'black',
    color: 'pink'
  }
};

export default function TodoList() {
  return (
    <div style={person.theme}>
      <h1>Tareas pendientes de {person.name}</h1>
      <img
        className="avatar"
        src= { baseUrl + person.imageId + person.imageSize + '.jpg' }
        alt={person.name}
      />
      <ul>
      <li>Mejorar el videoteléfono</li>
      <li>Preparar clases de aeronáutica</li>
      <li>Trabajar en el motor de alcohol</li>
      </ul>
    </div>
  );
}

*/

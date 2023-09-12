function Item({ name, isPacked }) {
  let itemContent = name;

  if (isPacked) {
    itemContent = <del> {name + "✔"} </del>;
  }
  return <li className="item"> {itemContent} </li>;
  //<li className="item">{isPacked ? <del> {name + " ✔"} </del> : name} </li>
  /*
    <li className="item">
      {" "}
      {name} {isPacked && " ✔"}{" "}
    </li>
  ); // rendirizando con el condicional ? y : */

  /* if (isPacked) {
    return null; // return <li className="item"> {name} ✔ </li>;
  }
  return <li className="item"> {name} </li>; */
}

export default function PackingList() {
  return (
    <section>
      <h1>Lista de equipaje de sally</h1>
      <ul>
        <Item isPacked={true} name="Traje de vuelo" />
        <Item isPacked={false} name="casco con dorado" />
        <Item isPacked={true} name="Fotografia de tam" />
      </ul>
    </section>
  );
}

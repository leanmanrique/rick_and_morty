import Card from "../Card/Card";
import style from "./Cards.module.css";

export default function Cards({ characters, onClose }) {
  // se utiliza destructuring
  return (
    <div className={style.cardList}>
      {characters.map(
        //recorro el elemento con un map
        ({ id, name, status, species, gender, origin, image }) => {
          return (
            <Card
              key={id} // la key para poder diferenciar las cartas, solo le sirve a react
              id={id} // el id es para nostros, nosotros identificamos mediante id
              name={name}
              status={status}
              species={species}
              gender={gender}
              image={image}
              origin={origin.name} // TIENE QUE SER ORIGIN.NAME porque sino se rompe
              onClose={onClose} // lo agrego yo ctrl c + ctrl v desde la App.js
            />
          ); // se crea la key para poder diferenciar las cartas, es simplemente para que el código de react no tire error
        }
      )}
    </div>
  );
}

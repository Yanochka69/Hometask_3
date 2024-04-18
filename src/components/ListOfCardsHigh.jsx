import Card from "./Card.jsx";

function ListOfCardsHigh({ array, func }) {
  return (
    <div>
      {array.map((collection) => (
        collection.level >= 50 && 
        (<Card
            key={collection.id}
            name={collection.name}
            description={collection.description}
            level={collection.level}
            onClick={() => func(collection.id)}/>)
      ))}
    </div>
  );
}

export default ListOfCardsHigh
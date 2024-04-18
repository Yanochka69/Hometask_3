import Card from "./Card.jsx"

function ListOfCards({array, func}) {
    return(
        <div>
            {array.map(collection => 
            (<Card key={collection.id}
                name={collection.name}
                description={collection.description}
                level={collection.level}
                onClick={() => func(collection.id)}/>))}
        </div>
    )
}

export default ListOfCards
import "../styles/components/CardItem.css"

function CardItem({id, name}) {
    return (
        <div className="CardItem">
            {id}
            {name}
        </div>
    )
}

export default CardItem
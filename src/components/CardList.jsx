import "../styles/components/CardList.css"
import {starData} from "../data/starData"
import CardItem from "../components/CardItem"

function CardList() {
    return (
        <div className="CardList">
            {starData.map((card) => <CardItem key={card.id} {...card} />)}
        </div>
    )
}

export default CardList
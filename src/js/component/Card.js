import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
    let characterDeetz = props.type == "character" ? <div>
        <img src={`https://starwars-visualguide.com/assets/img/characters/${props.id + 1}.jpg`}
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }}
                className="card-img-top"
                style={{maxHeight: "300px", objectFit: "cover"}}
                alt="Images of Star Wars Characters"
        />
        <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <h6>Gender: {props.item.gender}</h6>
        </div>
    </div> : ""

let planetDeetz = props.type == "planet" ? <div>
        <img src={`https://starwars-visualguide.com/assets/img/planets/${props.id + 1}.jpg`}
                onError={(e) => {
                    e.target.src = 'https://starwars-visualguide.com/assets/img/placeholder.jpg'
                }}
                className="card-img-top"
                style={{maxHeight: "300px", objectFit: "cover"}}
                alt="Images of Star Wars Planets"
        />
        <div className="card-body">
            <h5 className="card-title">{props.item.name}</h5>
            <h6>Terrain: {props.item.terrain}</h6>
        </div>
    </div> : ""

    return (
        <div className="card" style={{width:"18rem"}}>
            {props.type =="character"?characterDeetz:""}
            {props.type =="planet"?planetDeetz:""}
            <div className="bottom-card">
                <Link to = {"/about/" + props.type + "/" + props.id}>
                <span>Learn More!</span>
                </Link>
                <button>lol</button>
            </div>
        </div>
    )
} 
export default Card;
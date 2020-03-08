import React from "react";

function Card({data}) {
    return (
        <div className="card">
            <div className="cardImage"> Restaurant Image  </div>
            {/* <img  src=".." className="cardImage" /> */}
    <div className="cardName" >{data.Brand}</div>
    <div className="cardDescription" >{data.Variety}</div>
            <div className="cardItem">
                <div className="cardItemHeader">Country </div>
                <div className="cardItemValue">{data.Country} </div>
            </div>
            <div className="cardItem">
                <div className="cardItemHeader"> Stars </div>
                <div className="cardItemValue">{isNaN(data.Stars)?"NA":data.Stars} </div>
            </div>
            <div className="cardItem">
                <div className="cardItemHeader"> Ranking </div>
                <div className="cardItemValue">{data["Top Ten"]} </div>
            </div>
        </div>
    )
}

export default Card;
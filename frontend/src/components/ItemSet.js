import React from 'react';
import Image from 'react-bootstrap/Image';


const ITEM_URL = "http://ddragon.leagueoflegends.com/cdn/11.23.1/img/item"
export default function renderItemSet(items){

    for (let i = 0; i < items.length; i++)
    {
        if(items[i] === 0)
        {
            items[i] = <div className="empty"></div>
        }
        else
        {
            items[i] = <Image src={`${ITEM_URL}/${items[i]}.png`} className="item"/>
        }
    }
    return(
        <div className="itemSet">
            <div className="itemRow1 d-flex my-1 mx-1">
                {items[0]}
                {items[1]}
                {items[2]}
            </div>
            <div className="itemRow2 d-flex my-1 mx-1">
                {items[3]}
                {items[4]}
                {items[5]}
            </div>
        </div>
    );

}
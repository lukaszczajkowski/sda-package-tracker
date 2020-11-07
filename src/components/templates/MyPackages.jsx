import React, { useState } from 'react';

import Card from '../molecules/Card';

export default function MyPackages({match, data}) {

    const query = JSON.stringify(match.params.query).toLowerCase();
    const results = data.filter((item) => {
        const userName = JSON.stringify(item.user_name).toLowerCase().trim();
        if(query.includes(userName)){
            return item;
        }
    });

    // const cards = results.map((item) => {
    //     return <Card key = {item.id} data = {item}/> 
    // });

    const [cards, setCards] = useState(renderCards("choice", results));

    /**
     * This function filters the packages by their status:
     * - delivered
     * - on-the-way
     * - ready-for-pickup
     * - order-info-received
     * @param {*} key 
     * @param {*} data
     * @returns array of cards after filtering 
     */
    function renderCards(key, data) {
        let renderedCards = {};
        if (key != "choice"){
            renderedCards = data.filter((item) => {
                if(item.status == key){
                    return item;
                }
            }).map(item => {
                return <Card key = {item.id} data = {item}/>
            });
        } else {
            renderedCards = data.map(item => {
                return <Card key = {item.id} data = {item}/>
            });
        }

        return renderedCards;
    }
        
    return(
        <div className = "my-packages">
            <h2 className = "filter-message">Filter results by:</h2>
            <section className = "button-section">
            <button className = "buttons" onClick = {
                () => setCards(renderCards("delivered", results))
            }>
                Delivered
            </button>
            <button className = "buttons"  onClick = {
                () => setCards(renderCards("on-the-way", results))
            }>
                Underway
            </button>
            <button className = "buttons" onClick = {
                () => setCards(renderCards("ready-for-pickup", results))
            }>
                Ready for pickup
            </button>
            <button className = "buttons"  onClick = {
                () => setCards(renderCards("order-info-received", results))
            }>
                Order received
            </button>
            <button className = "buttons"  onClick = {
                () => setCards(renderCards("choice", results))
            }>
                Show all
            </button>
            </section>
            <section className = "display-cards">
                {cards}
            </section>
        
        </div>
    );
}
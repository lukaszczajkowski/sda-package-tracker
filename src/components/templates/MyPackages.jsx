//React core
import React, { useState } from "react";

//Recoil import
import { useRecoilState } from "recoil";

//Components
import Card from "../molecules/Card";

//Global language state
import { languageState } from "../../state/language";

/**
 * Takes in the match and the data and displays the cards with
 * the packages that match with the name given by the user in the
 * form
 * @param {match, data} props
 */
export default function MyPackages({ match, data }) {
  const query = JSON.stringify(match.params.query).toLowerCase();
  const results = data.filter((item) => {
    const userName = JSON.stringify(item.user_name).toLowerCase().trim();
    if (query.includes(userName)) {
      return item;
    }
  });

  const [language] = useRecoilState(languageState);

  //Array of outputs in the chosen language
  const outputsArray = setOutputArray(language);

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
    if (key != "choice") {
      renderedCards = data
        .filter((item) => {
          if (item.status == key) {
            return item;
          }
        })
        .map((item) => {
          return <Card key={item.id} data={item} />;
        });
    } else {
      renderedCards = data.map((item) => {
        return <Card key={item.id} data={item} />;
      });
    }

    return renderedCards;
  }

  return (
    <div className="my-packages">
      <h2 className="filter-message">{outputsArray[0]}</h2>
      <section className="button-section">
        <button
          className="buttons"
          onClick={() => setCards(renderCards("delivered", results))}
        >
          {outputsArray[1]}
        </button>
        <button
          className="buttons"
          onClick={() => setCards(renderCards("on-the-way", results))}
        >
          {outputsArray[2]}
        </button>
        <button
          className="buttons"
          onClick={() => setCards(renderCards("ready-for-pickup", results))}
        >
          {outputsArray[3]}
        </button>
        <button
          className="buttons"
          onClick={() => setCards(renderCards("order-info-received", results))}
        >
          {outputsArray[4]}
        </button>
        <button
          className="buttons"
          onClick={() => setCards(renderCards("choice", results))}
        >
          {outputsArray[5]}
        </button>
      </section>
      <section className="display-cards">
        {cards.length === 0 ? <p>{outputsArray[6]}</p> : cards}
      </section>
    </div>
  );
}

/**
 * Takes in a global language state and populates the array
 * of outputs with messages in english or polish depending on
 * that state
 * @param {languageState} language
 * @returns {Array} array of strings with messages
 */
function setOutputArray(language) {
  let outputsArray = [];
  switch (language) {
    case "en":
      outputsArray[0] = "Filter results by:";
      outputsArray[1] = "Delivered";
      outputsArray[2] = "Underway";
      outputsArray[3] = "Ready for pickup";
      outputsArray[4] = "Order received";
      outputsArray[5] = "Show all";
      outputsArray[6] = "No packages found";
      break;
    case "pl":
      outputsArray[0] = "Filtruj wyniki:";
      outputsArray[1] = "Dostarczone";
      outputsArray[2] = "W drodze";
      outputsArray[3] = "Gotowe do odbioru";
      outputsArray[4] = "Zamowienie przyjete";
      outputsArray[5] = "Pokaz wszystkie";
      outputsArray[6] = "Nie znaleziono paczek";
      break;
    default:
      break;
  }
  return outputsArray;
}

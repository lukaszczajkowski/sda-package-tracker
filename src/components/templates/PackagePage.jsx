//React import
import React from "react";

//Recoil import
import { useRecoilState } from "recoil";

//Global language state
import { languageState } from "../../state/language";

//Components
import Card from "../molecules/Card";

/**
 * Takes the props with match and data and returns the view
 * of cards with the parcel id that user entered.
 * @param {match, data}
 */
export default function PackagePage({ match, data }) {
  const id = match.params.id;

  const [language] = useRecoilState(languageState);

  //Filters the data prop and returns the items with a specified id
  const result = data.filter((item) => {
    if (item.parcel_id == id) {
      return item;
    }
  });

  //Maps the result of the filtering with Card components
  const parcel = result.map((item) => {
    return <Card key={item.id} data={item} />;
  });

  /**
   * Defines the output - when there is no packages with the
   * specified id, it shows an appropriate message, and if the 
   * match is found, it returns the package with the given id
   */
  const display = parcel.length === 0 ? setMessage(language) : parcel;

  return <div className="package-page">{display}</div>;
}

/**
 * Takes in a global language state and populates the array
 * of outputs with message in english or polish depending on
 * that state
 * @param {languageState} language 
 * @returns {string} message
 */
function setMessage(language) {
    let message;
    switch (language) {
      case "en":
        message = "There are no packages with this ID"
        break;
      case "pl":
        message = "Nie znalezlismy paczek z podanym ID"
        break;
      default:
        break;
    }
    return message;
}

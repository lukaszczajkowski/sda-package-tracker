//React core
import React from "react";

//Recoil import
import { useRecoilState } from "recoil";

//Components
import NameForm from "./NameForm";
import PackageIdForm from "./PackageIdForm";

//Global language state
import { languageState } from "../../state/language";

/**
 * This is a component of the home page. It uses the NameFrom
 * and the PackageIdForm components to enable the user to view
 * all his/her packages or search the id by package
 */
export default function HomePage() {
  const [language] = useRecoilState(languageState);

  //Array of outputs in the chosen language
  const outputsArray = setOutputArray(language);

  return (
    <div className="home-page">
      <div>
        <h2 className="welcome">{outputsArray[0]}</h2>
      </div>
      <div className="content">{outputsArray[1]}</div>
      <div className="form">
        <NameForm />
      </div>

      <div className="content">
        <h2 className="welcome">{outputsArray[2]}</h2>
        <p>{outputsArray[3]}</p>
        <PackageIdForm />
      </div>
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
      outputsArray[0] = "Welcome to Post Tracker!";
      outputsArray[1] =
        "To view your packages, enter your first and last name here:";
      outputsArray[2] = "Know your package ID?";
      outputsArray[3] = "Enter it here to check its status:";
      break;
    case "pl":
      outputsArray[0] = "Witaj w Post Tracker!";
      outputsArray[1] =
        "Aby sprawdzic swoje paczki, wpisz swoje imie i nazwisko tutaj:";
      outputsArray[2] = "Znasz numer swojej paczki?";
      outputsArray[3] = "Wpisz go tu zeby sprawdzic jej status:";
      break;
    default:
      break;
  }
  return outputsArray;
}

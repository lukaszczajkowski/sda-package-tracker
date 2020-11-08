//React core
import React from "react";

//React router dom
import { Link } from "react-router-dom";

//Recoil library
import { useRecoilState } from "recoil";

//Global language state
import { languageState } from "../../state/language";

/**
 * The header component with the Home button that directs 
 * the user to the home page, and the languages button
 * that change the language to English or Polish (English is default)
 */
export default function Header() {
  const [language, setLanguage] = useRecoilState(languageState);
  return (
    <nav className="header">
      <div className="left">
        <Link to="/">
        <button className="head-button">{setMessage(language)}</button>
        </Link>
      </div>
      <div className="right">Post Tracker</div>
      <div className="langs">
        <button className="head-button" onClick={() => setLanguage("en")}>
          EN
        </button>
        <button className="head-button" onClick={() => setLanguage("pl")}>
          PL
        </button>
      </div>
    </nav>
  );
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
        message = "Home"
        break;
      case "pl":
        message = "Glowna"
        break;
      default:
        break;
    }
    return message;
}

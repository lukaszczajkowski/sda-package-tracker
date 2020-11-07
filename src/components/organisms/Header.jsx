import React from 'react';
import { Link } from 'react-router-dom';

//Recoil library
import { useRecoilState } from 'recoil';

  //Global language state
  import { languageState } from '../../state/language'

export default function Header() {
    const [language, setLanguage] = useRecoilState(languageState);
    return (
        <nav className="header">
            <div className = "left">
            <Link to="/">
                <button className = "head-button">
                    Home
                </button>
            </Link>
            </div>
            <div className = "right">
                Post Tracker
            </div>
            <div className = "langs">
                <button className = "head-button"
                onClick = {() => setLanguage("en")}>
                    EN 
                </button>
                <button className = "head-button"
                onClick = {() => setLanguage("pl")}>
                    PL
                </button>
            </div>
        </nav>
    )
}
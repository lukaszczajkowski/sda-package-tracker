//Recoil library
import { atom } from "recoil";

/**
 * Keeps track of the current language state.
 * The default language is English ("en")
 */
export const languageState = atom({
  key: "language",
  default: "en",
});

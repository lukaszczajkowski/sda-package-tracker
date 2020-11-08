//Recoil import
import { useRecoilState } from "recoil";

//React-router-dom import
import { Link } from "react-router-dom";

//Formik import
import { useFormik } from "formik";

//Global language state
import { languageState } from "../../state/language";

/** 
 * This component is used as a form when the user wants
 * to view all the packages. It directs the user to the packages
 * page only if the input field is not empty
*/
export default function NameForm() {
  const [language] = useRecoilState(languageState);

  //Array of outputs in the chosen language
  const outputsArray = setOutputArray(language);

  /**
   * Validates the user input against the empty field
   * @param {String} values from the Formik form
   * @returns {String} array of errors
   */
  function validate(values) {
    let errors = {};
    if (!values.query) {
      errors.query = outputsArray[1];
    }
    return errors;
  }

  //Formik constant to control the form
  const formik = useFormik({
    initialValues: {
      query: "",
    },
    validate,
    onChange: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="name-form">
      <div className="input">
        <input
          onChange={formik.handleChange}
          placeholder={outputsArray[0]}
          name="query"
          type="text"
          value={formik.values.query}
          className="input-field"
        />
      </div>
      {formik.errors.query ? (
        <div className="errors">{formik.errors.query}</div>
      ) : null}
      <div className="sumbition">
        {formik.values.query === "" ? (
          <button className="buttons">{outputsArray[2]}</button>
        ) : (
          <Link className="buttons" to={"/mypackages/" + formik.values.query}>
            {outputsArray[2]}
          </Link>
        )}
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
      outputsArray[0] = "John Smith";
      outputsArray[1] = "Field required!";
      outputsArray[2] = "Go to my packages";
      break;
    case "pl":
      outputsArray[0] = "Jan Kowalski";
      outputsArray[1] = "Pole wymagane!";
      outputsArray[2] = "Sprawdz paczki";
      break;
    default:
      break;
  }
  return outputsArray;
}

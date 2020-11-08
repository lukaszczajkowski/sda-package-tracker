//Recoil import
import { useRecoilState } from "recoil";

//React-router-dom import
import { Link } from "react-router-dom";

//Formik immport
import { useFormik } from "formik";

//Global language state
import { languageState } from "../../state/language";

/**
 * This component is used as a form when the user wants
 * to view the package with a specific id.
 * It directs the user to the package page
 * only if the input field is not empty
 */
export default function PackageIdForm() {
  /**
   * Validates the user input against the empty field
   * @param {String} values from the Formik form
   * @returns {String} array of errors
   */
  function validate(values) {
    let errors = {};
    if (!values.id) {
      errors.id = outputsArray[1];
    }
    return errors;
  }

  //Formik constant to control the form
  const formik = useFormik({
    initialValues: {
      id: "",
    },
    validate,
    onChange: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  //Array of outputs in the chosen language
  const [language] = useRecoilState(languageState);

  const outputsArray = setOutputArray(language);

  return (
    <div className="name-form">
      <div className="input">
        <input
          onChange={formik.handleChange}
          placeholder={outputsArray[0]}
          name="id"
          type="text"
          value={formik.values.id}
          className="input-field"
        />
      </div>
      {formik.errors.id ? (
        <div className="errors">{formik.errors.id}</div>
      ) : null}
      {formik.values.id === "" ? (
        <button className="buttons">{outputsArray[2]}</button>
      ) : (
        <Link className="buttons" to={"/package/" + formik.values.id}>
          Track the package
        </Link>
      )}
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
      outputsArray[0] = "12345678";
      outputsArray[1] = "Field required!";
      outputsArray[2] = "Track the package";
      break;
    case "pl":
      outputsArray[0] = "12345678";
      outputsArray[1] = "Pole wymagane!";
      outputsArray[2] = "Sledz paczke";
      break;
    default:
      break;
  }
  return outputsArray;
}
import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

//Global language state
import { languageState } from '../../state/language'

export default function NameForm () {

    const [language] = useRecoilState(languageState);

    const outputsArray = setOutputArray(language);
    function validate(values) {
        let errors = {};
        if (!values.query) {
          errors.query = outputsArray[1];
        } 
        return errors;
     
    }

    const formik = useFormik({
        initialValues: {
            query: '',
        },
        validate, 
        onChange: values => {
            alert(JSON.stringify(values, null, 2));
        },
        
    });

    return(
        <div className="name-form">
            <div className = "input">
            <input onChange = {formik.handleChange}
            placeholder = {outputsArray[0]}
            name = "query"
            type = "text"
            value = {formik.values.query}
            className = "input-field"
            />
            </div>
            {formik.errors.query ? 
                <div className = "errors">
                    {formik.errors.query}
                </div>
            : null}
            <div className = "sumbition">
            {formik.values.query === ''?
             <button className = "buttons">{outputsArray[2]}</button>
             :
            <Link className = "buttons" to = {"/mypackages/"+formik.values.query}>
                {outputsArray[2]}
            </Link>
            }
            </div>
        </div>
    );
}


function setOutputArray(language){
    let outputsArray = [];
    switch (language){
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
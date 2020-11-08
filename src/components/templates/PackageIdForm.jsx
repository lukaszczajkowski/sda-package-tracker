import { useRecoilState } from 'recoil';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';

//Global language state
import { languageState } from '../../state/language'

export default function PackageIdForm() {
    function validate(values) {
        let errors = {};
        if (!values.id) {
          errors.id = outputsArray[1];
        } 
        return errors;
     
    }
    const formik = useFormik({
        initialValues: {
            id: '',
        },
        validate, 
        onChange: values => {
            alert(JSON.stringify(values, null, 2));
        },
        
    });

    const [language] = useRecoilState(languageState);

    const outputsArray = setOutputArray(language);

    return (
        
        <div className="name-form">
            <div className = "input">
            <input onChange = {formik.handleChange}
            placeholder = {outputsArray[0]}
            name = "id"
            type = "text"
            value = {formik.values.id}
            className = "input-field"
            />
            </div>
            {formik.errors.id ? 
                <div className = "errors">
                    {formik.errors.id}
                </div>
                 : null}
            {formik.values.id === ''?
             <button className = "buttons">{outputsArray[2]}</button>
             :
            <Link className = "buttons" to = {"/package/" + formik.values.id}>
                 Track the package
            </Link>
            } 
        </div>
    );
}

function setOutputArray(language){
    let outputsArray = [];
    switch (language){
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


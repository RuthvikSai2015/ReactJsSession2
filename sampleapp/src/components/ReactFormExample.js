import Button from 'react-bootstrap/Button'
import { useState } from 'react'
function ReactFormExample() {

    const initialValues = { email: "", password: "" }
    const [formValues, setFormValues] = useState(initialValues) //user Input
    const [formErrors, setFormErrors] = useState({})// user validations
    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormValues(
            { ...formValues, [name]: value }
        )
    }
    const handleSubmit = () => {
        setFormErrors(validate(formValues));
    }
    const validate = (values) => {
        let errors = {};
        const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!values.email) {
            errors.email = " Email is required ";
        } else if (regexp.test(values.email)) {
            errors.email = "Invalid email format";
        }

        if (!values.password) {
            errors.password = "Password is required"
        } else if (values.password.length < 8) {
            errors.password = "Password should contain atleast 8 characters";
        }
        return errors;
    }
    return (
        <>
            <h1> Sign In Form</h1>
            <form>
                <div>
                    <label> Email </label>
                    <input type="email" name="email" id="email" onChange={handleInputChange} />
                    {
                        formErrors.email && <span>{formErrors.email}</span>
                    }
                </div>
                <div>
                    <label> Password </label>
                    <input type="password" name="password" id="password" onChange={handleInputChange} />
                    {
                        formErrors.password && <span>{formErrors.password}</span>
                    }
                </div>
                <Button onClick={handleSubmit}>Submit</Button>
            </form>
        </>
    )
}
export default ReactFormExample;
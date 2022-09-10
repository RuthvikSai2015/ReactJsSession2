import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as yup from 'yup'

const initialValues = { email: "", password: "" };
const SignInSchema = yup.object().shape({
    email: yup.string().email().required("Email is required"),
    password: yup.string().required("Password is required").min(4, "Password is too short")
})
function FormikYup() {
    return (
        <Formik initialValues={initialValues}
            validationSchema={SignInSchema}
            onSubmit={(values) => console.log(values)}>
            {(formik) => { //rendered passed props 

                const { errors,touched,isValid} = formik;
                return (
                    <>
                        <h1>Sign On Form</h1>
                        <Form>
                            <label>Email :</label>
                            <Field type="email" name="email" />
                            <ErrorMessage name="email" component="span" /><br/><br/>
                            <label>Password :</label>
                            <Field type="password" name="password" />
                            <ErrorMessage name="password" component="span" /><br/><br/>
                            <button type="submit" disabled={isValid}>Sign In</button>
                        </Form>
                    </>
                )
            }}
        </Formik>
    )
}
export default FormikYup;
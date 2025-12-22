import { useState} from "react"

import FormInput from "../../Form-input/Form-Input.component"
import './sign-in-form.styles.scss'
import Button, {BUTTON_TYPE_CLASSES} from "../../Button/Button.component"
import { signInWithGooglePopup, createUserDocumentFromAuth,signInAuthUserWithEmailAndPassword } from "../../../utils/firebase/firebase.utils"
const defaultFormFields = {
    // displayName: '',
    email: '',
    password: '',
    // confirmPassword: ''
}

const SignInForm = () => {
const [ formFields, setFormFields] = useState(defaultFormFields)
const {email, password} = formFields 

 

console.log(formFields)
const resetFormFields = () => {
    setFormFields(defaultFormFields)

}

const signInWithGoogle = async () => {
        await signInWithGooglePopup()
      
    }

const handleSubmit = async (event) => {
event.preventDefault()

try {
    const {user}= await signInAuthUserWithEmailAndPassword(email, password)
    resetFormFields()
  } catch (error) {
    switch(error.code){
        case 'auth/wrong-password':
            alert('wrong password for this email')
            break
        case 'auth/user-not-found':
            alert('no user found for this email')
            break
        default:
            console.log(error)
    }

   
    
    
  }
}
const handleChange = (event) => {
    const {name, value} = event.target
    setFormFields({...formFields, [name]: value})

}
  return (
    <div className="sign-up-container">
        <h2>Already Have an account ?</h2>
        <span>
            Sign in with your email and password
        </span>

        <form onSubmit={handleSubmit}>
           
            <FormInput label="Email" type='email' required onChange={handleChange} name="email" value={email}/>

        
            <FormInput label="Password" type='password' required onChange={handleChange} name="password" value={password}/>

            <div className="buttons-container">
                <Button type='submit'>Sign In</Button>
                <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google}  onClick={signInWithGoogle}>Google Sign In</Button>
            </div>
            
        
        </form>
    </div>
  )
}

export default SignInForm

import SignInForm from "../../Components/Category-item/Sign-in-form/Sign-in-form.component"
import SignUpForm from "../../Components/Category-item/Sign-up/Sign-up-form.component"
import './authentication.styles.scss'
const Authentication = () => {
  return (
    <div className="authentication-container">
       <SignInForm />
       <SignUpForm />
    </div>
  )
}

export default Authentication
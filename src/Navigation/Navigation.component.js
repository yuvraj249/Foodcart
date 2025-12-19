import { Outlet, Link} from "react-router-dom";
import { UserContext } from "../context/user.context";
import { Fragment, useContext } from "react"
import { SignOutUser } from "../utils/firebase/firebase.utils";
import {ReactComponent as AppLogo} from '../../src/assets/crown.svg'
import CartIcon from "../Components/Cart-icon/Cart-icon.compoent";
import CartDropdown from "../Components/Cart-dropdown/Cart-dropdown.component";
import './navigation.styles.scss'
import { CartContext } from "../context/cart.context";


const Navigation = () => {
  
  const {currentUser} = useContext(UserContext)
  const {isCartOpen } = useContext(CartContext)
  return (
    <Fragment>
      <div className="navigation">
       <Link className="Logo-container" to='/'>
        <AppLogo className="logo"/>      
       </Link>
        <div className="nav-links-container">
            <Link className="nav-link" to='/order'>
            Order
            </Link>
            {
              currentUser ? (
                <span className="nav-link" onClick={SignOutUser}>SIGN OUT</span>
              ) : (
            <Link className="nav-link" to='/auth'>
            Sign In
            </Link>
              )
            }
            <CartIcon />
        </div>
       {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
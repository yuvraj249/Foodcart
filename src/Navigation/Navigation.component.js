import { Outlet, Link} from "react-router-dom";
import { UserContext } from "../context/user.context";
import { Fragment, useContext } from "react"
import { SignOutUser } from "../utils/firebase/firebase.utils";
import {ReactComponent as AppLogo} from '../../src/assets/crown.svg'
import CartIcon from "../Components/Cart-icon/Cart-icon.compoent";
import CartDropdown from "../Components/Cart-dropdown/Cart-dropdown.component";
import { NavigationContainer , LogoContainer , NavLinks, NavLink} from "./navigation.styles";
import { CartContext } from "../context/cart.context";


const Navigation = () => {
  
  const {currentUser} = useContext(UserContext)
  const {isCartOpen } = useContext(CartContext)
  return (
    <Fragment>
      <NavigationContainer>
       <LogoContainer to='/'>
        <AppLogo className="logo"/>      
       </LogoContainer>
        <NavLinks>
            <NavLink to='/order'>
            Order
            </NavLink>
            {
              currentUser ? (
                <NavLink as='span' onClick={SignOutUser}>SIGN OUT</NavLink>
              ) : (
            <NavLink to='/auth'>
            Sign In
            </NavLink>
              )
            }
            <CartIcon />
        </NavLinks>
       {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
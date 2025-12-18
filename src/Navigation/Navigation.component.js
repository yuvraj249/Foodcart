import { Outlet, Link} from "react-router-dom";
import { Fragment } from "react"
import {ReactComponent as AppLogo} from '../../src/assets/crown.svg'
import './navigation.styles.scss'


const Navigation = () => {
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
            <Link className="nav-link" to='/sign-in'>
            Sign In
            </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  )
}

export default Navigation
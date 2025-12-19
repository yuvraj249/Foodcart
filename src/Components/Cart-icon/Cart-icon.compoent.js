import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from './../../assets/shopping-bag.svg'
import { CartContext } from '../../context/cart.context'
import { UserContext } from '../../context/user.context'
import { useContext } from 'react'
const CartIcon = () => {
 const {isCartOpen, setCartOpen} = useContext(CartContext)
 const toggleIsCartOpen = () => setCartOpen(!isCartOpen)
 return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon-container' />
        <span className='item-count'>0</span>
    </div>
 )
}

export default CartIcon
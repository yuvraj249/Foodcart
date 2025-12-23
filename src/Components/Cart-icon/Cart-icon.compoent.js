import './cart-icon.styles.scss'
//import {ReactComponent as ShoppingIcon} from './../../assets/shopping-bag.svg'
//import { CartContext } from '../../context/cart.context'
//import { UserContext } from '../../context/user.context'
import { useContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectCartCount, selectIsCartOpen } from '../../store/cart/cart.selector'
import { setCartOpen } from '../../store/cart/cart.action'

import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

const CartIcon = () => {
//  const {isCartOpen, setCartOpen, cartCount} = useContext(CartContext)
const dispatch = useDispatch()
const cartCount = useSelector(selectCartCount)
const isCartOpen = useSelector(selectIsCartOpen)
 const toggleIsCartOpen = () => dispatch(setCartOpen(!isCartOpen))
 return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
        <ShoppingIcon className='shopping-icon-container' />
        <span className='item-count'>{cartCount}</span>
    </div>
 )
}

export default CartIcon
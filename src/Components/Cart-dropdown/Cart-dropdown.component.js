import './cart-dropdown.styles.scss'
import { useContext } from 'react'
import Button from '../Button/Button.component'
import CartItem from '../Cart-Item/Cart-Item.component'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectCartItems } from '../../store/cart/cart.selector'



const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate()
  const goToCheckoutHandler = () => {
    navigate('/checkout')
  }
  return (
    <div className='cart-dropdown-container'>
        <div  className='cart-items'>
          {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
        </div>
        <Button onClick={goToCheckoutHandler}>GO TO CART</Button>
    </div>
  )
}

export default CartDropdown
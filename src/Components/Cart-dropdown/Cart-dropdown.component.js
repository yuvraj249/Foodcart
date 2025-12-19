import './cart-dropdown.styles.scss'
import { useContext } from 'react'
import { UserContext } from '../../context/user.context'
import { CartContext } from '../../context/cart.context'
import Button from '../Button/Button.component'
import CartItem from '../Cart-Item/Cart-Item.component'




const CartDropdown = () => {
  const {cartItems} = useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
        <div  className='cart-items'>
          {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
        </div>
        <Button>GO TO CART</Button>
    </div>
  )
}

export default CartDropdown
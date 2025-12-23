import './food-card.styles.scss'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.component'
import { useDispatch, useSelector } from 'react-redux'
import { addItemToCart } from '../../store/cart/cart.action'
import { selectCartItems } from '../../store/cart/cart.selector'

const FoodCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const dispatch = useDispatch()
  const cartItems = useSelector(selectCartItems)
  const addProductToCart = () => dispatch(addItemToCart(cartItems,product))

  return (
    <div className="food-card-container">
      
      <div className="image-container">
        <img src={imageUrl} alt={name} />
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={addProductToCart}
        >
          Add to cart
        </Button>
      </div>

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>

    </div>
  );
};


export default FoodCard

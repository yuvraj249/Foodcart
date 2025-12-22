import './food-card.styles.scss'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import Button, { BUTTON_TYPE_CLASSES } from '../Button/Button.component'

const FoodCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const { addItemToCart } = useContext(CartContext);

  return (
    <div className="food-card-container">
      
      <div className="image-container">
        <img src={imageUrl} alt={name} />
        <Button
          buttonType={BUTTON_TYPE_CLASSES.inverted}
          onClick={() => addItemToCart(product)}
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

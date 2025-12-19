import { useContext } from "react"
import './food.styles.scss'

import FoodCard from "../../Components/Food-card/Food-card.component"

import { ProductsContext } from "../../context/products.context"

const Food = () => {
  const {products} = useContext(ProductsContext)
  return (
    <div className="products-container">
        {products.map((product )=> (
            <FoodCard key={product.id} product={product}/>
        ))}
    </div>
  )
}

export default Food
import './category.styles.scss';
import { useParams } from 'react-router-dom';
import { useContext, useState, useEffect, Fragment } from 'react';
import { CategoriesContext } from '../../context/categories.context';
import FoodCard from '../../Components/Food-card/Food-card.component';

const Category = () => {
  const { category } = useParams();
  const categoryKey = category.toLowerCase();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] = useState([]);

  useEffect(() => {
    if (categoriesMap[categoryKey]) {
      setProducts(categoriesMap[categoryKey]);
    }
  }, [categoryKey, categoriesMap]);

  return (
    <Fragment>
    < h2 className='category-title'>{category.toUpperCase()}</h2>
    <div className="categoryy-container">
      {products.map((product) => (
        <FoodCard key={product.id} product={product} />
      ))}
    </div>
    </Fragment>
  );
};

export default Category;

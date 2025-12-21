import {Routes , Route} from 'react-router-dom'
import CategoriesPreview from '../../routes/Categories-preview/Categories-preview.component'
import Category from '../Category/Category.component'
import './food.styles.scss'

const Food = () => {
  return (
   <Routes>
    <Route index element={<CategoriesPreview />}/>
    <Route path=":category" element={<Category />}/>
   </Routes>
  )
}

export default Food
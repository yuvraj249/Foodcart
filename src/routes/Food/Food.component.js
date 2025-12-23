import { useEffect } from 'react'
import { getCategoriesAndDocuments } from '../../utils/firebase/firebase.utils'
import { setCategories } from '../../store/categories/category.action'
import {Routes , Route} from 'react-router-dom'
import { useDispatch } from 'react-redux'
import CategoriesPreview from '../../routes/Categories-preview/Categories-preview.component'
import Category from '../Category/Category.component'
import './food.styles.scss'

const Food = () => {
  const dispatch = useDispatch()
  useEffect(() => {
         const getCategoriesMap = async () => {
          const categoriesArray = await getCategoriesAndDocuments('categories')
          console.log(categoriesArray)
           dispatch(setCategories(categoriesArray))
         }
         getCategoriesMap()
      }, [])
  return (
   <Routes>
    <Route index element={<CategoriesPreview />}/>
    <Route path=":category" element={<Category />}/>
   </Routes>
  )
}

export default Food
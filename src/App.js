import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation.component";
import Authentication from "./routes/Authentication/Authentication.component";
import Food from "./routes/Food/Food.component";


// const Order = () => {
//   return <h1>I am Ordering</h1>
// }
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='order' element={ <Food />}/>
      <Route path='auth' element={<Authentication />}/>  
      </Route>
      
    </Routes>
  )

}

export default App
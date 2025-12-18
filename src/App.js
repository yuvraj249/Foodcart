import Home from "./routes/home/home.component";
import { Route, Routes } from "react-router-dom";
import Navigation from "./Navigation/Navigation.component";
import SignIn from "./routes/home/sign-in/Sign-in.component";

const Order = () => {
  return <h1>I am shopping</h1>
}

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='order' element={ <Order />}/>
      <Route path='sign-in' element={<SignIn />}/>
      </Route>
      
    </Routes>
  )

}

export default App
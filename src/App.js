import {   useEffect} from "react";

import { Route, Routes } from "react-router-dom";
import { useDispatch } from "react-redux";

import { onAuthStateChangedListener, createUserDocumentFromAuth} from "./utils/firebase/firebase.utils";
import { createAction } from "./utils/firebase/reducer/reducer.utils";


import Home from "./routes/home/home.component";

import Navigation from "./Navigation/Navigation.component";
import Authentication from "./routes/Authentication/Authentication.component";
import Food from "./routes/Food/Food.component";
import Checkout from "./routes/Checkout/Checkout.component";
import { setCurrentUser } from "./store/user/user.action";

const App = () => {
  const dispatch = useDispatch()
  useEffect(() => {
      const unsubscribe = onAuthStateChangedListener((user) => {
          if(user){
              createUserDocumentFromAuth(user)
          }
          dispatch(setCurrentUser(user))
      
      })
      return unsubscribe
  
  }, [])
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
      <Route index element={<Home />} />
      <Route path='order/*' element={ <Food />}/>
      <Route path='auth' element={<Authentication />}/> 
      <Route path='checkout' element={<Checkout />}/> 
      </Route>
      
    </Routes>
  )

}

export default App
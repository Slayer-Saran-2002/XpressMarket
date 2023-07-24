import {BrowserRouter, Route,Routes}from "react-router-dom";
import Home from './components/Home/Home';
import Cart from './components/Cart/Cart';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Category from './components/Category/Category';
import AppContext from './utils/context';

function App() {

  return (
    <BrowserRouter>
      <AppContext>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product:id' element={<SingleProduct/>}/>
          <Route path='/category:id' element={<Category/>}/>
        </Routes>
      </AppContext>
    </BrowserRouter>
  ) 
};

export default App
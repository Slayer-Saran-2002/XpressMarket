import {BrowserRouter, Route,Routes}from "react-router-dom";
import Home from './components/Home/Home';
import SingleProduct from './components/SingleProduct/SingleProduct';
import Category from './components/Category/Category';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import AppContext from './utils/context';

function App() {

  return (
    <BrowserRouter>
      <AppContext>
       <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<SingleProduct/>}/>
          <Route path='/category/:id' element={<Category/>}/>
        </Routes>
        <Footer/>
      </AppContext>
    </BrowserRouter>
  ) 
};

export default App
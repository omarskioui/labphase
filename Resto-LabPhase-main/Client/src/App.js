import './App.css';
import Header from './Components/Header';
import Caroussel from './Components/Caroussel';

import About from './Components/About';
import Specialdish from './Components/Specialdish';
import Menu from './Components/Menu';
import Reservation from './Components/Reservation';
import Features from './Components/Features ';

import Footer from './Components/Footer';
import { Route, Routes, useLocation } from 'react-router-dom';
import Service from './Components/Service';
import Booking from './Components/Admin/Booking';
import Dashboard from './Components/Admin/Dashboard';
import Tables from './Components/Admin/Tables';

import Settings from './Components/Admin/Settings';
import Contact from './Components/Contact';
import Signin from './Components/Admin/Signin';
import Statics from './Components/Admin/Statics';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getproducts, getuser } from './redux/action';
import Addproduct from './Components/Admin/Addproduct';
import Category from './Components/category';
import ProtectedRoute from './Components/ProtectedRoute';
import Products from './Components/Admin/Products';

function App() {
  const location = useLocation();
  const dispatch=useDispatch()
  useEffect(()=>{dispatch(getproducts())
    dispatch(getuser())
  },[])
  
  return (

    <div className="App">

     {location.pathname!=='/signin' && <Header/>}
      <Routes>
      
      <Route path="/" element={
        <>
        <Caroussel/>
        <Service/>
     
        <Features/>
        </>
}/>
      <Route path="/Menu" element={  <Menu/>}/>
      <Route path="/About" element={ <About/>}/>
      <Route path="/Specialdish" element={ <Specialdish/>}/>
      <Route path="/Reservation" element={ <Reservation/>}/>
      <Route path="/Features" element={ <Features/>}/>
  
      <Route path="/Admin" element={ <ProtectedRoute>
        <Dashboard/>
        </ProtectedRoute>}>
      
       <Route index element={<Booking/>}/>
       <Route path="/Admin/products" element={<Products/>}/>
       <Route path="/Admin/Tables" element={<Tables/>}/>
       <Route path="/Admin/Statics" element={ <Statics/>}/>
      <Route path="/Admin/Settings" element={<Settings/>}/>
      <Route path="/Admin/add" element={<Addproduct/>}/>

      </Route>
      <Route path="/Contact" element={<Contact/>}/>
      <Route path="/Signin" element={<Signin/>}/>
      <Route path="/Category" element={<Category/>}/>
      </Routes>
     
      <Footer/>
    </div>
  );
}

export default App;

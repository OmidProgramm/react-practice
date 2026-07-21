import { BrowserRouter, Route, Routes } from "react-router"
import './App.css';
import Home from "./components/pages/Home/Home";
import Header from "./components/pages/Header/Header";
import Posts from "./components/pages/Posts/Posts";
import Products from "./components/pages/Products/Products";



function App() {
 
  return (
    <>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/posts" element={<Posts/>} />
        <Route path="/products" element={<Products/>} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App

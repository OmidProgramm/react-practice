import React, { useEffect, useState } from 'react'
import { jsPDF } from 'jspdf'
import autoTable from "jspdf-autotable";
import './App.css';


function App() {
  const [products, setProducts] = useState(null)
  const getProducts = async ()=>{
    let data = await fetch("https://fakestoreapi.com/products")
    let res = await data.json()
    setProducts(res)
  }
  const generatePdf = ()=>{
    const pdf = new jsPDF();
    autoTable(pdf, {
      html: "#table",
    });
    pdf.save("test.pdf");

  }


  useEffect(()=>{
    getProducts()
  },[])
   
  return (
    <>
    <h4>App</h4>
    <div>
      <button onClick={generatePdf}>print</button>
    </div>
    
    <table id='table'>
      <thead>
        <tr>
          <th>Id</th>
          <th>Title</th>
          <th>Price</th>
          <th>Category</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
      {
        products && products.map(product=>{
          return(
            <tr key={product.id} >
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>{product.price}</td>
              <td>{product.category}</td>
              <td>{product.rating.count}</td>
              
            </tr>
          )
        })
      }
      </tbody>
    </table>

    </>
  )
}

export default App

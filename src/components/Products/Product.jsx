import React, { useEffect, useState } from 'react'
import  "./Products.css"
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export const Product = ({product}) => {
     const [title, setTitle] = useState('')
    const [price, setPrice] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('') 
    const [image, setImage] = useState('') 
    useEffect(()=>{
        setTimeout(()=>{
            setTitle(product.title)
            setCategory(product.category)
            setPrice(product.price)
            setDescription(product.description)
            setImage(product.image)
        },1000)
    },[])
  return (
    <div className='product'>
        <h4 className="title">{title || <Skeleton count={1} />} </h4>
        <h4 className="title">{category || <Skeleton count={1} /> }</h4>
        <div className='imageParent'><img src={image || <Skeleton count={4} /> }/></div>
        <p>Price: {price || <Skeleton count={1} /> }</p>
        <p>{description.substr(0,50) || <Skeleton count={2} /> }</p>
    </div>
  )
}

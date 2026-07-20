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
        },1700)
    },[])
  return (
    <div className='product'>
        <h4 className="title">{title || <Skeleton count={1} baseColor='#6c6969' highlightColor='#5b5b5b' />} </h4>
        <h4 className="title">{category || <Skeleton count={1} baseColor='#6c6969' highlightColor='#5b5b5b' /> }</h4>
        <div className='imageParent'>
            {image && <img src={image}/>}
            {!image && <Skeleton height={"250px"} baseColor='#4d4e51' highlightColor='#958e8e'/>}
        </div>
        <p>Price: {price || <Skeleton count={1} baseColor='#6c6969' highlightColor='#5b5b5b' /> }</p>
        <p>
            {description
                ? description.substring(0, 50)
                : <Skeleton count={2} baseColor="#6c6969" highlightColor="#5b5b5b" />
            }
        </p>
    </div>
  )
}

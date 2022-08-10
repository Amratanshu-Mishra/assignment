import React, { useEffect } from "react"
import {useState } from "react"
import Axios from "axios"
import Image from "next/image"
import ReactStars from "react-stars"


export default function Api() {
  useEffect(()=>
   {
    apiget()
   })
   const [item,setItem]= useState([])
   
   

   const apiget = () =>{
    Axios.get("https://api.tjori.com/api/v7filters/na/women-all-products/?f_page=1&format=json")
    .then((response)=>{
        console.log(response.data.data.products)
        setItem(response.data.data.products)}) 
    
   }

  

  return (
    <>
     {/* <button onClick={apiget}>clik</button> */}
      {item.map((u,i)=>{
        
        return(

          <div className="card">
            <a href={u.product_url}>
          <Image src={u.plpimaage} width={'200'} height={'200'} alt='Product image' ></Image>
          </a>
          <a href={u.product_url}>
          <h4 key={i}> {u.name}</h4>
          </a>
          <ReactStars count={5} value={4} size={22} color2={'#ffd700'} />
            
          <p><span style={{fontSize:'x-large'}}>₹{u.special_price}</span>  <s>{u.price}</s> <span style={{color:'green'}}>{u.inr_discount}%Off</span></p>
            <div><button className="addtobtn">Add to Cart</button></div>
          </div>
       
    
           
        )
    
      }
      
      )}
      

    </>
  )
}

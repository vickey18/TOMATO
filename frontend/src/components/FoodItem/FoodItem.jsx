import React, { useContext, useState } from 'react'
import "./FoodItem.css"
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext';

const FoodItem = ({id,name,price,description,image}) => {
    const url ="http://localhost:4000"
    const[itemCount, setItemCount]=useState(0);
    const {cartItems,addToCart,removeFromCart}=useContext(StoreContext);
    // console.log(id,name,price,description,image)
    console.log(id);
    console.log(name);
    console.log(price);
    console.log(image);
    console.log(description);
    // console.log( cartItems[id])
    console.log(cartItems)
   


     
  return (
    <div className='food-item'>
        <div className="food-item-image-container">
          <img className="food-item-image" src={`${url}/images/`+image} alt="" />            {
                !cartItems[id]
                ?<img className="add" src={assets.add_icon_white} onClick={()=>(addToCart(id))}/>
                :<div className='food-item-counter'>
                    <img src={assets.remove_icon_red} onClick={()=>(removeFromCart(id))} />
                    <p>{cartItems[id]}</p>
                    <img src={assets.add_icon_green} onClick={()=>(addToCart(id))} />
                </div>
            }

        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-description">{description}</p>
            <p className="food-item-price">${price}</p>
        </div>
    </div>
  )
}

export default FoodItem
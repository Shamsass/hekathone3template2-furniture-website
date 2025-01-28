// 'use client'
// import React, { useEffect, useState } from 'react'
// import { product } from '../../../scripts/types/products'
// import { getCartItems, removeFromCart, updateCartQuantity } from '../actions/actions'
// import { Result } from 'postcss'
// import Image from 'next/image'

// const cartpage = () => {
//   const [cartItems, setCartItems]= useState<product[]>([])
//    useEffect(() => {
//     setCartItems(getCartItems());
//    },[])
//    const handleRemove = (id :string) => {
//     Swal.fire({
//       title :"Are You Sure?",
//       text: "You will not able to recover this item!",
//       icon : "warning",
//       showCancleButton : true ,
//       confirmButtonColor:"#3085d6",
//       cancelButtonColor: "#d33",
//       confirmButtonText: "yes, remove it!"
//     }).then((result) => {
//       if(result.isConfirmed){
//         removeFromCart(id)
//         setCartItems(getCartItems())
//         Swal.fire("Removed!","Item has been removed.", "success");
//       }
//     })
//    }
//    const  handleQuantityChange = (id :string,quantity:number)=> {
//     updateCartQuantity(id, quantity);
//     setCartItems(getCartItems())

//    }
//    const handleIncrement =(id :string) =>{
//     const product = cartItems.find((item) => item._id === id);
//     if(product)
//       handleQuantityChange(id, product.inventory + 1)
//    }
//    const handleDecrement =(id :string) =>{
//     const product = cartItems.find((item) => item._id === id);
//     if(product && product.inventory > 1)
//       handleQuantityChange(id, product.inventory - 1)
//    }
//    const calculatedTotal =() => {
//     return cartItems.reduce((total, item)=> total + item.price *item.inventory, 0)
//    }
//    const handledProceed =() => {
//     Swal.fire({
//       title :"proceed to Checkout ?",
//       text:"please review Your cart before checkout",
//       icon: "question",
//       showCancelButton:"true",
//       confirmButtonColor:"#3085d6",
//       cancelButtonColor :"#d33" ,
//       confirmButtonText :"yes,proceed!"
//     }).then((result)=> {
//       if(result.isconfirmed){
//         Swal.fire("success","Your Order has been sucessfully processed","success")
//         setCartItems([result])

//       }
// })
//    }
//   return (
//      <div className='lg:col-span-2'>
//       <h1  className='text-3x1 font-bold text-center mb-6 '>Shopping Cart</h1>
//       cartItems.length === 0?(
//         <p className='text-center text-gray-500'>Your cart is empty</p>
//       ):(
//         <div className='grid grid-cols-1 lg :grid-cols-3 gap-6'>
//       <div className='lg:col-span-2'>
//         {cartItems.map((item)=>( 
//            <div 
//              key={item._id}
//              className ="flex items-center bg-white shadow-md rounded-lg p-4 mb-4">
//             {/* //  {item.productName}  */}
//             {item.image && (
//             <Image
//             src={urlFor(item.image).url()}
//             className ="w-16 h-16 object-cover rounded-lg"
//             alt ="image"
//             width={500}
//             height ={500}
//             />
//             )}
//             <div className='flex-1 ml-4'>
//               <h2 className='text-lg font-semibold'>{item.productName}</h2>
//               <p className='text-gray-500'>price : ${item.price.toFixed(2)}</p>
//               <div className='flex items-center space-x-2 mt-2'></div>
//             </div>
//           </div>
//          )) 
        
//   )
// }

// export default cartpage

"use client";

import { product } from '../../../scripts/types/products'
import React, { useEffect, useState } from "react";
import {
  getCartItems,
  removeFromCart,
  updateCartQuantity,
} from "../actions/actions";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import Swal from "sweetalert2";

const CartPage = () => {
  const [cartItems, setCartItems] = useState<product[]>([]);

  useEffect(() => {
    setCartItems(getCartItems());
  }, []);

  const handleRemove = (id: string) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to undo this action!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, remove it!",
    }).then((result) => {
      if (result.isConfirmed) {
        removeFromCart(id);
        setCartItems(getCartItems());
        Swal.fire(
          "Removed!",
          "Item has been removed from your cart.",
          "success"
        );
      }
    });
  };

  const handleQuantityChange = (id: string, quantity: number) => {
    updateCartQuantity(id, quantity);
    setCartItems(getCartItems());
  };

  const handleIncrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product) {
      handleQuantityChange(id, product.inventory + 1);
    }
  };

  const handleDecrement = (id: string) => {
    const product = cartItems.find((item) => item._id === id);
    if (product && product.inventory > 1) {
      handleQuantityChange(id, product.inventory - 1);
    }
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.price * item.inventory,
      0
    );
  };

  const handleProceed = () => {
    Swal.fire({
      title: "Processing your order...",
      text: "Please wait a moment.",
      icon: "info",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Proceed",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          "Success!",
          "Your order has been successfully processed!",
          "success"
        );
        // Clear the cart after proceeding (optional)
        setCartItems([]);
      }
    });
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Shopping Cart</h1>

      <div className="space-y-6">
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div
              key={item._id}
              className="flex items-center justify-between bg-white p-4 rounded-lg shadow-md"
            >
              <div className="flex items-center">
                {item.image && (
                  <Image
                    src={urlFor(item.image).url()}
                    className="w-16 h-16 object-cover rounded-lg"
                    alt="image"
                    width={500}
                    height={500}
                  />
                )}
                <div className="ml-4">
                  <h2 className="text-lg font-semibold">{item.productName}</h2>
                  <p className="text-gray-500">Price: ${item.price}</p>
                  <div className="flex items-center mt-2">
                    <button
                      onClick={() => handleDecrement(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      -
                    </button>
                    <span className="mx-2">{item.inventory}</span>
                    <button
                      onClick={() => handleIncrement(item._id)}
                      className="px-2 py-1 bg-gray-300 rounded-md hover:bg-gray-400"
                    >
                      +
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex items-center">
                <button
                  onClick={() => handleRemove(item._id)}
                  className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 text-center">Your cart is empty.</p>
        )}
      </div>

      {cartItems.length > 0 && (
        <div className="mt-8 bg-white p-4 rounded-lg shadow-md">
          <div className="flex justify-between items-center">
            <h2 className="text-xl font-semibold">Total:</h2>
            <p className="text-xl font-bold text-gray-800">
              ${calculateTotal().toFixed(2)}
            </p>
          </div>
          <button
            onClick={handleProceed}
            className="mt-4 w-full px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
          >
            Proceed
          </button>
        </div>
      )}
    </div>
  );
};

export default CartPage;

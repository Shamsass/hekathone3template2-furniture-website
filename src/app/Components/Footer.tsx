import React from 'react'
  // import Image from 'next/image'

 function Footer () {
 return (
    <div className='bg-black  flex text-white justify-evenly h-[300px] items-center mt-10'>
       <div> 
        <h1 className='text-2xl font-bold'></h1>
        <ul>
        <li>Menu</li>
          <li>New Arrival</li>
          <li>Best sellers</li>
          <li>Recently viewed</li>
          <li>Popular this week</li>
          <li>All products</li>
          
        </ul>
      </div>
      <div>
      <h1 className='text-2xl font-bold'></h1>
      <ul>
          <li>Categories.</li>
          <li>Crockery</li>
          <li>Furniture</li>
          <li>HomeWare.</li>
          <li>Plant pot</li>
          <li>Chairs.</li>
          <li>Crockery</li>
        

        </ul>
      </div>
      <div>
      <h1 className='text-2xl font-bold'>Account</h1>
      <ul>
          <li>My Account   </li>
          <li>Login / Register</li>
          <li> Cart</li>
          <li>Wishlist</li>
          <li>Shop</li>
        </ul>
      </div>
      <div>
      <h1 className='text-2xl font-bold'></h1>
      <ul>
          <li>Our Company </li>
          <li>About Us</li>
          <li>Vacancies</li>
          <li>Contact us</li>
          <li>Privacy</li>
          <li>Return policy</li>
        </ul>
      </div>
      <div>
      <h1 className='text-2xl font-bold'>Join our mailing list</h1>
      <div className='flex items-center space-x-6'>
        <div className='hidden lg:flex items-center bg-slate-100 rounded-md px-3 py-2'>
          <input type ="text-white bg-custome-purple"
          placeholder='Your@email.com'className='bg-gray-100 outline-none text-sm'/>
      <button className='bg-white h-12 w-32 rounded-sm mt-1 text-custome-purple'> Sign Up</button>
     </div>  
      </div>
    </div>
    </div> 
   )
}

export default Footer 

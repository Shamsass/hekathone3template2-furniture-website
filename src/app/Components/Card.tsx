const Cards = () => {
  return (
      <div>
         
          <h1 className="text-[#2A254B] font-clash text-2xl font-normal leading-normal mx-36 mt-24">
              New ceramics
          </h1>

          
          <div className="flex mx-36 gap-3 mt-6">
              <div>
                  <img src="product1.png" alt="chair" className="w-[400px] h-[350px]"/>
                  <p className="text-[#2A254B] font-clash text-[20px] font-normal leading-[140%] mt-3 mb-3">The Dandy chair</p>
                  <p className="text-[#2A254B] font-satoshi text-[18px] font-normal leading-[150%]">£250</p>
              </div>
              <div>
                  <img src="product5.png" alt="chair" className="w-[400px] h-[350px]"/>
                  <p className="text-[#2A254B] font-clash text-[20px] font-normal leading-[140%] mt-3 mb-3">The Rustic Vase Set</p>
                  <p className="text-[#2A254B] font-satoshi text-[18px] font-normal leading-[150%]">£155</p>
              </div>
              <div>
                  <img src="product6.png" alt="Vase" className="w-[400px] h-[350px]" />
                  <p className="text-[#2A254B] font-clash text-[20px] font-normal leading-[140%] mt-3 mb-3">The Silky Vase</p>
                  <p className="text-[#2A254B] font-satoshi text-[18px] font-normal leading-[150%]">£125</p>
              </div>
              <div>
                  <img src="product4.png" alt="chair" className="w-[400px] h-[350px]"/>
                  <p className="text-[#2A254B] font-clash text-[20px] font-normal leading-[140%] mt-3 mb-3">The Lucy Lamp</p>
                  <p className="text-[#2A254B] font-satoshi text-[18px] font-normal leading-[150%]">£399</p>
              </div>
          </div>
              <div className="flex justify-center items-center mt-10 leading-[21px]">
              <button className="text-black bg-[#F9F9F9]  bg-opacity-15 font-medium px-4 py-2 rounded hover:bg-gray-300">
              View collection
              </button>
              </div>

              <div>
        <h1 className="text-[25px] item-center justify-center">Join the club and get the benefits</h1>
        <p>sign up for our newsletter and receive exclusive offers on new <br/> range,sale,pop up store and more</p>
        <div className='hidden lg:flex items-center bg-slate-100 rounded-md px-3 py-2'>
          <input type ="text-white bg-custome-purple"
          placeholder='Your@email.com'className='bg-gray-100 outline-none text-sm'/>
      <button className='bg-white h-12 w-32 rounded-sm mt-1 text-custome-purple'> Sign Up</button>
     </div>  
      </div>
      </div>
      
  );
};

export default Cards;
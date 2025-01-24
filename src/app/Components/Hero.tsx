import React from "react";
// import { TbTruckDelivery } from "react-icons/tb";
import { TbTruckDelivery } from "react-icons/tb";
// import { PiHeadsetFill } from "react-icons/pi";
import { CiCircleCheck } from "react-icons/ci";
import { MdOutlinePriceChange } from "react-icons/md";
import { CiUmbrella } from "react-icons/ci";
import Image from "next/image";

const Hero = () => {
  return (
    <header className="bg-custome-purple shadow-sm border-b mx-auto flex flex-col w-[1200px]">
      
      <div className="w-full h-[270px] flex justify-center mt-8">
        <div className="bg-black w-[80%] h-full flex justify-between items-center">

        
      {/* kindly */}
          <div className="text-white bg-custome-purple text-sm font-normal leading-[21px] px-8 py-4">
          The furniture brand of the <br /> future, with timeless designs
          <div>
          <button className="py-2 px-5 bg-custome-purple rounded-md text-white">
          View Collection
        </button>
        </div>

          <br/>
          <br/>
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and beautiful
            designs. <br /> Using modern web technologies.
          </div>

          <div className="w-[200px] mt-4">
            <h1 className="text-3xl font-sans font-bold ml-5"></h1>
            <button className="font-bold underline ml-5 mt-5">
              
            </button>
          </div>

          <div className="ml-8 mt-16">
            <Image
              src="/product1.png"
              width={350}
              height={200}
              alt="Hero Image"
              className="mt-5"
            />
          </div>
        </div>
      </div>
      <br/>
      <h1 className="justify-center leading-[21px]">What makes our brand different</h1>
      <div className="w-full sm:h-[300px] flex justify-center items-center">
      
        <div className="sm:w-full lg:w-[100%] sm:justify-center gap-y-4 sm:items-center flex sm:flex-col lg:flex-row lg:justify-evenly gap-x-4">
          
          {[
            {
              Icon: TbTruckDelivery,
              title: "Next day as standard",
              description:
                "Order before 3pm and get your order the next day as standard.",
            },
            {
              Icon: CiCircleCheck,
              title: "Made by true artisans",
              description:
                "Handmade crafted goods made with real passion and craftsmanship.",
            },
            {
              Icon: MdOutlinePriceChange,
              title: "Unbeatable prices",
              description:
                "For our materials and quality, you won't find better prices anywhere.",
            },
            {
              Icon: CiUmbrella,
              title: "Recycling packaging",
              description:
                "We use 100% recycled packaging to ensure our footprint is manageable.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-[260px] h-[130px] flex justify-center items-center flex-col gap-y-3"
            >
              <div className="w-[50px] h-[50px] rounded-full bg-black flex justify-center items-center border-stone-400 border-8">
                <item.Icon className="text-3xl text-slate-400" />
              </div>
              <h1 className="font-bold text-center">{item.title}</h1>
              <p className="text-sm text-center">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
       
    </header>
  );
};

export default Hero;
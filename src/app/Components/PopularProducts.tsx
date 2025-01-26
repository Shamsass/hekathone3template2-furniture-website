// "use client";
// import { useEffect, useState } from "react";
// import Image from "next/image";
// import { allProducts, four } from "@/sanity/lib/queries";
// import { client } from "@/sanity/lib/client"; // Assuming this is the client initialization
// import { product as ProductType } from "../../../scripts/types/products"; // Avoid naming conflicts
// import { urlFor } from "@/sanity/lib/image";
// import Link from 'next/link'

// const PopularProducts = () => {
//   const [products, setProducts] = useState<ProductType[]>([]); // Renamed the state variable to "products"

//   useEffect(() => {
//     async function fetchProducts() {
//       const fetchedProducts: ProductType[] = await client.fetch(allProducts);
//       setProducts(fetchedProducts);
//     }
//     fetchProducts();
//   }, []);

//   return (
// <div className="max-w-2xl mx-auto px-4 py-8">
// <h1 className="text-2xl font-bold mb-6 text-center">Our Latest Products</h1>
// <div className="grid grid-col-3 sm:grid-col-3 md :grid-cols-8 lg :grid-cols-4"></div>
// {products.map((product) => (
// <div key={product._id} 
// className="border rounded-lg shadow-md p-2 hover:shadow-lg transition duration-100">
//   <Link href ={'/product/${product.slug.current}'}>
// <h3>{product.productName}</h3> 
//           {product.image && (
//             <Image
//               src={urlFor(product.image).url()} // Assuming `urlFor` is imported and properly configured
//               alt={product.productName}
//               width={200}
//               height={200}
//               className="w-full h-48 object-cover rounded-md"
//             />
//           )}
//           <h2 className="text-lg font-semibold mt-4">{product.productName}</h2>
//           <p className="text-gray-500 mt-2">
//           {product.price ? `$${product.price}`: "Price not available"}
//           </p> 
//           <p>{product.description}</p>
//           </Link>
//         </div>
//       ))}
//     </div>
    
//   );
// };

// export default PopularProducts;
// checking
"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { allProducts, four } from "@/sanity/lib/queries";
import { client } from "@/sanity/lib/client"; // Assuming this is the client initialization
import { product as ProductType } from "../../../scripts/types/products"; // Avoid naming conflicts
import { urlFor } from "@/sanity/lib/image";
import Link from 'next/link'

const PopularProducts = () => {
  const [products, setProducts] = useState<ProductType[]>([]); // Renamed the state variable to "products"

  useEffect(() => {
    async function fetchProducts() {
      const fetchedProducts: ProductType[] = await client.fetch(allProducts);
      setProducts(fetchedProducts);
    }
    fetchProducts();
  }, []);

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Our Latest Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10"></div>
      {products.map((product) => (
        <div key={product._id} className="border rounded-lg shadow-md p-4 hover:shadow-lg transition duration-200">
            <Link href={`/product/${product.slug.current}`}>  
           {/* <Link href ={'/Components/product/${product.slug.current}'}> */}
            {/* <h1>{product.productName}</h1> */}
            {product.image && (
              <Image
                src={urlFor(product.image).url()} // Assuming `urlFor` is imported and properly configured
                alt={product.productName}
                width={600}
                height={600}
                 className="w-full h-48 object-cover rounded-md"
                // className=""
              />
            )}
            <h2 className="text-lg font-semibold mt-4">{product.productName}</h2>
            <br/>
            <p className="text-gray-500 mt-2">
              {product.price ? `$${product.price}` : "Price not available"}</p>
              <p className="text-gray-500 mt-2">
              {product.quantity ? `${product.quantity}` : "Price not available"}
            </p>
            
            {/* <h1>{product.productName}</h1> */}
            {/* <p>{product.description}</p> */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PopularProducts;


// function PopularProducts() {
//   return (
//     <div className="w-full flex flex-col items-center mt-10 mb-20">
//       <div className="w-[80%]">
//         {/* Top Section */}
//         <div className="mb-5">
//           <span className="border-l-8 border-black text-black font-bold pl-2">
//             Popular
//           </span>
//           <div className="flex justify-between mt-3">
//             <h1 className="text-2xl font-bold">Our Popular Products</h1>
//           </div>
//         </div>

//         {/* Products Section */}
//         <div className="flex justify-between mt-7 gap-5">
//           {/* Product 1 */}
//           <div>
//             <div className="w-[400px] h-[170px] bg-gray-200 flex justify-center items-center">
//               <Image src="/product10.png" width={150} height={100} alt="Sofa" />
//             </div>
//             <div className="flex flex-col mt-2">
//               <span className="font-bold">The Poplar Suede Sofa</span>
//               <span className="font-bold">€980</span>
//             </div>
//           </div>

//           {/* Product 2 */}
//           <div>
//             <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
//               <Image src="/product1.png" width={150} height={100} alt="Chair" />
//             </div>
//             <div className="flex flex-col mt-2">
//               <span className="font-bold">The Dandy Chair</span>
//               <span className="font-bold">€250</span>
//             </div>
//           </div>

//           {/* Product 3 */}
//           <div>
//             <div className="w-[200px] h-[170px] bg-gray-200 flex justify-center items-center">
//               <Image src="/product3.png" width={150} height={100} alt="Chair" />
//             </div>
//             <div className="flex flex-col mt-2">
//               <span className="font-bold">The Dandy Chair</span>
//               <span className="font-bold">€250</span>
//             </div>
//           </div>
//         </div>

//         {/* Newsletter Section */}
//         {/* <div className="mt-10">
//           <h1 className="text-2xl font-bold">Join the club and get the benefits</h1>
//           <p className="mt-2 text-gray-600">
//             Sign up for our newsletter and receive exclusive offers on new
//             ranges, sales, pop-up stores, and more.
//           </p>
//           <div className="flex items-center bg-slate-100 rounded-md px-3 py-2 mt-4">
//             <input
//               type="text"
//               placeholder="Your@email.com"
//               className="bg-gray-100 outline-none text-sm flex-grow px-2 py-2"
//             />
//             <button className="bg-black text-white px-4 py-2 rounded-sm">
//               Sign Up
//             </button>
//           </div>
//         </div> */}

//         {/* Brand Section */}
//         <div className="w-full flex justify-center mt-8">
//           <div className="bg-white w-[80%] flex justify-between items-center px-10 py-8">
//             {/* Text Content */}
//             <div className="text-black text-sm font-normal leading-[21px]">
//               <h1 className="text-xl font-bold mb-4">
//                 From a studio in London to a global brand with over 400 outlets
//               </h1>
//               <p>
//                 When we started Avion, the idea was simple: Make high-quality
//                 furniture affordable and available for the mass market.
//                 <br/>
//                 Handmade, lovingly crafted furniture and homeware is what we
//                 live, breathe, and design. Our Chelsea boutique became the
//                 hotbed for the London interior design community.
//               </p>
//             </div>

//             {/* Brand Section */}
//             <div className="ml-10">
//               <h1 className="text-3xl font-bold">Avion</h1>
//               <button className="font-bold underline mt-4">Discover More</button>
//             </div>

//             {/* Image Section */}
//             <div className="ml-8">
//               <Image
//                 src="/product7.png"
//                 width={350}
//                 height={200}
//                 alt="Hero Image"
//               />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default PopularProducts;
// import Header from "./Components/Header";
// import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";
//  import Ceramics from "./Components/Ceramics";
import Card from "./Components/Card"
import PopularProducts from "./Components/PopularProducts"



// export const  Homepage=() =>{
export default async function Homepage(){
  return (
   <>
    <Navbar/> 
      {/* <Header/> */}
       
       <Hero/> 
       <Card/>
        {/* <Ceramics/> */}
       <PopularProducts />
      

        {/* <Footer/>  */}
   </>  
     
  
  )
}

// export default Homepage
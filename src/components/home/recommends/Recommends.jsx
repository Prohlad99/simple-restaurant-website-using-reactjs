import { useEffect, useState } from "react";
import ProductCard from "../products/ProductCard";

const Recommends = () => {
    const[products, setProducts] = useState([]);
    
    useEffect(()=>{
        fetch("menu.json")
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    
  return (
    <div className="mb-32">
      {/* container  */}
      <div className="grid md:grid-cols-3 col-span-1 justify-items-center gap-y-6 gap-x-4 md:px-32 px-2">
        {
            products?.slice(0,6).map(product => <ProductCard key={product._id} product={product}/>)
        }
      </div>
    </div>
  )
}

export default Recommends

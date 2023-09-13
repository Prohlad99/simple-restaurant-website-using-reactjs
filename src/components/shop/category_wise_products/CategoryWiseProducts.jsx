import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductCard from './../../home/products/ProductCard';

const CategoryWiseProducts = () => {
    const categoryName = useParams();
    const [category, setCategory] = useState(categoryName.category);
    const[products, setProducts] = useState([]);
    const handleCategory=(val)=>{
        setCategory("");
        setCategory(val);
    }
    useEffect(()=>{
        fetch("../../../../public/menu.json")
        .then(res => res.json())
        .then(data => setProducts(category?data.filter(product => product.category === category):data))
    },[category, categoryName])

    console.log(category)
  return (
    <div>
      {/* container */}
      <div className="flex flex-col items-center justify-items-center">
        {/* tab  */}
        <div className="flex">
          <ul className="flex gap-2 md:gap-6 text-sm md:text-lg">
            <li
              className={`${
                category === "salad"
                  ? "text-[#BB8506] pb-1 border-b-2 border-[#BB8506]"
                  : null
              }`}
            >
              <button onClick={() => handleCategory("salad")}>Salad</button>
            </li>

            <li
              className={`${
                category === "pizza"
                  ? "text-[#BB8506] pb-1 border-b-2 border-[#BB8506]"
                  : null
              }`}
            >
              <button onClick={() => handleCategory("pizza")}>Pizzas</button>
            </li>

            <li
              className={`${
                category === "soup"
                  ? "text-[#BB8506] pb-1 border-b-2 border-[#BB8506]"
                  : null
              }`}
            >
              <button onClick={() => handleCategory("soup")}>Soups</button>
            </li>

            <li
              className={`${
                category === "dessert"
                  ? "text-[#BB8506] pb-1 border-b-2 border-[#BB8506]"
                  : null
              }`}
            >
              <button onClick={() => handleCategory("dessert")}>
                Desserts
              </button>
            </li>
            <li
              className={`${
                category === "offered"
                  ? "text-[#BB8506] pb-1 border-b-2 border-[#BB8506]"
                  : null
              }`}
            >
              <button onClick={() => handleCategory("offered")}>Offers</button>
            </li>
          </ul>
        </div>

        {/* products  */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:max-w-[70%] mx-auto mt-10">
          {products.map((product) => (
            <ProductCard product={product} key={product._id} />
          ))}
        </div>

        {/* pagination  */}
        <div></div>
      </div>
    </div>
  );
}

export default CategoryWiseProducts

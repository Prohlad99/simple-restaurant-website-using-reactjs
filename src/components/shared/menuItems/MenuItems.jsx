import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "../menuItem/MenuItem";

const MenuItems = ({item, count}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) =>
        setProducts(item?data.filter(product => product.category === item):data)
      );
  }, []);
  return (
    <div>
      {/* container  */}
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mx-4 md:mx-10">
        {products?.slice(0, count).map((product) => (
          <MenuItem data={product} key={product._id} />
        ))}
      </div>
      <div className="flex justify-center my-10">
        <Link to={`/shop/${item}`}>
          <button className="py-1 px-3 border-b-2 border-stone-500 hover:bg-[#D99904] ease-in-out duration-300 rounded-lg">
            Order Your Favorite Food
          </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuItems;

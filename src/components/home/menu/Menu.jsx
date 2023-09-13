import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MenuItem from "../../shared/menuItem/MenuItem";

const Menu = () => {
    const[data, setData] = useState([]);

    useEffect(()=>{
        fetch("menu.json")
        .then(res => res.json())
        .then(data => setData(data))
    },[])

  return (
    <div className="mt-10 mb-32">
      {/* container  */}
      <div className="grid md:grid-cols-2 gap-6 md:px-3 grid-cols-1 px-1">
        {data?.slice(0, 6).map((item) => (
          <MenuItem key={item._id} data={item} />
        ))}
      </div>
      <div className="flex justify-center my-6">
        <Link to="/shop/salad">
          <button className="border-b-2 border-stone-700 rounded-lg px-4 py-1 hover:bg-blue-600 hover:text-white ease-in-out duration-300">
            View Full Menu
          </button>
        </Link>
      </div>

      {/* call us  */}
      <div className="bg-black h-[130px] flex items-center justify-center md:mx-32 mx-2 px-2 mt-10">
        <h1 className="text-white text-xl md:text-2xl text-center">
          Call Us: +88 0192345678910
        </h1>
      </div>
    </div>
  );
}

export default Menu

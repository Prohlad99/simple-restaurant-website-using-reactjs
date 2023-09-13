import './style.css';

const MenuItem = (data) => {
    const {name, image, recipe, price} = data.data
  return (
    <div>
      {/* container  */}
      <div className="grid grid-cols-12 justify-center items-start rounded-md px-2 py-1 item">
        {/* item img  */}
        <div className="col-span-3">
            <img
              className="md:w-[118px] w-[74px] md:h-[104px] h-[60px] bg-stone-400 rounded-tr-[80px] md:rounded-tr-[200px] rounded-br-[80px] md:rounded-br-[200px] rounded-bl-[80px] md:rounded-bl-[200px]"
              src={image}
              alt=""
            />
        </div>

        {/* item details  */}
        <div className="col-span-7">
          <h1>{name} ------------------</h1>
          <p className="text-[#737373]">{recipe}</p>
        </div>

        {/* item price  */}
        <div className="col-span-2">
          <h3 className="text-[#BB8506]">${price}</h3>
        </div>
      </div>
    </div>
  );
};

export default MenuItem

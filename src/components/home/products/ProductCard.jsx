import './style.css';

const ProductCard = (product) => {
    const{name, image, recipe} = product.product
  return (
    <div>
      {/* container  */}
      <div className="flex flex-col justify-center items-center card w-[250px] rounded-md pb-6">
        {/* image  */}
        <div>
          <img className="w-[250px] h-[200px]"src={image} alt="" />
        </div>

        {/* details  */}
        <div className="flex flex-col text-center my-4 px-5 items-center">
          <h1 className="text-lg font-semibold">{name}</h1>
          <p>{recipe}</p>
        </div>

        {/* button  */}
        <div>
          <button
            className="text-[#BB8506] border-b-2 border-[#BB8506] rounded-lg uppercase bg-[#E8E8E8]
          px-4 py-2 hover:bg-[#1F2937] ease-in-out duration-300"
          >
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard

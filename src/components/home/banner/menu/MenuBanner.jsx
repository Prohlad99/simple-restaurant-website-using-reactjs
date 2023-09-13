import img1 from '../../../../assets/home/featured.jpg';
import MenuHeader from './../../../shared/menuHeader/MenuHeader';
import './style.css';
const MenuBanner = () => {
  return (
    <div className="mb-32">
      {/* container  */}
      <div className="w-[100%] h-[300px] md:h-[100vh] banner-container flex flex-col justify-center items-center">
        <div className="w-full hidden md:block">
          <MenuHeader
            title="Check it out"
            subtitle="FROM OUR MENU"
            subtitleColor="text-white"
          />
        </div>

        <div className='h-[350px] w-full grid grid-cols-1 md:grid-cols-2 gap-1 justify-items-center items-center px-2 md:px-20'>
          {/* img  */}
          <div >
            <img className='h-[100px] md:h-[300px] w-[150px] md:w-[500px] hidden md:block' src={img1} alt="" />
          </div>

          {/* content  */}
          <div className='text-white text-center'>
            <h2 className='md:text-lg font-semibold'>March 20, 2023</h2>
            <h2 className='md:text-lg font-semibold'>WHERE CAN I GET SOME?</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              voluptate facere, deserunt dolores maiores quod nobis quas quasi.
              Eaque repellat recusandae ad laudantium tempore consequatur
              consequuntur omnis ullam maxime tenetur.
            </p>
            <button className='px-3 py-1 border-b-2 border-stone-50 rounded-lg mt-6 hover:bg-blue-600 ease-in-out duration-300'>Read More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuBanner

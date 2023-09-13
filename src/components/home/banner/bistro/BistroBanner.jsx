import './style.css';
const BistroBanner = () => {
  return (
    <div>
      <div className="banner  w-[100%] md:h-[500px] h-[200px] flex justify-center items-center">
        <div className="bg-stone-100 md:w-[80%] w-[90%] md:h-[70%] h-[90%] text-center flex justify-center items-center md:px-20">
          <div>
            <h1 className='md:text-2xl font-semibold text-lg uppercase md:mb-5'>Bistro Boss</h1>
            <p className='text-sm md:text-base'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus, libero accusamus laborum deserunt ratione dolor
              officiis praesentium! Deserunt magni aperiam dolor eius dolore at,
              nihil iusto ducimus incidunt quibusdam nemo.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BistroBanner

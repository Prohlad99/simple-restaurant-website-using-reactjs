
const LocationCard = ({icon, heading, text}) => {
  return (
    <div>
      {/* container  */}
      <div className='w-[240px] h-[200px]'>
        {/* header  */}
        <div className="flex justify-center bg-[#D1A054] h-[40px] items-center">
          <span className='text-2xl text-white'>
            {icon}
          </span>
        </div>

        {/* address  */}
        <div className='text-center py-10 bg-slate-300 mx-4 h-full'>
            <h1 className="text-lg font-semibold">{heading}</h1>
            {text}
        </div>
      </div>
    </div>
  );
}

export default LocationCard

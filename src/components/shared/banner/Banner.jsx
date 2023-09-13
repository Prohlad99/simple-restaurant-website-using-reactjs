const Banner = ({bgImg, heading, text, size}) => {
    const divStyles = {
      backgroundImage: `url(${bgImg})`,
      height: "500px",
      width: "100%",
    };
  return (
    <div>
      {/* container  */}
      <div style={divStyles} className="bg-center bg-cover relative mb-28">
        <div className="absolute top-[50%] translate-y-[-50%] mx-auto right-[50%] translate-x-[50%]  h-[250px] md:w-[800px] w-full bg-black opacity-50 flex justify-center items-center"></div>

        <div className="absolute top-[50%] translate-y-[-50%] mx-auto right-[50%] translate-x-[50%] text-center">
          <h1 className={`text-white ${size ? size :"text-4xl"}`}>{heading}</h1>
          <p className="text-white uppercase my-4">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Banner

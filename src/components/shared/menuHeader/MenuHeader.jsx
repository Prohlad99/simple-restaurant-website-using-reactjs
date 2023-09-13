
const MenuHeader = ({title, subtitle, titleColor, subtitleColor}) => {
  return (
    <div>
      {/* container */}
      <div className="text-center mb-6 mt-20 md:w-3/12 mx-auto">
        <p className={`${titleColor ? titleColor : "text-[#D99904]"}`}>
          ---{title}---
        </p>
        <h1
          className={`text-2xl border-y-2 ${
            subtitleColor ? subtitleColor : null
          } border-blue-300 inline-block py-2 px-6 my-1 font-semibold`}
        >
          {subtitle}
        </h1>
      </div>
    </div>
  );
}

export default MenuHeader

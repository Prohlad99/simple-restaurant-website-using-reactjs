import 'swiper/css';
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import img1 from "../../../assets/home/slide1.jpg";
import img2 from "../../../assets/home/slide2.jpg";
import img3 from "../../../assets/home/slide3.jpg";
import img4 from "../../../assets/home/slide4.jpg";
import './itemSlider.css';
const ItemSlider = () => {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper md:px-16 mb-16 mt-12"
      >
        <SwiperSlide>
          <div className="relative">
            <img className="h-[100%] w-[100%]" src={img1} alt="" />
            <h1 className="text-sm md:text-lg uppercase absolute bottom-[10%] left-[50%] translate-x-[-50%] bg-stone-400 px-2 py-1 rounded-sm font-semibold text-yellow-400">
              Salads
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img2} alt="" />
            <h1 className="text-sm md:text-lg uppercase absolute bottom-[10%] left-[50%] translate-x-[-50%] bg-stone-400 px-2 py-1 rounded-sm font-semibold text-yellow-400">
              Soups
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img3} alt="" />
            <h1 className="text-sm md:text-lg uppercase absolute bottom-[10%] left-[50%] translate-x-[-50%] bg-stone-400 px-2 py-1 rounded-sm font-semibold text-yellow-400">
              pizzas
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img4} alt="" />
            <h1 className="text-sm md:text-lg uppercase absolute bottom-[10%] left-[50%] translate-x-[-50%] bg-stone-400 px-2 py-1 rounded-sm font-semibold text-yellow-400">
              desserts
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative">
            <img src={img1} alt="" />
            <h1 className="text-sm md:text-lg uppercase absolute bottom-[10%] left-[50%] translate-x-[-50%] bg-stone-400 px-2 py-1 rounded-sm font-semibold text-yellow-400">
              Salads
            </h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default ItemSlider;

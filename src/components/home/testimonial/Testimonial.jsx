import { Rating, Star } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img from '../../../assets/home/quote.png';
const Testimonial = ({review}) => {
    const myStyles = {
      itemShapes: Star,
      activeFillColor: "#CD9003",
      inactiveFillColor: "#A1A1A1",
    };

    // const{ name, details, rating} = review
  return (
    <div>
      {/* container  */}
      <div>
        {/* rating  */}
        <div className="flex justify-center items-center">
          <Rating
            className="my-rating-class w-[120px] "
            value={review?.rating}
            itemStyles={myStyles}
          />
        </div>

        {/* quote  */}
        <div className="flex justify-center items-center max-w-[30px] mx-auto">
          <img className=" my-4 " src={img} alt="" />
        </div>
        {/* content  */}
        <div className="flex justify-center items-center">
          <p className="max-w-[50%] text-center">
            {review?.details}
          </p>
        </div>

        {/* name  */}
        <div className="flex justify-center">
          <h1 className="text-[#CD9003] text-xl my-4">{review?.name}</h1>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;

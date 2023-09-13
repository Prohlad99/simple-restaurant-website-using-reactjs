import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Testimonial from "./Testimonial";

const Testimonials = () => {
    const[reviews, setReviews] = useState([]);
    useEffect(()=>{
        fetch("reviews.json")
        .then(res => res.json())
        .then(data => setReviews(data));
    },[])

    
  return (
    <div className="md:mb-28 mb-16">
      <Carousel
      infiniteLoop={true}
      autoPlay
      showThumbs={false}
      showStatus={false}
      showIndicators={false}
      
      >
       {
        reviews?.map(review => <Testimonial key={review._id} review={review}/>)
       }
      </Carousel>
    </div>
  );
};

export default Testimonials;

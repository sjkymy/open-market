import { useState } from "react";
import prevBtn from "../../../assets/images/arrow-1.svg";
import nextBtn from "../../../assets/images/arrow-2.svg";
import { BannerSlideWrapper, Img } from "./bannerSlide.style";

export default function BannerSlide({ banners }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + banners.length) % banners.length);
  };

  return (
    <BannerSlideWrapper>
      <img 
        className="prevBtn"
        src={prevBtn}
        alt="이전"
        onClick={prevSlide}
      />
      <Img 
        src={banners[currentSlide]} 
        alt="배너" 
      />
      <img
        className="nextBtn"
        src={nextBtn}
        alt="다음"
        onClick={nextSlide}
      />
       <div className="pagination">
        {banners.map((_, index) => (
          <span
            key={index}
            className={index === currentSlide ? "active" : ""}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </BannerSlideWrapper>
  )
}

import { useState, useEffect } from "react";
import prevBtn from "../../../assets/images/arrow-1.svg";
import nextBtn from "../../../assets/images/arrow-2.svg";
import { BannerSlideWrapper, BannerImage, TextOverlay } from "./bannerSlide.style";

export default function BannerSlide({ banners }) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % banners.length);
  };

  const prevSlide = () => {
    setCurrentSlide((currentSlide - 1 + banners.length) % banners.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval)// 컴포넌트가 언마운트될 때 인터벌 제거
  }, [currentSlide])

  return (
    <BannerSlideWrapper>
      <img 
        className="prevBtn"
        src={prevBtn}
        alt="이전"
        onClick={prevSlide}
      />
      <BannerImage 
        src={banners[currentSlide].image} 
        alt="배너" 
      />
      <TextOverlay>
        {banners[currentSlide].caption}
      </TextOverlay>
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

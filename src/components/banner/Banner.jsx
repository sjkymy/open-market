import BannerSlide from "./bannerSlide/BannerSlide";
import { BannerAd } from "./banner.style";

export default function Banner() {
  const banners = [
    'https://images.unsplash.com/photo-1596609548086-85bbf8ddb6b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    'https://images.unsplash.com/photo-1556742111-a301076d9d18?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'
  ];
  return (
    <BannerAd>
      <h1 className="ir">배너 슬라이드</h1>
      <BannerSlide banners={banners} />
    </BannerAd>
  )
}

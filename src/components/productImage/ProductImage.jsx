import { Img } from "./productImage.style";

export default function ProductImage({image, product_name}) {
  return (
    <Img 
      src={image} 
      alt={product_name}
    />
  )
}

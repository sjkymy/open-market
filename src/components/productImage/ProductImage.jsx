import { Img } from "./productImage.style";

export default function ProductImage({image, product_name}) {
  // console.log(URL.createObjectURL(compressedImage));
  return (
    <Img src={image} alt={product_name} />
  )
}

// import { useState } from "react";
import { Img } from "./productImage.style";

export default function ProductImage({image, product_name}) {
  // const [imageData, setImageData] = useState("");

  return (
    <Img src={image} alt={product_name} />
  )
}

import ProductData from "../../hooks/productData/ProductData";
import Card from "../card/Card";
import FailLoadData from "../failLoadData/FailLoadData";
import { MainEl, ProductList } from "./product.style";
import Loading from "../loading/Loading";

export default function Product() {
  const {items, isLoaded, error} = ProductData();

  return (
  (error !== null) ? <FailLoadData/> :
  !isLoaded ? <Loading /> :
    <MainEl>
      <ProductList>
        {items.map((item) => <Card 
          key={item.product_id} 
          {...item}
        />)}
      </ProductList>
    </MainEl>
  )
}

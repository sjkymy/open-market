import useProductData from "../../hooks/productData/ProductData";
import Card from "../card/Card";
import FailLoadData from "../failLoadData/FailLoadData";
import { MainEl, ProductList } from "./product.style";
import Loading from "../loading/Loading";
import Paging from "../pagination/Paging";

export default function Product() {
  const {items, isLoaded, error, count, page, setPage} = useProductData();

  return (
  (error !== null) ? <FailLoadData/> :
  !isLoaded ? <Loading /> :
  <>
    <MainEl>
      <ProductList>
        {items.map((item) => <Card 
          key={item.product_id} 
          {...item}
        />)}
      </ProductList>
    </MainEl>
    <Paging 
      count={count}
      page={page}
      setPage={setPage}
    />
  </>
  )
}

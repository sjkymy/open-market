import { useState } from 'react';
import ProductInfo from './productInfo/ProductInfo';
import Count from './count/Count';
import ListPrice from './listPrice/ListPrice';
import Modal from "../../../components/modal/Modal";
import { CartList } from './cartList.style'

export default function Cartlist({cart_item_id, is_active, my_cart, product_id, quantity, productDetailData, handleDelete}) {
  const [countValue, setCountValue] = useState(quantity);
  const [showModal, setShowModal] = useState(false);

  const productItem = () => {
    for (let i = 0; i < productDetailData.length; i++) {
      const item = productDetailData[i];
      if (item.product_id === product_id) {
        return {
          image: item.image,
          product_name: item.product_name,
          store_name: item.store_name,
          price: item.price,
          shipping_fee: item.shipping_fee
        };
      }
    };
    return {
      image: '', 
      product_name: '',
      store_name: '',
      price: 0
    };
  };

  const { image, product_name, store_name, price, shipping_fee } = productItem(); 

  const handleCountChange = (count) => {
    setCountValue(count);
  };

  return (
    <CartList>
      <button 
        className="delete_btn" 
        onClick={() => {
          setShowModal(true);
        }}
      />
      <div className='product_check'>
        <input type="radio" />
      </div>
      <ProductInfo
        image={image}
        product_name={product_name}
        store_name={store_name}
        price={price}
        shipping_fee={shipping_fee}
      />
      <Count 
        quantity={countValue} onCountChange={handleCountChange}
      />
      <ListPrice 
        price={price}
        quantity={countValue}
      />
      {showModal && (<Modal
        closeText={"아니요"}
        confirmText={"예"}
        modalClose={() => {
          setShowModal(false);
        }}
        modalConfirm={() => {
          handleDelete(cart_item_id)
          setShowModal(false);
        }}
      >
        {"상품을 삭제하시겠습니까?"}
      </Modal>)}
    </CartList>
  )
}

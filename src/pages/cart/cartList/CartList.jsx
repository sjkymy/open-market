import { useState } from 'react';
import ProductInfo from './productInfo/ProductInfo';
import Count from './count/Count';
import ListPrice from './listPrice/ListPrice';
import Modal from "../../../components/modal/Modal";
import { CartListLi } from './cartList.style'

export default function Cartlist({cart_item_id, is_active, my_cart, product_id, quantity, productData, handleDelete}) {
  const [countValue, setCountValue] = useState(quantity);
  const [showModal, setShowModal] = useState(false);

  const productItem = () => {
    for (let i = 0; i < productData.length; i++) {
      const item = productData[i];
      if (item.product_id === product_id) {
        return {
          image: item.image,
          product_name: item.product_name,
          store_name: item.store_name,
          price: item.price,
          shipping_fee: item.shipping_fee,
          stock: item.stock,
        };
      }
    };
    return {
      image: '', 
      product_name: '',
      store_name: '',
      price: 0,
      shipping_fee: 0,
      stock: "",
    };
  };

  const { image, product_name, store_name, price, shipping_fee, stock } = productItem(); 

  const handleCountChange = (count) => {
    setCountValue(count);
  };

  return (
    <CartListLi>
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
        stock={stock}
      />
      <Count 
        quantity={countValue}
        cartItem={{cart_item_id, product_id, is_active}}
        stock={stock}
        onCountChange={handleCountChange}
      />
      <ListPrice 
        quantity={countValue}
        price={price}
        image={image}
        product_name={product_name}
        store_name={store_name}
        shipping_fee={shipping_fee}
      />
      {showModal && (<Modal
        closeText={"아니요"}
        confirmText={"예"}
        modalClose={() => {
          setShowModal(false);
        }}
        modalConfirm={() => {
          handleDelete(cart_item_id, product_id)
          setShowModal(false);
        }}
      >
        {"상품을 삭제하시겠습니까?"}
      </Modal>)}
    </CartListLi>
  )
};
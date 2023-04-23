import { useState, useEffect } from 'react';
import ProductInfo from './productInfo/ProductInfo';
import { CartList } from './cartList.style'

export default function Cartlist({cart_item_id, is_active, my_cart, product_id, quantity, productDetailData}) {
  const [count, setCount] = useState(quantity);
  const [btnDisable, setBtnDisable] = useState(true);

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

  const { 
    image, 
    product_name, 
    store_name, 
    price, 
    shipping_fee 
  } = productItem();

  const handleChangeAmount = (type) => {
    if (type === 'increment') {
      setCount((prev) => prev + 1);
    } else if (type === 'decrement') {
      setCount((prev) => prev - 1);
    }
  };

  useEffect(() => {
    (count > 0) ? 
    setBtnDisable(false) : 
    setBtnDisable(true)
  }, [count])

  return (
    <CartList>
      <div className='product_check'>
        <input type="radio" />
      </div>
      <ProductInfo
        image = {image}
        product_name = {product_name}
        store_name = {store_name}
        price = {price}
        shipping_fee = {shipping_fee}
      />
      <div>
        <button
          onClick={() => handleChangeAmount('decrement')}
          disabled={btnDisable}
        >-
        </button>
        <input type="number" value={count} min="0" readOnly />
        <button 
        onClick={() => handleChangeAmount('increment')}
        >+
        </button>
      </div>
    </CartList>
  )
}

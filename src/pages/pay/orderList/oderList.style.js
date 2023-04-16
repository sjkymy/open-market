import styled from "styled-components";

const OrderListUl = styled.ul `
    width: 1280px;
    padding: 8px 8px 18px;
    display: flex;
    border-bottom: 1px solid #C4C4C4;
    li {
    > img {
        width: 104px;
        height: 104px;
        object-fit: cover;
        border-radius: 10px;
    }
    }
    .product_txt {
        width: 524px;
        margin-left: 36px;
        .store_name {
            font-size: 14px;
            line-height: 18px;
            color: var(--color-dark);
        }
        .product_name {
            font-size: 18px;
            line-height: 22px;
            margin-top: 6px;
        }
        .product_count{
            font-size: 14px;
            line-height: 18px;
            color: var(--color-dark);
            margin-top: 10px;
        }
    }
    .sale{
        width: 200px;
        font-size: 18px;
        line-height: 23px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .shipping_fee {
        width: 200px;
        font-size: 18px;
        line-height: 23px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .total_price {
        width: 200px;
        font-size: 18px;
        font-weight: bold;
        line-height: 23px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export {OrderListUl}
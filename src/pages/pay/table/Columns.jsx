export const columns = [
    {
        Header: "상품정보",
        accessor: data => `${data.product_name} ${data.price}`,
        Cell: ({ value }) => `${value[0]} ${value[1]}`,
    },
    {
        Header: "할인",
        accessor: "sale"
    },
    {
        Header: "배송비",
        accessor: "fee"
    },
    {
        Header: "주문금액",
        accessor: "price"
    }
];

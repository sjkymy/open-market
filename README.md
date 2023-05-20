# 오픈마켓
***React를 사용하여 상품 등록, 결제, 상품에 대한 CRUD를 직접 구현한 개인 프로젝트.*** <br />
***판매자와 구매자를 구별하여 판매자가 상품을 등록, 판매하며 구매자는 구매하는 서비스.*** <br />

<p>아이디 : abcdefg123</p>
<p>비밀번호 : qaqaqa123</p>

+ React를 기반으로 SPA 구현, 기능별 커스텀 훅 적용. 
+ Styled-Components로 React 컴포넌트 스타일 구현.
<br/>

### 로컬 환경에서 프로젝트 구동
- ```git clone https://github.com/sjkymy/open-market.git .```
- ```npm install```
- ```npm start```
---
## 1. 기술 스택
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=white">
<img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">

---

## 2. 페이지 미리보기(Preview)

+ <p>로그인</p>
<span>
  <img src="https://github.com/sjkymy/open-market/assets/112460273/132c0efc-a322-45cc-8b74-da12802c2b6f" width="50%" />
</span>
  
+ <p>홈 화면</p>

+ <p>상품 상세 페이지</p>
+ <p>장바구니</p>
+ <p>구매 페이지</p>

---

## 3. 트러블 슈팅
장바구니 페이지의 UI를 구현하기 위해서 상품 데이터(상품 이름, 이미지, 스토어 이름 등) 값이 필요했다.<br />
그러나 장바구니 목록을 보는 API(GET /cart/)에는 상품 수량과 상품 및 카트 id 관련 값들만 있어서 해당 값들은 받을 수 없었다.<br />
상품 데이터는 상품 디테일 API(GET /products/<int:product_id>/)를 통해서 받아와야 했다.

cart API의 product_id와 상품 디테일 API의 product_id가 같은 객체만 뽑아서 상품 데이터 값을 UI에 그리기 위한 코드를 작성했다.

```
// Cart.jsx

const [productDetailData, setProductDetailData] = useState([])

useEffect(() => {
  if(!isLoading) {
    const myCartIn = cartData.results;
    // console.log(myCartIn);
    const myCartInProductIdArr = myCartIn.map((item) => {
      return item.product_id
    });
    
    myCartInProductIdArr.forEach((v) => {
      const detailData = async () => {
        try {
          const response = await axios.get(`https://openmarket.weniv.co.kr/products/${v}/`);
          // console.log(response.data);
          const responseData = response.data
          setProductDetailData(...productDetailData, responseData);
        } catch (error) {
          console.log(error);
        }
      };
      detailData();
    });
  };
},[isLoading])
console.log(productDetailData);
```

### 1. 같은 product_id를 가진 객체를 뽑아 새로운 배열 만들기
```productDetailData``` 배열에 product_id 값이 같은 객체들을 넣고 싶었다.<br />
```setProductDetailData```를 호출할 때, 전개 연산자(...)를 사용하여 기존의 ```productDetailData``` 배열과 ```responseData(상품디테일)```를 
합쳐서 새로운 배열을 만들고 싶었지만 **문제점은 배열 안에 하나의 객체만 들어간 상태로 출력된다는 것이다. **

전개 연산자 대신 ```concat()``` 메서드를 사용하여 이전 상태값을 함수형 업데이트로 전달했고, 이전 상태값과 ```responseData```를 합친 새로운 배열을 리턴하는 방식으로 수정했다.
```
useEffect(() => {
  ...
  ...  
    myCartInProductIdArr.forEach((v) => {
      const detailData = async () => {
        try {
          ...
          ...
          setProductDetailData((prevData) => prevData.concat(responseData));
        } catch (error) {
          console.log(error);
        }
      };
      detailData();
    });
  ...
},[isLoading])
```

**여기서 문제점은 불필요한 렌더링이 발생했다. 배열의 길이만큼 렌더링이 일어났다.**

### 2. 렌더링 최적화 (1) - useMemo 사용하기
```
const cartProductData = useMemo(() => {
  return cartData.results.map((item) => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://openmarket.weniv.co.kr/products/${item.product_id}/`
        );
        return response.data;
      } catch (error) {
        console.log(error);
      }
    };
    return fetchData();
  });
}, [cartData.results]);

useEffect(() => {
  Promise.all(cartProductData).then((data) => {
    setProductDetailData(data);
  });
}, [cartProductData]);
```

- 랜더링 최적화를 위해 ```useMemo``` 훅을 사용했다. 그 이유는 렌더링을 최종 한 번만 하려면 ```useMemo``` 훅을 사용하여 ```cartProductData``` 배열을 계산하고, 이전 결과를 재사용하기 위함이었다.<br />
- ```cartProductData```는 ```cartData.results``` 배열에서 각각의 product_id에 대한 상세정보를 비동기로 가져오는 ```fetchData``` 함수를 반환하는 배열이다.
- 이후 ```useEffect```에서 ```Promise.all```을 사용하여 ```cartProductData``` 배열의 모든 비동기 요청이 완료되면, 각각의 결과를 배열로 받아서 ```setProductDetailData```를 호출하여 ```cartProductData``` 상태값을 업데이트 했다.

### 3. 렌더링 최적화 (2) - useMemo 사용하지 않기
최적화하려는 계산의 비용이 크지 않고, 장바구니 상품 배열은 자주 변경되는 특징이 있다. 굳이 ```useMemo```를 사용할 필요는 없었다.<br />
```useMemo```를 사용하지 않고 렌더링 최적화 코드를 작성했다.
```
const [productDetailData, setProductDetailData] = useState([]);

useEffect(() => {
  let isMounted = true;
  const fetchProductDetails = async () => {
    const myCartIn = cartData.results;
    const myCartInProductIdArr = myCartIn.map((item) => item.product_id);
    const productDetails = [];
    for (const productId of myCartInProductIdArr) {
      try {
        const response = await axios.get(`https://openmarket.weniv.co.kr/products/${productId}/`);
        productDetails.push(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    if (isMounted) {
      setProductDetailData(productDetails);
    }
  };
  if (!isLoading) {
    fetchProductDetails();
  }
  return () => {
    isMounted = false;
  };
}, [isLoading, cartData]);
```
- ```productDetailData```는 빈 배열로 초기화하고, ```useEffect```에서 ```isLoading```과 ```cartData```가 변경될 때마다 상품 상세정보를 비동기로 가져오는 ```fetchProductDetails``` 함수를 실행한다.
- 이때, ```fetchProductDetails``` 함수에서는 ```myCartInProductIdArr``` 배열에 있는 각각의 product_id에 대한 상세정보를 가져와서 ```productDetails``` 배열에 저장한다.
- ```isMounted``` 변수를 사용하여 컴포넌트가 마운트된 상태에서만 ```setProductDetailData``` 함수를 호출하여 상태값을 업데이트한다.

최종적으로 불필요한 렌더링을 방지하고 최종 결과만 렌더링할 수 있었다.

이후 장바구니에서 상품 삭제 및 수량 수정 등 장바구니 데이터가 새롭게 업데이트 되는 기능을 새롭게 구현하면서 cart.jsx의 코드는 일부 수정된 부분이 있다.




import { useEffect } from "react";
import Pagination from "react-js-pagination";
import "./paging.css";

export default function Paging({count, page, setPage}) {

  useEffect(() => {
    window.scrollTo(0, 200); // 페이지 변경 시 스크롤 위치를 맨 위로 이동
  }, [page]);

  return (
    <Pagination
      activePage={page}
      totalItemsCount={count}
      onChange={setPage}
      itemsCountPerPage={15}
      pageRangeDisplayed={5}
      prevPageText={"이전"}
      nextPageText={"다음"}
      firstPageText={"처음"}
      lastPageText={"끝"}
    />
  )
}

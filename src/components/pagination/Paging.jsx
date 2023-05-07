import Pagination from "react-js-pagination";
import "./paging.css";

export default function Paging({count, page, setPage}) {

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

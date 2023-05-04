import Pagination from "react-js-pagination";
import "./paging.css";

export default function Paging({count, page, setPage}) {

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={15}
      totalItemsCount={count}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={setPage}
    />
  )
}

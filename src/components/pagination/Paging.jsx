import { useState } from "react";
import Pagination from "react-js-pagination";
import "./paging.css";

export default function Paging() {
  const [page, setPage] = useState(1);

  const handlePageChange = (page) => {
    setPage(page);
  };

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={15}
      totalItemsCount={90}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  )
}

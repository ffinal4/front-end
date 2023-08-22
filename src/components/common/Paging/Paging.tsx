import React, { useState } from "react";
import Pagination from "react-js-pagination";
import "../Paging/paging.css";
import { useRecoilState } from "recoil";
import { pagination } from "../../../store/pagination";

const Paging = () => {
  const [page, setPage] = useRecoilState<number>(pagination);

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  return (
    <Pagination
      activePage={page}
      itemsCountPerPage={20}
      totalItemsCount={450}
      pageRangeDisplayed={5}
      prevPageText={"‹"}
      nextPageText={"›"}
      onChange={handlePageChange}
    />
  );
};

export default Paging;

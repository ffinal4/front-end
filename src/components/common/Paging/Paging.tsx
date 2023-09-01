import React, { useEffect } from "react";
import Pagination from "react-js-pagination";
import "../Paging/paging.css";
import { useRecoilState, useResetRecoilState } from "recoil";
import { pagination } from "../../../store/pagination";

const Paging = () => {
  const [page, setPage] = useRecoilState<number>(pagination);
  // const resetPage = useResetRecoilState(pagination);
  // // 컴포넌트 언마운트시 페이지값 1로 초기화
  // // 언마운트시로 하니까 렌더링 에러 발생중
  // useEffect(() => {
  //   return () => {
  //     resetPage();
  //   };
  // }, []);
  const handlePageChange = (page: number) => {
    setPage(page);
    window.scrollTo(0, 0);
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

import { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { Headsets } from "../Headsets";
import "./pagination.css";

export const Pagination = ({ itemsPerPage, items, handleSortCards }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;

    setCurrentItems(items.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(items.length / itemsPerPage));
  }, [items, itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;

    setItemOffset(newOffset);
  };

  return (
    <>
      <Headsets cards={currentItems} handleSortCards={handleSortCards}/>
      <ReactPaginate
        className="pagination"
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="<"
        renderOnZeroPageCount={null}
        pageClassName="page-item"
        previousClassName="page-item"
        nextClassName="page-item"
        breakClassName="page-item"
        activeClassName="active"
      />
    </>
  );
};

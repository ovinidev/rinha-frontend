"use client";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

interface PaginationProps {
  handlePrevPage: () => void;
  handleNextPage: () => void;
  page: number;
}

export function Pagination({
  handlePrevPage,
  handleNextPage,
  page,
}: PaginationProps) {
  return (
    <div className="flex w-full items-center justify-center gap-4">
      <button
        className="disabled:cursor-not-allowed"
        onClick={handlePrevPage}
        disabled={page === 1}
      >
        <BsFillArrowLeftCircleFill className="text-3xl text-slate-800" />
      </button>

      <span className="text-xl text-slate-800 ">{page}</span>

      <button onClick={handleNextPage}>
        <BsFillArrowRightCircleFill className="text-3xl text-slate-800" />
      </button>
    </div>
  );
}

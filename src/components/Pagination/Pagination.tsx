import React from "react";
import { Link, createSearchParams } from "react-router-dom";
import classNames from "classnames";
import { QueryConfig } from "../../pages/Jobs/Jobs";

interface Props {
  queryConfig: QueryConfig;
  pageSize: number;
}

export default function Pagination({ queryConfig, pageSize }: Props) {
  const page = Number(queryConfig.index);

  const renderPagination = () => {
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1;

        return (
          <li>
            <Link
              to={{
                pathname: "/jobs",
                search: createSearchParams({
                  ...queryConfig,
                  index: pageNumber.toString(),
                }).toString(),
              }}
              key={index}
              className={classNames(
                "mx-2 cursor-pointer rounded border bg-white px-3 py-2 shadow-sm",
                {
                  "border-cyan-500": pageNumber === page,
                  "border-transparent": pageNumber !== page,
                },
              )}
            >
              {pageNumber}
            </Link>
          </li>
        );
      });
  };
  return (
    <>
      <nav
        aria-label="Page navigation example"
        className="flex items-center justify-center"
      >
        <ul className="flex list-style-none">
          <li>
            {page === 1 ? (
              <span className="px-3 py-2 mx-2 border rounded shadow-sm cursor-not-allowed bg-white/60">
                Prev
              </span>
            ) : (
              <Link
                to={{
                  pathname: "/jobs",
                  search: createSearchParams({
                    ...queryConfig,
                    index: (page - 1).toString(),
                  }).toString(),
                }}
                className="px-3 py-2 mx-2 bg-white border rounded shadow-sm cursor-pointer"
              >
                Prev
              </Link>
            )}
          </li>

          {renderPagination()}
          <li>
            {page === pageSize ? (
              <button className="px-3 py-2 mx-2 border rounded shadow-sm cursor-not-allowed bg-white/60">
                Next
              </button>
            ) : (
              <Link
                to={{
                  pathname: "/jobs",
                  search: createSearchParams({
                    ...queryConfig,
                    index: (page + 1).toString(),
                  }).toString(),
                }}
                className="px-3 py-2 mx-2 bg-white border rounded shadow-sm cursor-pointer"
              >
                Next
              </Link>
            )}
          </li>
        </ul>
      </nav>
    </>
  );
}

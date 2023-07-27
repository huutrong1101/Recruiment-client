import React from "react";
import { Link, createSearchParams } from "react-router-dom";
import classNames from "classnames";
import { QueryConfig } from "../../pages/Jobs/Jobs";

interface Props {
  queryConfig: QueryConfig;
  pageSize: number;
}

<<<<<<< HEAD
=======
const RANGE = 2;

>>>>>>> 343d44cfbf7837a21922134c90a057bc9434ab74
export default function Pagination({ queryConfig, pageSize }: Props) {
  const page = Number(queryConfig.index);

  const renderPagination = () => {
<<<<<<< HEAD
=======
    let dotAfter = false;
    let dotBefore = false;

    const renderDotBefore = (index: number) => {
      if (!dotBefore) {
        dotBefore = true;
        return (
          <button
            key={index}
            className="px-3 py-2 mx-2 bg-white border rounded shadow-sm cursor-pointer"
          >
            ...
          </button>
        );
      }
      return null;
    };

    const renderDotAfter = (index: number) => {
      if (!dotAfter) {
        dotAfter = true;
        return (
          <span
            key={index}
            className="px-3 py-2 mx-2 bg-white border rounded shadow-sm cursor-pointer"
          >
            ...
          </span>
        );
      }
      return null;
    };

>>>>>>> 343d44cfbf7837a21922134c90a057bc9434ab74
    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1;

<<<<<<< HEAD
=======
        if (
          page <= RANGE * 2 + 1 &&
          pageNumber > page + RANGE &&
          pageNumber < pageSize - RANGE + 1
        ) {
          return renderDotAfter(index);
        } else if (page > RANGE * 2 + 1 && page < pageSize - RANGE * 2) {
          if (pageNumber < page - RANGE && pageNumber > RANGE) {
            return renderDotBefore(index);
          } else if (
            pageNumber > page + RANGE &&
            pageNumber < pageSize - RANGE + 1
          ) {
            return renderDotAfter(index);
          }
        } else if (
          page >= pageSize - RANGE * 2 &&
          pageNumber > RANGE &&
          pageNumber < page - RANGE
        ) {
          return renderDotBefore(index);
        }

>>>>>>> 343d44cfbf7837a21922134c90a057bc9434ab74
        return (
          <li key={index}>
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
<<<<<<< HEAD
        <ul className="flex list-style-none">
=======
        <ul className="flex items-center justify-center list-style-none">
>>>>>>> 343d44cfbf7837a21922134c90a057bc9434ab74
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
<<<<<<< HEAD
=======

>>>>>>> 343d44cfbf7837a21922134c90a057bc9434ab74
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

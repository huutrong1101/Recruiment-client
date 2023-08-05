import React from "react";
import { Link, createSearchParams } from "react-router-dom";
import classNames from "classnames";
import { QueryConfig } from "../../AdminManagerList/AdminTable";

interface Props {
  queryConfig: QueryConfig;
  pageSize: number;
}

const RANGE = 2;

export default function Paginationjoblist({ queryConfig, pageSize }: Props) {
  const page = Number(queryConfig.page);

  const renderPaginationjoblist = () => {
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

    return Array(pageSize)
      .fill(0)
      .map((_, index) => {
        const pageNumber = index + 1;

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

        return (
          <li key={index}>
            <Link
              to={{
                pathname: "",
                search: createSearchParams({
                  ...queryConfig,
                  page: pageNumber.toString(),
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
        <ul className="flex items-center justify-center list-style-none">
          <li>
            {page === 1 ? (
              <span className="px-3 py-2 mx-2 border rounded shadow-sm cursor-not-allowed bg-white/60">
                Prev
              </span>
            ) : (
              <Link
                to={{
                  pathname: "",
                  search: createSearchParams({
                    ...queryConfig,
                    page: (page - 1).toString(),
                  }).toString(),
                }}
                className="px-3 py-2 mx-2 bg-white border rounded shadow-sm cursor-pointer"
              >
                Prev
              </Link>
            )}
          </li>

          {renderPaginationjoblist()}

          <li>
            {page === pageSize ? (
              <button className="px-3 py-2 mx-2 border rounded shadow-sm cursor-not-allowed bg-white/60">
                Prev
              </button>
            ) : (
              <Link
                to={{
                  pathname: "",
                  search: createSearchParams({
                    ...queryConfig,
                    page: (page - 1).toString(),
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

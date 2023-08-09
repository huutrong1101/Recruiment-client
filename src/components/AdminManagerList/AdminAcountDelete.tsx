import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import classNames from "classnames";
import { isEqual, isUndefined, omitBy } from "lodash";
import moment from "moment";
import qs from "query-string";
import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import useQueryParams from "../../hooks/useQueryParams";
import { AdminDelete, AdminDeleteAcountConfig } from "../../services/services";
import axiosInstance from "../../utils/AxiosInstance";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import Pagination from "../Pagination/Pagination";
export type QueryConfig = {
  [key in keyof AdminDeleteAcountConfig]: string;
};

const AdminAcountDelete = () => {
  const jobs: AdminDelete[] = useAppSelector(
    (state) => state.adminmanagerjobList.adminmanagerJobList,
  );
  const totalListJobs = useAppSelector(
    (state) => state.adminmanagerjobList.totalListJobs,
  );
  const queryParams: QueryConfig = useQueryParams();
  const [isLoading, setIsLoading] = useState(false);
  const queryConfig: QueryConfig = omitBy(
    {
      fullName: queryParams.fullName || "",
      index: queryParams.index || "1",
      size: queryParams.size || 5,
    },
    isUndefined,
  );
  const [prevQueryConfig, setPrevQueryConfig] =
    useState<QueryConfig>(queryConfig);
  const [pageSize, setPageSize] = useState(
    Math.ceil(totalListJobs / Number(queryParams.index || 5)),
  );
  const [showJobLists, setAdminManagerJobList] = useState(jobs);

  useEffect(() => {
    if (!isEqual(prevQueryConfig, queryConfig)) {
      const fetchJobs = async () => {
        try {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(
            `/admin/accountsDeleted?${query}`,
          );
          setAdminManagerJobList(response.data.result.content);
          setPageSize(response.data.result.totalPages);
        } catch (error) {
          console.log(error);
        }
      };
      fetchJobs();
      setPrevQueryConfig(queryConfig);
    }
  }, [queryConfig, prevQueryConfig]);

  useEffect(() => {
    const fetchPosition = async () => {
      setIsLoading(true);
      try {
        if (queryConfig) {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(
            `/admin/accountsDeleted?${query}`,
          );
          setAdminManagerJobList(response.data.result.content);
          setPageSize(response.data.result.totalPages);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosition();
  }, []);

  //
  // Search
  const navigate = useNavigate();
  const [dataSearch, setDataSearch] = useState({
    key: "",
  });
  const handleSearch = async (e: any) => {
    e.preventDefault();
    console.log(dataSearch.key);
    try {
      setIsLoading(true);
      navigate({
        pathname: "/admin/accountsDeleted",
        search: createSearchParams({
          ...queryConfig,
          fullName: dataSearch.key,
        }).toString(),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {/* Search */}
      <form
        onSubmit={handleSearch}
        className="flex justify-center mt-10 mb- item-center"
      >
        {/* Input */}
        <div
          className={classNames(
            "flex items-center flex-shrink-0 w-1/2 p-2 border rounded-lg ",
            "focus-within:border-emerald-700",
          )}
        >
          <MagnifyingGlassIcon className={classNames(`w-[20px]`)} />
          <input
            value={dataSearch.key}
            onChange={(e) =>
              setDataSearch({ ...dataSearch, key: e.target.value })
            }
            type="text"
            placeholder="Search your Keywords"
            className={classNames(
              "w-full h-full text-[12px] ml-3 focus:outline-none text-base text-zinc-400",
            )}
          />
        </div>
        {/* Button */}
        <div className={classNames("gap-2 ml-10 items-center justify-center")}>
          <button
            className={classNames(
              "bg-[#05966A] hover:bg-emerald-700 text-white p-3 rounded-md flex w-full text-center items-center justify-center",
            )}
            type="submit"
          >
            Search
          </button>
        </div>
      </form>
      <div className="flex-col mt-5">
        <TableContainer
          component={Paper}
          sx={{ border: "1px solid rgba(0, 0, 0, 0.4)" }}
        >
          <Table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
            <TableHead className="text-xs text-gray-500 bg-gray-200 text-center">
              <TableRow>
                <TableCell
                  scope="col"
                  className="px-1 py-1 "
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {" "}
                  Name{" "}
                </TableCell>
                <TableCell
                  scope="col"
                  className="px-1 py-1 "
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {" "}
                  Gender{" "}
                </TableCell>
                <TableCell
                  scope="col"
                  className="px-1 py-1 "
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {" "}
                  Phone{" "}
                </TableCell>
                <TableCell
                  scope="col"
                  className="px-1 py-1 "
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {" "}
                  Email{" "}
                </TableCell>
                <TableCell
                  scope="col"
                  className="px-1 py-1"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {" "}
                  Date created{" "}
                </TableCell>
                <TableCell
                  scope="col"
                  className="px-1 py-1"
                  style={{ fontFamily: "Outfit, sans-serif" }}
                >
                  {" "}
                  Date delete{" "}
                </TableCell>
              </TableRow>
            </TableHead>
            {isLoading ? (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={6}>
                    <div className="flex items-center justify-center w-full h-[50px] text-[13px] mt-10 mb-10">
                      <LoadSpinner className="text-2xl text-[#059669] " />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <>
                <TableBody>
                  {showJobLists && showJobLists.length > 0 ? (
                    showJobLists.map((job) => (
                      <TableRow
                        className="text-center text-black bg-white hover:bg-gray-100"
                        key={job.userId}
                      >
                        <TableCell
                          scope="row"
                          className="font-medium text-gray-900 whitespace-nowrap"
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                          {" "}
                          {job.fullName}{" "}
                        </TableCell>
                        <TableCell
                          scope="row"
                          className="font-medium text-gray-900 whitespace-nowrap"
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                          {" "}
                          {job.gender}{" "}
                        </TableCell>
                        <TableCell
                          scope="row"
                          className="font-medium text-gray-900 whitespace-nowrap"
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                          {" "}
                          {job.phone}{" "}
                        </TableCell>
                        <TableCell
                          scope="row"
                          className="font-medium text-gray-900 whitespace-nowrap"
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                          {" "}
                          {job.email}{" "}
                        </TableCell>
                        <TableCell
                          className=""
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                          {" "}
                          {moment(job.createdAt).format(
                            "HH:mm:ss DD-MM-YYYY",
                          )}{" "}
                        </TableCell>
                        <TableCell
                          className=""
                          style={{ fontFamily: "Outfit, sans-serif" }}
                        >
                          {" "}
                          {moment(job.clastLoginAt).format(
                            "HH:mm:ss DD-MM-YYYY",
                          )}{" "}
                        </TableCell>
                      </TableRow>
                    ))
                  ) : (
                    <div className="flex justify-center text-center w-full mt-10 mb-10">
                      <h1>No results were found. Please check again</h1>
                    </div>
                  )}
                </TableBody>
              </>
            )}
          </Table>
        </TableContainer>
      </div>
      <div className="flex justify-center mt-10">
        {/* Pagination  */}
        {/* <Paginationacountlistdelette  queryConfig={queryConfig} pageSize={pageSize} /> */}
        <Pagination queryConfig={queryConfig} pageSize={pageSize} url="" />
      </div>
    </>
  );
};
export default AdminAcountDelete;

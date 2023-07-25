import React, { useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import { data } from "../../data/RecJobManagementData";
import RecJobCard from "../../components/RecJobManagementCard/RecJobManagementCard";
import { STATUS } from "../../utils/Status";
import Loader from "../../components/Loader/Loader";
import { fetchRecJobList } from "../../redux/reducer/RecJobSlice"
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { JobInterface, JobListConfig } from "../../services/services";
import { omitBy, isUndefined } from "lodash";
import Pagination from "../../components/Pagination/Pagination";
import useQuerParams from "../../hooks/useQueryParams";
import { omit, isEqual } from "lodash";
import axiosInstance from "../../utils/AxiosInstance";
import qs from "query-string";

export type QueryConfig = {
  [key in keyof JobListConfig]: string;
};

const ReccerJobManagement = () => {

  const queryParams: QueryConfig = useQuerParams();
  const queryConfig: QueryConfig = omitBy(
    {
      index: queryParams.index || "1",
      limit: queryParams.limit || 10,
      name: queryParams.name,
      location: queryParams.location,
      posName: queryParams.posName,
      category: queryParams.category,
    },
    isUndefined,
  );
  const [prevQueryConfig, setPrevQueryConfig] =
    useState<QueryConfig>(queryConfig);


  const jobs: JobInterface[] = useAppSelector((state) => state.recjobList.recjobsList);
  const totalJobs = useAppSelector((state) => state.recjobList.recjobTotal);
  const [pageSize, setPageSize] = useState(
    Math.ceil(totalJobs / Number(queryParams.limit ?? 10)),
  );
  const [isLoading, setIsLoading] = useState(false);
  const [showJobs, setShowJobs] = useState(jobs);

  useEffect(() => {
    if (!isEqual(prevQueryConfig, queryConfig)) {
      const fetchJobs = async () => {
        setIsLoading(true);
        try {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(`recruiter/jobs${query}`);
          setShowJobs(response.data.result.content);
          setPageSize(response.data.result.totalPages);
          console.log(query)
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchJobs();
      setPrevQueryConfig(queryConfig);
    }
  }, [queryConfig, prevQueryConfig]);

  console.log(jobs)

    return (
      <>
        <form className="flex items-center w-3/4 p-2 mx-auto">
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 "
                aria-hidden="true"
                fill="none"
                viewBox="0 0 18 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full pl-10 p-2.5   "
              placeholder="Search Name"
              required
            />
          </div>
          <div className="flex items-center p-5">
            <Link to="../addjob">
              <div className="sm:w-[100px] h-[50px] relative">
                <button
                  className="w-full h-full left-5 top-0 absolute bg-[#48A280] hover:bg-emerald-700 text-white rounded-lg"
                  type="submit"
                >
                  + Add Job
                </button>
              </div>
            </Link>
          </div>
        </form>

        <div className="flex flex-wrap justify-center items-center 2 mt-[10px] ">
        {isLoading ? (
            <div className="flex justify-center">
              <Loader />
            </div>
          ) : (
            <div className="flex flex-wrap justify-center items-center 2 mt-[10px]">
              {/* <!-- Card --> */}
              {showJobs.length > 0 ? (
                showJobs.map((job: any) => (
                  <Link
                    to={`../jobdetail/${job.jobId}`}
                    key={job.jobId}
                    className="px-4 mb-8 md:w-5/6"
                  >
                    <RecJobCard job={job} />
                  </Link>
                ))
              ) : (
                <div className="flex justify-center w-full mb-10">
                  <span>Không tìm thấy kết quả</span>
                </div>
              )}
            </div>
          )}
          {/* <!-- Card --> */}
         
        </div>
        <Pagination queryConfig={queryConfig} pageSize={pageSize} />
      </>
    );
  }
export default ReccerJobManagement;
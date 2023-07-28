import React, { useEffect, useState } from 'react'
import { data } from "../../data/RecInterviewerManagementData";
import RecInterviewerCard from "../../components/RecInterviewerManageCard/RecInterviewerManageCard";
import { Link } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { fetchCandidateRecent } from '../../redux/reducer/CandidateRecentSlice';
import { STATUS } from '../../utils/Status';
import Loader from '../../components/Loader/Loader';
import { RecInterviewerInterface, RecInterviewerListConfig } from '../../services/services';
import useQueryParams from '../../hooks/useQueryParams';
import { omitBy, isUndefined, isEqual } from "lodash";
import qs from "query-string";
import axiosInstance from '../../utils/AxiosInstance';
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner';
import Pagination from './RecPagination';

export type QueryConfig = {
  [key in keyof RecInterviewerListConfig]: string;
};

const ReccerInterviewerManagement = () => {
  const queryParams: QueryConfig = useQueryParams();
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || "1",
      size: queryParams.size || 8,
      fullName: queryParams.fullName,
    },
    isUndefined,
  );

  const [prevQueryConfig, setPrevQueryConfig] =
    useState<QueryConfig>(queryConfig);

  const interviewers: RecInterviewerInterface[] = useAppSelector(
    (state) => state.RecInterviewerList.recInterviewerList,
  );
  const totalJobs = useAppSelector((state) => state.RecInterviewerList.recInterviewerTotal);

  const [pageSize, setPageSize] = useState(
    Math.ceil(totalJobs / Number(queryParams.size ?? 10)),
  );
  const [isLoading, setIsLoading] = useState(false);
  const [showinterviewers, setShowJobs] = useState(interviewers);

  const [dataSearch, setDataSearch] = useState({
    key: "",
    posName: "",
    location: "",
    type: "",
  });

  useEffect(() => {
    const fetchPosition = async () => {
      setIsLoading(true);
      try {
        if (queryConfig) {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(`/recruiter/interviewers?${query}`);
          setShowJobs(response.data.result.content);
          setPageSize(response.data.result.totalPages);
        }
        setDataSearch({
          ...dataSearch,
          key: queryConfig.fullName || "",
        });
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosition();
  }, []);

  useEffect(() => {
    if (!isEqual(prevQueryConfig, queryConfig)) {
      const fetchJobs = async () => {
        setIsLoading(true);
        try {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(`/recruiter/interviewers?${query}`);

          console.log(response.data.result.content)
          setShowJobs(response.data.result.content);
          setPageSize(response.data.result.totalPages);
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

  return (
    <>
      <form className="flex w-3/4 items-center mx-auto p-2">
        <div className="relative w-full">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500 " aria-hidden="true" fill="none" viewBox="0 0 18 20">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5v10M3 5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm0 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm12 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0V6a3 3 0 0 0-3-3H9m1.5-2-2 2 2 2" />
            </svg>
          </div>
          <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  focus:border-blue-500 block w-full pl-10 p-2.5   " placeholder="Search Name" required />
        </div>

      </form>
      <>
        {isLoading ? (
          <div className="flex justify-center mb-10">
            <LoadSpinner className="text-3xl" />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center items-center mt-[20px] ">
            {/* <!-- Card --> */}
            {showinterviewers.length > 0 ? (
              showinterviewers.map((interviewer: any) => (
                <div key={interviewer.id} className=" px-3 mb-8 lg:w-1/4 md:w-1/3 sm:w-3/4">
                  <RecInterviewerCard interviewer={interviewer} />
                </div>
              ))) : (
              <div className="flex justify-center w-full mb-10">
                <span>Không tìm thấy kết quả</span>
              </div>
            )}
          </div>
        )}
      </>
      <Pagination
        queryConfig={queryConfig}
        pageSize={pageSize}
        url="recruiter/interviewers"
      />

    </>
  )
}

export default ReccerInterviewerManagement

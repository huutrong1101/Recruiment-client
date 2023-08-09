import { useEffect, useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";
import RecInterviewerCard from "../../components/RecInterviewerManageCard/RecInterviewerManageCard";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
// import { fetchCandidateRecent } from "../../redux/reducer/CandidateRecentSlice";
import classNames from "classnames";
import { isEqual, isUndefined, omitBy } from "lodash";
import qs from "query-string";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import useQueryParams from "../../hooks/useQueryParams";
import {
  RecInterviewerInterface,
  RecInterviewerListConfig,
} from "../../services/services";
import axiosInstance from "../../utils/AxiosInstance";
import Pagination from "./RecPagination";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  fetchRecInterviewerList,
  fetchRecInterviewerSkill,
} from "../../redux/reducer/RecInterviewerSilce";

export type QueryConfig = {
  [key in keyof RecInterviewerListConfig]: string;
};

const ReccerInterviewerManagement = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchRecInterviewerList());
    dispatch(fetchRecInterviewerSkill());
  }, []);

  const queryParams: QueryConfig = useQueryParams();
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || "1",
      size: queryParams.size || 8,
      name: queryParams.name,
      skill: queryParams.skill,
    },
    isUndefined,
  );

  const [prevQueryConfig, setPrevQueryConfig] =
    useState<QueryConfig>(queryConfig);

  const interviewers: RecInterviewerInterface[] = useAppSelector(
    (state) => state.RecInterviewerList.recInterviewerList,
  );
  const totalInterviewers = useAppSelector(
    (state) => state.RecInterviewerList.recInterviewerTotal,
  );

  const [pageSize, setPageSize] = useState(
    Math.ceil(totalInterviewers / Number(queryParams.size ?? 10)),
  );

  const [isLoading, setIsLoading] = useState(false);
  const [showinterviewers, setshowinterviewers] = useState(interviewers);

  const [dataSearch, setDataSearch] = useState({
    key: "",
    skill: "",
  });

  useEffect(() => {
    const fetchPosition = async () => {
      setIsLoading(true);
      try {
        if (queryConfig) {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(
            `/recruiter/interviewers?${query}`,
          );
          setshowinterviewers(response.data.result?.content);
          setPageSize(response.data.result.totalPages);
        }
        setDataSearch({
          ...dataSearch,
          key: queryConfig.name || "",
          skill: queryConfig.skill || "",
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
      const fetchInterviewers = async () => {
        setIsLoading(true);
        try {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(
            `/recruiter/interviewers?${query}`,
          );
          console.log("co vao k");
          console.log(response);
          setshowinterviewers(response.data.result.content);
          setPageSize(response.data.result.totalPages);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchInterviewers();
      setPrevQueryConfig(queryConfig);
    }
  }, [queryConfig, prevQueryConfig]);

  const navigate = useNavigate();

  const handleSearch = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      navigate({
        pathname: "../interviewers",
        search: createSearchParams({
          ...queryConfig,
          //Dưới đây là cái parameter ở URL
          name: dataSearch.key,
          skill: dataSearch.skill,
          page: "1",
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
      <form
        onSubmit={handleSearch}
        className="flex justify-center mt-6 item-center"
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
      <>
        {isLoading ? (
          <div className="flex justify-center my-4 min-h-[70vh] flex-col items-center">
            <LoadSpinner className="text-3xl" />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center items-center mt-[20px] ">
            {/* <!-- Card --> */}
            {showinterviewers.length > 0 ? (
              showinterviewers.map((interviewer: any) => (
                <div
                  key={interviewer.id}
                  className="px-3 mb-8 lg:w-1/4 md:w-1/3 sm:w-3/4"
                >
                  <RecInterviewerCard interviewer={interviewer} />
                </div>
              ))
            ) : (
              <div className="flex justify-center w-full mb-10">
                <span>No Result Found</span>
              </div>
            )}
          </div>
        )}
      </>
      <Pagination queryConfig={queryConfig} pageSize={pageSize} url="" />
    </>
  );
};

export default ReccerInterviewerManagement;

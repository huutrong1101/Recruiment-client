import React, { useEffect, useState, Fragment } from "react";
import { Link, createSearchParams, useNavigate } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import {
  RecCandidateInterface,
  RecCandidateList,
} from "../../services/services";
import useQueryParams from "../../hooks/useQueryParams";
import { omitBy, isUndefined, isEqual } from "lodash";
import qs from "query-string";
import axiosInstance from "../../utils/AxiosInstance";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import classNames from "classnames";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import {
  fetchCandidateList,
  fetchCandidateSkill,
} from "../../redux/reducer/CandidateListSlice";
import RecCandidateCard from "../../components/RecCandidateManageCard/RecCandidateManageCard";
import Pagination from "../../components/Pagination/Pagination";

export type QueryConfig = {
  [key in keyof RecCandidateList]: string;
};

const ReccerCandidateManagement = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCandidateList());
    dispatch(fetchCandidateSkill());
  }, []);

  const queryParams: QueryConfig = useQueryParams();
  const queryConfig: QueryConfig = omitBy(
    {
      index: queryParams.index || "1",
      size: queryParams.size || 8,
      name: queryParams.name,
      skill: queryParams.skill,
    },
    isUndefined,
  );

  const [prevQueryConfig, setPrevQueryConfig] =
    useState<QueryConfig>(queryConfig);

  const candidates: RecCandidateInterface[] = useAppSelector(
    (state) => state.candidateList.candidatesList,
  );
  const totalCandidates = useAppSelector(
    (state) => state.candidateList.candidateTotal,
  );

  const [pageSize, setPageSize] = useState(
    Math.ceil(totalCandidates / Number(queryParams.size ?? 3)),
  );

  const [isLoading, setIsLoading] = useState(false);

  const [showCandidates, setshowCandidates] = useState([]);

  const [dataSearch, setDataSearch] = useState({
    key: "",
    skill: "",
  });

  const [showSkill, setShowSkill] = useState(false);
  // console.log(showSkill)
  const [skill, setCandidateskillList] = useState("");
  // console.log(skill);
  const listSkills = useAppSelector((state) => state.candidateList.skill);
  // console.log(listSkills)

  useEffect(() => {
    const fetchSkills = async () => {
      setIsLoading(true);
      try {
        if (queryConfig) {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(
            `/recruiter/applied-candidates?${query}`,
          );
          // console.log(response.data.result.content);
          setshowCandidates(response.data.result?.content);
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
    fetchSkills();
  }, []);

  useEffect(() => {
    if (!isEqual(prevQueryConfig, queryConfig)) {
      const fetchCandidates = async () => {
        setIsLoading(true);
        try {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(
            `/recruiter/applied-candidates?${query}`,
          );

          setshowCandidates(response.data.result?.content);
          setPageSize(response.data.result.totalPages);
        } catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
      };
      fetchCandidates();
      setPrevQueryConfig(queryConfig);
    }
  }, [queryConfig, prevQueryConfig]);

  const navigate = useNavigate();

  const handleSearch = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      navigate({
        pathname: "",
        search: createSearchParams({
          ...queryConfig,
          name: dataSearch.key,
          skill: dataSearch.skill,
          index: "1",
        }).toString(),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  // console.log(showCandidates);
  return (
    <>
      <form
        className="flex justify-center mt-6 item-center"
        onSubmit={handleSearch}
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
            {showCandidates && showCandidates.length > 0 ? (
              showCandidates.map((candidate: any) => (
                <div
                  key={candidate.id}
                  className="px-3 mb-8 lg:w-1/4 md:w-1/3 sm:w-3/4"
                >
                  <RecCandidateCard candidate={candidate} />
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

export default ReccerCandidateManagement;

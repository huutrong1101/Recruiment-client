import React, { useEffect, useState,Fragment } from 'react'
import { data } from "../../data/RecInterviewerManagementData";
import RecInterviewerCard from "../../components/RecInterviewerManageCard/RecInterviewerManageCard";
import { Link,createSearchParams,useNavigate } from 'react-router-dom'
import { useAppSelector, useAppDispatch } from '../../hooks/hooks';
import { fetchCandidateRecent } from '../../redux/reducer/CandidateRecentSlice';
import { STATUS } from '../../utils/Status';
import { RecInterviewerInterface, RecInterviewerListConfig } from '../../services/services';
import useQueryParams from '../../hooks/useQueryParams';
import { omitBy, isUndefined, isEqual } from "lodash";
import qs from "query-string";
import axiosInstance from '../../utils/AxiosInstance';
import LoadSpinner from '../../components/LoadSpinner/LoadSpinner';
import Pagination from './RecPagination';
import { BsFilterLeft } from 'react-icons/bs';
import classNames from 'classnames';


import { Menu, Transition } from "@headlessui/react";
import { JOB_POSITION } from "../../utils/Localization";
import { ChevronDownIcon, ChevronUpIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline';


export type QueryConfig = {
  [key in keyof RecInterviewerListConfig]: string;
};

const ReccerInterviewerManagement = () => {
  const queryParams: QueryConfig = useQueryParams();
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || "1",
      size: queryParams.size || 4,
      fullName: queryParams.fullName,
    },
    isUndefined,
  );

  const [prevQueryConfig, setPrevQueryConfig] =
    useState<QueryConfig>(queryConfig);

  const interviewers: RecInterviewerInterface[] = useAppSelector(
    (state) => state.RecInterviewerList.recInterviewerList,
  );
  const totalInterviewers = useAppSelector((state) => state.RecInterviewerList.recInterviewerTotal);

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
          const response = await axiosInstance(`/recruiter/interviewers?${query}`);
          setshowinterviewers(response.data.result.content);
          setPageSize(response.data.result.totalPages);
        }
        setDataSearch({
          ...dataSearch,
          key: queryConfig.fullName || "",
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
      const fetchJobs = async () => {
        setIsLoading(true);
        try {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(`/recruiter/interviewers?${query}`);

          console.log(response.data.result.content)
          setshowinterviewers(response.data.result.content);
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

  const [showType, setShowType] = useState(false);
  const [skill, setType] = useState("");
  const listSkills = useAppSelector((state) => state.RecInterviewerList.skill);
  const navigate = useNavigate();

  const handleSearch = async () => {
    try {
      setIsLoading(true);

      navigate({
        pathname: "../interviewers",
        search: createSearchParams({
          ...queryConfig,
          fullname: dataSearch.key,
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

  return (
    <>
      <div className="item-center flex justify-center mt-6">
        <div 
          className={classNames(
            "flex items-center flex-shrink-0 w-[54.5%] h-1/2 p-2 mt-1 border rounded-lg ",
            "focus-within:border-emerald-700",
          )}
        >
          <div
            className={classNames(
              "flex items-center w-full mr-5 gap-4 md:w-[30%] border-r-2",
            )}
          >
            <BsFilterLeft className={classNames(`w-[20px]  md:ml-4`)} />
            <Menu as="div" className={classNames("relative w-full")}>
              <Menu.Button className={classNames("w-full")}>
                <div
                  className={classNames(
                    "text-[13px] cursor-pointer flex items-center justify-between",
                  )}
                  onClick={() => setShowType(!showType)}
                >
                  {JOB_POSITION[skill] || "SKILL"}
                  {showType && (
                    <ChevronUpIcon className={classNames("w-[20px] mr-4")} />
                  )}
                  {!showType && (
                    <ChevronDownIcon className={classNames("w-[20px] mr-4")} />
                  )}
                </div>
              </Menu.Button>

              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute md:left-[-18px] w-full z-10 md:w-55 mt-2 origin-top-right bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    {listSkills.map((skill, index) => (
                      <Menu.Item key={index}>
                        {({ active }) => (
                          <p
                            className={classNames(
                              active
                                ? "bg-gray-100 text-gray-900"
                                : "text-gray-700",
                              "block px-4 py-2 text-sm",
                            )}
                            onClick={() => {
                              setType(skill);
                              setShowType(false);
                              setDataSearch({
                                ...dataSearch,
                                skill: skill,
                              });
                            }}
                          >
                            {JOB_POSITION[skill]}
                          </p>
                        )}
                      </Menu.Item>
                    ))}
                  </div>
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
          <MagnifyingGlassIcon className={classNames(`w-[20px]`)} />
          <input
            value={dataSearch.key}
            onChange={(e) =>
              setDataSearch({ ...dataSearch, key: e.target.value })
            }

            type="text"
            placeholder="Search your Keywords"
            className={classNames(
              "w-[85%] h-full text-[12px] ml-3 focus:outline-none text-base text-zinc-400",
            )}
          />

        </div>
        <div className={classNames("gap-2 ml-10 items-center justify-center")}>
          <button
            className={classNames(
              "bg-[#05966A] hover:bg-emerald-700 text-white p-3 rounded-md flex w-full text-center items-center justify-center",
            )}
            onClick={() => handleSearch()}
          >
            Search
          </button>
        </div>
      </div>
      <>
        {isLoading ? (
          <div className="flex justify-center mb-10">
            <LoadSpinner className="text-3xl mt-5" />
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
        url=""
      />

    </>
  )
}

export default ReccerInterviewerManagement

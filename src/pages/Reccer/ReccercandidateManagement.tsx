import React, { useEffect } from "react";
import { data } from "../../data/RecInterviewerManagementData";
import { Link } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";
import { fetchCandidateList } from "../../redux/reducer/CandidateListSlice";
import { STATUS } from "../../utils/Status";
import Loader from "../../components/Loader/Loader";
import RecCandidateCard from "../../components/RecCandidateManageCard/RecCandidateManageCard";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";

const ReccerCandidateManagement = () => {
  const { candidatesList, candidatesListStatus } = useAppSelector(
    (state: any) => state.candidateList,
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCandidateList());
  }, []);

  if (candidatesListStatus === STATUS.LOADING) {
    return (
      <div className="flex justify-center mb-10 py-6">
        <LoadSpinner className="text-3xl" />
      </div>
    );
  } else if (candidatesListStatus === STATUS.IDLE) {
    return (
      <>
        <form className="flex w-3/4 items-center mx-auto p-2">
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
        </form>
        <div className="flex flex-wrap justify-center items-center mt-[20px] ">
          {/* <!-- Card --> */}
          {candidatesList.map((candidate: any) => (
            <div
              key={candidate.id}
              className=" px-3 mb-8 lg:w-1/4 md:w-1/3 sm:w-3/4"
            >
              <RecCandidateCard candidate={candidate} />
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default ReccerCandidateManagement;

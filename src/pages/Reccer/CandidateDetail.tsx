import React from "react";
import { data } from "../../data/RecInterviewerDetailData";
import { useParams } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import RecCandidateDetailCard from "../../components/RecCandidateManageCard/RecCandidateDetailCard";
import CandidateList from "./CandidateList";
export default function CandidateDetail() {
  const { id } = useParams();
  const { candidatesRecent } = useAppSelector(
    (state: any) => state.candidateRecent,
  );
  const candidate = candidatesRecent.find(
    (candidate: any) => candidate.id === parseInt(id || ""),
  );
  return (
    <div>
      <div className="bg-white">
        {/* <!-- Card --> */}
        {/*               <RecInterviewerDetailCard userinfor={items.userinfor} listSkills={items.listSkills} personalDetails={items.personalDetails} />
         */}{" "}
        <RecCandidateDetailCard candidate={candidate} />
      </div>
      {/* <div className="pb-10">
        <CandidateList />
      </div> */}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import RecCandidateDetailCard from "../../components/RecCandidateManageCard/RecCandidateDetailCard";
import {
  MdOutlineEmail,
  MdOutlineCalendarMonth,
  MdOutlineLocationOn,
} from "react-icons/md";
import axiosInstance from "../../utils/AxiosInstance";
import { RecCandidateInterface } from "../../services/services";
import InterviewHistory from "../../components/RecCandidateManageCard/InterviewHistory";

export default function CandidateDetail() {
  const { userId } = useParams();
  const [candidate, setCandidate] = useState<RecCandidateInterface | null>(
    null,
  );

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const getCandidateDetail = async () => {
      setIsLoading(true);
      try {
        const response = await axiosInstance.get(
          `recruiter/applied-candidates/${userId}`,
        );
        setCandidate(response.data.result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getCandidateDetail();
  }, [userId]);

  return (
    <div>
      <div className="bg-white">
        {/* <!-- Card --> */}
        <RecCandidateDetailCard candidate={candidate} />
      </div>
      {/* <div className="pb-10">
        <CandidateList />
      </div> */}
    </div>
  );
}

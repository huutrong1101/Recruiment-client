import axiosInstance from "../utils/AxiosInstance";
import { ResumeResponse } from "./services";

export function getCandidateResume() {
  return axiosInstance.get(`/candidate/resumes`);
}

export async function sendApplyRequestToJob({
  jobId,
  resumeId,
}: {
  jobId: string;
  resumeId: string;
}) {
  if (!jobId || !resumeId) {
    throw new Error(`Parameter is not found`);
  }
  return axiosInstance.post(`/candidate/jobs/${jobId}`, { resumeId });
}

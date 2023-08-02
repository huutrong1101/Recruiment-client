import axiosInstance from "../utils/AxiosInstance";
import qs from "qs";

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

export async function getCandidateSubmittedJobs({ page, limit }: any) {
  const query = qs.stringify({ page, limit });

  return axiosInstance.get(`/candidate/jobs/applicants?${query}`);
}

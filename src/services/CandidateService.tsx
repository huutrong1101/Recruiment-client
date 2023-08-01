import axiosInstance from "../utils/AxiosInstance";

export function getCandidateResume() {
  return axiosInstance.get(`/candidate/resumes`);
}

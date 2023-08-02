import {
  CalendarDaysIcon,
  CheckIcon,
  PencilSquareIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../../../utils/AxiosInstance";
import { APPLY_STATUS } from "../../../utils/Localization";
import { toast } from "react-toastify";
import { StateService } from "../../../services/changeState";

interface UserProps {
  candidateId: string;
  jobId: string;
  state: string;
}

export default function Applied() {
  const { jobId } = useParams();
  const [applyCandidate, setApplyCandidate] = useState<any[]>([]);
  useEffect(() => {
    const getApplyCandidate = async () => {
      const response = await axiosInstance.get(
        `recruiter/job/${jobId}/candidates`,
      );
      setApplyCandidate(response.data.result.content); // API get
    };
    getApplyCandidate();
  }, [jobId]);

  const [candidate, setCandidate] = useState<UserProps>();

  let navigate = useNavigate();
  const routeChange = (userId: string) => {
    let path = `interview-schedule/${userId}`;
    navigate(path);
  };

  const [state, setState] = useState("");

  const handlePass = (candidateId: string) => {
    // const data = {
    //   candidateId: candidateId || "",
    //   jobId: candidate?.jobId || "",
    //   state: "passed",
    // };
    // console.log(candidateId);

    // toast
    //   .promise(StateService.changeState(data), {
    //     pending: `Changing`,
    //     success: `The state was changed to pass`,
    //   })
    //   .catch((error) => toast.error(error.response.data.result));
    console.log("pass");
  };

  const handleFail = () => {
    // const data = {
    //   candidateId: candidate?.candidateId || "",
    //   jobId: candidate?.jobId || "",
    //   state: "failed",
    // };
    // toast
    //   .promise(StateService.changeState(data), {
    //     pending: `Changing`,
    //     success: `The state was changed to fail`,
    //   })
    //   .catch((error) => toast.error(error.response.data.result));
  };

  // const hehe = applyCandidate.map(
  //   (applyCandidate, index) => applyCandidate.state,
  // );

  // applyCandidate.map((applyCandidate) =>
  //   const state = applyCandidate.state
  //   )

  return (
    <div
      className={classNames(
        `border bg-white shadow-sm rounded-xl`,
        `px-8 py-8`,
        `text-justify`,
      )}
    >
      <h1 className="text-2xl font-semibold">Applied Candidate</h1>
      <div className="relative overflow-x-auto p-4">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Email
              </th>
              <th scope="col" className="px-6 py-4">
                State
              </th>
              <th scope="col" className="px-0 py-4"></th>
              <th className="py-4"></th>
            </tr>
          </thead>
          <tbody>
            {applyCandidate?.map((applyCandidate, index) => (
              <tr className="bg-white border-b " key={index}>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {applyCandidate.candidateFullName}
                </td>
                <td className="px-6 py-4">{applyCandidate.candidateEmail}</td>
                <td className="px-4 py-4 rounded-lg p-2 mx-2 my-1">
                  <span
                    className={`rounded-lg p-2 mx-2 my-1  ${
                      applyCandidate.state === "PASSED"
                        ? "bg-green-400 text-green-800"
                        : applyCandidate.state === "FAIL"
                        ? "bg-red-300"
                        : applyCandidate.state === "NOT_RECEIVED"
                        ? "bg-yellow-100"
                        : "bg-green-200"
                    }`}
                  >
                    {APPLY_STATUS[applyCandidate.state]}
                  </span>
                </td>
                <td>
                  {applyCandidate.state !== "RECEIVED" ? (
                    <div>
                      <button>
                        <CheckIcon
                          className="w-6 h-6 text-green-800"
                          onClick={handlePass}
                        />
                      </button>
                      <button>
                        <XMarkIcon
                          className="w-6 h-6 text-red-800"
                          onClick={handleFail}
                        />
                      </button>
                    </div>
                  ) : null}
                </td>
                <td>
                  <button>
                    <CalendarDaysIcon
                      className="w-6 h-6"
                      onClick={() => routeChange(applyCandidate.candidateId)}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

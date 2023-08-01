import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "../../components/Modal/Modal";
import InputIcon from "../../components/InputIcon/InputIcon";
import { HiEnvelope, HiMapPin, HiPhone, HiUserCircle } from "react-icons/hi2";
import classNames from "classnames";
import {
  getCandidateResume,
  sendApplyRequestToJob,
} from "../../services/CandidateService";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";
import { ResumeResponse } from "../../services/services";
import {
  AiFillCheckCircle,
  AiFillEye,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { useAppSelector } from "../../hooks/hooks";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";

export interface JobInformationApplyModal {
  visible: boolean;
  onClose: () => void;
  onApplySucceeded: () => void;
}

export default function JobInformationApplyModal({
  visible,
  onClose,
  onApplySucceeded,
}: JobInformationApplyModal) {
  const [loadingState, setLoadingState] = useState(false);
  const [resumeList, setResumeList] = useState<ResumeResponse[]>([
    {
      resumeId: "256aa9ce-1b0d-458f-af06-f4ab64c4fd56",
      education: null,
      experience: null,
      certificate: null,
      prize: null,
      course: null,
      project: null,
      socialActivity: null,
      upload: true,
      resumeUpload:
        "https://res.cloudinary.com/dc6weg8vp/image/upload/v1690873255/Recruiment%20Assets/CV/internship_resume.pdf.pdf",
      createAt: null,
      updateAt: "2023-08-01T14:00:57.847+07:00",
      name: "internship_resume.pdf",
    },
    {
      resumeId: "bcd81a9e-de5c-4b99-b5f2-dea60cd4c2c1",
      education: null,
      experience: null,
      certificate: null,
      prize: null,
      course: null,
      project: null,
      socialActivity: null,
      upload: true,
      resumeUpload:
        "https://res.cloudinary.com/dc6weg8vp/image/upload/v1690873035/Recruiment%20Assets/CV/CV_NguyenHuynhNguyen-1.pdf.pdf",
      createAt: null,
      updateAt: "2023-08-01T14:10:34.970+07:00",
      name: "CV_NguyenHuynhNguyen-1.pdf",
    },
    {
      resumeId: "dfefd8a4-b45f-4eda-9b8a-035ed0dde7f4",
      education: null,
      experience: null,
      certificate: null,
      prize: null,
      course: null,
      project: null,
      socialActivity: null,
      upload: true,
      resumeUpload:
        "https://res.cloudinary.com/dc6weg8vp/image/upload/v1690873035/Recruiment%20Assets/CV/CV_NguyenHuynhNguyen-1.pdf.pdf",
      createAt: "2023-08-01T16:08:15.402+07:00",
      updateAt: "2023-08-01T16:08:15.402+07:00",
      name: "CV_NguyenHuynhNguyen-1.pdf",
    },
    {
      resumeId: "e331454d-c51d-4617-a79a-052decca72f4",
      education: null,
      experience: null,
      certificate: null,
      prize: null,
      course: null,
      project: null,
      socialActivity: null,
      upload: true,
      resumeUpload:
        "https://res.cloudinary.com/dc6weg8vp/image/upload/v1690873255/Recruiment%20Assets/CV/internship_resume.pdf.pdf",
      createAt: null,
      updateAt: "2023-08-01T14:12:33.316+07:00",
      name: "internship_resume.pdf",
    },
    {
      resumeId: "fbb5ba10-338f-4bd5-a477-b81088f9a0cc",
      education: null,
      experience: null,
      certificate: null,
      prize: null,
      course: null,
      project: null,
      socialActivity: null,
      upload: true,
      resumeUpload:
        "https://res.cloudinary.com/dc6weg8vp/image/upload/v1690873035/Recruiment%20Assets/CV/CV_NguyenHuynhNguyen-1.pdf.pdf",
      createAt: "2023-08-01T16:21:39.385+07:00",
      updateAt: "2023-08-01T16:21:39.385+07:00",
      name: "CV_NguyenHuynhNguyen-1.pdf",
    },
  ]);
  const { jobId } = useParams();
  const [resumeSelectedIndex, setResumeSelectedIndex] = useState(0);
  const user = useAppSelector((app) => app.Auth.user);

  // TODO: enable this
  // useEffect(() => {
  //   setLoadingState(true);
  //   getCandidateResume()
  //     .then((response) => {
  //       const { result } = response.data;
  //       setResumeList(result);
  //     })
  //     .finally(() => setLoadingState(false));
  // }, []);

  const handleApply = () => {
    const { resumeId } = resumeList[resumeSelectedIndex];
    if (!jobId) {
      return toast.error(`Job id cannot be undefined or null`);
    }
    sendApplyRequestToJob({ jobId, resumeId })
      .then(() => {
        onApplySucceeded();
      })
      .catch(() => {
        toast.error(`Cannot apply to the job`);
      })
      .finally();
  };

  const handleSelectResume = (_index: number) => {
    setResumeSelectedIndex(_index);
  };

  return (
    <Modal
      isOpen={visible}
      onClose={onClose}
      title="Apply for Web Designer"
      titleClass="text-lg font-semibold leading-6text-gray-900"
      cancelTitle="Cancel"
      successClass="text-red-900 bg-red-100 hover:bg-red-200 focus-visible:ring-red-500"
      successTitle="Apply"
      size="min-w-[60vw]"
      handleSucces={handleApply}
    >
      <div className={classNames(`flex flex-row gap-6`)}>
        {/* Information */}
        <div className={`w-1/2 px-6`}>
          <h1 className={`text-gray-400`}>General Information</h1>
          {/* <div className={classNames(`flex flex-col gap-4`)}>
            {[...new Array(5)].map((_, _index) => (
              // <InputIcon text={`no text`} register={}/>
              <input
                placeholder="Hi"
                className={classNames(`w-full px-4 py-1 rounded-xl border`)}
              />
            ))}
          </div> */}
          <div className={classNames(`flex flex-col`)}>
            <h3 className={classNames(`text-2xl my-2 font-semibold`)}>
              {user?.fullName}
            </h3>
            <span>{user?.phone || "No phone number"}</span>
            <span>{user?.email || "No email"}</span>
            <span>{user?.address || "No address"}</span>
            <span className={classNames(`text-zinc-500`)}>
              {user?.about || ""}
            </span>
          </div>
          <div className="mt-6">
            <Link
              to={`/profile`}
              className={classNames(`text-blue-600 hover:text-blue-500`)}
            >
              Edit my profile
            </Link>
          </div>
        </div>

        <div className={`w-1/2`}>
          {loadingState ? (
            <LoadSpinner />
          ) : (
            <>
              <h1 className={classNames(`font-light text-gray-400`)}>
                Select your resume
              </h1>

              <div
                className={classNames(
                  `flex flex-col gap-2 max-h-[30vh] overflow-y-auto`,
                )}
              >
                {resumeList.map((resumeItem, _index) => (
                  <button
                    className={classNames(
                      `px-4 py-2 border rounded-xl hover:border-emerald-600 hover:text-emerald-600`,
                      `flex flex-row gap-4 items-center text-gray-500`,
                      `cursor-pointer`,
                      {
                        "text-gray-100 bg-emerald-600 hover:text-gray-50":
                          _index === resumeSelectedIndex,
                      },
                    )}
                    onClick={() => handleSelectResume(_index)}
                  >
                    {/* <AiOutlineCheckCircle /> */}
                    <span className={classNames(`flex-1 text-left`)}>
                      {resumeItem.name}
                    </span>
                    <Link
                      to={resumeItem.resumeUpload}
                      target="_blank"
                      className={classNames(
                        `hover:bg-emerald-500 p-2 rounded-full`,
                        `hover:text-emerald-100`,
                      )}
                    >
                      <AiFillEye />
                    </Link>
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}

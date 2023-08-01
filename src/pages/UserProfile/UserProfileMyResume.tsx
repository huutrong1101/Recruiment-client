import classNames from "classnames";
import React, { ChangeEvent, useEffect, useState } from "react";
import Modal from "../../components/Modal/Modal";
import UserResume from "../../components/UserResume/UserResume";
import { Link, useNavigate } from "react-router-dom";
import { HiArrowUpTray, HiPlus } from "react-icons/hi2";
import axiosInstance from "../../utils/AxiosInstance";
import moment from "moment";
import { toast } from "react-toastify";
import { UserService } from "../../services/UserService";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";

function ResumeDeleteModal({ visible, onAccept, onCancel }: any) {
  return (
    <Modal
      isOpen={visible}
      onClose={onCancel}
      title=" Do you want to delete this resume ?"
      cancelTitle="No"
      successClass="text-red-900 bg-red-100 hover:bg-red-200 focus-visible:ring-red-500"
      successTitle="Yes"
      handleSucces={onAccept}
      titleClass=""
      size=""
    >
      <p className="text-sm text-gray-500">
        If you agree, the resume will be removed from your resume list
      </p>
    </Modal>
  );
}

export default function UserProfileMyResume() {
  let [visibleDeleteModal, setVisibleDeleteModal] = useState(false);

  let [isUpload, setIsUpload] = useState(false);

  const [priorityCV, setPriorityCV] = useState("");

  const handleSetPriorityCV = (id: any) => {
    setPriorityCV(id);
  };

  const [resumeList, setResumeList] = useState<object[]>([]);

  const [resumeDeleteID, setResumeDeleteID] = useState<string | null>(null);

  const [isLoadingUpload, setIsLoadingUpload] = useState(false);

  useEffect(() => {
    const fetchCVUpload = async () => {
      setIsLoadingUpload(true);
      try {
        const response = await axiosInstance("candidate/resumes");
        setResumeList(response.data.result);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoadingUpload(false);
      }
    };
    fetchCVUpload();
  }, []);

  const handleDelete = (resumeId: string) => {
    setResumeDeleteID(resumeId);
    openModal();
  };

  const handleDeleteSuccess = () => {
    toast
      .promise(UserService.deleteResume(resumeDeleteID), {
        pending: `Deleting your resume`,
        success: `Your resume was deleted`,
        error: `Failed to delete your resume`,
      })
      .then(() => {
        // Clean up
        setResumeList(
          [...resumeList].filter(
            (resume) => (resume as any).resumeId !== resumeDeleteID,
          ),
        );
        setResumeDeleteID(null);
        closeModal();
      });
  };

  const handleEdit = (url: string) => {
    window.open(url, "_blank");
  };

  const handleFileUpload = (e: ChangeEvent<HTMLInputElement>) => {
    const fileList = e.target.files;
    if (!fileList) {
      return toast.error(`File is empty or not found`);
    }

    if (fileList.length === 0) {
      return toast.error(`File is empty`);
    }

    const formData = new FormData();
    formData.append("imageFile", fileList[0]);

    toast
      .promise(UserService.uploadResume(formData), {
        pending: `Uploading your resume`,
        success: `Your resume was uploaded`,
        error: `Failed to upload your resume`,
      })
      .then((response) => {
        setResumeList([...resumeList, response.data.result]);
      });

    closeModalUpload();
  };

  function closeModal() {
    setVisibleDeleteModal(false);
  }

  function openModal() {
    setVisibleDeleteModal(true);
  }

  function closeModalUpload() {
    setIsUpload(false);
  }

  function openModalUpload() {
    setIsUpload(true);
  }

  return (
    <div className={classNames(`flex-1 flex flex-col gap-4`)}>
      {/* Resume */}
      <div className="p-4 border rounded-xl border-zinc-100">
        <div className="flex items-center justify-between mb-5 border-b-zinc-500">
          <h1 className={classNames(`text-2xl font-semibold flex-1 md:mb-4`)}>
            My Resume
          </h1>
          <div className="flex flex-row-reverse gap-2">
            <label
              className={classNames(
                `Button bg-emerald-600 hover:bg-emerald-800 text-white`,
                `transition-colors ease-in-out duration-100`,
                `rounded-lg flex-col justify-center items-center inline-flex`,
                "text-base px-4 py-2 w-full md:!w-5/12",
              )}
              onClick={openModalUpload}
            >
              <HiArrowUpTray size={20} />
            </label>
          </div>
        </div>

        <div
          className={classNames(
            `flex flex-col gap-4 w-full border-t border-gray-200 pt-5`,
          )}
        >
          <div className={classNames(`flex flex-wrap -mx-4`)}>
            {isLoadingUpload ? (
              <div className="flex items-center justify-center w-full my-4">
                <LoadSpinner className="text-3xl text-emerald-500" />
              </div>
            ) : (
              <>
                {resumeList.length > 0 ? (
                  <>
                    {resumeList.map((resume: any) => {
                      const date = moment(resume.createdDate).format(
                        "Do MMM, YYYY",
                      );
                      console.log(resume);
                      return (
                        <UserResume
                          key={resume.resumeId}
                          id={resume.resumeId}
                          priorityCV={priorityCV}
                          name={resume.name}
                          date={date}
                          onDelete={() => {
                            handleDelete(resume.resumeId);
                          }}
                          onEdit={() => {
                            handleEdit(resume.resumeUpload);
                          }}
                          onClick={() => handleSetPriorityCV(resume.resumeId)}
                        />
                      );
                    })}
                  </>
                ) : (
                  <div className="flex items-center justify-center w-full">
                    You don't have a resume
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>

      <Modal
        isOpen={isUpload}
        onClose={closeModalUpload}
        title=""
        cancelTitle="Cancel"
        successClass="text-green-900 bg-green-100 hover:bg-green-200 focus-visible:ring-green-500"
        successTitle="OK"
        handleSucces={closeModalUpload}
        titleClass="text-center"
        size=""
      >
        <div className="flex items-center justify-center gap-3">
          <Link
            to={"/jobs"}
            className={classNames(
              `Button bg-emerald-600 hover:bg-emerald-800 text-white`,
              `transition-colors ease-in-out duration-100`,
              `rounded-lg flex-col justify-center items-center inline-flex`,
              "text-base px-4 py-2 w-full md:!w-5/12",
            )}
          >
            <HiPlus size={25} />
            <span>Create your resume</span>
          </Link>
          <label
            htmlFor="file-input"
            className={classNames(
              `Button bg-emerald-600 hover:bg-emerald-800 text-white`,
              `transition-colors ease-in-out duration-100`,
              `rounded-lg flex-col justify-center items-center inline-flex`,
              "text-base px-4 py-2 w-full md:!w-5/12",
            )}
          >
            <HiArrowUpTray size={25} />

            <span> Upload your resume</span>
          </label>

          <input
            type="file"
            id="file-input"
            className="hidden"
            accept="application/pdf"
            onChange={handleFileUpload}
          />
        </div>
      </Modal>

      <ResumeDeleteModal
        visible={visibleDeleteModal}
        onAccept={handleDeleteSuccess}
        onCancel={closeModal}
      />
    </div>
  );
}

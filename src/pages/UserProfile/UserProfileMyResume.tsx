import classNames from "classnames";
import React, { useState } from "react";
import Modal from "../../components/Modal/Modal";
import UserResume from "../../components/UserResume/UserResume";
import { Link } from "react-router-dom";
import { HiArrowUpTray, HiPlus } from "react-icons/hi2";

export default function UserProfileMyResume() {
  let [isOpen, setIsOpen] = useState(false);

  let [isUpload, setIsUpload] = useState(false);

  const listCV = [
    {
      id: "1",
      name: "Resume create #1",
      date: "26th Jul, 2023",
      type: "create",
    },
    {
      id: "2",
      name: "Resume create #2",
      date: "26th Jul, 2023",
      type: "create",
    },
    {
      id: "3",
      name: "Resume create #3",
      date: "26th Jul, 2023",
      type: "create",
    },
    {
      id: "4",
      name: "Resume upload #1",
      date: "26th Jul, 2023",
      type: "upload",
    },
    {
      id: "5",
      name: "Resume upload #2",
      date: "26th Jul, 2023",
      type: "upload",
    },
    {
      id: "6",
      name: "Resume upload #3",
      date: "26th Jul, 2023",
      type: "upload",
    },
  ];

  const [priorityCV, setPriorityCV] = useState("");

  const handleSetPriorityCV = (id: any) => {
    setPriorityCV(id);
  };

  const [file, setFile] = useState<File | null>(null);

  const handleDelete = () => {
    alert("Delete success");
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile: File | undefined = event.target.files?.[0];
    setFile(newFile || null);
    alert(newFile?.name);
    closeModalUpload();
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function closeModalUpload() {
    setIsUpload(false);
  }

  function openModalUpload() {
    setIsUpload(true);
  }

  console.log(priorityCV);

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
            `flex flex-col gap-4 w-full border-t border-gray-200 pt-2`,
          )}
        >
          <h3 className="text-lg">Resume Created</h3>
          <div className={classNames(`flex flex-wrap -mx-4`)}>
            {listCV
              .filter((item) => item.type === "create")
              .map((resume) => (
                <UserResume
                  key={resume.id}
                  priorityCV={priorityCV}
                  id={resume.id}
                  name={resume.name}
                  date={resume.date}
                  onDelete={() => {
                    openModal();
                  }}
                  onEdit={() => {
                    alert(`Xem chi tiết ${resume.name}`);
                  }}
                  onClick={() => handleSetPriorityCV(resume.id)}
                />
              ))}
          </div>
        </div>
        <div
          className={classNames(
            `flex flex-col gap-4 w-full border-t border-gray-200 pt-2`,
          )}
        >
          <h3 className="text-lg">Resume Uploaded</h3>
          <div className={classNames(`flex flex-wrap -mx-4`)}>
            {listCV
              .filter((item) => item.type === "upload")
              .map((resume) => (
                <UserResume
                  key={resume.id}
                  priorityCV={priorityCV}
                  id={resume.id}
                  name={resume.name}
                  date={resume.date}
                  onDelete={() => {
                    openModal();
                  }}
                  onEdit={() => {
                    alert(`Xem chi tiết ${resume.name}`);
                  }}
                  onClick={() => handleSetPriorityCV(resume.id)}
                />
              ))}
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
            <span>Create your CV</span>
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

            <span> Upload your CV</span>
          </label>

          <input
            type="file"
            id="file-input"
            className="hidden"
            onChange={handleFileUpload}
          />
        </div>
      </Modal>

      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title=" Do you want to delete this resume ?"
        cancelTitle="No"
        successClass="text-red-900 bg-red-100 hover:bg-red-200 focus-visible:ring-red-500"
        successTitle="Yes"
        handleSucces={handleDelete}
        titleClass=""
        size=""
      >
        <p className="text-sm text-gray-500">
          If you agree, the resume will be removed from your resume list
        </p>
      </Modal>
    </div>
  );
}

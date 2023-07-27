import React, { useEffect, useState } from "react";
import classNames from "classnames";
import Avatar from "./../../../images/ava.jpg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import InputIcon from "../../components/InputIcon/InputIcon";
import {
  HiUserCircle,
  HiEnvelope,
  HiMapPin,
  HiPhone,
  HiKey,
} from "react-icons/hi2";
import UserResume from "../../components/UserResume/UserResume";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Modal from "../../components/Modal/Modal";

function UserProfileInformation() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onDataChangeSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="p-4 border rounded-xl border-zinc-100">
      <h1 className={classNames(`text-2xl font-semibold flex-1 md:mb-4`)}>
        Information
      </h1>
      <div className={classNames(`flex flex-col md:flex-row gap-6`)}>
        {/* Avatar edit block */}
        <div
          className={classNames(
            `flex-row w-full md:w-3/12 flex md:flex-col gap-4 px-4 items-center`,
          )}
        >
          <div className={classNames(`w-3/12 md:w-auto`)}>
            <img
              src={Avatar}
              alt={"Hi"}
              className={classNames(`rounded-full`)}
            />
          </div>
          <div>
            {/* <InputIcon icon={<HiUserCircle />} type="file" /> */}
            <PrimaryButton text={`Change`} />
          </div>
        </div>

        {/* General information fields */}
        <form
          className={classNames(`flex-1 flex flex-col gap-2`)}
          onSubmit={handleSubmit(onDataChangeSubmit)}
        >
          <div>
            <InputIcon
              type="text"
              icon={<HiUserCircle />}
              placeholder={`Full Name`}
              register={register}
              label={`fullName`}
            />

            {errors.fullName && (
              <small className={`text-xs text-red-600`}>
                Full name is required
              </small>
            )}
          </div>

          <InputIcon
            icon={<HiEnvelope />}
            type="text"
            placeholder={`Email`}
            register={register}
            label={`email`}
          />

          <InputIcon
            icon={<HiPhone />}
            type="text"
            placeholder={`Phone`}
            register={register}
            label={`phone`}
          />

          <InputIcon
            icon={<HiMapPin />}
            type="text"
            placeholder={`Location`}
            register={register}
            label={`location`}
          />

          {/* Submit button */}
          <div className="flex flex-row-reverse">
            <PrimaryButton
              type="submit"
              text={`Save`}
              size={"sm"}
              className={`md:!w-3/12`}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

function UserProfilePassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onDataChangeSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <div className="p-4 border rounded-xl border-zinc-100">
      <h1 className={classNames(`text-2xl font-semibold flex-1 md:mb-4`)}>
        Password
      </h1>
      <div className={classNames(`flex flex-col md:flex-row gap-6`)}>
        {/* Avatar edit block */}
        <div
          className={classNames(`w-full md:w-3/12 flex flex-col gap-4 px-4`)}
        ></div>

        {/* General information fields */}
        <form
          onSubmit={handleSubmit(onDataChangeSubmit)}
          className={classNames(`flex-1 flex flex-col gap-2`)}
        >
          <InputIcon
            icon={<HiKey />}
            placeholder={`Current password`}
            type="password"
            register={register}
            label={`current-password`}
          />
          <InputIcon
            icon={<HiKey />}
            placeholder={`New password`}
            type={`password`}
            register={register}
            label={`new-password`}
          />
          <InputIcon
            icon={<HiKey />}
            placeholder={`Confirm new password`}
            type={`password`}
            register={register}
            label={`confirm-password`}
          />

          {/* Submit button */}
          <div className="flex flex-row-reverse">
            <PrimaryButton
              text={`Change password`}
              size={"sm"}
              className={`md:!w-5/12`}
            />
          </div>
        </form>
      </div>
    </div>
  );
}

export default function UserProfileMyProfile() {
  let [isOpen, setIsOpen] = useState(false);

  const [file, setFile] = useState<File | null>(null);

  const handleDelete = () => {
    alert("Delete success");
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile: File | undefined = event.target.files?.[0];
    setFile(newFile || null);
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
    console.log("Check");
  }

  return (
    <div className={classNames(`flex-1 flex flex-col gap-4`)}>
      {/* Information */}
      <UserProfileInformation />

      {/* Password */}
      <UserProfilePassword />

      {/* Resume */}
      <div className="p-4 border rounded-xl border-zinc-100">
        <h1 className={classNames(`text-2xl font-semibold flex-1 md:mb-4`)}>
          Resume
        </h1>
        <div className={classNames(`flex flex-col md:flex-row gap-6`)}>
          {/* Avatar edit block */}
          <div
            className={classNames(`w-full md:w-3/12 flex flex-col gap-4 px-4`)}
          ></div>

          {/* General information fields */}
          <div className={classNames(`flex-1 flex flex-col gap-2`)}>
            <UserResume
              name={`Resume #1`}
              onDelete={() => {
                openModal();
              }}
              onEdit={() => {}}
              onClick={() => {
                alert(`hi`);
              }}
            />
            <UserResume
              name={`Resume #2`}
              onDelete={() => {
                openModal();
              }}
              onEdit={() => {}}
              onClick={() => {
                alert(`hi`);
              }}
            />

            <UserResume
              name={`Resume #3`}
              onDelete={() => {
                openModal();
              }}
              onEdit={() => {}}
              onClick={() => {
                alert(`hi`);
              }}
            />

            {/* Submit button */}
            <div className="flex flex-row-reverse gap-2">
              <label
                htmlFor="file-input"
                className={classNames(
                  `Button bg-emerald-600 hover:bg-emerald-800 text-white`,
                  `transition-colors ease-in-out duration-100`,
                  `rounded-lg flex-col justify-center items-center inline-flex`,
                  "text-base px-4 py-2 w-full md:!w-5/12",
                )}
              >
                Upload resume
              </label>
              <input
                type="file"
                id="file-input"
                className="hidden"
                onChange={handleFileUpload}
              />
              <Link
                to="/create-cv"
                className={classNames(
                  `Button bg-emerald-600 hover:bg-emerald-800 text-white`,
                  `transition-colors ease-in-out duration-100`,
                  `rounded-lg flex-col justify-center items-center inline-flex`,
                  "text-base px-4 py-2 w-full md:!w-5/12",
                )}
              >
                Create resume
              </Link>
            </div>
          </div>
        </div>
      </div>

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

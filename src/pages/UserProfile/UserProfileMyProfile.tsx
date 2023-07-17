import React, { useEffect } from "react";
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
    <div className="border p-4 rounded-xl border-zinc-100">
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
              icon={<HiUserCircle />}
              placeholder={`Full Name`}
              {...register("fullName", {
                required: true,
              })}
              name={`fullName`}
            />

            {errors.fullName && (
              <small className={`text-xs text-red-600`}>
                Full name is required
              </small>
            )}
          </div>

          <InputIcon
            icon={<HiEnvelope />}
            placeholder={`Email`}
            {...register("email")}
            name={`email`}
          />
          <InputIcon
            icon={<HiMapPin />}
            placeholder={`Location`}
            {...register(`location`)}
            name={`location`}
          />
          <InputIcon
            icon={<HiPhone />}
            placeholder={`Phone`}
            {...register("phone")}
            name={`phone`}
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
  return (
    <div className="border p-4 rounded-xl border-zinc-100">
      <h1 className={classNames(`text-2xl font-semibold flex-1 md:mb-4`)}>
        Password
      </h1>
      <div className={classNames(`flex flex-col md:flex-row gap-6`)}>
        {/* Avatar edit block */}
        <div
          className={classNames(`w-full md:w-3/12 flex flex-col gap-4 px-4`)}
        ></div>

        {/* General information fields */}
        <div className={classNames(`flex-1 flex flex-col gap-2`)}>
          <InputIcon
            icon={<HiKey />}
            placeholder={`Current password`}
            type="password"
          />
          <InputIcon
            icon={<HiKey />}
            placeholder={`New password`}
            type={`password`}
          />
          <InputIcon
            icon={<HiKey />}
            placeholder={`Confirm new password`}
            type={`password`}
          />

          {/* Submit button */}
          <div className="flex flex-row-reverse">
            <PrimaryButton
              text={`Change password`}
              size={"sm"}
              className={`md:!w-5/12`}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UserProfileMyProfile() {
  return (
    <div className={classNames(`flex-1 flex flex-col gap-4`)}>
      {/* Information */}
      <UserProfileInformation />

      {/* Password */}
      <UserProfilePassword />

      {/* Resume */}
      <div className="border p-4 rounded-xl border-zinc-100">
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
              onDelete={() => {}}
              onEdit={() => {}}
              onClick={() => {
                alert(`hi`);
              }}
            />
            <UserResume
              name={`Resume #2`}
              onDelete={() => {}}
              onEdit={() => {}}
              onClick={() => {
                alert(`hi`);
              }}
            />

            <UserResume
              name={`Resume #3`}
              onDelete={() => {}}
              onEdit={() => {}}
              onClick={() => {
                alert(`hi`);
              }}
            />

            {/* Submit button */}
            <div className="flex flex-row-reverse">
              <PrimaryButton
                text={`Add resume`}
                size={"sm"}
                className={`md:!w-5/12`}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

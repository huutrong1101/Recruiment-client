import React, { Fragment, useEffect, useState } from "react";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import {
  EnvelopeIcon,
  LockClosedIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import InputIcon from "../../components/InputIcon/InputIcon";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { authRegister } from "../../redux/AuthSlice";
import { toast } from "react-toastify";
import { Dialog, Transition } from "@headlessui/react";
import classNames from "classnames";

function TermAndConditionsDialog({ visible, onClose, onOkay }: any) {
  return (
    <Transition appear show={visible} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Term of services
                </Dialog.Title>

                <div className="max-h-[70vh] mt-2 overflow-y-auto">
                  <p className="text-sm text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum, omnis quas? Cumque deserunt, repudiandae
                    repellendus reprehenderit quisquam dolorem excepturi
                    voluptas consequatur impedit labore eaque necessitatibus
                    facere ratione quo architecto molestiae.
                  </p>
                  <br />
                  <p className="text-sm text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum, omnis quas? Cumque deserunt, repudiandae
                    repellendus reprehenderit quisquam dolorem excepturi
                    voluptas consequatur impedit labore eaque necessitatibus
                    facere ratione quo architecto molestiae.
                  </p>
                  <br />
                  <p className="text-sm text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum, omnis quas? Cumque deserunt, repudiandae
                    repellendus reprehenderit quisquam dolorem excepturi
                    voluptas consequatur impedit labore eaque necessitatibus
                    facere ratione quo architecto molestiae.
                  </p>

                  <br />
                  <p className="text-sm text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum, omnis quas? Cumque deserunt, repudiandae
                    repellendus reprehenderit quisquam dolorem excepturi
                    voluptas consequatur impedit labore eaque necessitatibus
                    facere ratione quo architecto molestiae.
                  </p>

                  <br />
                  <p className="text-sm text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum, omnis quas? Cumque deserunt, repudiandae
                    repellendus reprehenderit quisquam dolorem excepturi
                    voluptas consequatur impedit labore eaque necessitatibus
                    facere ratione quo architecto molestiae.
                  </p>

                  <br />
                  <p className="text-sm text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum, omnis quas? Cumque deserunt, repudiandae
                    repellendus reprehenderit quisquam dolorem excepturi
                    voluptas consequatur impedit labore eaque necessitatibus
                    facere ratione quo architecto molestiae.
                  </p>

                  <br />
                  <p className="text-sm text-gray-500">
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    Laborum, omnis quas? Cumque deserunt, repudiandae
                    repellendus reprehenderit quisquam dolorem excepturi
                    voluptas consequatur impedit labore eaque necessitatibus
                    facere ratione quo architecto molestiae.
                  </p>
                </div>

                <div className="mt-4 flex flex-row-reverse">
                  <button
                    type="button"
                    className="inline-flex justify-center rounded-md border border-transparent bg-emerald-600 px-4 py-2 text-sm font-medium text-emerald-300 hover:bg-emerald-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                    onClick={onOkay}
                  >
                    Ok
                  </button>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
}

export default function AuthenticateSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    // reset,
  } = useForm();
  const dispatch = useAppDispatch();
  const { registerLoadingState } = useAppSelector((app) => app.Auth);

  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    dispatch(authRegister(data))
      .unwrap()
      .then(() => {
        // toast.success(`Successfully register the`)
        navigate("/email/incomplete");
      })
      .catch((data) => {
        toast.error(data.message);
      });
  };

  const [visibleTermAndCondition, setVisibleTermAndCondition] =
    useState<boolean>(false);

  const handleCloseDialog = () => {
    setVisibleTermAndCondition(false);
  };

  const handleOpenTermOfServceDialog = () => {
    setVisibleTermAndCondition(true);
  };

  return (
    <form
      className={classnames(
        `py-8 gap-4 items-center justify-center flex flex-col h-[600px]`,
        `bg-zinc-100 shadow-md`,
        `rounded-xl px-4 md:px-5 lg:px-6`,
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mx-6 items-center flex flex-col gap-4 w-full">
        <h1 className="text-xl font-semibold">Sign up</h1>

        <InputIcon
          icon={<UserIcon />}
          placeholder="full name"
          register={register}
          label="fullName"
          required
          wrapperClassName={classnames({
            "border-red-300": errors && errors.fullName,
          })}
        />

        <InputIcon
          icon={<EnvelopeIcon />}
          placeholder="email address"
          register={register}
          label="email"
          type="email"
          autoComplete="username email"
          required
          wrapperClassName={classnames({
            "border-red-300": errors && errors.email,
          })}
        />

        <InputIcon
          icon={<LockClosedIcon />}
          placeholder="password"
          type={`password`}
          register={register}
          label="password"
          autoComplete="new-password"
          required
          wrapperClassName={classnames({
            "border-red-300": errors && errors.password,
          })}
        />

        <InputIcon
          icon={<LockClosedIcon />}
          placeholder="confirmPassword"
          type={`password`}
          register={register}
          label="confirmPassword"
          autoComplete="new-password"
          required
          wrapperClassName={classnames({
            "border-red-300": errors && errors.confirmPassword,
          })}
        />

        <InputIcon
          icon={<PhoneIcon />}
          register={register}
          label="phone"
          required
          placeholder="phone number"
          wrapperClassName={classnames({
            "border-red-300": errors && errors.phone,
          })}
        />

        {/* AgreeTerms */}
        <div className="flex flex-row gap-4 w-full text-zinc-600">
          <label>
            <input
              type="checkbox"
              {...register("agreeTerms")}
              required
              className="mr-3"
            />
            I'm agree with the{" "}
            <b
              className={`cursor-pointer hover:underline`}
              onClick={handleOpenTermOfServceDialog}
            >
              Term and conditions
            </b>
          </label>
        </div>

        <PrimaryButton
          type={"submit"}
          text="Sign up"
          disabled={registerLoadingState === "pending"}
          isLoading={registerLoadingState === "pending"}
          // className={classnames({
          //   "bg-zinc-500 hover:bg-zinc-500": loading === "pending",
          // })}
        />
      </div>
      <TermAndConditionsDialog
        visible={visibleTermAndCondition}
        onClose={handleCloseDialog}
        onOkay={handleCloseDialog}
      />
    </form>
  );
}

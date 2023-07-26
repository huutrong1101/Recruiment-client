import React, { useEffect } from "react";
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
          <input type="checkbox" {...register("agreeTerms")} required />
          <label htmlFor="remember">
            I'm agree with the{" "}
            <b>
              <Link to="/">Term and conditions</Link>
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
    </form>
  );
}

import React from "react";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import {
  EnvelopeIcon,
  LockClosedIcon,
  PhoneIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import InputIcon from "../../components/InputIcon/InputIcon";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { useAppDispatch } from "../../hooks/hooks";
import { authRegister } from "../../redux/AuthSlice";

export default function AuthenticateSignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useAppDispatch();

  const onSubmit = (data: any) => {
    alert(JSON.stringify(data));
    // dispatch(authRegister(data));
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
          icon={<EnvelopeIcon />}
          placeholder="full name"
          register={register}
          label="fullName"
        />

        <InputIcon
          icon={<LockClosedIcon />}
          placeholder="email address"
          register={register}
          label="email"
          type="email"
          autoComplete="username email"
        />

        <InputIcon
          icon={<LockClosedIcon />}
          placeholder="password"
          type={`password`}
          register={register}
          label="password"
          autoComplete="new-password"
        />

        <InputIcon
          icon={<LockClosedIcon />}
          placeholder="confirmPassword"
          type={`password`}
          register={register}
          label="confirmPassword"
          autoComplete="new-password"
        />

        <InputIcon
          icon={<PhoneIcon />}
          register={register}
          label="phone"
          required
          placeholder="phone number"
        />
        {errors && errors.phone && <div>??</div>}

        {/* Remember Me */}
        <div className="flex flex-row gap-4 w-full text-zinc-600">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">
            I'm agree with the{" "}
            <b>
              <Link to="/">Term and conditions</Link>
            </b>
          </label>
        </div>

        <PrimaryButton type={"submit"} text="Sign up" />
      </div>
    </form>
  );
}

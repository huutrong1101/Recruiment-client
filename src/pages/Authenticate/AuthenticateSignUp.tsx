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

export default function AuthenticateSignUp() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

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

        {/* Input group with icons */}
        {/* <div
          className={classnames(
            `flex flex-row items-center gap-2 py-2`,
            `bg-white text-zinc-500`,
            `rounded-md`,
            `border`
          )}
        >
          <EnvelopeIcon className={classnames(`w-[16px] ml-4`)} />
          <input
            type="text"
            placeholder="email address"
            {...register("credentialId")}
            className={classnames(
              `px-2 py-1`,
              `font-light`,
              `mr-4`,
              `outline-none`
            )}
          />
        </div> */}

        <InputIcon
          icon={<EnvelopeIcon />}
          {...register("fullName")}
          placeholder="full name"
        />

        <InputIcon
          icon={<LockClosedIcon />}
          {...register("email")}
          placeholder="email address"
        />

        <InputIcon
          icon={<LockClosedIcon />}
          {...register("password")}
          placeholder="password"
        />

        <InputIcon
          icon={<LockClosedIcon />}
          {...register("confirmPassword")}
          placeholder="confirmPassword"
        />

        <InputIcon
          icon={<PhoneIcon />}
          {...register("phoneNumber")}
          placeholder="phone number"
          type=""
        />

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

        <button
          className={classnames(
            `Button w-[240px] h-12 bg-emerald-600 `,
            `rounded-lg flex-col justify-center items-center inline-flex`,
          )}
        >
          <div className="Basebutton px-5 py-2.5 justify-center items-center inline-flex">
            <div className="Content justify-center items-center gap-2 flex">
              <div className="Button text-white font-semibold capitalize leading-7 tracking-wide">
                Sign up
              </div>
            </div>
          </div>
        </button>
      </div>
    </form>
  );
}

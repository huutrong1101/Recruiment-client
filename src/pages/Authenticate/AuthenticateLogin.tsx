import React from "react";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import InputIcon from "../../components/InputIcon/InputIcon";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

export default function AuthenticateLogin() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form
      className={classnames(
        `py-8 gap-4 items-center justify-center flex flex-col`,
        `bg-zinc-100 shadow-md`,
        `rounded-xl px-4 md:px-5 lg:px-6`,
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mx-6 items-center flex flex-col gap-4  w-full">
        <h1 className="text-xl font-semibold">Login</h1>

        <InputIcon
          icon={<EnvelopeIcon />}
          type="text"
          placeholder="email address or phone number"
          name={"credentialId"}
        />

        <InputIcon
          icon={<LockClosedIcon />}
          placeholder="password"
          type="password"
          name={"password"}
        />

        {/* Remember Me */}
        <div className="flex flex-row w-full gap-4 px-1 text-zinc-600">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        {/* Forgot password */}
        <PrimaryButton text={"Sign in"} />
      </div>
    </form>
  );
}

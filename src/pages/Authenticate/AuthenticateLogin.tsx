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
<<<<<<< HEAD
<<<<<<< HEAD
        `py-8 gap-4 items-center justify-center flex flex-col`,
=======
        `py-8 gap-4 items-center justify-center flex flex-col h-[400px]`,
>>>>>>> 1379c11 (Revert "Merge branch 'feat/candidate-list-page' into 'main'")
=======
        `py-8 gap-4 items-center justify-center flex flex-col h-[400px]`,
>>>>>>> origin/main
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
        <div className="flex flex-row gap-4 w-full px-1 text-zinc-600">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        {/* Forgot password */}
<<<<<<< HEAD
        <PrimaryButton text={"Sign in"} />
=======
        <div className="Button w-full h-10 bg-white bg-opacity-0 rounded-lg flex-col justify-center items-center inline-flex text-sm">
          <div className="Basebutton px-3 py-1.5 justify-center items-center inline-flex">
            <div className="Content justify-center items-center gap-2 flex">
              <div className="Button text-emerald-800 font-semibold capitalize leading-7 tracking-wide">
                Forget Password?
              </div>
            </div>
          </div>
        </div>

        <PrimaryButton text="Login" />
>>>>>>> 1379c11 (Revert "Merge branch 'feat/candidate-list-page' into 'main'")
      </div>
    </form>
  );
}

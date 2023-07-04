import React from "react";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function AuthenticateSignUp() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <form
      className={classnames(
        `py-8 gap-4 items-center justify-center flex flex-col h-[400px]`,
        `bg-zinc-100 shadow-md`,
        `rounded-xl`
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="mx-6 items-center flex flex-col gap-4 w-2/3">
        <h1 className="text-xl font-semibold">Sign up</h1>

        {/* Input group with icons */}
        <div
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
        </div>

        <div
          className={classnames(
            `flex flex-row items-center gap-2 py-2`,
            `bg-white text-zinc-500`,
            `rounded-md`,
            `border`
          )}
        >
          <LockClosedIcon className={classnames(`w-[16px] ml-4`)} />
          <input
            type="password"
            placeholder="password"
            {...register("password")}
            className={classnames(
              `px-2 py-1`,
              `font-light`,
              `mr-4`,
              `outline-none`
            )}
          />
        </div>

        {/* Remember Me */}
        <div className="flex flex-row gap-4 w-full px-1 text-zinc-600">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        {/* Forgot password */}
        <div className="Button w-44 h-10 bg-white bg-opacity-0 rounded-lg flex-col justify-center items-center inline-flex text-sm">
          <div className="Basebutton px-3 py-1.5 justify-center items-center inline-flex">
            <div className="Content justify-center items-center gap-2 flex">
              <div className="Button text-emerald-800 font-semibold capitalize leading-7 tracking-wide">
                Forget Password?
              </div>
            </div>
          </div>
        </div>

        <button
          className={classnames(
            `Button w-[240px] h-12 bg-emerald-600 `,
            `rounded-lg flex-col justify-center items-center inline-flex`
          )}
        >
          <div className="Basebutton px-5 py-2.5 justify-center items-center inline-flex">
            <div className="Content justify-center items-center gap-2 flex">
              <div className="Button text-white font-semibold capitalize leading-7 tracking-wide">
                Login
              </div>
            </div>
          </div>
        </button>
      </div>
    </form>
  );
}

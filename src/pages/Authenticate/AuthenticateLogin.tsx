import React from "react";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";

export default function AuthenticateLogin() {
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
      <div className="flex flex-col items-center w-2/3 gap-4 mx-6">
        <h1 className="text-xl font-semibold">Login</h1>

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
        <div className="flex flex-row w-full gap-4 px-1 text-zinc-600">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        {/* Forgot password */}
        <div className="inline-flex flex-col items-center justify-center h-10 text-sm bg-white bg-opacity-0 rounded-lg Button w-44">
          <div className="Basebutton px-3 py-1.5 justify-center items-center inline-flex">
            <div className="flex items-center justify-center gap-2 Content">
              <div className="font-semibold leading-7 tracking-wide capitalize Button text-emerald-800">
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
            <div className="flex items-center justify-center gap-2 Content">
              <div className="font-semibold leading-7 tracking-wide text-white capitalize Button">
                Login
              </div>
            </div>
          </div>
        </button>
      </div>
    </form>
  );
}

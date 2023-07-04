import React from "react";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import image from "../../../images/sprite.png";

export default function Login() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div className={classnames("flex flex-row gap-12")}>
      <div className="w-2/3 ">
        <form
          className={classnames(
            `py-8 gap-4 items-center justify-center flex flex-col h-[400px]`,
            `bg-zinc-100 shadow-md`,
            `rounded-xl`
          )}
          onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mx-6 items-center flex flex-col gap-4 w-2/3">
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
      </div>
      {/* Descriptions */}
      <div
        className={classnames(
          `bg-[#176A4B] rounded-3xl px-6 py-4`,
          `shadow-md`,
          `relative flex flex-col gap-6`
        )}
      >
        <h1
          className={classnames(`text-white`, `font-bold text-3xl leading-10`)}
        >
          There are more than a thousand career opportunities for you
        </h1>
        <p
          className={classnames(`text-[#89EFC9] text-[20px]`, `leading-tight`)}
        >
          We understand that you are expecting to have the best jobs. By joining
          JobPort, you are going to whitelist onto the top recruiter company
          around the world.
        </p>

        <div className="flex flex-row">
          <button className={classnames(`border`, `px-3 py-1 rounded-xl`)}>
            <div className="text-white ">Browse jobs</div>
          </button>
        </div>

        <img
          src={image}
          className={classnames(
            `right-0 bottom-[-120px] opacity-100`,
            `absolute`,
            `w-[200px]`
          )}
        />
      </div>
    </div>
  );
}

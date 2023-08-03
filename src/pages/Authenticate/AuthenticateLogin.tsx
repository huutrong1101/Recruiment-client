import React from "react";
import classnames from "classnames";
import { useForm } from "react-hook-form";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import InputIcon from "../../components/InputIcon/InputIcon";

import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { authLogin } from "../../redux/AuthSlice";
import { UserLoginParamsInterface } from "../../services/services";
import { toast } from "react-toastify";
import { useLocation, useNavigate } from "react-router-dom";

export default function AuthenticateLogin() {
  const { register, handleSubmit } = useForm<UserLoginParamsInterface>();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { loading, signInLoadingState } = useAppSelector((app) => app.Auth);
  const { state } = useLocation();

  const onSubmit = async (data: UserLoginParamsInterface) => {
    try {
      await dispatch(authLogin(data)).unwrap();

      toast.success(`Successfully signed in.`);

      // if (state === null) {
      //   navigate(`/`);
      // } else {
      //   navigate(state.from);
      // }
    } catch (err: any) {
      toast.error(`Failed to signed in with error: ${err.message}`);
      throw err;
    }
  };

  return (
    <form
      className={classnames(
        `py-8 gap-4 items-center justify-center flex flex-col h-[400px]`,
        `bg-zinc-100 shadow-md`,
        `rounded-xl px-4 md:px-5 lg:px-6`,
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="flex flex-col items-center w-full gap-4 mx-6">
        <h1 className="text-xl font-semibold">Login</h1>

        <InputIcon
          icon={<EnvelopeIcon />}
          type="text"
          placeholder="email address or phone number"
          register={register}
          label={`credentialId`}
        />

        <InputIcon
          icon={<LockClosedIcon />}
          placeholder="password"
          type="password"
          register={register}
          label={`password`}
          autoComplete="current-password"
        />

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

        <PrimaryButton
          text="Sign in"
          isLoading={signInLoadingState === "pending"}
          disabled={signInLoadingState === "pending"}
        />
      </div>
    </form>
  );
}

import { Transition } from "@headlessui/react";
import classNames from "classnames";
import React, { useEffect, useState } from "react";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { AiOutlineLock } from "react-icons/ai";
import OneTimePasswordInputArray from "./OneTimePasswordInputArray";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { useForm } from "react-hook-form";
import { UserVerifySendParamsInterface } from "../../services/services";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import { sendVerify } from "./slices/OneTimePasswordSlice";

export default function OneTimePasswordVerify() {
  const [showing, setShowing] = useState(true);
  const [isFilled, setFilled] = useState<boolean>(false);
  const { register, handleSubmit, setValue, getValues } =
    useForm<UserVerifySendParamsInterface>();

  const { loadingState } = useAppSelector((app) => app.OneTimePassword);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    setValue("otp", "");
  }, []);

  useEffect(() => {
    const searchEmailValue = searchParams.get("email");
    if (searchEmailValue === "" || searchEmailValue === null) {
      toast.error(`Invalid or undefined email`);
      navigate("/");
    } else {
      setValue("email", searchEmailValue);
    }
  }, [searchParams]);

  const handleVerifyOneTimePassword = (data: UserVerifySendParamsInterface) => {
    dispatch(sendVerify(data))
      .unwrap()
      .then(() => {
        toast.success(
          `Successfully verify your account, trying to signed in again.`,
        );
      })
      .catch((response) => {
        toast.error(response.message);
        // navigate(`/`);
      });
  };

  return (
    <form
      className="w-full flex flex-col items-center justify-center py-8 h-auto"
      onSubmit={handleSubmit(handleVerifyOneTimePassword)}
    >
      <Transition
        show={showing}
        className={classNames(
          `px-10 py-8 rounded-[35px] w-full md:w-7/12 lg:w-6/12 xl:w-5/12 2xl:w-4/12`,
          `bg-[#176A4B]`,
          `flex flex-col shadow-lg`,
        )}
      >
        {/* Icons */}
        <div>
          <Transition appear={true} show={showing}>
            <Transition.Child
              className="flex flex-col items-center transition-all ease-in-out duration-700"
              enter=" transform-gpu opacity-0 scale-50 rotate-180"
              enterFrom="transform-gpu opacity-0  scale-50 rotate-180"
              enterTo="transform-gpu opacity-100 scale-100 rotate-0"
            >
              <AiOutlineLock
                className={classNames(`text-[#87D3B7] w-1/2 text-9xl`)}
              />
            </Transition.Child>
          </Transition>
        </div>

        <Transition
          appear={true}
          show={showing}
          className={`transition-all ease-in-out duration-700 delay-700`}
          enter="transform-gpu opacity-0"
          enterFrom="transform-gpu opacity-0 translate-y-12"
          enterTo="transform-gpu opacity-100 translate-y-0"
        >
          <h3
            className={classNames(
              `text-[#87D3B7] text-xl font-light leading-tight my-4`,
            )}
          >
            Please enter the One-Time-Password that we sent to your email.
          </h3>
        </Transition>
        <input type="hidden" {...register("email")} value={""} />

        {/* Pass code input */}
        <OneTimePasswordInputArray
          onFilled={(value: string) => {
            setValue("otp", value);
            setFilled(true);
          }}
          onUnfilled={() => {
            setFilled(false);
          }}
        />

        <Transition
          show={showing}
          appear={true}
          className={`transition-all ease-in-out duration-700 delay-1000`}
          enter="transform opacity-0"
          enterFrom=" opacity-0 "
          enterTo="opacity-100"
        >
          <div className={classNames(`mt-8 flex flex-row-reverse`)}>
            <PrimaryButton
              text="Verify"
              type="submit"
              isLoading={loadingState === "pending"}
              disabled={!isFilled}
            />
          </div>
        </Transition>
      </Transition>
    </form>
  );
}

import { Transition } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

export default function CompleteConfirmEmail() {
  const [showing, setShowing] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowing(true);
    }, 1);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  const handleSeekingJobs = () => {
    navigate(`/`);
  };
  return (
    <Transition
      show={showing}
      className={classNames(
        `px-10 py-8 rounded-[35px] w-full md:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12`,
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
            <CheckCircleIcon className={classNames(`text-[#87D3B7] w-1/2`)} />
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
        <h1
          className={classNames(
            `text-white text-3xl font-semibold leading-10 my-4`,
          )}
        >
          You are safety now, let's enjoy.
        </h1>
      </Transition>

      <Transition
        show={showing}
        appear={true}
        className={`transition-all ease-in-out duration-700 delay-1000`}
        enter="transform opacity-0"
        enterFrom=" opacity-0 "
        enterTo="opacity-100"
      >
        <div className={classNames(`mt-8 flex flex-row-reverse`)}>
          <PrimaryButton text="Seeking jobs" onClick={handleSeekingJobs} />
        </div>
      </Transition>
    </Transition>
  );
}

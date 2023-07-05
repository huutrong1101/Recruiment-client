import classNames from "classnames";
import { EnvelopeIcon } from "@heroicons/react/24/outline";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

export default function VerifyEmail() {
  const handleResendEmail = () => {
    alert(`Resend email logic not initialize.`);
  };

  return (
    <div className="w-full flex flex-col items-center justify-center min-h-[80vh]">
      {/* Dialog */}
      <div
        className={classNames(
          `px-10 py-8 rounded-[35px] w-full md:w-7/12 lg:w-5/12 xl:w-4/12 2xl:w-3/12`,
          `bg-[#176A4B]`,
          `flex flex-col shadow-lg`
        )}
      >
        {/* Icons */}
        <div className="flex flex-col items-center">
          <EnvelopeIcon
            className={classNames(`text-[#87D3B7] h-[256px] w-[256px]`)}
          />
        </div>

        <h1
          className={classNames(
            `text-white text-3xl font-bold leading-10 my-4`
          )}
        >
          Everything is ready, only need one more step.
        </h1>

        <h2
          className={classNames(
            `text-[#87D3B7] font-bold leading-normal text-xl`
          )}
        >
          Your email need to be verified, please check your email.
        </h2>

        <div className={classNames(`mt-8 flex flex-row-reverse`)}>
          <PrimaryButton text="Resend the email" onClick={handleResendEmail} />
        </div>
      </div>
    </div>
  );
}

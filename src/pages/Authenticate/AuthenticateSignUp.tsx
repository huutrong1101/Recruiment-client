import classnames from "classnames";
import { useForm } from "react-hook-form";
import {
  EnvelopeIcon,
  LockClosedIcon,
  PhoneIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";
import InputIcon from "../../components/InputIcon/InputIcon";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

export default function AuthenticateSignUp() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    alert(`Sign up not successfully: no logic setup`);
  };

  return (
    <form
      className={classnames(
        `py-8 gap-4 items-center justify-center flex flex-col`,
        `bg-zinc-100 shadow-md`,
        `rounded-xl px-4 md:px-5 lg:px-6`,
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=" items-center flex flex-col gap-4 w-full px-8 lg:px-10 xl:px-12 2xl:px-14">
        <h1 className="text-xl font-semibold">Sign up</h1>

        <InputIcon
          icon={<UserIcon />}
          {...register("fullName")}
          placeholder="full name"
          name="fullName"
        />

        <InputIcon
          icon={<EnvelopeIcon />}
          {...register("email")}
          placeholder="email"
          name="email"
        />

        <InputIcon
          icon={<LockClosedIcon />}
          {...register("password")}
          placeholder="password"
          name="password"
        />

        <InputIcon
          icon={<LockClosedIcon />}
          {...register("confirmPassword")}
          placeholder="confirm password"
          name="confirmPassword"
        />
        <InputIcon
          icon={<PhoneIcon />}
          {...register("phone")}
          placeholder="phone number"
          name="phone"
        />

        {/* Agree box term */}
        <div className="flex flex-row gap-4 w-full text-zinc-600">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">
            I'm agree with the{" "}
            <b>
              <Link to="/">Term and conditions</Link>
            </b>
          </label>
        </div>

        <PrimaryButton text="Sign up" />
      </div>
    </form>
  );
}

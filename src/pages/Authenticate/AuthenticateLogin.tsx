import classnames from "classnames";
import { useForm } from "react-hook-form";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import InputIcon from "../../components/InputIcon/InputIcon";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";

export default function AuthenticateLogin() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    alert(`Login is incomplete: No logic setup`);
  };

  return (
    <form
      className={classnames(
        `py-8 gap-4 items-center justify-center flex flex-col h-[400px]`,
        `bg-zinc-100 shadow-md`,
        `rounded-xl px-4 md:px-5 lg:px-6`
      )}
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className=" items-center flex flex-col gap-4 w-full px-8 lg:px-10 xl:px-12 2xl:px-14">
        <h1 className="text-xl font-semibold">Login</h1>

        {/* Input group with icons */}
        <InputIcon
          icon={<EnvelopeIcon />}
          wrapperClassName={`w-full`}
          type="text"
          name="credentialId"
          placeholder="email address"
          {...register("credentialId")}
        />

        <InputIcon
          icon={<LockClosedIcon />}
          type="password"
          name="password"
          placeholder="password"
          {...register("password")}
        />

        {/* Remember Me */}
        <div className="flex flex-row w-full gap-4 px-1 text-zinc-600">
          <input type="checkbox" id="remember" />
          <label htmlFor="remember">Remember me</label>
        </div>

        {/* Forgot password */}
        <div className="Button w-full h-10 bg-white bg-opacity-0 rounded-lg flex-col justify-center items-center inline-flex text-sm">
          <div className="Basebutton px-3 py-1.5 justify-center items-center inline-flex">
            <div className="flex items-center justify-center gap-2 Content">
              <div className="font-semibold leading-7 tracking-wide capitalize Button text-emerald-800">
                Forget Password?
              </div>
            </div>
          </div>
        </div>

        <PrimaryButton text="Login" />
      </div>
    </form>
  );
}

import classnames from "classnames";

export interface InputIconProps extends React.HTMLProps<HTMLInputElement> {
  icon: React.ReactElement;
  wrapperClassName?: string;
}

export default function InputIcon({
  icon,
  wrapperClassName,
  ...children
}: InputIconProps) {
  return (
    <div
      className={classnames(
        `flex flex-row items-center`,
        `bg-white text-zinc-500`,
        `rounded-md`,
        `border w-full`,
        wrapperClassName
      )}
    >
      <div className={classnames(`w-[16px] mx-4`)}>{icon}</div>

      <input
        placeholder="abc"
        className={classnames(`font-light w-11/12 py-3 rounded-r outline-none`)}
        {...children}
      />
    </div>
  );
}

import classnames from "classnames";
export interface InputIconProps extends React.HTMLProps<HTMLInputElement> {
  icon: React.ReactElement;
  wrapperClassName: string;
}

export default function InputIcon({
  icon,
  wrapperClassName,
  ...children
}: InputIconProps) {
  return (
    <div
      className={classnames(
        `flex flex-row items-center gap-2 py-2`,
        `bg-white text-zinc-500`,
        `rounded-md`,
        `border w-full`,
        wrapperClassName,
      )}
    >
      <i className={classnames(`w-[16px] ml-4`)}>{icon}</i>

      <input
        placeholder="abc"
        className={classnames(
          `px-2 py-1`,
          `font-light`,
          `mr-4`,
          `outline-none`,
        )}
        {...children}
      />
    </div>
  );
}

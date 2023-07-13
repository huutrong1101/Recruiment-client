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
        `flex flex-row items-center justify-center`,
        `bg-white text-zinc-500`,
        `rounded-md`,
        `border w-full`,
        wrapperClassName,
      )}
    >
      <div className={classnames(`w-4 mx-2`)}>
        <span className="">{icon}</span>
      </div>

      <div className="flex-1">
        <input
          placeholder="abc"
          className={classnames(
            `p-2`,
            `font-light`,
            `outline-none rounded-r-md`,
            `w-full`,
          )}
          {...children}
        />
      </div>
    </div>
  );
}

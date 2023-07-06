import classnames from "classnames";

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
}

export default function PrimaryButton({
  text,
  ...children
}: PrimaryButtonProps) {
  return (
    <button
      className={classnames(
        `Button w-full h-12 bg-emerald-600 hover:bg-emerald-800 `,
        `transition-colors ease-in-out duration-100`,
        `rounded-lg flex-col justify-center items-center inline-flex`
      )}
      {...children}
    >
      <div className="Basebutton px-5 py-2.5 justify-center items-center inline-flex">
        <div className="Content justify-center items-center gap-2 flex">
          <div className="Button text-white font-semibold capitalize leading-7 tracking-wide">
            {text}
          </div>
        </div>
      </div>
    </button>
  );
}

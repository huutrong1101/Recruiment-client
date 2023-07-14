import classnames from "classnames";

export interface PrimaryButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text: string;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
}

export default function PrimaryButton({
  text,
  className,
  size,
  ...children
}: PrimaryButtonProps) {
  return (
    <button
      className={classnames(
        `Button bg-emerald-600 hover:bg-emerald-800 text-white`,
        `transition-colors ease-in-out duration-100`,
        `rounded-lg flex-col justify-center items-center inline-flex`,
        "text-base px-4 py-2 w-full",
        {
          "text-sm px-4 py-2": size === "sm",
        },
        className,
      )}
      {...children}
    >
      {text}
    </button>
  );
}

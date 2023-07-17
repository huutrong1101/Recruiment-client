import { Fragment } from "react";
import { Transition } from "@headlessui/react";
import classNames from "classnames";
import { TextareaAutosize } from "@mui/material";
import Logo from "../../../../images/logo_FPT.png";

interface JobDescriptionWidgetProps {
  companyName: string;
  jobRole: string;
  publishDate: Date;

  logo: {
    src: any;
    alt: string;
  };
}

export default function ReccerJobDescriptionWidget() {
  return (
    <div
      className={classNames(
        `flex flex-row bg-white shadow-sm`,
        `rounded-xl p-2`,
        `gap-6 items-center`,
        `border`,
      )}
    >
      {/* Logo */}
      <div
        className={classNames(
          `w-2/12 flex flex-col items-center justify-center`,
        )}
      >
        <img
          className={classNames(`min-w-[64px] w-1/2`)}
          draggable={false}
          src={Logo}
          alt={"image"}
        />
      </div>
      {/* Information */}
      <div className={classNames(`flex flex-row flex-1 `)}>
        <div className={classNames(`flex flex-col flex-1 font-semibold gap-1`)}>
          <TextareaAutosize
            id="responsibility"
            minRows={1}
            className="resize-none p-1 w-2/5 text-justify bg-white border rounded-lg"
            placeholder="Company's Name here..."
          />
          <TextareaAutosize
            id="responsibility"
            minRows={1}
            className="resize-none p-1 w-2/5 text-justify bg-white border rounded-lg"
            placeholder="Position here..."
          />
          <span className={classNames(`text-sm text-zinc-400`)}>
            21 applicants
          </span>
        </div>
        {/* Right */}

        {/* TODO: change this to from date to date */}
        <div className={`text-zinc-400 text-sm`}></div>
      </div>
    </div>
  );
}

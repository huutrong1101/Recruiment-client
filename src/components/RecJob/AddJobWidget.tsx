import { Fragment, useState } from "react";
import { Transition } from "@headlessui/react";
import classNames from "classnames";
import { TextareaAutosize } from "@mui/material";
import Logo from "../../../images/logo_FPT.png";
import axiosInstance from "../../utils/AxiosInstance";

interface JobDescriptionWidgetProps {
  companyName: string;
  jobRole: string;
  publishDate: Date;

  logo: {
    src: any;
    alt: string;
  };
}

export default function AddJobWidget(props: any) {
  const { nameData, setNameData, quantityData, setQuantityData } = props;
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
      <form className={classNames(`flex flex-row flex-1 `)}>
        <div className={classNames(`flex flex-col flex-1 font-semibold gap-1`)}>
          <TextareaAutosize
            id="responsibility"
            minRows={1}
            value={nameData}
            className="resize-none p-1 w-2/5 text-justify bg-white border rounded-lg"
            placeholder="Company's Name here..."
            onChange={(event) => setNameData(event.target.value)}
          />
          <div className=" inline-flex">
            <TextareaAutosize
              id="responsibility"
              minRows={1}
              value={quantityData}
              className="resize-none p-1 w-10 text-center bg-white border rounded-lg inline-flex"
              onChange={(event) => setQuantityData(event.target.value)}
            />
            <div className="flex justify-center items-center ml-1">
              Applicants
            </div>
          </div>
        </div>
        {/* Right */}

        {/* TODO: change this to from date to date */}
        <div className={`text-zinc-400 text-sm`}></div>
      </form>
    </div>
  );
}

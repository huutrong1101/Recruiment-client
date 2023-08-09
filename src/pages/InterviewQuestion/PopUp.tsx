import React, { useState } from "react";
import ScorePage from "./ScorePage";
import DashboardFooter from "../../components/RecFooter/DashboardFooter";

export default function PopUp({ visible, onClose }: any) {
  const handleOnClose = (e: any) => {
    if (e.target.id === "container" || e.target.id === "submit") onClose();
  };
  if (!visible) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center z-20"
      id="container"
      onClick={handleOnClose}
    >
      <div className="w-1/3 h-2/3 rounded-3xl bg-white drop-shadow-md flex flex-col items-center">
        <div className="avatar rounded-full border-8 border-emerald-600 w-[150px] h-[150px] bg-white my-2"></div>
        <div className="text-2xl mb-2">Name</div>
        <div className="rounded flex flex-row gap-x-2 text-2xl mb-4">
          <div className="">Total Mark: </div>
          <div className=""> Score</div>
        </div>
        {/* Note */}

        <textarea
          className=" rounded-lg border-2 border-gray-400 bg-white w-2/3 h-[150px]  my-6 p-4
                    resize-none"
          placeholder="Note..."
        ></textarea>

        <button
          className="Text text-white px-4 py-2.5 bg-emerald-600 rounded-lg drop-shadow-lg mx-4 mb-2 transition-all
                                text-[14px] font-medium leading-tight hover:text-emerald-600 hover:bg-white
                                border-transparent border hover:border-emerald-600 w-1/5 flex justify-center bottom-0  "
          id="submit"
          onClick={handleOnClose}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

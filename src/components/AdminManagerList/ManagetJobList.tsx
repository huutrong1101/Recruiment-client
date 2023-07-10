import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { PencilSquareIcon} from "@heroicons/react/24/outline";

export default function ManagetJobList() {
  let JobManagerList = [
    {
      nameJob: "React",
      day: "9/2/2022",
      member: 50,
      quantity: 100,
    },
    {
      nameJob: "Net",
      day: "9/3/2021",
      member: 25,
      quantity: 100,
    },
    {
      nameJob: "C#",
      day: "9/1/2019",
      member: 75,
      quantity: 100,
    },
    {
      nameJob: "JavaScript",
      day: "9/10/2020",
      member: 65,
      quantity: 100,
    },
    {
      nameJob: ".Net",
      day: "9/10/2023",
      member: 55,
      quantity: 100,
    },
    {
      nameJob: "Java",
      day: "9/10/2023",
      member: 15,
      quantity: 100,
    },
    {
      nameJob: "React",
      day: "9/10/2023",
      member: 15,
      quantity: 100,
    },

  ];
  return (
    <div className="flex items-center justify-center text-center bg-zinc-300 rounded-[30px] mt-6 mx-auto p-8 ">
    <div className="relative w-full max-w-full overflow-x-auto rounded-lg h-[500px]">
      <table className=" text-sm text-gray-500 dark:text-gray-400 text-center">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 text-center">
          <tr>
            <th scope="col" className="px-3 py-1">
              Name
            </th>
            <th scope="col" className="px-3 py-1">
              Date created
            </th>
            <th scope="col" className="px-3 py-1">
              Process
            </th>
            <th scope="col" className="px-3 py-1">
              Actions
            </th>
            {

            }
          </tr>
        </thead>
        <tbody>
          {JobManagerList.map((item, index) => (
            <tr className="text-black bg-white text-center" key={index}>
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
              >
                {item.nameJob}
              </th>
              <td className="px-6 py-4">{item.day}</td>
              <td className="px-6 py-4">{item.member} \ {item.quantity}</td>
              <td className="px-6 py-4">
                <PencilSquareIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
              </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

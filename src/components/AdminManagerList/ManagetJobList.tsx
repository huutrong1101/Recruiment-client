import React, { useState } from "react";
import classNames from "classnames";
import { Link,NavLink } from "react-router-dom";
import {EyeIcon} from "@heroicons/react/24/outline";

export default function ManagetJobList() {
  let JobManagerList = [
    {
      nameJob: "React",
      day: "9/2/2022",
      member: 50,
      quantity: 100,
      link: "admin/candidate-pass-list"
    },
    {
      nameJob: "Net",
      day: "9/3/2021",
      member: 25,
      quantity: 100,
      link: "admin/candidate-pass-list"
    },
    {
      nameJob: "C#",
      day: "9/1/2019",
      member: 75,
      quantity: 100,
      link: "admin/candidate-pass-list"
    },
    {
      nameJob: "JavaScript",
      day: "9/10/2020",
      member: 65,
      quantity: 100,
      link: "admin/candidate-pass-list"
    },
    {
      nameJob: ".Net",
      day: "9/10/2023",
      member: 55,
      quantity: 100,
      link: "admin/candidate-pass-list"
    },
    {
      nameJob: "Java",
      day: "9/10/2023",
      member: 15,
      quantity: 100,
      link: "admin/candidate-pass-list"
    },
    {
      nameJob: "React",
      day: "9/10/2023",
      member: 15,
      quantity: 100,
      link: "admin/candidate-pass-list"
    },

  ];
  return (
    <div className="flex items-center justify-center text-center bg-zinc-300 rounded-[30px] mt-6 p-8 ">
    <div className="relative overflow-x-auto rounded-lg">
      <table className=" text-sm text-gray-500 dark:text-gray-400 text-center rounded-[30px]">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 text-center rounded-[30px]">
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
              View
            </th>
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
                <NavLink to={`/${item.link}`} onClick={() => {}}>
                  <EyeIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
                </NavLink>
              </td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

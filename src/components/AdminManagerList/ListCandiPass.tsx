import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

export default function ListCandiPass() {
  let ListCandiPassList = [
    {      nameCan: "Nguyen Van A",      day: "9/2/2022",      email: "name@example.com",      point: "50",      phone: "098212xxx",    },
    {      nameCan: "Nguyen Van B",      day: "9/3/2021",      point: "25",      email: "name@example.com",      phone: "098212xxx",    },
    {      nameCan: "Nguyen Van C",      day: "9/1/2019",      point: "75",      email: "name@example.com",      phone: "098212xxx",    },
    {      nameCan: "Nguyen Van D",      day: "9/10/2020",      point: "65",      email: "name@example.com",      phone: "098212xxx",    },
    {      nameCan: "Nguyen Van E",      day: "9/10/2023",      point: "55",      email: "name@example.com",      phone: "098212xxx",    },
    {      nameCan: "Nguyen Van F",      day: "9/10/2023",      point: "15",      email: "name@example.com",      phone: "098212xxx",    },
    {      nameCan: "Nguyen Van R",      day: "9/10/2023",      point: "15",      email: "name@example.com",      phone: "098212xxx",    },
  ];
  return (
    <div className="flex items-center justify-center text-center bg-zinc-300 rounded-[30px] mt-6 mx-auto p-8 ">
    <div className="relative overflow-x-auto rounded-lg">
      <table className=" text-sm text-gray-500 dark:text-gray-400 text-center rounded-[30px]">
        <thead className="text-xs text-gray-700 uppercase bg-gray-200 text-center rounded-[30px]">
          <tr>
            <th scope="col" className="px-3 py-1">
              Name
            </th>
            <th scope="col" className="px-3 py-1">
              Phone
            </th>
            <th scope="col" className="px-3 py-1">
              Email
            </th>
            <th scope="col" className="px-3 py-1">
              Date created
            </th>
            <th scope="col" className="px-3 py-1">
              Point
            </th>
          </tr>
        </thead>
        <tbody>
        {ListCandiPassList
          .sort((a, b) => b.point - a.point)
          .map((item, index) => (
            <tr className="text-black bg-white text-center" key={index}>
              <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {item.nameCan}
              </th>
              <td className="px-6 py-4">{item.phone}</td>
              <td className="px-6 py-4">{item.email}</td>
              <td className="px-6 py-4">{item.day}</td>
              <td className="px-6 py-4">{item.point}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  );
}

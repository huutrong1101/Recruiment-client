import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import { PencilSquareIcon, TrashIcon,UserMinusIcon} from "@heroicons/react/24/outline";

interface TypeData {
  typeSelected: string;
}

export default function AdminTable({ typeSelected }: TypeData) {
  console.log(typeSelected);
  // Candidate.state
  let Candidate = [
    {     name: "Nguyễn Văn A",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "9/10/2002",      position: "Recruiter",      stateBlackList: 0,   },
    {
      name: "Nguyễn Văn B",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "5/6/2002",
      position: "Candidate",
      stateBlackList: 0,
    },
    {
      name: "Nguyễn Văn C",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "7/9/2002",
      position: "Recruiter",
      stateBlackList: 0,
    },
    {
      name: "Nguyễn Văn D",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "6/11/2002",
      position: "Candidate",
      stateBlackList: 0,
    },
    {
      name: "Nguyễn Văn E",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "2/11/2002",
      position: "Recruiter",
      stateBlackList: 0,
    },
    {
      name: "Nguyễn Văn F",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "8/2/2002",
      position: "Candidate",
      stateBlackList: 0,
    },
    {
      name: "Nguyễn Văn G",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "11/4/2002",
      position: "Candidate",
      stateBlackList: 0,
    },
    {
      name: "Nguyễn Văn H",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "25/6/2002",
      position: "Recruiter",
      stateBlackList: 0,
    },
    {
      name: "Nguyễn Văn I",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "29/10/2002",
      position: "Candidate",
      stateBlackList: 1,
    },
    {
      name: "Nguyễn Văn K",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "9/10/2002",
      position: "Recruiter",
      stateBlackList: 0,
    },
    {
      name: "Nguyễn Văn A",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "9/10/2002",
      position: "Candidate",
      stateBlackList: 0,
    },
    {
      name: "Nguyễn Văn B",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "5/6/2002",
      position: "Recruiter",
      stateBlackList: 0,
    },
    {
      name: "Nguyễn Văn C",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "7/9/2002",
      position: "Candidate",
      stateBlackList: "1",
    },
    {
      name: "Nguyễn Văn D",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "6/11/2002",
      position: "Candidate",
      stateBlackList: 0,
    },
    {
      name: "Nguyễn Văn E",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "2/11/2002",
      position: "Candidate",
      stateBlackList: 0,
    },
    {
      name: "Nguyễn Văn F",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "8/2/2002",
      position: "Candidate",
      stateBlackList: 0,
    },
    {
      name: "Nguyễn Văn G",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "11/4/2002",
      position: "Interviewer",
      stateBlackList: 0,
    },
    {
      name: "Nguyễn Văn H",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "25/6/2002",
      position: "Interviewer",
      stateBlackList: 0,
    },
    {
      name: "Nguyễn Văn I",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "29/10/2002",
      position: "Interviewer",
      stateBlackList: "0",
    },
    {
      name: "Nguyễn Văn K",
      email: "Candidate@example.com",
      phone: "0978123xxx",
      day: "9/10/2002",
      position: "Interviewer",
      stateBlackList: "0",
    },
  ];
  if (typeSelected == "Blacklist") {
    {
      Candidate = Candidate.filter((item) => item.stateBlackList == 1)
      return (
        <div className="flex items-center justify-center text-center bg-zinc-300 rounded-[30px] mt-6 mx-auto p-8 ">
          <div className="relative w-full max-w-full overflow-x-auto rounded-lg h-[500px]">
            <table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
              <thead className="text-xs text-gray-700 uppercase bg-gray-200 text-center">
                <tr>
                  <th scope="col" className="px-3 py-1">
                    Name
                  </th>
                  <th scope="col" className="px-3 py-1">
                    Position
                  </th>
                  <th scope="col" className="px-3 py-1">
                    Phone number
                  </th>
                  <th scope="col" className="px-3 py-1">
                    Email
                  </th>
                  <th scope="col" className="px-3 py-1">
                    Date created
                  </th>
                  <th scope="col" className="px-3 py-1">
                    Actions
                  </th>
                  {

                  }
                </tr>
              </thead>
              <tbody>
                {Candidate.map((item, index) => (
                  <tr className="text-black bg-white text-center" key={index}>
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                    >
                      {item.name}
                    </th>
                    <td className="px-6 py-4">{item.position}</td>
                    <td className="px-6 py-4">{item.phone}</td>
                    <td className="px-6 py-4">{item.email}</td>
                    <td className="px-6 py-4">{item.day}</td>
                    {/* <td className="px-6 py-4">{item.stateBlackList}</td> */}
                    <td className="px-6 py-4">
                      <PencilSquareIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
                      <TrashIcon className="w-5 h-5 relative rounded-lg justify-center items-center gap-2 flex"/>
                      <UserMinusIcon className="w-5 h-5 relative rounded-lg justify-center items-center gap-2 flex"/>
                    </td>
                    </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      );
    }
  };
  if (typeSelected !== "All") {
    Candidate = Candidate.filter((item) => item.position == typeSelected);
  };
  return (
    <div className="flex items-center justify-center text-center bg-zinc-300 rounded-[30px] mt-6 mx-auto p-8 ">
      <div className="relative w-full max-w-full overflow-x-auto rounded-lg h-[500px]">
        <table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 text-center">
            <tr>
              <th scope="col" className="px-3 py-1">
                Name
              </th>
              <th scope="col" className="px-3 py-1">
                Position
              </th>
              <th scope="col" className="px-3 py-1">
                Phone number
              </th>
              <th scope="col" className="px-3 py-1">
                Email
              </th>
              <th scope="col" className="px-3 py-1">
                Date created
              </th>
              <th scope="col" className="px-3 py-1">
                Actions
              </th>
              {

              }
            </tr>
          </thead>
          <tbody>
            {Candidate.map((item, index) => (
              <tr className="text-black bg-white text-center" key={index}>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {item.name}
                </th>
                <td className="px-6 py-4">{item.position}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.email}</td>
                <td className="px-6 py-4">{item.day}</td>
                {/* <td className="px-6 py-4">{item.stateBlackList}</td> */}
                <td className="px-6 py-4">
                  <PencilSquareIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
                  <TrashIcon className="w-5 h-5 relative rounded-lg justify-center items-center gap-2 flex"/>
                  <UserMinusIcon className="w-5 h-5 relative rounded-lg justify-center items-center gap-2 flex"/>
                </td>
                </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

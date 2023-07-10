import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {PencilSquareIcon } from "@heroicons/react/24/outline";

export default function SearchList_list() {
// SearchList.state
  const [SearchList] = useState([
    { name    : "Nguyễn Văn A",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "9/10/2002",    position : "Recruiter"},
    { name    : "Nguyễn Văn B",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "5/6/2002",     position : "Candidate"},
    { name    : "Nguyễn Văn C",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "7/9/2002",     position : "Recruiter"},
    { name    : "Nguyễn Văn D",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "6/11/2002",    position : "Candidate"},
    { name    : "Nguyễn Văn E",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "2/11/2002",    position : "Recruiter"},
    { name    : "Nguyễn Văn F",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "8/2/2002",     position : "SearchList"},
    { name    : "Nguyễn Văn G",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "11/4/2002",    position : "Candidate"},
    { name    : "Nguyễn Văn H",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "25/6/2002",    position : "Recruiter"},
    { name    : "Nguyễn Văn I",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "29/10/2002",   position : "Candidate"},
    { name    : "Nguyễn Văn K",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "9/10/2002",    position : "Recruiter"},
    { name    : "Nguyễn Văn A",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "9/10/2002",    position : "SearchList"},
    { name    : "Nguyễn Văn B",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "5/6/2002",     position : "Recruiter"},
    { name    : "Nguyễn Văn C",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "7/9/2002",     position : "Candidate"},
    { name    : "Nguyễn Văn D",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "6/11/2002",    position : "Candidate"},
    { name    : "Nguyễn Văn E",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "2/11/2002",    position : "Candidate"},
    { name    : "Nguyễn Văn F",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "8/2/2002",     position : "Candidate"},
    { name    : "Nguyễn Văn G",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "11/4/2002",    position : "Interview"},
    { name    : "Nguyễn Văn H",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "25/6/2002",    position : "Interview"},
    { name    : "Nguyễn Văn I",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "29/10/2002",   position : "Interview"},
    { name    : "Nguyễn Văn K",    email   : "SearchList@example.com",    phone   : "0978123xxx",      day     : "9/10/2002",    position : "Interview"}
  ]);
  return (
    <div className="w-[900px] h-[650px] text-center bg-zinc-300 rounded-[30px] mt-6 mx-auto">
        <div className="relative overflow-x-auto w-[900px] h-[650px] rounded-[30px]">
        <table className=" text-sm text-left" >
            <thead className=" z-50 text-gray-500 bg-gray-50 text-center  text-[16px] font-semibold capitalize tracking-wide text-opacity-70 sticky top-1 rounded-[30px]">
            <tr>
                <th scope="col" className="px-6 py-4 w-[175px]"> Name           </th>
                <th scope="col" className="px-6 py-4 w-[100px]"> Position       </th>
                <th scope="col" className="px-6 py-4 w-[150px]"> Phone number </th>
                <th scope="col" className="px-6 py-4 w-[225px]"> Email        </th>
                <th scope="col" className="px-6 py-4 w-[150px]"> Date created </th>
                <th scope="col" className="px-6 py-4 w-[100px]"> </th>
            </tr>
            </thead>
            <tbody className="border-gray-200 shadow ">
            {SearchList.map((SearchList, index) => (
                <tr
                className=" text-black text-[14px] font-medium leading-tight text-center" key={index}
                >
                <td className="px-6 py-4 w-[175px] text-black text-[14px] font-medium leading-tight text-justify">  {SearchList.name} </td>
                <td className="px-6 py-4 w-[150px] text-center text-black text-[14px] font-medium leading-none">    {SearchList.position}</td>
                <td className="px-6 py-4 w-[150px] text-center text-black text-[14px] font-medium leading-none">    {SearchList.phone}</td>
                <td className="px-6 py-4 w-[250px] h-7 text-black text-[14px] font-medium leading-tight">           {SearchList.email}</td>
                <td className="px-6 py-4 w-[150px] text-black text-[14px] font-normal leading-tight">               {SearchList.day}</td>
                <td className="px-6 py-4 w-[100px] text-center"> <PencilSquareIcon className="w-6 h-6 relative rounded-lg justify-center items-center gap-2 flex"/></td>
                </tr>
            ))}
            </tbody>
        </table>
    </div>
    </div>
  );
}

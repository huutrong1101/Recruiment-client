import { TrashIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

export default function InterviewerPopup() {
  const [isOpen, setIsOpen] = useState(false);
  const memberList = [
    {
      id: 1,
      name: "John Doe",
      phone: "1234567890",
      email: "john@example.com",
      date: "2023-07-01",
      position: "Web Designer",
    },
    {
      id: 2,
      name: "Jane Smith",
      phone: "9876543210",
      email: "jane@example.com",
      date: "2023-07-02",
      position: "Web Designer",
    },
    {
      id: 3,
      name: "Bob Johnson",
      phone: "5555555555",
      email: "bob@example.com",
      date: "2023-07-03",
      position: "Web Designer",
    },
    {
      id: 4,
      name: "Alice Williams",
      phone: "1111111111",
      email: "alice@example.com",
      date: "2023-07-04",
      position: "Web Designer",
    },
    {
      id: 5,
      name: "Sam Brown",
      phone: "9999999999",
      email: "sam@example.com",
      date: "2023-07-05",
      position: "Web Designer",
    },
  ];

  return (
    <div>
      <button onClick={() => setIsOpen(true)}> ha ha ha</button>
      {isOpen && (
        <div className="fixed inset-0 backdrop-blur-sm flex justify-center items-center">
          <div className="popup-content bg-white border border-gray-300 p-4">
            <table className="w-full text-sm text-left text-gray-500">
              {/* Interviewer Info */}
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    Interviewer's Name
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Phone Number
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Email
                  </th>
                  <th scope="col" className="px-6 py-4">
                    Date created
                  </th>
                  <th scope="col" className="py-4">
                    Position
                  </th>
                  <th scope="col" className="py-4"></th> {/* Add button */}
                </tr>
              </thead>
              <tbody>
                {memberList.map((memberList) => (
                  <tr className="bg-white border-b" key={memberList.id}>
                    <td
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {memberList.name}
                    </td>
                    <td className="px-6 py-4">{memberList.phone}</td>
                    <td className="px-6 py-4">{memberList.email}</td>
                    <td className="px-6 py-4">{memberList.date}</td>
                    <td className="px-6 py-4">{memberList.position}</td>
                    <td className="px-4 py-4">
                      <button className="bg-emerald-700 py-2 px-4 rounded-xl mr-4 text-white">
                        Add
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
              {/* /////////// */}
            </table>
            <button onClick={() => setIsOpen(false)}>Close Pop-up</button>
          </div>
        </div>
      )}
    </div>
  );
}

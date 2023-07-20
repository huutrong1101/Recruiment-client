import React from "react";

export default function InterviewHistory() {
  const interviewHistory = [
    { name: "HTML", date: "2022-01-01", state: "Finished" },
    { name: "CSS", date: "2021-12-15", state: "Finished" },
    { name: "JavaScript", date: "2022-02-20", state: "Pending" },
    { name: "React", date: "2022-03-10", state: "Pending" },
    { name: "C++", date: "2022-03-10", state: "Pending" },
    { name: "NodeJs", date: "2022-03-10", state: "Pending" },
  ];

  return (
    <div className="History mt-8 bg-white p-6 border rounded-2xl">
      <h2 className="text-lg font-semibold">Interview History:</h2>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50    ">
            <tr>
              <th scope="col" className="px-6 py-4">
                Position Recuruitment
              </th>
              <th scope="col" className="px-6 py-4">
                Date
              </th>
              <th scope="col" className="px-6 py-4">
                State
              </th>
            </tr>
          </thead>
          <tbody>
            {interviewHistory.map((interviewHistory, index) => (
              <tr className="bg-white border-b" key={index}>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {interviewHistory.name}
                </td>
                <td className="px-6 py-4">{interviewHistory.date}</td>
                <td className="px-4 py-4 rounded-lg p-2 mx-2 my-1">
                  <span
                    className={`rounded-lg p-2 mx-2 my-1 ${
                      interviewHistory.state === "Finished"
                        ? "bg-green-200"
                        : "bg-yellow-100"
                    }`}
                  >
                    {interviewHistory.state}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

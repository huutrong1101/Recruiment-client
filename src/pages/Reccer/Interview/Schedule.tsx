import classNames from "classnames";
import { PlusIcon, TrashIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import { TextareaAutosize } from "@mui/material";

export default function Schedule() {
  const personArray = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      phone: "111222333",
      date: new Date().toDateString(),
      id: "1",
    },
  ];
  const interviewerArray = [
    {
      name: "Sarah Wilson",
      email: "johndoe@example.com",
      phone: "111222333",
      date: new Date().toDateString(),
      id: "1",
    },
    {
      name: "Mark Thompson",
      email: "johndoe@example.com",
      phone: "111222333",
      date: new Date().toDateString(),
      id: "2",
    },
  ];

  return (
    <div
      className={classNames(
        `border bg-white shadow-sm rounded-xl`,
        `px-8 py-8`,
        `text-justify`,
      )}
    >
      <div className={classNames(`flex justify-between `)}>
        <h1 className="text-2xl font-semibold">Schedule</h1>
        <button
          className={classNames(
            `text-lg font-normal text-white`,
            `flex items-center`,
            `bg-emerald-700 py-2 px-4 rounded-xl mr-4`,
          )}
        >
          <UserPlusIcon className="w-6 h-6 mr-2" /> <p>Add Interviewer</p>
        </button>
      </div>
      <div className="relative overflow-x-auto p-4">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-4">
                Candidate's Name
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
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {personArray.map((personArray) => (
              <tr className="bg-white border-b " key={personArray.id}>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {personArray.name}
                </td>
                <td className="px-6 py-4">{personArray.phone}</td>
                <td className="px-6 py-4">{personArray.email}</td>
                <td className="px-6 py-4">{personArray.date}</td>
                <td className="px-4 py-4">
                  <button>
                    <TrashIcon className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
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
                Delete
              </th>
            </tr>
          </thead>
          <tbody>
            {interviewerArray.map((interviewerArray) => (
              <tr className="bg-white border-b" key={interviewerArray.id}>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                >
                  {interviewerArray.name}
                </td>
                <td className="px-6 py-4">{interviewerArray.phone}</td>
                <td className="px-6 py-4">{interviewerArray.email}</td>
                <td className="px-6 py-4">{interviewerArray.date}</td>
                <td className="px-4 py-4">
                  <button>
                    <TrashIcon className="w-6 h-6" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div
          className={classNames(
            `text-sm text-gray-700 uppercase bg-gray-50 font-bold`,
            `px-6 py-4 flex flex-col`,
          )}
        >
          Interview Link:
          <TextareaAutosize
            minRows={1}
            className={classNames(
              `w-full resize-none px-1 text-sm bg-white border rounded-lg`,
            )}
            placeholder="https://meet.google.com/sxi-erat-ejf?authuser=1"
          ></TextareaAutosize>
        </div>
      </div>
      <div className={classNames(`flex justify-center`)}>
        <button
          className={classNames(
            `text-lg font-normal text-white`,
            `flex items-center`,
            `bg-emerald-700 py-2 px-4 rounded-xl`,
          )}
        >
          Save
        </button>
      </div>
    </div>
  );
}

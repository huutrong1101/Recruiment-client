import { CalendarDaysIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import { useNavigate } from "react-router-dom";

export default function Applied() {
  const personArray = [
    {
      name: "John Doe",
      email: "johndoe@example.com",
      state: "Received",
    },
    {
      name: "Jane Smith",
      email: "janesmith@example.com",
      state: "Pass",
    },
    {
      name: "Mike Johnson",
      email: "mikejohnson@example.com",
      state: "Not Received",
    },
    {
      name: "Emily Davis",
      email: "emilydavis@example.com",
      state: "Fail",
    },
    {
      name: "Sarah Wilson",
      email: "sarahwilson@example.com",
      state: "Received",
    },
    {
      name: "Mark Thompson",
      email: "markthompson@example.com",
      state: "Pass",
    },
    {
      name: "Linda Roberts",
      email: "lindaroberts@example.com",
      state: "Received",
    },
  ];

  let navigate = useNavigate();
  const routeChange = () => {
    let path = `../interview-schedule`;
    navigate(path);
  };

  return (
    <div
      className={classNames(
        `border bg-white shadow-sm rounded-xl`,
        `px-8 py-8`,
        `text-justify`,
      )}
    >
      <h1 className="text-2xl font-semibold">Applied Candidate</h1>
      <div className="relative overflow-x-auto p-4">
        <table className="w-full text-sm text-left text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
            <tr>
              <th scope="col" className="px-6 py-4">
                Name
              </th>
              <th scope="col" className="px-6 py-4">
                Email
              </th>
              <th scope="col" className="px-6 py-4">
                State
              </th>
              <th className="py-4"></th>
            </tr>
          </thead>
          <tbody>
            {personArray.map((personArray, index) => (
              <tr className="bg-white border-b " key={index}>
                <td
                  scope="row"
                  className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                >
                  {personArray.name}
                </td>
                <td className="px-6 py-4">{personArray.email}</td>
                <td className="px-4 py-4 rounded-lg p-2 mx-2 my-1">
                  <span
                    className={`rounded-lg p-2 mx-2 my-1  ${
                      personArray.state === "Pass"
                        ? "bg-green-400 text-green-800"
                        : personArray.state === "Fail"
                        ? "bg-red-300"
                        : personArray.state === "Not Received"
                        ? "bg-yellow-100"
                        : "bg-green-200"
                    }`}
                  >
                    {personArray.state}
                  </span>
                </td>
                <td>
                  <button>
                    <CalendarDaysIcon
                      className="w-6 h-6"
                      onClick={routeChange}
                    />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

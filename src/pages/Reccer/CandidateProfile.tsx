import React from "react";
import AvatarCandidate from "../../components/Candidate/Avatar";
import {
  ArrowDownTrayIcon,
  DocumentTextIcon,
  DocumentArrowDownIcon,
} from "@heroicons/react/24/outline";

function CandidateProfile() {
  const avatarUrl = "../../../images/ava.jpg";
  const coverImageUrl = "../../../images/cover2.jpg";
  const username = "Rosaria Varagas";
  const title = "Designer";

  const listSkills = ["React", "Java", "HTML", "Figma", "WordPress"];

  const interviewHistory = [
    { name: "HTML", date: "2022-01-01", state: "Finished" },
    { name: "CSS", date: "2021-12-15", state: "Finished" },
    { name: "JavaScript", date: "2022-02-20", state: "Pending" },
    { name: "React", date: "2022-03-10", state: "Pending" },
    { name: "C++", date: "2022-03-10", state: "Pending" },
    { name: "NodeJs", date: "2022-03-10", state: "Pending" },
  ];

  const personalDetails = [
    { label: "Email", value: "vargas@mail.com" },
    { label: "D.O.B", value: "1st Jan, 2000" },
    { label: "Address", value: "Some where" },
    { label: "City", value: "Ho Chi Minh" },
    { label: "Country", value: "Viet Nam" },
    { label: "Postal Code", value: "111111" },
    { label: "Mobile", value: "123-456-7890" },
  ];

  return (
    <div className="bg-white min-h-screen">
      <div className="bg-cover h-60">
        <img
          src={coverImageUrl}
          alt="Cover"
          className="w-full h-full object-cover rounded-b-3xl"
        />
      </div>
      <div className="relative w-full -mt-28 px-8">
        <div className="flex justify-between items-center pt-11">
          <div className="flex items-center space-x-4">
            <AvatarCandidate imageUrl={avatarUrl} size="large" />
            <div className="-space-y-2">
              <h2 className="text-xl font-semibold pt-16">
                {"Mr. " + username}
              </h2>
              <h2 className="text-lg font-light text-gray-500">{title}</h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-4 gap-0">
          {/* PERSONAL INFO */}
          <div className="Info col-start-3 row-start-1 row-span-5 mt-8 py-4">
            <div className="grid grid-cols-2 bg-gray-100 rounded-3xl drop-shadow-lg px-1 py-4 sticky top-2">
              <div className="font-semibold px-4 col-start-1 col-span-2">
                Personal Detail:
              </div>
              <table className="table border-collapse w-full py-6 col-start-1 col-span-2">
                <tbody>
                  {personalDetails.map((detail) => (
                    <tr key={detail.label} className="font-light">
                      <td className="py-2 px-4 ">
                        <li>{detail.label + " :"}</li>
                      </td>
                      <td className="py-2 px-4 text-right">{detail.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="bg-white rounded-xl shadow-inner col-start-1 col-span-2 text-center items-center flex flex-col mx-5">
                <p className="px-4 mx-2 my-1 flex flex-row">
                  <DocumentTextIcon className="w-7 h-7" />
                  rosaria-varagas-resume.pdf
                </p>
                <button className="rounded-lg bg-green-700 hover:bg-green-900 py-2 mx-2 my-1 text-white flex flex-row px-4">
                  <DocumentArrowDownIcon className="w-5 h-5" />
                  Download CV
                </button>
              </div>
            </div>
          </div>
          {/* /PERSONAL INFO */}

          {/* DESCRIPTION */}
          <div className="Desc mt-8 bg-white col-span-2 row-span-2 p-6">
            <h2 className="text-lg font-semibold">Rosaria Varagas:</h2>
            <p className="text-lg font-light text-gray-500">
              Obviously I'm a Web Developer. Web Developer with over 3 years of
              experience. Experienced with all stages of the development cycle
              for dynamic web projects. The as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <p className="text-lg font-light text-gray-500">
              Data Structures and Algorithms are the heart of programming.
              Initially most of the developers do not realize its importance but
              when you will start your career in software development, you will
              find your code is either taking too much time or taking too much
              space.
            </p>
            <p></p>
          </div>
          {/* /DESCRIPTION */}

          {/* SKILL */}
          <div className="Skill mt-8 bg-white p-6 col-span-2">
            <h2 className="text-lg font-semibold">Skill:</h2>
            <div className="flex flex-wrap p-4">
              {listSkills.map((item, index) => (
                <div key={index}>
                  <span
                    key={index}
                    className="rounded-lg bg-green-700 p-2 mx-2 my-1 text-white"
                  >
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* /SKILL */}

          {/* EXPERIENCE */}
          <div className="Exp mt-8 bg-white p-6 col-span-2">
            <h2 className="text-lg font-semibold">Experience:</h2>
          </div>
          {/* /EXPERIENCE */}
        </div>

        {/* INTERVIEW HISTORY */}
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
                  <tr
                    className="bg-white border-b"
                    key={index}
                  >
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
        {/* /INTERVIEW HISTORY */}
      </div>
    </div>
  );
}

export default CandidateProfile;

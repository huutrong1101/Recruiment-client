import classNames from "classnames";
import AvatarCandidate from "../../../components/Candidate/Avatar";

export default function Suggested() {
  const candidates = [
    {
      name: "John Smith",
      experience: 8,
      skills: ["Python", "Java", "C++"],
      title: "Web Designer",
      imgURL: "../../../images/ava.jpg",
    },
    {
      name: "Jane Doe",
      experience: 5,
      skills: ["JavaScript", "HTML", "CSS"],
      title: "Web Designer",
      imgURL: "../../../images/ava.jpg",
    },
    {
      name: "David Johnson",
      experience: 10,
      skills: ["Ruby", "PHP", "SQL"],
      title: "Web Designer",
      imgURL: "../../../images/ava.jpg",
    },
    {
      name: "David Johnson",
      experience: 10,
      skills: ["Ruby", "PHP", "SQL"],
      title: "Web Designer",
      imgURL: "../../../images/ava.jpg",
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
      <div>
        <h1 className="text-2xl font-semibold">Suggested Candidate</h1>
        <div className={classNames(`flex flex-col md:flex-row gap-12`, `py-4`)}>
          {candidates.map((candidates, index) => (
            <div className="w-[22%] bg-white flex flex-col items-center justify-center px-6 py-2 rounded-xl drop-shadow-lg border-2 border-gray-300">
              <AvatarCandidate imageUrl={candidates.imgURL} size="sm" />
              <div key={index} className="text-lg font-semibold">
                {candidates.name}
              </div>
              <div className="text-base font-light text-gray-500">
                {candidates.title}
              </div>
              <div key={index} className="flex flex-row">
                {candidates.skills.map((skill, index) => (
                  <p
                    key={index}
                    className="rounded-lg bg-[#78AF9A] bg-opacity-40  p-1 mx-1 my-1 text-sm text-[#218F6E] flex flex-col items-center"
                  >
                    {skill}
                  </p>
                ))}
              </div>
              <div className="flex flex-row font-light text-gray-500">
                <p>Experience: </p>
                <div className="font-semibold text-black">
                  {candidates.experience + " Years"}
                </div>
              </div>
              <button
                className="rounded-lg bg-[#48A381] hover:bg-green-900 px-4 py-2 mx-2 my-1 text-white"
                // onClick={routeChange}
              >
                Profile
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

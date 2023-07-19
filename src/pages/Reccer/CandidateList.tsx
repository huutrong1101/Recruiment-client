import React from "react";
import AvatarCandidate from "../../components/Candidate/Avatar";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../components/Layout/SearchBar";

function CandidateList() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `../candidate-info`;
    navigate(path);
  };
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
      name: "Johnson Dave",
      experience: 10,
      skills: ["Ruby", "PHP", "SQL"],
      title: "Web Designer",
      imgURL: "../../../images/ava.jpg",
    },
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
      name: "Johnson Dave",
      experience: 10,
      skills: ["Ruby", "PHP", "SQL"],
      title: "Web Designer",
      imgURL: "../../../images/ava.jpg",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 p-12 gap-x-10 gap-y-10">
        {candidates.map((candidates, index) => (
          <div className="flex flex-col items-center justify-center px-6 py-2 bg-white border-2 border-gray-300 rounded-xl drop-shadow-lg">
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
                  className="flex flex-col items-center p-1 mx-1 my-1 text-sm text-green-700 bg-green-200 rounded-lg"
                >
                  {skill}
                </p>
              ))}
            </div>
            <div className="flex flex-row font-light text-gray-500">
              <p>Experience: </p>
              <div className="font-semibold">
                {candidates.experience + " Years"}
              </div>
            </div>
            <button
              className="px-4 py-2 mx-2 my-1 text-white bg-green-700 rounded-lg hover:bg-green-900"
              onClick={routeChange}
            >
              Porfile
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default CandidateList;

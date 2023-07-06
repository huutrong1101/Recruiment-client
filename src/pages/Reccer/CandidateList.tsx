import React from "react";
import Avatar from "../../components/Candidate/Avatar";

function CandidateList() {
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
  ];

  return (
    <div className="grid grid-cols-4 grid-rows-3 gap-40">
      {candidates.map((candidates, index) => (
        <div className="bg-gray-400">
          <Avatar imageUrl={candidates.imgURL} size="sm" />
          <div key={index}>{candidates.name}</div>
          <div>{candidates.title}</div>
          <div>{candidates.skills}</div>
          <div>{candidates.experience}</div>
        </div>
      ))}
    </div>
  );
}

export default CandidateList;

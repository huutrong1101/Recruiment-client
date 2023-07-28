import { avatar } from "@material-tailwind/react";
import React from "react";
import blog_image from "../../../images/blog_image.png";
import { GrDocumentText } from "react-icons/gr";

interface MyComponentProps {
  userinfor: {
    name: string;
    title: string;
    avatarUrl: string;
    coverImageUrl: string;
    decriptionOne: string;
    decriptionTwo: string;
  }[];
  listSkills: {
    skills: string[];
  }[];
  personalDetails: {
    label: string;
    value: string;
  }[];
}

const skills = ["Python", "React", "Java"];
const personalDetails = [
  {
    label: "Email",
    value: "vargas@mail.com",
  },
  {
    label: "D.O.B",
    value: "1st Jan, 2000",
  },

  {
    label: "Address",
    value: "Some where",
  },
  {
    label: "City",
    value: "Ho Chi Minh",
  },
  {
    label: "Country",
    value: "Viet Nam",
  },
  {
    label: "Postal Code",
    value: "111111",
  },
  {
    label: "Mobile",
    value: "123-456-7890",
  },
];

export default function RecCandidateDetailCard(props: any) {
  const candidate = props.candidate;
  return (
    <>
      <section className="relative">
        <div className="">
          <div className="relative shrink-0 w-full">
            <img
              src="../../../images/cover2.jpg"
              className="h-64 w-full object-cover lg:rounded-xl shadow "
            />
          </div>
          <div className="md:flex ms-4 -mt-12">
            <div className="md:w-full">
              <div className="relative flex items-end">
                <img
                  src={blog_image}
                  className="h-28 w-28 rounded-full ring-4 ring-slate-50 "
                />
                <div className="ms-4">
                  <p className="text-lg font-semibold">{candidate.name}</p>
                  <p className="text-slate-400">Java Dev</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="relative mt-12 md:pb-24 pb-16">
        <div className="">
          <div className="">
            <div className="grid md:grid-cols-12 grid-cols-1 gap-[30px]">
              <div className="lg:col-span-8 md:col-span-7">
                <p className="text-xl font-semibold">Description:</p>
                <p className="text-slate-400 mt-3">
                  Obviously I'M Web Developer. Web Developer with over 3 years
                  of experience. Experienced with all stages of the development
                  cycle for dynamic web projects. The as opposed to using
                  'Content here, content here', making it look like readable
                  English.
                </p>
                <p className="text-slate-400 mt-3">
                  Data Structures and Algorithms are the heart of programming.
                  Initially most of the developers do not realize its importance
                  but when you will start your career in software development,
                  you will find your code is either taking too much time or
                  taking too much space.
                </p>
                <p className="mt-6 text-xl font-semibold">Skill:</p>
                <div className="grid lg:grid-cols-1 grid-cols-1 mt-4 gap-6">
                  <div className="pt-1">
                    {skills.map((skill, index) => (
                      <p
                        key={index}
                        className="px-4 py-2 gap-2 ml-2 mt-2 inline-flex bg-emerald-600 hover:bg-emerald-700 border-emerald-600  text-white rounded-md"
                      >
                        {skill}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="mt-6 text-xl font-semibold">Experience :</div>
                <p className="text-slate-400 mt-3">
                  Obviously I'M Web Developer. Web Developer with over 3 years
                  of experience. Experienced with all stages of the development
                  cycle for dynamic web projects. The as opposed to using
                  'Content here, content here', making it look like readable
                  English.
                </p>
                <p className="text-slate-400 mt-3">
                  Data Structures and Algorithms are the heart of programming.
                  Initially most of the developers do not realize its importance
                  but when you will start your career in software development,
                  you will find your code is either taking too much time or
                  taking too much space.
                </p>
              </div>
              <div className="lg:col-span-4 md:col-span-5">
                <div className="bg-gray-200 rounded-md shadow p-6 sticky top-20">
                  <p className='class="text-lg font-semibold"'>
                    Personal Detail:
                  </p>
                  {personalDetails.map((items) => (
                    <ul className="list-none mt-4">
                      <li className="flex justify-between mt-3 items-center font-medium">
                        <span>
                          <span className="text-slate-400 me-3">
                            {items.label}
                          </span>
                        </span>
                        <span className="">{items.value}</span>
                      </li>
                    </ul>
                  ))}
                  <div className="mt-3 flex w-full bg-white p-3 items-center justify-center rounded-md shadow ">
                    <GrDocumentText />
                    <span className="font-medium ms-2">
                      {candidate.name}.pdf
                    </span>
                    <a
                      href=""
                      className="px-4 py-2 gap-2 ml-4 mt-2 bg-emerald-600 hover:bg-emerald-700 border-emerald-600  text-white rounded-md"
                    >
                      Download
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

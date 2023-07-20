import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Field from "../../components/Field/Field";

const colourOptions = [
  { value: "reactjs", label: "ReactJS" },
  { value: "html-css", label: "HTML-CSS" },
  { value: "java", label: "Java" },
];

const animatedComponents = makeAnimated();

export default function UserProfileMyInformation() {
  const [education, setEducation] = useState([
    [
      { title: "School Name", value: "" },
      { title: "Specialized", value: "" },
      { title: "Certificate", value: "" },
    ],
  ]);
  const [experience, setExperience] = useState([
    [
      { title: "Company Name", value: "" },
      { title: "Position", value: "" },
      { title: "Time", value: "" },
    ],
  ]);
  const [certificate, setCertificate] = useState([
    [
      { title: "Certificate Name", value: "" },
      { title: "Certification body", value: "" },
      { title: "Certification time", value: "" },
    ],
  ]);
  const [aware, setAware] = useState([
    [
      { title: "Award Name", value: "" },
      { title: "Award organization", value: "" },
      { title: "Award winning time", value: "" },
    ],
  ]);
  const [course, setCourse] = useState([
    [
      { title: "Course name", value: "" },
      { title: "Training organizations", value: "" },
      { title: "Completion time", value: "" },
    ],
  ]);
  const [project, setProject] = useState([
    [
      { title: "Name of project", value: "" },
      { title: "Position in the project", value: "" },
      { title: "Decription", value: "" },
    ],
  ]);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleSelectChange = (selectedOptions: any) => {
    setSelectedOptions(selectedOptions);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(
      JSON.stringify({
        education,
        experience,
        certificate,
        aware,
        course,
        project,
        selectedOptions,
      }),
    );
  };

  return (
    <div className="flex flex-col flex-1 gap-4">
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="pb-12">
          <div className="grid grid-cols-1 mt-10 gap-x-6 gap-y-2 sm:grid-cols-6">
            <Field
              label="Education"
              values={education}
              onChange={setEducation}
            />

            <Field
              label="Experience"
              values={experience}
              onChange={setExperience}
            />

            <div className="pb-8 mb-3 border-b col-span-full border-gray-900/10">
              <label
                htmlFor="street-address"
                className="text-xl font-bold leading-7 text-center text-green-600 font-Outfit"
              >
                Skill
              </label>
              <div className="flex flex-wrap items-center justify-start mt-3 ">
                <Select
                  defaultValue={[colourOptions[0]]}
                  isMulti
                  name="colors"
                  options={colourOptions}
                  className="w-full px-4 basic-multi-select"
                  classNamePrefix="select"
                  closeMenuOnSelect={false}
                  components={animatedComponents}
                  value={selectedOptions}
                  onChange={handleSelectChange}
                  styles={{
                    menu: (provided) => ({
                      ...provided,
                      width: "96.5%",
                    }),
                  }}
                />
              </div>
            </div>

            <Field
              label="Certificate"
              values={certificate}
              onChange={setCertificate}
            />

            <Field label="Aware" values={aware} onChange={setAware} />

            <Field label="Course" values={course} onChange={setCourse} />

            <Field label="Project" values={project} onChange={setProject} />
          </div>
        </div>
        <div className="flex items-center justify-end gap-x-6">
          <button
            type="submit"
            className="px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-emerald-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

import React, { useState } from "react";
import Select from "react-select";
import makeAnimated from "react-select/animated";
import Field from "../../components/Field/FieldContainer";
import { CloudArrowUpIcon } from "@heroicons/react/24/solid";

const colourOptions = [
  { value: "reactjs", label: "ReactJS" },
  { value: "html-css", label: "HTML-CSS" },
  { value: "java", label: "Java" },
];

const animatedComponents = makeAnimated();

export default function CreateCV() {
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

  const [file, setFile] = useState<File | null>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newFile: File | undefined = event.target.files?.[0];
    setFile(newFile || null);
  };

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
        file,
      }),
    );
    console.log(file);
  };

  return (
    <div className="flex flex-col justify-center mt-5">
      <h3 className="text-3xl font-bold leading-7 text-center text-green-600 font-Outfit">
        CREATE YOUR RESUME
      </h3>
      <div>
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="space-y-12">
            <div className="pb-12 ">
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
                      className="w-[93%] px-4 basic-multi-select"
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

                <div className="pb-8 mx-2 border-b col-span-full border-gray-900/10">
                  <label
                    htmlFor="street-address"
                    className="text-xl font-bold leading-7 text-center text-green-600 font-Outfit"
                  >
                    Upload Resume
                  </label>

                  <div className="flex flex-col items-center gap-2 p-4 rounded-lg cursor-pointer bg-violet-50 text-violet-500 hover:bg-violet-100">
                    <label
                      htmlFor="file-input"
                      className="flex flex-col items-center px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    >
                      <CloudArrowUpIcon className="w-6 h-6" />
                      <span>Choose some files to upload</span>
                    </label>

                    <span>{file && file.name}</span>

                    <input
                      type="file"
                      id="file-input"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                  </div>

                  {/* <div className="flex flex-col items-center justify-center p-6">
                    <input
                      type="file"
                      id="file-input"
                      className="hidden"
                      onChange={handleFileUpload}
                    />
                    <label
                      htmlFor="file-input"
                      className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
                    >
                      Choose a file
                    </label>
                    <p>{file ? file.name : "No file chosen"}</p>
                  </div> */}
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end my-4 gap-x-6">
            <button
              type="button"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-emerald-600 hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

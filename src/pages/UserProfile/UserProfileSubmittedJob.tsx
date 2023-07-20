import classnames from "classnames";
import InputIcon from "../../components/InputIcon/InputIcon";
import { HiFunnel, HiMagnifyingGlass } from "react-icons/hi2";
import { Listbox, Transition } from "@headlessui/react";
import Table from "../../components/Table/Table";
import Button from "../../components/Button/Button";
import { Fragment, useState } from "react";
import InterviewStatusBadge from "../../components/Badge/JobStatusBadge";
import JobStatusBadge from "../../components/Badge/JobStatusBadge";
import { useForm } from "react-hook-form";

const APPLICANT_STATUS = ["Any", "Passed", "Reviewing", "Pending", "Failed"];

export default function UserProfileSubmittedJob() {
  const { register, handleSubmit } = useForm();
  const [filterType, setFilterType] = useState<number>(0);

  const onSubmit = (data: any) => {};

  return (
    <div
      className={`px-4 py-2 bg-zinc-100 mt-2 rounded-xl flex flex-col gap-2 flex-1`}
    >
      {/* Header */}
      <div className={classnames(`flex flex-col gap-4`)}>
        <h1 className={classnames(`font-semibold text-2xl pt-2`)}>
          Submitted Jobs
        </h1>

        {/* Filter groups */}
        <div className={classnames(`flex flex-row items-center gap-4`)}>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className={classnames(`w-10/12`)}
          >
            <InputIcon
              icon={<HiMagnifyingGlass />}
              className={`text-base px-3 py-2 w-full outline-none`}
              placeholder="Search for the applicant"
              register={register}
              label="search"
            />
          </form>
          <div className="w-32">
            <Listbox value={filterType} onChange={setFilterType}>
              <div className={classnames(`relative`)}>
                <Listbox.Button
                  className={classnames(
                    `bg-white px-3 py-2 border rounded-md w-full`,
                    `text-left flex flex-row items-center gap-4`,
                    filterType !== 0 ? `text-emerald-600` : `text-zinc-500`,
                  )}
                >
                  <span>
                    <HiFunnel />
                  </span>
                  <span>{APPLICANT_STATUS[filterType]}</span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {APPLICANT_STATUS.map((status, personIdx) => (
                      <Listbox.Option
                        key={status}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active
                              ? "bg-emerald-100 text-emerald-900"
                              : "text-zinc-600"
                          }`
                        }
                        value={personIdx}
                      >
                        {({ selected }: any) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {status}
                            </span>
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
          </div>
        </div>
      </div>

      {/* Body */}
      <div>
        <Table
          rows={[
            {
              id: "jobTitle",
              value: "Job Title",
            },
            {
              id: "date",
              value: "Date",
            },
            {
              id: "status",
              value: "Status",
            },
          ]}
          data={[
            {
              jobTitle: "Front End Developer Intern",
              date: new Date().toDateString(),
              status: <JobStatusBadge status="passed" />,
            },
            {
              jobTitle: "Back End Developer",
              date: new Date().toDateString(),
              status: <JobStatusBadge status="reviewing" />,
            },
            {
              jobTitle: "Full Stack Developer",
              date: new Date().toDateString(),
              status: <JobStatusBadge status="pending" />,
            },
            {
              jobTitle: "Technical Support",
              date: new Date().toDateString(),
              status: <JobStatusBadge status="failed" />,
            },
          ]}
        />
      </div>

      {/* Footer */}
      <div
        className={classnames(
          `flex mb-4 flex-row px-2 text-zinc-500 text-sm items-center gap-4`,
        )}
      >
        <div>Page 1 of 10</div>
        <div className={classnames(`flex flex-row-reverse flex-1 gap-4`)}>
          <Button text="Next" className={classnames(``)} size="sm" />
          <Button text="Previous" className={classnames(``)} size="sm" />
        </div>
      </div>
    </div>
  );
}

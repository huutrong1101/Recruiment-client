import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import classnames from "classnames";
import { HiMagnifyingGlass, HiFunnel } from "react-icons/hi2";

import InputIcon from "../../../components/InputIcon/InputIcon";
import UserProfileInterviewListViewTable from "../../../components/Table/Table";

import PrimaryButton from "../../../components/PrimaryButton/PrimaryButton";
import Button from "../../../components/Button/Button";
import { useForm } from "react-hook-form";

const INTERVIEW_STATUS = ["Any", "Pending", "Finished"];

export default function UserProfileInterviewListView() {
  const [filterType, setFilterType] = useState<number>(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <div
      className={`px-4 py-2 bg-zinc-100 mt-2 rounded-xl flex flex-col gap-2`}
    >
      {/* Header */}
      <div className={classnames(`flex flex-col gap-4`)}>
        <h1 className={classnames(`font-semibold text-2xl pt-2`)}>
          Interview Recent
        </h1>

        {/* Filter groups */}
        <div className={classnames(`flex flex-row items-center gap-4`)}>
          <div className={classnames(`w-10/12`)}>
            <InputIcon
              icon={<HiMagnifyingGlass />}
              className={`text-base px-3 py-2 w-full outline-none`}
              placeholder="Search for the interview"
              type={`text`}
              register={register}
              label={`search`}
            />
          </div>
          <div className="w-32">
            {/* <span className={classnames(`text-xs text-zinc-300`)}>Filter</span> */}
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
                  <span>{INTERVIEW_STATUS[filterType]}</span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {INTERVIEW_STATUS.map((status, personIdx) => (
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
        <UserProfileInterviewListViewTable
          rows={[
            {
              id: "job",
              value: "Position recruitment",
            },
            {
              id: "date",
              value: "Date",
            },
            {
              id: "interviewer",
              value: "Interviewer",
            },
          ]}
          data={[
            {
              job: "Interview for Jobs #1722",
              date: new Date().toDateString(),
              interviewer: "Trong",
            },
            {
              job: "Interview for Jobs #481",
              date: new Date().toDateString(),
              interviewer: "Trong",
            },
            {
              job: "Interview for React #012",
              date: new Date().toDateString(),
              interviewer: "Trong",
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

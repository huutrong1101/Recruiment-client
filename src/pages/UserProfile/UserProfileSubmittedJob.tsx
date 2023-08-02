import classnames from "classnames";
import InputIcon from "../../components/InputIcon/InputIcon";
import { HiFunnel, HiMagnifyingGlass } from "react-icons/hi2";
import { Listbox, Transition } from "@headlessui/react";
import Table from "../../components/Table/Table";
import Button from "../../components/Button/Button";
import { Fragment, useEffect, useState } from "react";

import JobStatusBadge from "../../components/Badge/JobStatusBadge";
import { useForm } from "react-hook-form";
import { getCandidateSubmittedJobs } from "../../services/CandidateService";
import {
  createSearchParams,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";

export default function UserProfileSubmittedJob() {
  const [filterType, setFilterType] = useState<number>(0);
  const [searchParams, setSearchParams] = useSearchParams();
  const { handleSubmit, register } = useForm();
  const onSubmit = (data: any) => {};
  const [applicants, setApplicants] = useState<object[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const index = searchParams.get("index") || 1;
    const size = searchParams.get("size") || 10;

    getCandidateSubmittedJobs({ index, size })
      .then((response) => {
        const { result } = response.data;
        // Normalize the result onto a fitted table data
        // Set onto a data list for rendering
        setApplicants(normalizeResponseResult(result));
      })
      .catch(() => {
        // toast.error(``)
      });
  }, [searchParams]);

  const normalizeResponseResult = (result: any) => {
    return (
      result.content as {
        jobApplyId: string;
        status: "NOT_RECEIVED" | "RECEIVED" | "PASS" | "FAILED";
        jobName: string;
        date: Date;
      }[]
    ).map((applicant) => {
      return {
        jobTitle: applicant.jobName,
        date: applicant.date,
        status: <JobStatusBadge status={applicant.status} />,
      };
    });
  };

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
          <div className={classnames(`w-10/12`)}>
            <InputIcon
              icon={<HiMagnifyingGlass />}
              className={`text-base px-3 py-2 w-full outline-none`}
              placeholder="Search for the applicant"
              type={`text`}
              register={register}
              label={`search`}
            />
          </div>
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
                  {/* <span>{APPLICANT_STATUS[filterType]}</span> */}
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute w-full py-1 mt-1 overflow-auto text-base bg-white rounded-md shadow-lg max-h-60 ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {/* {APPLICANT_STATUS.map((status, personIdx) => (
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
                    ))} */}
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
          data={applicants}
          isModal={false}
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
          <Button
            text="Next"
            className={classnames(``)}
            size="sm"
            onClick={() => {
              setSearchParams((prev) => {
                const index = prev.get("index") || "1";
                const size = prev.get("size") || "10";

                return {
                  size,
                  index: (Number.parseInt(index) + 1).toString(),
                };
              });
            }}
          />

          <Button
            text="Previous"
            className={classnames(``)}
            size="sm"
            onClick={() => {
              setSearchParams({});
            }}
          />
        </div>
      </div>
    </div>
  );
}

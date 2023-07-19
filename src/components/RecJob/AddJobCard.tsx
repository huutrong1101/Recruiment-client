import React, { useState, useEffect, Fragment } from "react";
import classNames from "classnames";
import PrimaryButton from "../PrimaryButton/PrimaryButton";
import { Menu, Transition } from "@headlessui/react";
import { JobData } from "../../data/jobData";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
} from "@heroicons/react/20/solid";

export default function AddJobCard({ cardData, setCardData }: any) {
  return (
    <div
      className={classNames(
        `w-full bg-white shadow-sm px-4 py-6 rounded-xl border sticky top-20`,
        `flex flex-col gap-4`,
      )}
    >
      <h1 className={classNames(`font-semibold text-xl`)}>Job Information</h1>
      <div className={classNames(`flex flex-col gap-2`)}>
        {cardData != undefined &&
          cardData.map((item: { icon: any; name: string; value: string }) => {
            return (
              <div>
                <JobInformationCardItem icon={item.icon} name={item.name} />
                <div>
                  <Menu as="div" className={classNames("relative")}>
                    <Menu.Button
                      className={classNames(
                        "cursor-pointer flex items-center justify-between w-2/5 px-1 border rounded-full bg-gray-100",
                      )}
                    >
                      <span className={classNames("ml-2 text-gray-500")}>
                        {item.value}
                      </span>
                      <ChevronDownIcon
                        className={classNames("w-[20px] ml-4")}
                      />
                      {/* Drop down  */}
                    </Menu.Button>
                    <Transition
                      as={Fragment}
                      enter="transition ease-out duration-100"
                      enterFrom="transform opacity-0 scale-95"
                      enterTo="transform opacity-100 scale-100"
                      leave="transition ease-in duration-75"
                      leaveFrom="transform opacity-100 scale-100"
                      leaveTo="transform opacity-0 scale-95"
                    >
                      <Menu.Items className="absolute left-0 z-10 w-2/5 mt-2 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="py-1">
                          {JobData &&
                            JobData.listJobInfoSearch &&
                            JobData.listJobInfoSearch[item.name].map(
                              (e, _idx) => (
                                <Menu.Item key={_idx}>
                                  {({ active }) => (
                                    <p
                                      className={classNames(
                                        active
                                          ? "bg-gray-100 text-gray-900"
                                          : "text-gray-700",
                                        "block px-4 py-2 text-sm",
                                      )}
                                      onClick={() => {
                                        let willChangeData = [...cardData];
                                        let idx = cardData.findIndex(
                                          (_item: any) =>
                                            _item.name === item.name,
                                        );
                                        willChangeData[idx].value = (
                                          e as any
                                        ).value;
                                        setCardData([...willChangeData]);
                                      }}
                                    >
                                      {(e as any).value}
                                    </p>
                                  )}
                                </Menu.Item>
                              ),
                            )}
                        </div>
                      </Menu.Items>
                    </Transition>
                  </Menu>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

interface JobInformationCardItemProps {
  icon: React.ReactElement;
  name: string;
}

function JobInformationCardItem({ icon, name }: JobInformationCardItemProps) {
  return (
    <div className={classNames(`flex flex-row items-center gap-4`)}>
      <div className={classNames(`w-1/12 mx-2`)}>{icon}</div>
      <div className={classNames(`flex flex-col flex-1`)}>
        <span>{name}</span>
      </div>
    </div>
  );
}

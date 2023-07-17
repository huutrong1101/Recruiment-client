import { Fragment, useState } from "react";
import { Tab, Listbox, Transition } from "@headlessui/react";
import classnames from "classnames";
import {
  HiListBullet,
  HiCalendarDays,
  HiMagnifyingGlass,
  HiFunnel,
} from "react-icons/hi2";
import UserProfileInterviewListView from "./UserProfileInterviewListView";

function UserProfileInterviewCalendarView() {
  return <>Calendar View</>;
}

const viewModeItems = [
  {
    name: "List view",
    icon: <HiListBullet />,
  },
  {
    name: "Calendar View",
    icon: <HiCalendarDays />,
  },
];

export default function UserProfileInterviews() {
  return (
    <div className="flex-1">
      <Tab.Group>
        <Tab.List
          className={classnames(
            `flex flex-row gap-2 bg-zinc-100 p-1 rounded-xl`,
          )}
        >
          {viewModeItems.map((_, _idx) => {
            return (
              <Tab
                className={({ selected }) =>
                  classnames(
                    `px-3 py-2 rounded-xl transition-all duration-100 ease-in-out`,
                    `hover:bg-zinc-300 flex flex-row items-center gap-2`,
                    selected
                      ? `bg-emerald-600 text-emerald-300 hover:!bg-emerald-800`
                      : ``,
                  )
                }
                key={_.name}
              >
                <span>{_.icon}</span>
                <span>{_.name}</span>
              </Tab>
            );
          })}
        </Tab.List>

        {/* Content items */}
        <Tab.Panels>
          <Tab.Panel>
            <UserProfileInterviewListView />
          </Tab.Panel>
          <Tab.Panel>
            <UserProfileInterviewCalendarView />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

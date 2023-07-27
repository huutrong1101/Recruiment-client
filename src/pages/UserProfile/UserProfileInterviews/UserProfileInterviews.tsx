import { Fragment, useState } from "react";
import { Tab } from "@headlessui/react";
import classnames from "classnames";
import { HiListBullet, HiCalendarDays } from "react-icons/hi2";
import UserProfileInterviewListView from "./UserProfileInterviewListView";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import timeGridPlugin from "@fullcalendar/timegrid";
import listPlugin from "@fullcalendar/list";
import Modal from "../../../components/Modal/Modal";
import classNames from "classnames";
import moment from "moment";

export interface TableRow {
  id: string;
  value: any;
}

export interface TableProps<T> {
  rows: TableRow[];
  data: T[];
}

function UserProfileInterviewCalendarView<T>({ rows, data }: TableProps<T>) {
  let [isOpen, setIsOpen] = useState(false);

  const [itemClick, setItemClick] = useState({
    job: "",
    dateData: "",
    interviewer: "",
    link: "",
  });

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  const convertDataForFullCalendar = (data: any) => {
    const initialEvents = data.map((item: any, index: any) => {
      const dateObject = moment(item.date);
      return {
        id: index.toString(),
        title: item.job,
        date: dateObject.format("YYYY-MM-DD"),
        interviewer: item.interviewer,
        link: item.link,
        dateData: item.date,
        job: item.job,
      };
    });

    return initialEvents;
  };

  const newData = convertDataForFullCalendar(data);

  const handleEventClick = (selected: any) => {
    openModal();
    setItemClick(selected.event.extendedProps);
  };

  return (
    <>
      <div className="w-full mt-2">
        <FullCalendar
          height="70vh"
          plugins={[
            dayGridPlugin,
            timeGridPlugin,
            interactionPlugin,
            listPlugin,
          ]}
          headerToolbar={{
            left: "prev,next today",
            center: "title",
            right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
          }}
          initialView="dayGridMonth"
          editable={true}
          selectable={true}
          selectMirror={true}
          dayMaxEvents={true}
          // select={handleDateClick}
          eventClick={handleEventClick}
          initialEvents={newData}
        />
      </div>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title="Interview Detail"
        titleClass="text-xl font-bold leading-7 text-center text-green-600"
        cancelTitle="Cancel"
        successClass="text-green-900 bg-green-100 hover:bg-green-200 focus-visible:ring-green-500"
        successTitle="OK"
        size="max-w-xl"
        handleSucces={closeModal}
      >
        <div className="flex items-center justify-center gap-5 mt-2">
          <div className="w-full">
            <div className="flex flex-row justify-center mt-2">
              <div className="flex flex-col w-[40%] ">
                {rows.map((row, _rowIdx) => {
                  return (
                    <div
                      key={`thead-${row.id}-${_rowIdx}`}
                      className={classNames(
                        `font-semibold text-zinc-400 text-left py-2 px-4 text-xs  rounded-xl`,
                        ` hover:text-emerald-600 transition-color duration-75`,
                      )}
                    >
                      {row.value} :
                    </div>
                  );
                })}
              </div>
              <div className="flex flex-col w-[60%]">
                <div
                  className={classNames(
                    `text-zinc-400 text-left py-2 px-4 text-xs  rounded-xl`,
                    ` hover:text-emerald-600 transition-color duration-75`,
                  )}
                >
                  {itemClick.job}
                </div>
                <div
                  className={classNames(
                    `text-zinc-400 text-left py-2 px-4 text-xs  rounded-xl`,
                    ` hover:text-emerald-600 transition-color duration-75`,
                  )}
                >
                  {itemClick.dateData}
                </div>
                <div
                  className={classNames(
                    `text-zinc-400 text-left py-2 px-4 text-xs  rounded-xl`,
                    ` hover:text-emerald-600 transition-color duration-75`,
                  )}
                >
                  {itemClick.interviewer}
                </div>
                <a
                  href={itemClick.link}
                  target="_blank"
                  className={classNames(
                    `text-zinc-400 text-left py-2 px-4 text-xs  rounded-xl`,
                    ` hover:text-emerald-600 transition-color duration-75`,
                  )}
                >
                  {itemClick.link}
                </a>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
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

const rows = [
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
  {
    id: "link",
    value: "Link",
  },
];
const data = [
  {
    job: "Interview for Jobs #1722",
    date: new Date().toDateString(),
    interviewer: "Trong",
    link: "https://meet.google.com/_meet/rxs-hbwt-wrg?ijlm=1689842478187&adhoc=1&hs=187",
  },
  {
    job: "Interview for Jobs #481",
    date: new Date().toDateString(),
    interviewer: "Trong",
    link: "Google Meet Link",
  },
  {
    job: "Interview for React #012",
    date: new Date().toDateString(),
    interviewer: "Trong",
    link: "Google Meet Link",
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
            <UserProfileInterviewListView rows={rows} data={data} />
          </Tab.Panel>
          <Tab.Panel>
            <UserProfileInterviewCalendarView rows={rows} data={data} />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}

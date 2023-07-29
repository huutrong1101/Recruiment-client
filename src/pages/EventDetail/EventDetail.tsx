import React, { useEffect, useState } from "react";
import classnames from "classnames";
import blog_image from "../../../images/blog_image.png";
import { CalendarDaysIcon, ClockIcon } from "@heroicons/react/24/outline";
import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoGitlab,
  BiLogoTwitter,
} from "react-icons/bi";

import {
  HiUserCircle,
  HiEnvelope,
  HiMapPin,
  HiPhone,
  HiKey,
} from "react-icons/hi2";

import avatar from "../../../images/ava.jpg";
import { data } from "../../data/homeData";
import BlogCard from "../../components/BlogCard/BlogCard";
import InputIcon from "../../components/InputIcon/InputIcon";
import Modal from "../../components/Modal/Modal";
import { useForm } from "react-hook-form";
import { useParams } from "react-router-dom";
import { EventInterface } from "../../services/services";
import { useAppSelector } from "../../hooks/hooks";
import axiosInstance from "../../utils/AxiosInstance";
import moment from "moment";
import LoadSpinner from "../../components/LoadSpinner/LoadSpinner";

export default function EventDetail() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { eventId } = useParams();

  const [event, setEvent] = useState<EventInterface | null>(null);

  const events: EventInterface[] = useAppSelector((state) => state.Home.events);

  let [isOpen, setIsOpen] = useState(false);

  const handleApply = () => {
    alert("Apply success");
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  useEffect(() => {
    const getEventDetail = async () => {
      const response = await axiosInstance.get(`events/${eventId}`);
      setEvent(response.data.result);
    };
    getEventDetail();
  }, [eventId]);

  const formattedDate = moment(event?.startAt).format("Do MMMM, YYYY");

  return (
    <>
      <div className={classnames(`event-detail`)}>
        {event ? (
          <>
            <div className={classnames("flex gap-5")}>
              <div
                className={classnames("bg-white rounded-lg shadow-lg w-[70%]")}
              >
                <div>
                  <img
                    src={event?.img || blog_image}
                    alt="blog_image"
                    className={classnames("w-full object-cover")}
                  />
                </div>

                <div
                  className={classnames(
                    "flex items-center justify-between px-10 mt-4",
                  )}
                >
                  <div className={classnames("flex items-center gap-1")}>
                    <CalendarDaysIcon className={classnames(`w-[20px]`)} />
                    <p>{formattedDate}</p>
                  </div>
                  <div className={classnames("flex items-center gap-1")}>
                    <p>By Google</p>
                  </div>
                  <div className={classnames("flex items-center gap-1")}>
                    <ClockIcon className={classnames(`w-[20px]`)} />
                    <p>{event?.time}</p>
                  </div>
                </div>

                <div className={classnames("mt-4 px-10")}>
                  <h3
                    className={classnames(
                      "text-black font-outfit text-2xl font-medium leading-31 tracking-wider capitalize",
                    )}
                  >
                    {event?.title}
                  </h3>
                  <div className={classnames("mt-2")}>
                    <ul className={classnames("flex flex-col gap-2")}>
                      <li>
                        <p>{event?.description}</p>
                      </li>
                    </ul>
                  </div>
                </div>

                <div
                  className={classnames(
                    "px-10 my-4 flex items-center justify-end",
                  )}
                >
                  <h3
                    className={classnames(
                      "text-black font-outfit text-[17px] font-medium leading-31 tracking-wider capitalize",
                    )}
                  >
                    -{event?.author}-
                  </h3>
                </div>
              </div>

              {/* Author  */}
              <div
                className={classnames(
                  "bg-white rounded-lg shadow-lg w-[30%] h-fit sticky top-0",
                )}
              >
                <div
                  className={classnames(
                    "flex items-center justify-center p-2 bg-gray-300 rounded-tl-lg rounded-tr-lg",
                  )}
                >
                  <h3
                    className={classnames(
                      "text-center text-black text-lg font-medium tracking-wider leading-7 capitalize",
                    )}
                  >
                    Author
                  </h3>
                </div>
                <div
                  className={classnames(
                    "flex flex-col gap-1 items-center justify-center my-4",
                  )}
                >
                  <img
                    src={avatar}
                    alt=""
                    className={classnames(
                      "w-[175px] h-[175px] rounded-full bg-gray-500",
                    )}
                  />
                  <h3>{event?.author}</h3>
                  <h3>{event?.name}</h3>
                </div>
                <div className="flex items-center justify-center p-2 bg-gray-300">
                  <h3
                    className={classnames(
                      "text-center text-black text-lg font-medium tracking-wider leading-7 capitalize",
                    )}
                  >
                    Contract
                  </h3>
                </div>
                <div className={classnames("my-3")}>
                  <ul
                    className={classnames(
                      "flex items-center justify-center gap-3",
                    )}
                  >
                    <li className="p-1 border border-gray-500 rounded-lg cursor-pointer hover:bg-emerald-300 hover:text-white">
                      <BiLogoFacebook size={20} />
                    </li>
                    <li className="p-1 border border-gray-500 rounded-lg cursor-pointer hover:bg-emerald-300 hover:text-white">
                      <BiLogoInstagram size={20} />
                    </li>
                    <li className="p-1 border border-gray-500 rounded-lg cursor-pointer hover:bg-emerald-300 hover:text-white">
                      <BiLogoLinkedin size={20} />
                    </li>
                    <li className="p-1 border border-gray-500 rounded-lg cursor-pointer hover:bg-emerald-300 hover:text-white">
                      <BiLogoGitlab size={20} />
                    </li>
                    <li className="p-1 border border-gray-500 rounded-lg cursor-pointer hover:bg-emerald-300 hover:text-white">
                      <BiLogoTwitter size={20} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className={classnames("mt-5")}>
              <button
                className="px-6 py-3 text-white rounded-lg bg-emerald-600 hover:bg-emerald-800"
                onClick={openModal}
              >
                Apply
              </button>
            </div>

            <Modal
              isOpen={isOpen}
              onClose={closeModal}
              title="Apply for DigitalOcean Launches First Canadian Data Centre In Toronto"
              titleClass="text-lg font-medium leading-6 text-center text-gray-900"
              cancelTitle="Cancel"
              successClass="text-red-900 bg-red-100 hover:bg-red-200 focus-visible:ring-red-500"
              successTitle="Apply"
              size="max-w-3xl"
              handleSucces={handleApply}
            >
              <div>
                <div className="flex gap-5 mt-2">
                  <div className="w-1/2">
                    <h3 className="text-xl font-bold leading-7 text-center text-green-600">
                      Information
                    </h3>
                    <div className="flex flex-col gap-5 mt-4">
                      <InputIcon
                        icon={<HiUserCircle />}
                        placeholder={`Full Name`}
                        type={`text`}
                        register={register}
                        label={`fullName`}
                      />

                      <InputIcon
                        icon={<HiEnvelope />}
                        type={`text`}
                        placeholder={`Email`}
                        register={register}
                        label={`email`}
                      />

                      <InputIcon
                        icon={<HiMapPin />}
                        type={`text`}
                        placeholder={`Location`}
                        register={register}
                        label={`location`}
                      />

                      <InputIcon
                        icon={<HiPhone />}
                        type={`text`}
                        placeholder={`Phone`}
                        register={register}
                        label={`phone`}
                      />
                    </div>
                  </div>
                  <div className="w-1/2">
                    <h3 className="text-xl font-bold leading-7 text-center text-green-600">
                      Resume
                    </h3>
                    <div className="flex flex-col gap-5 mt-4">
                      <div>
                        <label
                          className={classnames(
                            `flex flex-row items-center justify-start`,
                            `bg-white text-zinc-500`,
                            `rounded-md`,
                            `border w-full`,
                          )}
                        >
                          <input
                            type="radio"
                            value="resume1"
                            className={classnames(`w-4 mx-2`)}
                            {...register("resume")}
                            defaultChecked
                          />
                          <span
                            className={classnames(
                              `p-2`,
                              `font-light`,
                              `outline-none rounded-r-md`,
                              `w-full`,
                            )}
                          >
                            Resume #1
                          </span>
                        </label>
                      </div>
                      <div>
                        <label
                          className={classnames(
                            `flex flex-row items-center justify-start`,
                            `bg-white text-zinc-500`,
                            `rounded-md`,
                            `border w-full`,
                          )}
                        >
                          <input
                            type="radio"
                            value="resume2"
                            className={classnames(`w-4 mx-2`)}
                            {...register("resume")}
                          />
                          <span
                            className={classnames(
                              `p-2`,
                              `font-light`,
                              `outline-none rounded-r-md`,
                              `w-full`,
                            )}
                          >
                            Resume #2
                          </span>
                        </label>
                      </div>
                      <div>
                        <label
                          className={classnames(
                            `flex flex-row items-center justify-start`,
                            `bg-white text-zinc-500`,
                            `rounded-md`,
                            `border w-full`,
                          )}
                        >
                          <input
                            type="radio"
                            value="resume3"
                            className={classnames(`w-4 mx-2`)}
                            {...register("resume")}
                          />
                          <span
                            className={classnames(
                              `p-2`,
                              `font-light`,
                              `outline-none rounded-r-md`,
                              `w-full`,
                            )}
                          >
                            Resume #3
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="my-5">
                  <textarea
                    className="w-full p-3 border border-gray-500"
                    placeholder="Your Note"
                    {...register("note")}
                  />
                </div>
              </div>
            </Modal>

            <div className="mt-[80px]">
              <div className={classnames("text-center")}>
                <h3
                  className={classnames(
                    "text-black text-2xl font-medium leading-7 tracking-wider capitalize",
                  )}
                >
                  Related Blogs
                </h3>
                <p
                  className={classnames(
                    "text-gray-400 text-center text-lg font-medium capitalize",
                  )}
                >
                  Search all the open positions on the web. Get your own
                  personalized salary estimate. Read reviews on over 30000+
                  companies worldwide.
                </p>
              </div>

              <div className="flex flex-wrap -mx-4 mt-[50px]">
                {/* <!-- Card --> */}
                {events &&
                  events.slice(0, 3).map((event) => (
                    <div key={event.id} className="w-full px-4 mb-8 md:w-1/3">
                      <BlogCard event={event} />
                    </div>
                  ))}
              </div>
            </div>
          </>
        ) : (
          <div className="flex justify-center my-4">
            <LoadSpinner className="text-3xl text-emerald-500" />
          </div>
        )}
      </div>
    </>
  );
}

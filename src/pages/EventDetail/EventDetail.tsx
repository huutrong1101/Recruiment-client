import React from "react";
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
import avatar from "../../../images/ava.jpg";
import PrimaryButton from "../../components/PrimaryButton/PrimaryButton";
import { data } from "../../data/homeData";
import BlogCard from "../../components/BlogCard/BlogCard";

export default function EventDetail() {
  return (
    <>
      <div className={classnames("flex gap-5")}>
        <div className={classnames("bg-white rounded-lg shadow-lg w-[70%]")}>
          <div>
            <img
              src={blog_image}
              alt="blog_image"
              className={classnames("w-full object-cover")}
            />
          </div>

          <div
            className={classnames(
              "flex items-center justify-between px-10 mt-4"
            )}
          >
            <div className={classnames("flex items-center gap-1")}>
              <CalendarDaysIcon className={classnames(`w-[20px]`)} />
              <p>28th May, 2023</p>
            </div>
            <div className={classnames("flex items-center gap-1")}>
              <p>By Google</p>
            </div>
            <div className={classnames("flex items-center gap-1")}>
              <ClockIcon className={classnames(`w-[20px]`)} />
              <p>8 Min read</p>
            </div>
          </div>

          <div className={classnames("mt-4 px-10")}>
            <h3
              className={classnames(
                "text-black font-outfit text-2xl font-medium leading-31 tracking-wider capitalize"
              )}
            >
              DigitalOcean launches first Canadian data centre in Toronto
            </h3>
            <div className={classnames("mt-2")}>
              <ul className={classnames("flex flex-col gap-2")}>
                <li>
                  <p>
                    The most well-known dummy text is the 'Lorem Ipsum', which
                    is said to have originated in the 16th century. Lorem Ipsum
                    is composed in a pseudo-Latin language which more or less
                    corresponds to 'proper' Latin. It contains a series of real
                    Latin words. This ancient dummy text is also
                    incomprehensible, but it imitates the rhythm of most
                    European languages in Latin script. "There are many
                    variations of passages of Lorem Ipsum available, but the
                    majority have suffered alteration in some form, by injected
                    humour, or randomised words which don't look even slightly
                    believable."
                  </p>
                </li>
                <li>
                  <p>
                    The advantage of its Latin origin and the relative
                    meaninglessness of Lorum Ipsum is that the text does not
                    attract attention to itself or distract the viewer's
                    attention from the layout. Some brokerages with less than 50
                    employees have had to terminate contracts with over 90% of
                    their employees, only retaining key positions, and almost
                    stop operations. More than 90% of the firms reported a fall
                    in earnings in the first quarter of this year. In the case
                    of businesses with less than 100 employees, they were down
                    by 70-80%.
                  </p>
                </li>
                <li>
                  <p>
                    A survey the association did recently found 23% of
                    brokerages saying they could only operate until the end of
                    the third quarter if the market continues to remain bad, and
                    43% saying they could survive until year-end.
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={classnames("px-10 my-4 flex items-center justify-end")}
          >
            <h3
              className={classnames(
                "text-black font-outfit text-[17px] font-medium leading-31 tracking-wider capitalize"
              )}
            >
              -Cristina Romsey-
            </h3>
          </div>
        </div>

        {/* Author  */}
        <div
          className={classnames(
            "bg-white rounded-lg shadow-lg w-[30%] h-fit sticky top-0"
          )}
        >
          <div
            className={classnames(
              "flex items-center justify-center p-2 bg-gray-300 rounded-tl-lg rounded-tr-lg"
            )}
          >
            <h3
              className={classnames(
                "text-center text-black text-lg font-medium tracking-wider leading-7 capitalize"
              )}
            >
              Author
            </h3>
          </div>
          <div
            className={classnames(
              "flex flex-col gap-1 items-center justify-center my-4"
            )}
          >
            <img
              src={avatar}
              alt=""
              className={classnames(
                "w-[175px] h-[175px] rounded-full bg-gray-500"
              )}
            />
            <h3>Content Writer - journalist </h3>
            <h3>Cristina Romsey</h3>
          </div>
          <div className="flex items-center justify-center p-2 bg-gray-300">
            <h3
              className={classnames(
                "text-center text-black text-lg font-medium tracking-wider leading-7 capitalize"
              )}
            >
              Contract
            </h3>
          </div>
          <div className={classnames("my-3")}>
            <ul
              className={classnames("flex items-center justify-center gap-3")}
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
        <button className="px-6 py-3 text-white rounded-lg bg-emerald-600 hover:bg-emerald-800">
          Apply
        </button>
      </div>

      <div className="mt-[80px]">
        <div className={classnames("text-center")}>
          <h3
            className={classnames(
              "text-black text-2xl font-medium leading-7 tracking-wider capitalize"
            )}
          >
            Related Blogs
          </h3>
          <p
            className={classnames(
              "text-gray-400 text-center text-lg font-medium capitalize"
            )}
          >
            Search all the open positions on the web. Get your own personalized
            salary estimate. Read reviews on over 30000+ companies worldwide.
          </p>
        </div>

        <div className="flex flex-wrap -mx-4 mt-[50px]">
          {/* <!-- Card --> */}
          {data.listEvent &&
            data.listEvent.map((event) => (
              <div key={event.id} className="w-full px-4 mb-8 md:w-1/3">
                <BlogCard event={event} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
}
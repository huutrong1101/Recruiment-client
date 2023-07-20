import React, { useState, Fragment } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Container from "../Container/Container";
import MobileNavbar from "./MobileNavbar";
import { useAppSelector } from "../../hooks/hooks";
import { Menu, Transition } from "@headlessui/react";
import {
  HiUserCircle,
  HiCog6Tooth,
  HiQuestionMarkCircle,
  HiArrowLeftOnRectangle,
  HiInformationCircle,
} from "react-icons/hi2";

export default function Navbar() {
  const [signedIn] = useState<boolean>(true);

  const [showType, setShowType] = useState(false);

  const [asideMenuItems] = useState([
    {
      url: "/profile/",
      icon: <HiUserCircle />,
      text: "My Profile",
    },
    {
      url: "/profile/information",
      icon: <HiInformationCircle />,
      text: "My Information",
    },
    {
      url: "/profile/interviews",
      icon: <HiCog6Tooth />,
      text: "Interview",
    },
    {
      url: "/profile/submitted-jobs",
      icon: <HiQuestionMarkCircle />,
      text: "Submitted Jobs",
    },
    {
      url: "/logout",
      icon: <HiArrowLeftOnRectangle />,
      text: "Log out",
    },
  ]);

  const { items: leftMenu } = useAppSelector((app) => app.Navbar);

  return (
    <>
      {/* Small width devices */}
      <MobileNavbar />

      <Container>
        {/* Desktop */}
        <div
          className={classNames(
            `navbar-container hidden`,
            `py-6`,
            `sm:flex flex-row items-center`,
          )}
        >
          {/* Icons */}
          <div
            className={classNames(`flex flex-row items-center gap-12 flex-1`)}
          >
            <Link
              to="/"
              className={classNames(`font-bold text-3xl`, `text-zinc-900`)}
            >
              JobPort
            </Link>
            <ul className="hidden md:block">
              <li
                className={classNames(`flex flex-row gap-12`, `font-semibold`)}
              >
                {leftMenu.map((item) => {
                  return (
                    <Link
                      to={item.url}
                      key={item.name}
                      className={classNames(
                        `py-4`,
                        `text-zinc-400 hover:text-zinc-600`,
                        ` transition-colors ease-in-out `,
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </li>
            </ul>
          </div>

          {/* Right items */}
          {!signedIn ? (
            <div className={classNames(`flex flex-row gap-4`)}>
              <Link
                to="/auth/login"
                className={classNames(
                  `px-3 py-2`,
                  `bg-emerald-600 text-white hover:bg-emerald-700`,
                  `font-semibold`,
                  `rounded-xl`,
                )}
              >
                Login
              </Link>
              <Link
                to="/auth/signup"
                className={classNames(
                  `px-3 py-2`,
                  `border-emerald-600 border text-emerald-600`,
                  `font-semibold`,
                  `rounded-xl`,
                )}
              >
                Sign Up
              </Link>
            </div>
          ) : (
            // <div>User information</div>
            <div className="flex items-center justify-center gap-2">
              <Menu as="div" className={classNames("relative w-full")}>
                <Menu.Button className={classNames("w-full")}>
                  <div
                    className={classNames("flex items-center gap-3")}
                    onClick={() => setShowType(!showType)}
                  >
                    <span
                      className={classNames(
                        `py-4`,
                        `text-zinc-400 hover:text-zinc-600`,
                        ` transition-colors ease-in-out `,
                      )}
                    >
                      Group 2_REACT 06
                    </span>
                    <img
                      className="inline-block rounded-full w-9 h-9 ring-2 ring-white"
                      src="https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                </Menu.Button>

                <Transition
                  as={Fragment}
                  enter="transition duration-100 ease-out"
                  enterFrom="transform scale-95 opacity-0"
                  enterTo="transform scale-100 opacity-100"
                  leave="transition duration-75 ease-out"
                  leaveFrom="transform scale-100 opacity-100"
                  leaveTo="transform scale-95 opacity-0"
                >
                  <Menu.Items className="absolute left-0 z-10 mt-1 origin-top-right bg-white rounded-md shadow-lg w-52 ring-1 ring-black ring-opacity-5 focus:outline-none ">
                    <div className="py-1">
                      {asideMenuItems.map((item) => (
                        <Menu.Item>
                          <Link
                            to={item.url}
                            key={item.url}
                            className={classNames(
                              `px-2 py-2 flex flex-row items-center gap-4 text-base group`,
                              `transition-colors ease-in-out duration-100 rounded-xl`,
                            )}
                          >
                            <span
                              className={classNames(
                                `group-hover:text-[#059669]`,
                                `transition-colors ease-in-out duration-100`,
                              )}
                            >
                              {item.icon}
                            </span>
                            <span
                              className={classNames(
                                `group-hover:text-[#059669] font-semibold`,
                                `transition-colors ease-in-out duration-100`,
                              )}
                            >
                              {item.text}
                            </span>
                          </Link>
                        </Menu.Item>
                      ))}
                    </div>
                  </Menu.Items>
                </Transition>
              </Menu>
            </div>
          )}
        </div>
      </Container>
    </>
  );
}

import { Menu, Transition } from "@headlessui/react";
import classNames from "classnames";
import React, { Fragment } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { Link } from "react-router-dom";
import { setNavbarMenu } from "./slices/NavbarSlice";

export default function NavbarUserLoggedInCard() {
  const { menu } = useAppSelector((app) => app.Navbar);
  const { user } = useAppSelector((app) => app.Auth);

  const dispatch = useAppDispatch();

  const handleOnExpandNavbarMenuDropdown = () => {
    dispatch(setNavbarMenu({ ...menu, visible: true }));
  };
  return (
    <div className="flex items-center justify-center gap-2">
      <Menu as="div" className={classNames("relative w-full")}>
        <Menu.Button className={classNames("w-full")}>
          <div
            className={classNames("flex items-center gap-3")}
            onClick={handleOnExpandNavbarMenuDropdown}
          >
            <span
              className={classNames(
                `py-4`,
                `text-zinc-400 hover:text-zinc-600`,
                ` transition-colors ease-in-out `,
              )}
            >
              {user?.fullName}
            </span>
            {/* {user?.avatar === null ? (
                        <div className="h-4  w-4">
                          <AiOutlineUser />
                        </div>
                      ) : (
                        <></>
                      )} */}
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
              {menu.items.map((item) => (
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
  );
}

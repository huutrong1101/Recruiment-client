import { useState, useEffect } from "react";
import classNames from "classnames";
import {
  HiUserCircle,
  HiCog6Tooth,
  HiQuestionMarkCircle,
  HiArrowLeftOnRectangle,
} from "react-icons/hi2";
import { Link, Outlet, useLocation } from "react-router-dom";

export default function UserProfileLayout() {
  const [asideMenuItems] = useState([
    {
      url: "/profile/",
      icon: <HiUserCircle />,
      text: "My Profile",
    },
    {
      url: "/profile/interviews",
      icon: <HiCog6Tooth />,
      text: "Interview",
    },
    {
      url: "/submitted-jobs",
      icon: <HiQuestionMarkCircle />,
      text: "Submitted Jobs",
    },
    {
      url: "/logout",
      icon: <HiArrowLeftOnRectangle />,
      text: "Log out",
    },
  ]);

  const { pathname } = useLocation();

  return (
    <div className={classNames(`flex flex-col md:flex-row mb-4 gap-6`)}>
      {/* Right aside */}
      <div className={classNames(`w-full md:w-3/12 relative`)}>
        <div
          className={classNames(
            `md:min-h-[40vh] bg-zinc-100 text-zinc-600 rounded-xl shadow-sm flex flex-col gap-0`,
            `sticky top-4 px-2 py-2`,
          )}
        >
          {asideMenuItems.map((item) => {
            return (
              <Link
                to={item.url}
                key={item.url}
                className={classNames(
                  `px-2 py-2 flex flex-row items-center gap-4 text-base group`,
                  `transition-colors ease-in-out duration-100 rounded-xl`,
                  { "bg-black/10": item.url === pathname },
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
            );
          })}
        </div>
      </div>

      {/* Content */}
      <Outlet />
    </div>
  );
}

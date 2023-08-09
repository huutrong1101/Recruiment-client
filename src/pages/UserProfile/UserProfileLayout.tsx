import classNames from "classnames";
import { useEffect, useState } from "react";

import { Link, Outlet, useLocation } from "react-router-dom";
import { useAppSelector } from "../../hooks/hooks";
import {
  prepareCandidateProvider,
  prepareInterviewerProvider,
  prepareOtherProvider,
} from "../../utils/NavigateMenu";

export default function UserProfileLayout() {
  const { loading, user } = useAppSelector((app) => app.Auth);
  const [asideMenuItems, setAsideMenuItems] = useState<any[]>([]);
  const { pathname } = useLocation();

  useEffect(() => {
    if (loading === "success" && user) {
      const supplyMenuItems: any[] =
        user.role === "CANDIDATE"
          ? prepareCandidateProvider()
          : user.role === "INTERVIEWER"
          ? prepareInterviewerProvider()
          : prepareOtherProvider();

      setAsideMenuItems([...supplyMenuItems]);
    }
  }, [user, loading]);

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

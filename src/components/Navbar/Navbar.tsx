import { useEffect, useState } from "react";
import classNames from "classnames";
import { Link, useLocation } from "react-router-dom";
import Container from "../Container/Container";
import MobileNavbar from "./MobileNavbar";
import { useAppSelector } from "../../hooks/hooks";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import qs from "qs";
import { useTokenAuthorize } from "../../hooks/useTokenAuthorize";
import NavbarUserLoggedInCard from "./NavbarUserLoggedInCard";

export default function Navbar() {
  useTokenAuthorize();

  const { items } = useAppSelector((app) => app.Navbar);
  const { isLoggedIn, loading, user } = useAppSelector((app) => app.Auth);
  const [updatedLeftMenu, setUpdatedLeftMenu] = useState([...items]);
  const { pathname } = useLocation();

  useEffect(() => {
    if (user !== null && user !== undefined) {
      if (user.role === "RECRUITER") {
        if (updatedLeftMenu.length < 4) {
          setUpdatedLeftMenu([
            ...updatedLeftMenu,
            { name: "Dashboard", url: "/recruiter/dashboard" },
          ]);
        }
      } else if (user.role === "INTERVIEWER") {
        const updatedMenuWithoutDashboard = updatedLeftMenu.filter(
          (item) => item.name !== "Dashboard",
        );
        setUpdatedLeftMenu([
          ...updatedMenuWithoutDashboard,
          { name: "Dashboard", url: "/interviewer/interview-recent" },
        ]);
      } else if (user.role === "ADMIN") {
        const updatedMenuWithoutDashboard = updatedLeftMenu.filter(
          (item) => item.name !== "Dashboard",
        );
        setUpdatedLeftMenu([
          ...updatedMenuWithoutDashboard,
          { name: "Dashboard", url: "/admin/users" },
        ]);
      } else {
        const updatedMenuWithoutDashboard = updatedLeftMenu.filter(
          (item) => item.name !== "Dashboard",
        );
        setUpdatedLeftMenu([...updatedMenuWithoutDashboard]);
      }
    } else {
      const updatedMenuWithoutDashboard = updatedLeftMenu.filter(
        (item) => item.name !== "Dashboard",
      );
      setUpdatedLeftMenu([...updatedMenuWithoutDashboard]);
    }
  }, [user]);

  const { pathname: currentPathname } = useLocation();

  const [compiledQuerySearch, setCompiledQuerySearch] = useState(
    qs.stringify({}),
  );
  useEffect(() => {
    setCompiledQuerySearch(
      qs.stringify(
        currentPathname.includes(`/auth/login`) ||
          currentPathname.includes(`/logout`) ||
          currentPathname.includes(`/otp`)
          ? {}
          : { from: currentPathname },
      ),
    );
  }, [currentPathname]);

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
                {updatedLeftMenu.map((item) => {
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
          {loading === "pending" ? (
            <LoadSpinner className="text-zinc-400" />
          ) : loading === `success` ? (
            !isLoggedIn ? (
              <div className={classNames(`flex flex-row gap-4`)}>
                <Link
                  to={`/auth/login?${compiledQuerySearch}`}
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
              <NavbarUserLoggedInCard />
            )
          ) : (
            // Failed
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
          )}
        </div>
      </Container>
    </>
  );
}

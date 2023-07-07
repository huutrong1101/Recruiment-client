import React, { useState } from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import Container from "../Container/Container";

export default function Navbar() {
  const [signedIn] = useState<boolean>(false);

  const [leftMenu] = useState([
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Jobs",
      url: "/jobs",
    },
    {
      name: "Events",
      url: "/events",
    },
    {
      name: "Dash board",
      url: "rec",
    },
  ]);

  return (
    <Container>
      <div
        className={classNames(
          `navbar-container`,
          `py-6`,
          `flex flex-row items-center`
        )}
      >
        {/* Icons */}
        <div className={classNames(`flex flex-row items-center gap-12 flex-1`)}>
          <Link
            to="/"
            className={classNames(`font-bold text-3xl`, `text-zinc-900`)}
          >
            JobPort
          </Link>
          <ul className="hidden md:block">
            <li className={classNames(`flex flex-row gap-12`, `font-semibold`)}>
              {leftMenu.map((item) => {
                return (
                  <Link
                    to={item.url}
                    key={item.name}
                    className={classNames(
                      `py-4`,
                      `text-zinc-400 hover:text-zinc-600`,
                      ` transition-colors ease-in-out `
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
                `rounded-xl`
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
                `rounded-xl`
              )}
            >
              Sign Up
            </Link>
          </div>
        ) : (
          <div>User information</div>
        )}
      </div>
    </Container>
  );
}

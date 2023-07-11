import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";
import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsFillCartCheckFill,
  BsFillTelephoneFill,
} from "react-icons/bs";

export default function Footer() {
  return (
    <div
      className={classNames("mt-[80px] px-[-128px] bg-[#0F172A] text-white")}
    >
      <div className={classNames("px-32")}>
        <div
          className={classNames(
            "flex items-center justify-between py-5 border-b border-white",
          )}
        >
          <div>
            <h3
              className={classNames(
                "text-white text-3xl font-semibold leading-28 tracking-wide capitalize",
              )}
            >
              Group 2
            </h3>
          </div>
          <div
            className={classNames(
              "text-white text-base font-semibold leading-6",
            )}
          >
            <ul className={classNames("flex justify-evenly gap-6")}>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/">Create a Job</Link>
              </li>
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Contact Us</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className={classNames("py-5 flex items-center justify-between")}>
          <div>
            <p
              className={classNames(
                "text-white text-center text-base leading-6",
              )}
            >
              © 2023. Design by Group 2_REACT 06{" "}
            </p>
          </div>
          <div
            className={classNames(
              "text-white text-base font-semibold leading-6",
            )}
          >
            <ul className={classNames("flex justify-evenly gap-6")}>
              <Link to="/">
                <BsFacebook />
              </Link>
              <Link to="/">
                <BsInstagram />
              </Link>
              <Link to="/">
                <BsYoutube />
              </Link>
              <Link to="/">
                <BsFillCartCheckFill />
              </Link>
              <Link to="/">
                <BsFillTelephoneFill />
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

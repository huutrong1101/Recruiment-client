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
import Container from "../Container/Container";

export default function Footer() {
  return (
    <div className={classNames("footer-wrapper bg-[#0F172A] text-white")}>
      <Container className={"footer-container"}>
        <div
          className={classNames(
            "flex flex-col md:flex-row md:items-center justify-between py-5 border-b border-white",
          )}
        >
          <div>
            <h3
              className={classNames(
                "text-white py-2 md:px-0 text-xl font-semibold leading-28 tracking-wide capitalize",
              )}
            >
              Product by Group 2
            </h3>
          </div>
          <div className={classNames("text-zinc-300 text-base leading-6")}>
            <ul
              className={classNames("flex flex-col md:flex-row-reverse gap-6")}
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/create-cv">Create a Job</Link>
              </li>
              <li>
                <Link to="/about-us">About Us</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
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
      </Container>
    </div>
  );
}

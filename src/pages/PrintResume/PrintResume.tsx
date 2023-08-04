import classNames from "classnames";
import React from "react";
import { HiMail, HiOutlineMail } from "react-icons/hi";
import { HiMapPin, HiPhone } from "react-icons/hi2";
import { Link } from "react-router-dom";

export default function PrintResume() {
  return (
    <>
      <div className="inset-0 overflow-y-auto">
        <div className="flex flex-col p-6">
          {/* Header */}
          <div className="flex-1 flex flex-row gap-6">
            <div className={classNames(`w-2/3`)}>
              <h1 className={classNames(`text-4xl font-bold my-2`)}>
                Nguyen Thi Huynh Nguyen
              </h1>
            </div>
            <div className={classNames(`my-2 text-emerald-800`)}>
              <div className={`flex flex-row items-center gap-2`}>
                <HiMail />
                <h1 className={classNames(`text-emerald-800 underline`)}>
                  <Link to="mailto:aaa">email@example.com</Link>
                </h1>
              </div>
              <div className={`flex flex-row items-center gap-2`}>
                <HiPhone />
                <h1 className={classNames(`text-emerald-800`)}>
                  +84 123 123 123
                </h1>
              </div>

              <div className={`flex flex-row items-center gap-2`}>
                <HiMapPin />
                <h1 className={classNames(`text-emerald-800`)}>
                  Thu Duc - TpHCM
                </h1>
              </div>
            </div>
          </div>
          {/* Body */}
          <div className={classNames(`border-b border-zinc-200 my-4`)} />

          <div>
            {/* Separate onto a section */}
            <div className={classNames(`flex flex-row flex-wrap max-h-80vh`)}>
              {[
                ...[
                  "Education",
                  "Experience",
                  "Certificate",
                  "Project",
                  "Skills",
                ],
              ].map((titleName, idx) => {
                return (
                  <div className={classNames(`text-zinc-500 w-1/2  mb-`)}>
                    <h1
                      className={classNames(
                        `font-semibold text-emerald-800 text-2xl`,
                      )}
                    >
                      {titleName}
                    </h1>

                    <div className={classNames(`inline-block mx-6`)}>
                      {[...new Array(3)].map((field, index) => (
                        <div className={classNames(``)}>
                          <div className={classNames(`font-bold`)}>
                            Primary label
                          </div>
                          <div>Field b</div>
                          <div>Field c</div>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

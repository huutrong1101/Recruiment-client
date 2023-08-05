import React from "react";
import Badge from "./Badge";
import classnames from "classnames";
import { APPLICANTS_STATUS } from "../../utils/Localization";

interface JobStatusBadge extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  status: "NOT_RECEIVED" | "RECEIVED" | "PASS" | "FAILED";
}

export default function JobStatusBadge({ className, status }: JobStatusBadge) {
  return (
    <Badge
      className={classnames(
        `px-2 w-32`,
        {
          "bg-emerald-600": status === "PASS",
          "bg-yellow-600": status === "NOT_RECEIVED",
          "bg-orange-600": status === "RECEIVED",
          "bg-red-600": status === "FAILED",
        },

        className,
      )}
    >
      <span
        className={classnames("h-2 w-2 rounded-xl", {
          "bg-emerald-800": status === "PASS",
          "bg-yellow-800": status === "NOT_RECEIVED",
          "bg-orange-800": status === "RECEIVED",
          "bg-red-800": status === "FAILED",
        })}
      ></span>
      <span
        className={classnames({
          "text-emerald-300": status === "PASS",
          "text-yellow-300": status === "NOT_RECEIVED",
          "text-orange-300": status === "RECEIVED",
          "text-red-300": status === "FAILED",
        })}
      >
        {/* {status === "PASS"
          ? `Passed`
          : status === `FAILED`
          ? `Failed`
          : status === `NOT_RECEIVED`
          ? `Reviewing`
          : status === "RECEIVED"
          ? `Pending`
          : `NaN`} */}
        {APPLICANTS_STATUS[status]}
      </span>
    </Badge>
  );
}

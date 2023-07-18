import React from "react";
import Badge from "./Badge";
import classnames from "classnames";

interface JobStatusBadge extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  status: "reviewing" | "pending" | "passed" | "failed";
}

export default function JobStatusBadge({ className, status }: JobStatusBadge) {
  return (
    <Badge
      className={classnames(
        `px-2`,
        {
          "bg-emerald-600": status === "passed",
          "bg-yellow-600": status === "reviewing",
          "bg-orange-600": status === "pending",
          "bg-red-600": status === "failed",
        },

        className,
      )}
    >
      <span
        className={classnames("h-2 w-2 rounded-xl", {
          "bg-emerald-800": status === "passed",
          "bg-yellow-800": status === "reviewing",
          "bg-orange-800": status === "pending",
          "bg-red-800": status === "failed",
        })}
      ></span>
      <span
        className={classnames({
          "text-emerald-300": status === "passed",
          "text-yellow-300": status === "reviewing",
          "text-orange-300": status === "pending",
          "text-red-300": status === "failed",
        })}
      >
        {status === "passed"
          ? `Passed`
          : status === `failed`
          ? `Failed`
          : status === `reviewing`
          ? `Reviewing`
          : status === "pending"
          ? `Pending`
          : `NaN`}
      </span>
    </Badge>
  );
}

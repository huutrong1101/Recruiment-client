import React from "react";
import Badge from "./Badge";
import classnames from "classnames";

interface InterviewStatusBadgeProps extends React.HTMLProps<HTMLDivElement> {
  className?: string;
  status: "passed" | "failed";
}

export default function InterviewStatusBadge({
  className,
}: InterviewStatusBadgeProps) {
  return <Badge className={classnames(``, className)}></Badge>;
}

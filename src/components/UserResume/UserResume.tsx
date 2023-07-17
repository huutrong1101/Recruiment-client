import React from "react";
import classnames from "classnames";
import { HiPencilSquare, HiTrash } from "react-icons/hi2";
import { Link } from "react-router-dom";

interface UserResumeProps {
  name: string;
  onEdit: () => void;
  onDelete: () => void;
  onClick: () => void;
}

export default function UserResume({
  name,
  onEdit,
  onDelete,
  onClick,
}: UserResumeProps) {
  return (
    <div
      className={classnames(
        `border rounded-xl px-4 py-2 flex flex-row items-center`,
        `text-zinc-500 hover:text-zinc-900`,
        `hover:border-emerald-600`,
        `transition-colors duration-100 ease-in-out`,
      )}
    >
      <button onClick={onClick} className={classnames(`flex-1 text-left`)}>
        <span>{name}</span>
      </button>
      {/* Action buttons */}
      <div className={classnames(`flex flex-row gap-2`)}>
        <button
          onClick={onEdit}
          className={classnames(
            `text-zinc-500 hover:text-yellow-600 focus:text-yellow-600`,
          )}
        >
          <HiPencilSquare />
        </button>
        <button
          onClick={onDelete}
          className={classnames(
            `text-zinc-500 hover:text-red-600 focus:text-red-600`,
          )}
        >
          <HiTrash />
        </button>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { PlusIcon, TrashIcon } from "@heroicons/react/24/solid";

type FieldProps = {
  label: string;
  values: { title: string; value: string }[][];
  onChange: (
    newValues: {
      title: string;
      value: string;
    }[][],
  ) => void;
};
export default function Field({ label, values, onChange }: FieldProps) {
  const handleDelete = (indexToRemove: number) => {
    if (values.length > 1) {
      const newValues = [...values];
      newValues.splice(indexToRemove, 1);
      onChange(newValues);
    }
  };

  const handleAdd = () => {
    onChange([
      ...values,
      [
        { title: values[0][0].title, value: "" },
        { title: values[0][1].title, value: "" },
        { title: values[0][2].title, value: "" },
      ],
    ]);
  };

  return (
    <div className="mt-2 col-span-full">
      <label
        htmlFor="street-address"
        className="flex items-center text-sm font-medium leading-6 text-gray-900"
      >
        <span className="text-xl font-bold leading-7 text-center text-green-600 font-Outfit">
          {label}
        </span>
        <PlusIcon
          className="w-5 h-5 ml-3 cursor-pointer text-emerald-500"
          onClick={handleAdd}
        />
      </label>
      {values.map((subValues, index) => (
        <div
          className="flex flex-col gap-4 px-4 pb-5 mt-4 border-b border-gray-900/10"
          key={index}
        >
          <div className="flex flex-col w-full gap-5">
            {subValues.map((sub, idx) => (
              <div key={idx}>
                <label
                  htmlFor="street-address"
                  className="flex items-center text-sm font-medium leading-6 text-gray-900"
                >
                  <span>{sub.title}</span>
                </label>
                <input
                  value={sub.value}
                  onChange={(e) => {
                    const newValuesList = [...values];
                    newValuesList[index][idx].value = e.target.value;
                    onChange(newValuesList);
                  }}
                  type="text"
                  className="w-full p-2 border border-gray-400"
                />
              </div>
            ))}
          </div>
          {values.length > 1 && (
            <div
              className="flex items-center justify-end mt-2 cursor-pointer"
              onClick={() => handleDelete(index)}
            >
              <TrashIcon className={`text-red-400 w-8 h-8`} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

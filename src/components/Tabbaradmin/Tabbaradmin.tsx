import { useState } from "react";
import AdminTable from "../AdminManagerList/AdminTable";
export default function Tabbaradmin() {
  const types = [
    { id: 1, name: "All" },
    { id: 2, name: "Recruiter" },
    { id: 3, name: "Interviewer" },
    { id: 4, name: "Candidate" },
    { id: 5, name: "Blacklist" },
  ];

  const [typeSelected, setTypeSelected] = useState("All");

  return (
    <div className="">
      <div className="inline-flex items-start justify-start p-1 overflow-x-auto border rounded-lg border-zinc-900 border-opacity-10">
        {types.map((type) => (
          <div
            key={type.id}
            className={`inline-flex flex-col items-start justify-start ${
              typeSelected === type.name ? "rounded bg-[#DFF9EF]" : ""
            }`}
          >
            <div className="flex flex-col items-center justify-center rounded-lg">
              <div className="inline-flex items-center justify-center px-4 py-2 ">
                <div className="flex items-center justify-center gap-2">
                  <button
                    className="text-zinc-900 text-[16px] font-semibold capitalize leading-normal tracking-wide"
                    onClick={() => setTypeSelected(type.name)}
                  >
                    {type.name}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className="">
          <AdminTable typeSelected={typeSelected} />
        </div>
      </div>
    </div>
  );
}

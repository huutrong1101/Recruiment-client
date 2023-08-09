import React, { useState, useEffect } from "react";
import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { Fragment } from "react";
import classNames from "classnames";
import axiosInstance from "../../utils/AxiosInstance";
import useQueryParams from "../../hooks/useQueryParams";
import { omit, isEqual } from "lodash";
import { omitBy, isUndefined } from "lodash";
import { DataSearchInterface } from "../../services/services";
import { createSearchParams, useNavigate } from "react-router-dom";
//----------------SKILL
interface IDataSearch {
  skill: string;
  type: string;
}

interface ITechFilterProps {
  setDataSearch: React.Dispatch<React.SetStateAction<IDataSearch>>;
  dataSearch: IDataSearch;
  key: "";
}

export type QueryConfig = {
  [key in keyof DataSearchInterface]: string;
};

// export default function TechFilter({ setDataSearch, dataSearch }: ITechFilterProps)
export default function TechFilter(
  { setDataSearch, dataSearch }: ITechFilterProps,
  { showSkills }: any,
) {
  // const queryParams: QueryConfig = useQueryParams();
  // const queryConfig: QueryConfig = omitBy(
  //   {
  //     skill: queryParams.skill,
  //     type: queryParams.type,
  //   },
  //   isUndefined,
  // );
  const [isActive, setIsActive] = useState(false);
  const handleActive = (e: any) => setIsActive(!isActive);

  const navigate = useNavigate();
  // const handleSetTech = (type: string) => {
  //   setDataSearch({
  //     ...dataSearch,
  //     skill:,
  //   })
  // }
  // const [dataSearch, setDataSearch] = useState({
  //   skill: "",
  //   type: "",
  // })

  // const [skills, setSkills] = useState([])

  // useEffect(() => {
  //   const fetchSkillList = async () => {
  //     try {
  //       const response = await axiosInstance('interviewer/skills')
  //       setSkills(response.data.result)
  //       setDataSearch({
  //         ...dataSearch,
  //         skill: queryConfig.skill || "",
  //         type: queryConfig.type || "",
  //       })
  //     }
  //     catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchSkillList();
  // }, [])

  // const handleSearch = async () => {
  //   navigate({
  //     pathname: "/",
  //     search: createSearchParams({
  //       ...queryConfig,
  //       skill: dataSearch.skill,
  //       type: dataSearch.type,

  //     }).toString(),
  //   });
  // };

  return (
    <div className="absolute w-full">
      <div className="w-full h-full  ">
        <Menu.Button
          className="w-full p-1.5 mb-1 bg-emerald-600 rounded-md text-white border border-transparent
                                active:border-emerald-600  active:text-emerald-600 
                                 active:bg-white flex items-center"
        >
          <div className=" inline-flex justify-between w-full ">
            {dataSearch.skill || "Skill"}
            <ChevronDownIcon className="w-5 h-5 pt-1" />
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="flex flex-col items-start rounded-md w-full h-full bg-gray-200 aboslute bg-opacity-90 shadow-md ">
            <div className="w-full h-full  text-black rounded-md border border-zinc-200">
              {showSkills.map((skill: any) => (
                <Menu.Item key={skill.skillId}>
                  {({ active }) => (
                    <p
                      className={classNames(
                        active
                          ? "bg-gray-100 text-gray-900 bg-opacity-80"
                          : "text-gray-700",
                        "p-2",
                        "block  text-sm",
                      )}
                      // onClick={() => handleSetTech(type)}
                      onClick={
                        handleActive
                        // setDataSearch({
                        //   ...dataSearch,
                        //   skill: skill.name
                        // })
                      }
                    >
                      {skill.name}
                    </p>
                  )}
                </Menu.Item>
              ))}
            </div>
          </Menu.Items>
        </Transition>
      </div>
    </div>
  );
}

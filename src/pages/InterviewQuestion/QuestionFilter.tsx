import { Menu, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";
import React, { Fragment, useState } from "react";
//------------------------------------------TYPE

interface IDataSearch {
  skill: string;
  type: string;
}

interface ITechFilterProps {
  setDataSearch: React.Dispatch<React.SetStateAction<IDataSearch>>;
  dataSearch: IDataSearch;
}

export default function QuestionFilter() {
  const [isActive, setIsActive] = useState(false);
  const handleActive = (e: any) => setIsActive(!isActive);

  // const [showTypes, setShowTypes] = useState([])

  // const questions: TypeListInterface[] = useAppSelector((state) => state.questionList.questionList,);

  // useEffect(() => {
  //   const fetchTypeList = async () => {
  //     try {
  //       const response = await axiosInstance('interviewer/type-questions')
  //       setShowTypes(response.data.result)
  //     }
  //     catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   fetchTypeList();
  // }, [])
  const types = ["a", "b"];

  return (
    <div className="absolute w-full ">
      <Menu.Button
        className="w-full h-fit p-1.5 mb-1 bg-emerald-600 rounded-md text-white border border-transparent
                                active:border-emerald-600  active:text-emerald-600 
                                 active:bg-white flex items-center"
        onClick={handleActive}
      >
        <div className=" inline-flex justify-between w-full ">
          Type <ChevronDownIcon className="w-5 h-5 pt-1" />
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
        <Menu.Items className="flex flex-col items-start rounded-md w-full h-full bg-gray-200 bg-opacity-80 aboslute shadow-md  ">
          <div className="w-full h-full  text-black rounded-md border border-zinc-200">
            {types.map((type: any, index: any) => (
              <Menu.Item key={index}>
                {({ active }) => (
                  <p
                    className={classNames(
                      active
                        ? "bg-gray-100 text-gray-900 bg-opacity-80"
                        : "text-gray-700",
                      "p-2",
                      "block  text-sm",
                    )}
                    onClick={handleActive}
                  >
                    {type}
                  </p>
                )}
              </Menu.Item>
            ))}
          </div>
        </Menu.Items>
      </Transition>
    </div>
  );
}

import { Outlet } from "react-router-dom";
import AdminTable from "../../components/AdminManagerList/AdminTable";
import React, { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { STATUS } from "../../utils/Status";
import { AcountConfig, AcountInterface } from "../../services/services";
import { omitBy, isUndefined } from "lodash";
import useQueryParams from "../../hooks/useQueryParams";
import qs from "query-string";
import { createSearchParams, useNavigate } from "react-router-dom";
import { omit, isEqual } from "lodash";
import axiosInstance from "../../utils/AxiosInstance";
import Paginationacountlist from "../../components/AdminManagerList/Pagination/Paginationacountlist";
import moment from "moment";
import Loader from "../../components/Loader/Loader";
import { ChevronDownIcon} from "@heroicons/react/24/outline";
import classNames from "classnames";
import { BsFilterLeft } from "react-icons/bs";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

export type QueryConfig = {
  [key in keyof AcountConfig]: string;
};
const types = [
  { id: 1, name: "All", typename: "" },
  { id: 2, name: "Recruiter", typename: "RECRUITER" },
  { id: 3, name: "Interviewer", typename: "INTERVIEWER" },
  { id: 4, name: "Candidate", typename: "CANDIDATE" },
  { id: 5, name: "Blacklist", typename: "Blacklist" },
];
export default function AdminDashboard() {
  const [typeSelected, setTypeSelected] = useState("");
  // const [ShowSearch, SearchListtrue] = useState(false) ;
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [searchField, setSearchField] = useState("name"); // Default search field is 'name'
  const dispatch = useAppDispatch();
  const jobs: AcountInterface[] = useAppSelector(
    (state) => state.adminacountList.adminmanagerAcountList,
  );
  const totalListJobs = useAppSelector(
    (state) => state.adminacountList.totalListAcounts,
  );

  const queryParams: QueryConfig = useQueryParams();

  const queryConfig: QueryConfig = omitBy(
    {
      size: queryParams.size || 5,
      page: queryParams.page || "1",
      role: queryParams.role || (typeSelected === "Blacklist" ? "CANDIDATE" : (typeSelected === "All" ? "" : typeSelected)),
      name: queryParams.name,
      phone: queryParams.phone,
      email: queryParams.email,
    },
    isUndefined,
  );

  const handleSearch = async (e: any) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      navigate({
        pathname: "/admin/users/",
        search: createSearchParams({
          ...queryConfig,
          name:  dataSearch.field ===  "name" ?   dataSearch.key : "",
          phone: dataSearch.field === "phone" ?  dataSearch.key : "",
          email: dataSearch.field === "email" ?  dataSearch.key : "",          
        }).toString(),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const [dataSearch, setDataSearch] = useState({
    key: "",
    field: "name",
  });

  const handleGetData = (type: any) => {
    setTypeSelected(type.typename);

    navigate({
      pathname: "/admin/users",
      search: createSearchParams({
        ...queryConfig,
        role: type.typename === "Blacklist" ? "CANDIDATE" : (typeSelected === "All" ? "" : type.typename),
        page: "1",
      }).toString(),
    });
  };


  return (
    <div className="flex flex-col">
        <div
          className={classNames(
            "flex justify-center item-center ","p-1 text-center mb-5 mt-5  mr-4",
          )}
        >
        <form
          onSubmit={e => handleSearch(e)}
          className=" inline-flex items-center justify-start gap-1 px-0.5 py-0.5 bg-white border rounded-xl bg-opacity-5 "
        >
          <BsFilterLeft className={classNames(`w-[20px] ml-4 mr-4`)} />

          <div className="flex items-center justify-center gap-3 relative ">
              <p> Type : </p>
              <select
                value={dataSearch.field}
                onChange={(e) => setDataSearch({ ...dataSearch, field: e.target.value })}
                className="block appearance-none w-20 bg-white text-gray-700 py-1 px-1 pr-3 rounded-xl leading-tight focus:outline-none focus:bg-white focus:bg-[#DFF9EF]"
              >
                <option value="name">Name</option>
                <option value="phone">Phone</option>
                <option value="email">Email</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center pl-2 pr-1 pointer-events-none">
                  <ChevronDownIcon className={classNames("w-[20px]")}                      />      
              </div>          
            </div>
            <div className="flex items-center justify-center gap-3 ml-3 relative w-[20px]"><MagnifyingGlassIcon/></div>
            <div className="relative ">
            <input
              type="text"
              className="font-medium outline-none text-gray-900 text-[14px] ml-5 h-[30px] text-left rounded-lg"
              value={dataSearch.key}
              onChange={(e) =>
                setDataSearch({ ...dataSearch, key: e.target.value })
              }
                placeholder=" Please enter a search     "
              />
            </div>
            <button
              type="submit"
              className="bg-[#05966A] hover:bg-emerald-700 text-white p-2 rounded-md flex items-center justify-center"
            >
              Search
            </button> 
        </form>       
      </div>
      <div className="relative bg-white">
        <div className="inline-flex items-start justify-start p-1 overflow-x-auto border rounded-lg border-zinc-900 border-opacity-10 mb-5">
          {types.map((type) => (
            <div
              key={type.id}
              className={`inline-flex flex-col items-start justify-start ${
                typeSelected === type.typename ? "rounded bg-[#DFF9EF]" : ""
              }`}
            >
              <div className="flex flex-col items-center justify-center rounded-lg">
                <div className="inline-flex items-center justify-center px-5 py-1.5 ">
                  <div className="flex items-center justify-center gap-2">
                    <button
                      className="text-zinc-900 text-[16px] font-semibold capitalize leading-normal tracking-wide"
                      onClick={() => handleGetData(type)}
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
          <AdminTable typeSelected={typeSelected} />
        </div>
      </div>
      <Outlet />
    </div>
  );
}

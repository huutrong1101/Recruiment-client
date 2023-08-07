import{ useState, useEffect } from "react";
import { NavLink,  Link } from "react-router-dom";
import {EyeIcon, MagnifyingGlassCircleIcon} from "@heroicons/react/24/outline";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

import {fetchAdminManagerJobList} from "../../redux/reducer/AdminListJobRecentSlice";
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { STATUS } from '../../utils/Status';
import { AdminJobListConfig, AdminJobInterface } from "../../services/services";
import { omitBy, isUndefined } from "lodash";
import useQueryParams from "../../hooks/useQueryParams";

import qs from "query-string";
import { createSearchParams, useNavigate } from "react-router-dom";
import { omit, isEqual } from "lodash";


export type QueryConfig = {
  [key in keyof AdminJobListConfig]: string;
};
import axiosInstance from "../../utils/AxiosInstance";
import Paginationjoblist from "./Pagination/Paginationjoblist";
import moment from "moment";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import classNames from "classnames";
import { BsFilterLeft } from "react-icons/bs";

const ManagetJobList = () => {
  const jobs:  AdminJobInterface[] = useAppSelector((state) => state.adminmanagerjobList.adminmanagerJobList);
  const totalListJobs = useAppSelector((state) => state.adminmanagerjobList.totalListJobs);
  const queryParams: QueryConfig = useQueryParams();
  const [isLoading, setIsLoading] = useState(false);
  const queryConfig: QueryConfig = omitBy(
    {
      size: queryParams.size || 5,  
      page: queryParams.page || "1",   
      name: queryParams.name || "",
    },
    isUndefined,
  );
  const [prevQueryConfig, setPrevQueryConfig] =
    useState<QueryConfig>(queryConfig);
  const [pageSize, setPageSize] = useState(
    Math.ceil(totalListJobs / Number(queryParams.size || 5)),
  );
  const [showJobLists, setAdminManagerJobList] = useState(jobs);

  useEffect(() => {
    if (!isEqual(prevQueryConfig, queryConfig)) {
      const fetchJobs = async () => {
        try {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(`admin/jobs?${query}`);
          setAdminManagerJobList(response.data.result.content);
          setPageSize(response.data.result.totalPages);
        } catch (error) {
          console.log(error);
        }
      };
      fetchJobs();
      setPrevQueryConfig(queryConfig);
    }
  }, [queryConfig, prevQueryConfig]);

  useEffect(() => {
    const fetchPosition = async () => {
      setIsLoading(true);
      try {
        if (queryConfig) {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(`admin/jobs?${query}`);
          setAdminManagerJobList(response.data.result.content);
          setPageSize(response.data.result.totalPages);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchPosition();
  }, []);


  // 
  // Search
  const navigate = useNavigate();
  const [dataSearch, setDataSearch] = useState({
    key: "",
  });
  const handleSearch = async (e: any) => {
    e.preventDefault();  
    try {
      setIsLoading(true);
      navigate({
        pathname: "/admin/jobs",
        search: createSearchParams({
          ...queryConfig,
          name: dataSearch.key,
        }).toString(),
      });
    } catch (error) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };
      return (
      <>
        <div className="justify-center flex grid-cols-[100%] sm:grid-cols-[15%,60%,25%] gap-1 pt-5 mx-auto lg:grid-cols-[25%,60%,25%] ">
          
          
            <div
              className={classNames(
                "flex justify-center item-center ",
              )}
            >
              <form
                onSubmit={e => handleSearch(e)}
              > 
                <div
                  className={classNames(
                    "flex justify-center items-center w-80% p-1 border rounded-xl",
                    "focus-within:border-emerald-400",
                  )}
                >
                    <BsFilterLeft className={classNames(`w-[30px] ml-5 mr-5`)} />
                    <div
                      className={classNames(
                        "text-[16px] cursor-pointer flex items-center text-center justify-between",
                      )}
                    >
                        Name Jobs     
                    </div>
                    <div className=" flex items-center p-2 rounded-xl">
                      <MagnifyingGlassIcon className="w-5 h-5 mx-2 mr-5" />
                      <input
                        type="text"
                        placeholder="Fill in the search information ..."
                        className="w-[85%] h-full text-base text-zinc-400 focus:outline-none"
                        value={dataSearch.key}
                        onChange={(e) => setDataSearch({ ...dataSearch, key: e.target.value })}
                      />
                    </div> 
                    <div
                      className={classNames(
                        "text-[16px] cursor-pointer flex items-center justify-between ml-5 mr-5",
                      )}
                    >
                        <button
                          type="submit"
                          className="bg-[#05966A] hover:bg-emerald-700 text-white p-2 rounded-md flex items-center justify-center"
                        >
                          Search
                        </button>      
                    </div>                              
                </div>                  
              </form>
        </div>           

        </div>
        <div className="flex-col mt-5">
          <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}} >
            <Table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
              <TableHead className="text-xs text-gray-500 bg-gray-200 text-center flex-row justify-center" style={{ fontFamily: "Outfit, sans-serif" }}>
                <TableRow>
                  <TableCell style={{ fontFamily: "Outfit, sans-serif" }}> <div className="ml-10 boid" > Name Jobs         </div>        </TableCell>
                  <TableCell style={{ fontFamily: "Outfit, sans-serif" }}> <div className="ml-10 boid md:block hidden" > Date created Jobs    </div>        </TableCell>
                  <TableCell style={{ fontFamily: "Outfit, sans-serif" }}> <div className="ml-10 boid md:block hidden" >  Process </div> </TableCell>
                  <TableCell style={{ fontFamily: "Outfit, sans-serif" }} > <div className="flex justify-center" > Actions         </div>     </TableCell>
                </TableRow>
              </TableHead>
              {isLoading ? (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={6}>
                    <div className="flex items-center justify-center w-full h-[50px] text-[13px] mt-30 mb-30">
                      <LoadSpinner className="text-3xl text-[#059669] mt-30" />
                    </div>
                  </TableCell>
                </TableRow>
              </TableBody>
            ) : (
              <>
              <TableBody>
               {showJobLists && showJobLists.length > 0 ?
                  (showJobLists.map((job) => (                    
                  <TableRow className="text-center text-black bg-white hover:bg-gray-100" key={job.idJob}>
                  <TableCell scope="row" className="font-medium text-gray-900 whitespace-nowrap ml-20" style={{ fontFamily: "Outfit, sans-serif" }}
                  >  <div className="ml-10 boid"> {job.name}         </div>  </TableCell>
                  <TableCell className=""                 style={{ fontFamily: "Outfit, sans-serif" }}
                  >    <div className="ml-10 md:block hidden ">            {moment(job.date).format("HH:mm:ss DD-MM-YYYY")}  </div>                </TableCell>
                 <TableCell className="flex justify-center items-center">
                  <div className="w-full h-3 bg-gray-300 rounded-xl md:block hidden">
                    <div
                      className="h-3 bg-emerald-400 rounded-xl  "
                      style={{ width: `${(job.member>job.quantity)?100: (job.member / job.quantity) * 100}%` }}
                    ></div>
                    <div className="justify-center text-center">
                      {job.member} / {job.quantity}
                    </div>
                  </div>
                </TableCell>
                  <TableCell   className="px-6 py-4 items-center  flex   justify-center">
                  <div className="flex justify-center" > 
                    <NavLink to={`/admin/jobs/${job.idJob}`} onClick={() => {}}>
                      {/* ${adminlistjobs.id} */}
                      <EyeIcon className="relative w-5 h-5 gap-2 rounded-xl" />
                    </NavLink> </div>
                  </TableCell>
                </TableRow>
                
                ))): 
                (
                  <TableBody>
                  <TableRow>
                    <TableCell colSpan={6}>
                      <div className="flex items-center justify-center w-full h-[50px] text-[13px] mt-30 mb-30">
                      <span>No results were found. Please check again</span>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>                  
                )}
            </TableBody>
          </>
            )}
            </Table>                
          </TableContainer>
        </div> 
        <div className="flex justify-center mt-5">
          {/* Pagination  */}
          <Paginationjoblist  queryConfig={queryConfig} pageSize={pageSize} />
        </div> 
    </>
    );
}
export default ManagetJobList;

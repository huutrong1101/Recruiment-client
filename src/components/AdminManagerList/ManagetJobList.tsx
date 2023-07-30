import{ useState, useEffect } from "react";
import { NavLink,  Link } from "react-router-dom";
import {EyeIcon} from "@heroicons/react/24/outline";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

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

const ManagetJobList = () => {
  const dispatch = useAppDispatch();
  // 
  const jobs:  AdminJobInterface[] = useAppSelector((state) => state.adminmanagerjobList.adminmanagerJobList);
  const totalListJobs = useAppSelector((state) => state.adminmanagerjobList.totalListJobs);
  const queryParams: QueryConfig = useQueryParams();
  const queryConfig: QueryConfig = omitBy(
    {
      size: queryParams.size || 8,  
      page: queryParams.page || "1",    
    },
    isUndefined,
  );
  const [prevQueryConfig, setPrevQueryConfig] =
    useState<QueryConfig>(queryConfig);
  const [pageSize, setPageSize] = useState(
    Math.ceil(totalListJobs / Number(queryParams.size || 8)),
  );
  const [showJobLists, setAdminManagerJobList] = useState(jobs);

  useEffect(() => {
    if (!isEqual(prevQueryConfig, queryConfig)) {
      const fetchJobs = async () => {
        try {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(`/admin/jobs?${query}`);
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
      
        if (queryConfig) {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(`/admin/jobs?${query}`);
          setAdminManagerJobList(response.data.result.content);
          setPageSize(response.data.result.totalPages);
        }
    };
    fetchPosition();
  }, []);


      return (
      <>
        <div className="mt-8">
        <div className="relative overflow-x-auto rounded-lg mb-8">
          <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}} >
            <Table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
              <TableHead className="text-xs text-gray-700 uppercase bg-gray-200 text-center">
                <TableRow>
                  <TableCell scope="col" className="px-6 py-1 ">                   Name Jobs                 </TableCell>
                  <TableCell scope="col" className="px-6 py-1">                    Date created                  </TableCell>
                  <TableCell scope="col" className="px-6 py-1">                    Process                  </TableCell>
                  <TableCell scope="col" className="px-6 py-1">                    Actions                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {showJobLists.map((job) => (
                  <TableRow className="text-black bg-white text-center justify-center" key={job.idJob}>
                      <TableCell scope="row" className="font-medium text-gray-900 whitespace-nowrap"  > {job.name}  </TableCell>
                      <TableCell className="">{job.date}</TableCell>
                      <TableCell className=" flex justify-center">
                        <div className="w-full h-3 bg-gray-300 rounded-xl">
                          <div className="h-3 bg-emerald-400 rounded-xl"   style={{ width: `${job.member}%` }} ></div>
                          <div className=" justify-center text-center">{job.member} / {job.quantity} </div>
                        </div>
                      </TableCell>
                      <TableCell   className="px-6 py-4 items-center  flex   justify-center">
                        <NavLink to={`/admin/jobs/${job.idJob}`} onClick={() => {}}>
                          {/* ${adminlistjobs.id} */}
                          <EyeIcon className="relative w-5 h-5 gap-2 rounded-xl" />
                        </NavLink>
                      </TableCell>
                    </TableRow>
                ))}
              </TableBody>
            </Table>                
          </TableContainer>
        </div>                
      </div> 
      <div className="">
        {/* Pagination  */}
        <Paginationjoblist  queryConfig={queryConfig} pageSize={pageSize} />
      </div> 
    </>
    );
}
export default ManagetJobList;

import React, { useState,useEffect } from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

import { AdminJobPassListConfig, AdminJobPassInterface } from "../../services/services";
import { omitBy, isUndefined } from "lodash";
import useQueryParams from "../../hooks/useQueryParams";

import qs from "query-string";
import { createSearchParams, useNavigate, useParams } from "react-router-dom";
import { omit, isEqual } from "lodash";
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';


export type QueryConfig = {
  [key in keyof AdminJobPassListConfig]: string;
};
import axiosInstance from "../../utils/AxiosInstance";
import Paginationpasslist from "./Pagination/Paginationpasslist";
import Loader from "../Loader/Loader";
import LoadSpinner from "../LoadSpinner/LoadSpinner";

export default function ListCandiPass() {

  const {jobId} = useParams()
  
  const jobs:  AdminJobPassInterface[] = useAppSelector((state) => state.adminmanagerpassList.adminmanagerpassList);
  const totalListJobs = useAppSelector((state) => state.adminmanagerpassList.totalListPassJobs);
  const queryParams: QueryConfig = useQueryParams();
  const queryConfig: QueryConfig = omitBy(
    {
      page: queryParams.page || "1",   
      size: queryParams.size || 7,  
    },
    isUndefined,
  );
  const [prevQueryConfig, setPrevQueryConfig] =
    useState<QueryConfig>(queryConfig);
  const [pageSize, setPageSize] = useState(
    Math.ceil(totalListJobs / Number(queryParams.size || 7)),
  );
  const [showJobLists, setAdminManagerPassList] = useState(jobs);

  useEffect(() => {
    if (!isEqual(prevQueryConfig, queryConfig)) {
      const fetchJobs = async () => {
        try {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(`/admin/jobs/${jobId}?${query}`);
          setAdminManagerPassList(response.data.result.content);
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
          const response = await axiosInstance(`/admin/jobs/${jobId}?${query}`);
          setAdminManagerPassList(response.data.result.content);
          setPageSize(response.data.result.totalPages);
        }
    };
    fetchPosition();
  }, []);

  if (pageSize < 1) {
      return (
        <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}}>
        <Table className="text-sm text-gray-500 dark:text-gray-400 text-center">
          <TableHead className="text-xs text-gray-700 uppercase bg-gray-200 text-center">
            <TableRow>
            <TableCell scope="col" className="px-1 py-1">
                Name
              </TableCell>
              <TableCell scope="col" className="px-1 py-1">
                Phone
              </TableCell>
              
              <TableCell scope="col" className="px-1 py-1">
                Date created
              </TableCell>
              <TableCell scope="col" className="px-1 py-1">
                Point
              </TableCell>
            </TableRow>
          </TableHead>
          </Table>
          <div className="flex justify-center">
            <Loader />
          </div>
          </TableContainer>  
           
      )
  }
  else  return (
    <div className="flex-col mt-3">
    <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}}>
      <Table className="text-sm text-gray-500 dark:text-gray-400 text-center sticky">
        <TableHead className="text-xs text-gray-700 bg-gray-200 text-center"style={{ fontFamily: "Outfit, sans-serif" }}>
          <TableRow>
          <TableCell scope="col" className="px-1 py-1">
              Name
            </TableCell>
            <TableCell scope="col" className="px-1 py-1">
              Phone
            </TableCell>
            
            <TableCell scope="col" className="px-1 py-1">
              Date created
            </TableCell>
            <TableCell scope="col" className="px-1 py-1">
              Point
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {showJobLists.map((job)  => (
            <TableRow className="text-black bg-white text-center" >
              <TableCell scope="row" className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap">   {job.name}  </TableCell>
              <TableCell className="px-1 py-1">{job.phone}</TableCell>
              <TableCell className="px-1 py-1">{job.date}</TableCell>
              <TableCell className="px-1 py-1">{job.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        </Table>
        </TableContainer>   
                <div className="flex justify-center">
          {/* Pagination  */}
            <Paginationpasslist  queryConfig={queryConfig} pageSize={pageSize} />
        </div >   
    </div>
  );
}


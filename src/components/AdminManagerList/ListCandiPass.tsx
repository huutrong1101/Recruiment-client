import React, { useState,useEffect } from "react";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';

import { AdminJobPassListConfig, AdminJobPassInterface } from "../../services/services";
import { omitBy, isUndefined } from "lodash";
import useQueryParams from "../../hooks/useQueryParams";

import qs from "query-string";
import { useParams } from "react-router-dom";
import { isEqual } from "lodash";
import {  useAppSelector } from '../../hooks/hooks';


export type QueryConfig = {
  [key in keyof AdminJobPassListConfig]: string;
};
import axiosInstance from "../../utils/AxiosInstance";
import Paginationpasslist from "./Pagination/Paginationpasslist";
import Loader from "../Loader/Loader";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import moment from "moment";
import PageNotFound from "../Notfound/Notfound";

export default function ListCandiPass() {

  const {jobId} = useParams();
  
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
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if (!isEqual(prevQueryConfig, queryConfig)) {
      const fetchJobs = async () => {
        // setIsLoading(true);
        try {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(`/admin/jobs/${jobId}?${query}`);
          setAdminManagerPassList(response.data.result.content);
          setPageSize(response.data.result.totalPages);
        } catch (error) {
          console.log(error);
        }finally {
          setIsLoading(false);
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
          const response = await axiosInstance(`/admin/jobs/${jobId}?${query}`);
          setAdminManagerPassList(response.data.result.content);
          setPageSize(response.data.result.totalPages);
        }} catch (error) {
          console.log(error);
        } finally {
          setIsLoading(false);
        }
    };
    fetchPosition();
  }, []);
  return (
    <div className="flex-col mt-3">
    <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}}>
      <Table className="text-sm text-gray-500 dark:text-gray-400 text-center sticky">
        <TableHead className="text-xs bold text-gray-700 bg-gray-200 text-center"style={{ fontFamily: "Outfit, sans-serif" }}>
          <TableRow>
          <TableCell scope="col" className="px-1 py-1 bold">
              Name
            </TableCell>
            <TableCell scope="col" className="px-1 py-1 bold">
              Phone
            </TableCell>
            <TableCell scope="col" className="px-1 py-1 bold">
              State
            </TableCell>
            <TableCell scope="col" className="px-1 py-1 bold" >
              Date created
            </TableCell>
            <TableCell scope="col" className="px-1 py-1 bold">
              Point
            </TableCell>
          </TableRow>
        </TableHead>
          {isLoading ? (
              <TableBody>
              <TableRow>
                <TableCell colSpan={6}>
                  <div className="flex items-center justify-center w-full h-[50px] text-[13px] mt-10 mb-10">
                    <LoadSpinner className="text-2xl text-[#059669] " />
                  </div>
                </TableCell>
              </TableRow>
            </TableBody>
            ) : (
            <TableBody>
            {
            showJobLists && showJobLists.length > 0 ?
            (showJobLists.map((job)  => (
              <TableRow
                className={`text-center text-black bg-white hover:bg-gray-100 
                }`}
              >
              <TableCell scope="row" className="px-1 py-1 font-semibold text-blue-500 whitespace-nowrap">
                {job.name}
              </TableCell>
              <TableCell className="px-1 py-1 text-gray-500">{job.phone}</TableCell>
              <TableCell className="px-1 py-1 text-green-500 italic">{job.state === "NOT_RECEIVED" ?"No interview scheduled yet ..." :(job.state === "RECEIVED" ?"Waiting for interview ..." :job.state)}</TableCell>
              <TableCell className="px-1 py-1 italic">
              {job.state === "NOT_RECEIVED" ?"No interview scheduled yet ..." :(job.state === "RECEIVED" ?"Waiting for interview ..." :moment(job.date).format("HH:mm:ss DD-MM-YYYY"))}
              </TableCell>
              <TableCell className="px-1 py-1 font-semibold bold">
                {job.score}
                </TableCell>
            </TableRow>            
            ))): 
            (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={4} className="text-center">
                    <p>No results were found. Please check again</p>
                    {/* <PageNotFound /> */}
                  </TableCell>
                </TableRow>
              </TableBody>
            )}
            </TableBody>
            )
          }
        
        </Table>
        </TableContainer>   
                <div className="flex justify-center mt-3">
          {/* Pagination  */}
            <Paginationpasslist  queryConfig={queryConfig} pageSize={pageSize} />
        </div >   
    </div>
  );
}


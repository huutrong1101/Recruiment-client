import{ useState, useEffect } from "react";
import {MagnifyingGlassCircleIcon} from "@heroicons/react/24/outline";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import { useAppSelector } from '../../hooks/hooks';
import { AdminDeleteAcountConfig, AdminDelete } from "../../services/services";
import { omitBy, isUndefined } from "lodash";
import useQueryParams from "../../hooks/useQueryParams";
import qs from "query-string";
import { createSearchParams, useNavigate } from "react-router-dom";
import { isEqual } from "lodash";
export type QueryConfig = {
  [key in keyof AdminDeleteAcountConfig]: string;
};
import axiosInstance from "../../utils/AxiosInstance";
import Paginationacountlistdelette from "./Pagination/Paginationacountlistdelette";
import moment from "moment";
import LoadSpinner from "../LoadSpinner/LoadSpinner";

const AdminAcountDelete = () => {
  const jobs:  AdminDelete[] = useAppSelector((state) => state.adminmanagerjobList.adminmanagerJobList);
  const totalListJobs = useAppSelector((state) => state.adminmanagerjobList.totalListJobs);
  const queryParams: QueryConfig = useQueryParams();
  const [isLoading, setIsLoading] = useState(false);
  const queryConfig: QueryConfig = omitBy(
    {
      fullName: queryParams.fullName || "",
      index: queryParams.index ||"1" ,  
      size: queryParams.size || 5,   
    },
    isUndefined,
  );
  const [prevQueryConfig, setPrevQueryConfig] =
    useState<QueryConfig>(queryConfig);
  const [pageSize, setPageSize] = useState(
    Math.ceil(totalListJobs / Number(queryParams.index || 5)),
  );
  const [showJobLists, setAdminManagerJobList] = useState(jobs);

  useEffect(() => {
    if (!isEqual(prevQueryConfig, queryConfig)) {
      const fetchJobs = async () => {
        try {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(`/admin/accountsDeleted?${query}`);
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
          const response = await axiosInstance(`/admin/accountsDeleted?${query}`);
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
    console.log(dataSearch.key);
    try {
      setIsLoading(true);
      navigate({
        pathname: "/admin/accountsDeleted",
        search: createSearchParams({
          ...queryConfig,
          fullName: dataSearch.key,
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
          <form
            onSubmit={e => handleSearch(e)}
            className="inline-flex items-center justify-start gap-1 px-0.5 py-0.5 bg-white border rounded-xl bg-opacity-5"
          >
            <div className="flex items-center justify-center gap-3 ml-3 relative w-[20px]"><MagnifyingGlassCircleIcon/></div>
            <div className="flex items-center justify-center gap-3 relative">
              <input
                type="text"
                className="font-medium ml-10 outline-none text-gray-900 text-[14px] h-[30px] text-left rounded-lg"
                value={dataSearch.key}
                onChange={(e) =>
                  setDataSearch({ ...dataSearch, key: e.target.value })
                }
                placeholder=" Please enter a search     "
              />
            </div>
          </form>
        </div>
        <div className="flex-col mt-5">
          <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}} >
            <Table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
              <TableHead className="text-xs text-gray-500 bg-gray-200 text-center">
                <TableRow>
                  <TableCell scope="col" className="px-1 py-1 "  style={{ fontFamily: "Outfit, sans-serif" }}
                  >  Name                  </TableCell>
                  <TableCell scope="col" className="px-1 py-1 "  style={{ fontFamily: "Outfit, sans-serif" }}
                  >  Gender                 </TableCell>
                   <TableCell scope="col" className="px-1 py-1 "  style={{ fontFamily: "Outfit, sans-serif" }}
                  >  Phone                 </TableCell>
                    <TableCell scope="col" className="px-1 py-1 "  style={{ fontFamily: "Outfit, sans-serif" }}
                  >  Email                 </TableCell>
                  <TableCell scope="col" className="px-1 py-1"                style={{ fontFamily: "Outfit, sans-serif" }}
                  >   Date created </TableCell>
                  <TableCell scope="col" className="px-1 py-1"                style={{ fontFamily: "Outfit, sans-serif" }}
                  >   Date delete </TableCell>
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
              <>
              <TableBody>

               {showJobLists && showJobLists.length > 0 ?
                  (showJobLists.map((job) => (
                  <TableRow className="text-black bg-white text-center justify-center" key={job.userId}>
                  <TableCell scope="row" className="font-medium text-gray-900 whitespace-nowrap" style={{ fontFamily: "Outfit, sans-serif" }}
                  > {job.fullName}  </TableCell>
                  <TableCell scope="row" className="font-medium text-gray-900 whitespace-nowrap" style={{ fontFamily: "Outfit, sans-serif" }}
                  > {job.gender}  </TableCell>
                  <TableCell scope="row" className="font-medium text-gray-900 whitespace-nowrap" style={{ fontFamily: "Outfit, sans-serif" }}
                  > {job.phone}  </TableCell>
                  <TableCell scope="row" className="font-medium text-gray-900 whitespace-nowrap" style={{ fontFamily: "Outfit, sans-serif" }}
                  > {job.email}  </TableCell>
                  <TableCell className=""                 style={{ fontFamily: "Outfit, sans-serif" }}
                  >                {moment(job.createdAt).format("HH:mm:ss DD-MM-YYYY")}                  </TableCell>
                   <TableCell className=""                 style={{ fontFamily: "Outfit, sans-serif" }}
                  >                {moment(job.clastLoginAt).format("HH:mm:ss DD-MM-YYYY")}                  </TableCell>  
                </TableRow>                
                ))): 
                (
                  <div className="flex justify-center w-full mb-10">
                    <span>Không tìm thấy kết quả</span>
                  </div>
                )}
            </TableBody>
          </>
            )}
            </Table>                
          </TableContainer>
      </div> 
        <div className="flex justify-center mt-3">
          {/* Pagination  */}
          <Paginationacountlistdelette  queryConfig={queryConfig} pageSize={pageSize} />
        </div> 
    </>
    );
}
export default AdminAcountDelete;

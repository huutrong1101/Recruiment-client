import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  ExclamationTriangleIcon,
  PencilSquareIcon,
  TrashIcon,
  UserMinusIcon,
} from "@heroicons/react/24/outline";

import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
interface TypeData {
  typeSelected: string;
}
import { useAppSelector } from "../../hooks/hooks";
import { AcountConfig, AcountInterface } from "../../services/services";
import { omitBy, isUndefined } from "lodash";
import useQueryParams from "../../hooks/useQueryParams";
import qs from "query-string";
import {  isEqual } from "lodash";
import axiosInstance from "../../utils/AxiosInstance";
import Paginationacountlist from "./Pagination/Paginationacountlist";
import moment from "moment";
// import UserAccountDeletionButton from "../Delete/DeleteButon";
import Loader from "../Loader/Loader";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
import PageNotFound from "../Notfound/Notfound";
import { toast } from "react-toastify";

export type QueryConfig = {
  [key in keyof AcountConfig]: string;
};

export default function AdminTable({ typeSelected }: TypeData) {
  const [open, setOpen] = React.useState(false);
  
  const handleClose = () => {
    setOpen(false);
  };
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
      page: queryParams.page ,
      role: queryParams.role || (typeSelected === "Blacklist" ? "CANDIDATE" : (typeSelected === "" ? "" : typeSelected)),
      name: queryParams.name  ||"",
      blacklist: queryParams.blacklist || typeSelected == "Blacklist" ?  "true" : "",
      phone: queryParams.phone ||"",
      email: queryParams.email ||"",    
    },
    isUndefined,
  );

  const [prevQueryConfig, setPrevQueryConfig] =
    useState<QueryConfig>(queryConfig);
  const [pageSize, setPageSize] = useState(
    Math.ceil(totalListJobs / Number(queryParams.size || 5)),
  );
  const [showJobLists, setAdminManagerJobList] = useState(jobs);

  const [isLoading, setIsLoading] = useState(false);
  const [selectedUserId, setSelectedUserId] = React.useState('');

  const handleClickOpen = (userId) => {
    setSelectedUserId(userId);
    setOpen(true);
  };

  const handleDelete = () => {
    // Perform the DELETE request to delete the user with the selectedUserId
    axiosInstance.put(`admin/delete/${selectedUserId}`)
      .then((response) => {
        // Handle the successful response, e.g., show an alert or update the UI
        toast.success(response.data.message);
        // Reload the page after deletion to update the table
        window.history.back();
      })
      .catch((error) => {
        // Handle errors, e.g., show an error message or log the error
        toast.error(error.response.data.result);
      })
      .finally(() => {
        // Always close the dialog after handling the delete operation
        handleClose();
      });
  };


  useEffect(() => {
    if (!isEqual(prevQueryConfig, queryConfig)) {
      const fetchJobs = async () => {
        setIsLoading(true);
        try {
          const query = qs.stringify(queryConfig);
          const response = await axiosInstance(`/admin/users?${query}`);
          setAdminManagerJobList(response.data.result.content);
          setPageSize(response.data.result.totalPages);
        } catch (error) {
          console.log(error);
        } finally {
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
          const response = await axiosInstance(`/admin/users?${query}`);
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

  return (
  <div className="w-full max-w-full rounded-xl">
      <TableContainer
        component={Paper}
        sx={{ border: "1px solid rgba(0, 0, 0, 0.4)" }}
      >
        <Table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
          <TableHead className="w-full text-xs text-center text-gray-700 bg-gray-200 text-[1px]">
            <TableRow>
              <TableCell
                scope="col"
                className="px-1 py-1"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {" "}
                Name{" "}
              </TableCell>
              <TableCell
                scope="col"
                className="px-1 py-1"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {" "}
                Role{" "}
              </TableCell>
              <TableCell
                scope="col"
                className="px-1 py-1"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {" "}
                Phone number{" "}
              </TableCell>
              <TableCell
                scope="col"
                className="px-1 py-1"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {" "}
                Email{" "}
              </TableCell>
              <TableCell
                scope="col"
                className="px-1 py-1"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {" "}
                Date created{" "}
              </TableCell>
              <TableCell
                scope="col"
                className="px-1 py-1"
                style={{ fontFamily: "Outfit, sans-serif" }}
              >
                {" "}
                Actions{" "}
              </TableCell>
              {}
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
                <TableBody className="hover">
                {showJobLists && showJobLists.length > 0 ?
                  (showJobLists.map((job) => (
                  <TableRow
                    className={`text-center text-black bg-white hover:bg-gray-100 ${
                      job.active === false ? "bg-red-500" : ""
                    }`}
                    key={job.userId}
                  >
                    <TableCell
                      scope="row"
                      className="px-1 py-1 font-medium text-gray-900 whitespace-nowrap"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {" "}
                      {job.fullName}
                    </TableCell>
                    <TableCell
                      className="px-1 py-1"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {job.role.charAt(0).toUpperCase() + job.role.slice(1).toLowerCase()}
                      {/* {job.blacklisted ? "tao ngu qua": "tao qua ngu"}  */}
                    </TableCell>
                    <TableCell
                      className="px-1 py-1"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {job.phone}
                    </TableCell>
                    <TableCell
                      className="px-1 py-1"
                      style={{ fontFamily: "Outfit, sans-serif" }}
                    >
                      {job.email}
                    </TableCell>
                    <TableCell className="justify-center px-1 py-1 text-center">
                      {job.createdAt
                        ? new Date(job.createdAt).toISOString().split("T")[0]
                        : ""}
                    </TableCell>
                      {/* Change Role Acount */}
                    <TableCell className="px-1 py-1">
                       {job.role !== "ADMIN" && typeSelected !== "Blacklist" && job.active !== false ? (
                        <>
                        <button>
                          <NavLink to={`/admin/users/${job.userId}`} onClick={() => {}}>
                            <PencilSquareIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
                          </NavLink>
                        </button>
                        </>
                      ) : null}
                      {/*  Acount BlackList */}
                      {job.role !== "ADMIN" && typeSelected == "Blacklist" && job.active !== false ? (
                        <>
                        <button>
                          <NavLink to={`/admin/blacklist/${job.userId}`} onClick={() => {}}>
                            <PencilSquareIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
                          </NavLink>
                        </button>
                        </>
                      )   : null}

                      {/* Delete  */}
                      {job.role !== "ADMIN" && typeSelected !== "Blacklist" && job.active !== false && (
                        <>
                        <button>                         
                        <TrashIcon
                          onClick={() => handleClickOpen(job.userId)}
                          className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg"
                        />                       
                        {/* Delete Dialog */}
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          BackdropProps={{ invisible: true }}
                          sx={{ borderRadius: 30 }}
                          style={{ fontFamily: "Outfit, sans-serif" }}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle
                            id="alert-dialog-title"
                            className="text-center"
                          >
                            <p className=" pt-4">Delete Job</p>
                          </DialogTitle>
                          <DialogContent className="text-center">
                            <div className="text-center">
                              <DialogContent className="  text-lg mb-2">
                                <p>Are you sure you want to delete</p>
                                <p> "{job.fullName}"</p>
                              </DialogContent>
                              <DialogContentText
                                id="alert-dialog-description"
                                className="border bg-orange-100 px-3 py-2 "
                              >
                                <div className ="flex text-italic">
                                  <ExclamationTriangleIcon className="w-6 h-6 text-red-800" />
                                  <p className="flex text-red-800   px-2">
                                    WARNING
                                  </p>
                                </div>
                                <div className="text-left  ">
                                  This action cannot be undone, the deleted item
                                  cannot be restored.
                                </div>
                              </DialogContentText>
                            </div>
                          </DialogContent>
                          <DialogActions>
                            <button
                              className="rounded-lg bg-[#059669] hover:bg-green-900 px-4 py-2 mx-1 my-1 text-white"
                              onClick={handleClose}
                            >
                              Cancel
                            </button>
                            <button
                              className="rounded-lg bg-red-700 hover:bg-red-900 px-4 py-2 mx-1 my-1 text-white"
                              onClick={handleDelete}
                              autoFocus
                            >
                              Delete
                            </button>
                          </DialogActions>   
                        </Dialog>                   
                        </button>
                      </>
                      )}
                      {/*  */}
                      {job.role === "CANDIDATE"   && typeSelected !=="Blacklist" && job.active !== false ?  (
                        <>
                          {job.blacklist !== true ? (
                              <button>
                                <NavLink
                                  to={`/admin/users/blacklist/${job.userId}`}
                                  onClick={() => {}}
                                >
                                  <UserMinusIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
                                </NavLink>
                              </button>)
                            : null
                          }
                        </>
                        ): null}
                    </TableCell>
                  </TableRow>
                ))): 
                (
                  <TableBody>
                    <TableRow>
                      <TableCell colSpan={3}>
                        <div className="flex justify-center w-full mb-10">
                              {/* <PageNotFound/> */}
                              <p>No results were found. Please check again</p>
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
      <div className="flex justify-center mt-5">
        {/* Pagination  */}
        <Paginationacountlist queryConfig={queryConfig} pageSize={pageSize} />
      </div>
    </div>
  );
}

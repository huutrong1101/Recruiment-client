import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
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
import TablePagination from "@mui/material/TablePagination";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
interface TypeData {
  typeSelected: string;
}
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { STATUS } from "../../utils/Status";
import { AcountConfig, AcountInterface } from "../../services/services";
import { omitBy, isUndefined } from "lodash";
import useQueryParams from "../../hooks/useQueryParams";
import qs from "query-string";
import { createSearchParams, useNavigate } from "react-router-dom";
import { omit, isEqual } from "lodash";
import axiosInstance from "../../utils/AxiosInstance";
import Paginationacountlist from "./Pagination/Paginationacountlist";
import moment from "moment";
import LoadSpinner from "../LoadSpinner/LoadSpinner";
// import UserAccountDeletionButton from "../Delete/DeleteButon";
import Loader from "../Loader/Loader";

export type QueryConfig = {
  [key in keyof AcountConfig]: string;
};

export default function AdminTable({ typeSelected }: TypeData) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const [isChangePositionOpen, setIsChangePositionOpen] = useState(false);

  const handleToggleChangePosition = () => {
    setIsChangePositionOpen((prev) => !prev);
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
      page: queryParams.page || "1",
      role: queryParams.role || (typeSelected === "Blacklist" ? "CANDIDATE" : (typeSelected === "" ? "" : typeSelected)),
      name: queryParams.name,
      blacklist: typeSelected == "Blacklist" ?  "true" : "false",
      phone: queryParams.phone,
      email: queryParams.email,
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

  //   
  const [accountId, setaccountId] = React.useState('');
  console.log(accountId);
  const handleSubmit = (event) => {  // Send the PUT request to delete the account
    console.log(`${accountId}`);
    return axiosInstance.put(`admin/delete/${accountId}`)
    .then((response) => {
      console.log("Account deleted successfully!");
      // Reload the page after the deletion
      window.location.reload();
    })
    .catch((error) => {
      console.error("Error deleting account:", error);
    });
  }

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
          <TableBody>
            {isLoading ? (
              <div className="flex items-center justify-center w-full h-[50px] text-[13px] mt-10 mb-10">
                <Loader />
              </div>
            ) : (
              <>
                {showJobLists.map((job) => (
                  <TableRow
                    className="text-center text-black bg-white"
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
                      {job.role}
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
                    <TableCell className="px-1 py-1">
                      {job.role !== "ADMIN" && typeSelected !== "Blacklist" ? (
                        <>
                        <button onClick={handleToggleChangePosition}>
                          <NavLink to={`/admin/users/${job.userId}`} onClick={() => {}}>
                          <PencilSquareIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
                          </NavLink>
                        </button>
                        </>
                      ) : null}
                      {job.role !== "ADMIN" && typeSelected !=="Blacklist" && (
                        <button>
                        <TrashIcon
                          onClick={handleClickOpen}
                          className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg"
                        />
                        
                        <input
                          type="hidden"
                          value={String(job.userId)} // Convert to string if job.userId is a number
                          onChange={(event) => setAccountId(event.target.value)}
                        />
                        <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle
                            id="alert-dialog-title"
                            className="text-center"
                            style={{ fontFamily: "Outfit, sans-serif" }}
                          >
                            {"Use Google's location service?"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText
                              id="alert-dialog-description"
                              style={{ fontFamily: "Outfit, sans-serif" }}
                            >
                              Or consider carefully before deleting them all changes when
                              pressing the agree button.
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose} color="error" variant="contained">
                              Disagree
                            </Button>
                            <Button
                              onClick={handleSubmit}
                              autoFocus
                              type="submit"
                              variant="contained"
                              sx={{
                                backgroundColor: "#059669",
                                "&:hover": { backgroundColor: "#259972" },
                              }}
                            >
                              Agree
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </button>
                      )}
                      {job.role === "CANDIDATE"  && typeSelected !=="Blacklist" && (
                        <button>
                          <NavLink
                            to={"/admin/blacklist-add"}
                            onClick={() => {}}
                          >
                            <UserMinusIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
                          </NavLink>
                        </button>
                      )}
                      { typeSelected ==="Blacklist" && (
                        <button>
                          <NavLink
                            to={`/admin/blacklist-delete`}
                            onClick={() => {}}
                          >
                            <PencilSquareIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
                          </NavLink>
                        </button>                        
                       )
                      }
                    </TableCell>
                  </TableRow>
                ))}
              </>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <div className="flex justify-center mt-5">
        {/* Pagination  */}
        <Paginationacountlist queryConfig={queryConfig} pageSize={pageSize} />
      </div>
    </div>
  );
}

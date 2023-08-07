import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { Link } from "react-router-dom";
import "../INTstyle.scss";

// Component & Icon
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
} from "@mui/material";
import {
  PencilIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import Error from "../Error/Error";

// Function from Slice
import { fetchINTCandidatesData } from "../../../redux/reducer/INTCandidatesSlice";

// Status
import LoadSpinner from "../../../components/LoadSpinner/LoadSpinner";
import { STATUS } from "../../../utils/Status";
import { ADMIN_APPLICANTS_STATUS } from "../../../utils/Localization";

export const formatDDMMYY = (date: any) => {
  if (!(date instanceof Date)) {
    date = new Date(date);
  }
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear());
  return `${day}-${month}-${year}`;
};

const rowsPerPageOptions = [5, 10, 15];

const CandidateRecent = () => {
  const {
    INTCandidates,
    INTCandidatesStatus,
    INTTotalCandidates,
    INTTotalPages,
  } = useAppSelector((state: any) => state.INTCandidates);
  const dispatch = useAppDispatch();

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [query, setQuery] = useState(`?size=${rowsPerPage}&page=${page + 1}`);

  const handleIncreasePage = () => {
    if (page < INTTotalPages - 1) {
      setPage(page + 1);
      const newPage = page + 1;
      setQuery(`?size=${rowsPerPage}&page=${newPage + 1}`);
    }
  };
  const handleDecreasePage = () => {
    if (page > 0) {
      setPage(page - 1);
      const newPage = page - 1;
      setQuery(`?size=${rowsPerPage}&page=${newPage + 1}`);
    }
  };

  const handleChangeRowsPerPage = (event: any) => {
    const rowsPerPageValue = parseInt(event.target.value, 10);
    if (rowsPerPageValue !== rowsPerPage) {
      setRowsPerPage(rowsPerPageValue);
      setPage(0);
      const newPage = 0;
      const newRowsPerPage = rowsPerPageValue;
      setQuery(`?size=${newRowsPerPage}&page=${newPage + 1}`);
    }
  };

  const emptyRows =
    rowsPerPage -
    Math.min(rowsPerPage, INTTotalCandidates - page * rowsPerPage);

  useEffect(() => {
    dispatch(fetchINTCandidatesData(query));
  }, [query]);

  if (
    INTCandidatesStatus === STATUS.IDLE ||
    INTCandidatesStatus === STATUS.LOADING
  ) {
    return (
      <div className="CandidateRecent">
        <div className="px-6 py-6 mt-8 border-2 shadow-xl rounded-xl">
          <div className="mb-5 text-2xl font-semibold ">Candidate Recent</div>
          <TableContainer
            component={Paper}
            sx={{ border: "1px solid rgba(0, 0, 0, 0.4)", boxShadow: "none" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="bg-gray-200">
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Position</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>State</TableCell>
                  <TableCell>Score</TableCell>
                  <TableCell>Button</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {INTCandidatesStatus === STATUS.LOADING ? (
                  <TableRow className="flex items-center justify-end">
                    <TableCell colSpan={6}>
                      <div className="flex justify-center">
                        <LoadSpinner className="w-8 h-8" />
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  INTCandidates.map((candidate: any, index: any) => (
                    <TableRow key={index} className={`even:bg-slate-50`}>
                      <TableCell component="th" scope="row">
                        <div className="flex items-center">
                          <img
                            src={candidate?.avatar}
                            className="w-10 h-10 mr-4 rounded-full"
                          />
                          <div>{candidate?.name}</div>
                        </div>
                      </TableCell>
                      <TableCell>{candidate?.position}</TableCell>
                      <TableCell>{formatDDMMYY(candidate?.date)}</TableCell>
                      <TableCell>
                        <span className={`badge-${candidate?.state}`}>
                          {ADMIN_APPLICANTS_STATUS[candidate?.state]}
                        </span>
                      </TableCell>
                      <TableCell>
                        {candidate?.score === -1
                          ? "null"
                          : `${candidate.score}/100`}
                      </TableCell>
                      <TableCell>
                        <Link
                          to={`/interviewer/candidate-recent/${candidate.interviewId}`}
                        >
                          <PencilIcon className="w-4 h-4" />
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))
                )}

                {INTCandidatesStatus === STATUS.IDLE && emptyRows > 0 && (
                  <TableRow style={{ height: 70 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <div className="flex justify-end h-[53px] items-center	">
              <label htmlFor="rows-per-page">Rows per page:</label>
              <select
                className="mx-[30px]"
                id="rows-per-page"
                value={rowsPerPage}
                onChange={handleChangeRowsPerPage}
              >
                {rowsPerPageOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
              <div>
                {page * rowsPerPage + 1}-
                {(page + 1) * rowsPerPage > INTTotalCandidates
                  ? INTTotalCandidates
                  : (page + 1) * rowsPerPage}{" "}
                of {INTTotalCandidates}
              </div>
              <ChevronLeftIcon
                className={`w-5 h-4 mx-[20px] ${
                  page === 0 ? "text-gray-400" : "cursor-pointer"
                }`}
                onClick={handleDecreasePage}
              />
              <ChevronRightIcon
                className={`w-5 h-4 mr-[30px] ${
                  page === INTTotalPages - 1
                    ? "text-gray-400"
                    : "cursor-pointer"
                }`}
                onClick={handleIncreasePage}
              />
            </div>
          </TableContainer>
        </div>
      </div>
    );
  } else if (INTCandidatesStatus === STATUS.ERROR500) {
    return <Error errorCode={STATUS.ERROR500} />;
  } else if (INTCandidatesStatus === STATUS.ERROR500) {
    return <Error errorCode={STATUS.ERROR404} />;
  }
};

export default CandidateRecent;

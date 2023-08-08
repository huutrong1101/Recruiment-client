import { useState, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/hooks";
import { Link } from "react-router-dom";

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
import { fetchINTInterviewsData } from "../../../redux/reducer/INTInterviewsSlice";
import { formatDDMMYY } from "../CandidateRecent/CandidateRecent";

// Status
import LoadSpinner from "../../../components/LoadSpinner/LoadSpinner";
import { STATUS } from "../../../utils/Status";
import { ADMIN_APPLICANTS_STATUS } from "../../../utils/Localization";

const rowsPerPageOptions = [5, 10, 15];

const InterviewRecent = () => {
  const {
    INTInterviews,
    INTInterviewsStatus,
    INTTotalInterviews,
    INTTotalPages,
  } = useAppSelector((state: any) => state.INTInterviews);
  const { INTCandidates } = useAppSelector((state: any) => state.INTCandidates);
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
    Math.min(rowsPerPage, INTTotalInterviews - page * rowsPerPage);

  useEffect(() => {
    dispatch(fetchINTInterviewsData(query));
  }, [query]);

  if (
    INTInterviewsStatus === STATUS.IDLE ||
    INTInterviewsStatus === STATUS.LOADING
  ) {
    return (
      <div className="InterviewRecent">
        <div className="px-6 py-6 mt-8 border-2 shadow-xl rounded-xl">
          <div className="mb-5 text-2xl font-semibold">Interview Recent</div>
          <TableContainer
            component={Paper}
            sx={{ border: "1px solid rgba(0, 0, 0, 0.4)", boxShadow: "none" }}
          >
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead className="bg-gray-200">
                <TableRow>
                  <TableCell>Job Name</TableCell>
                  <TableCell>Position</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell>State</TableCell>
                  <TableCell>Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {INTInterviewsStatus === STATUS.LOADING ? (
                  <TableRow>
                    <TableCell colSpan={5}>
                      <div className="flex justify-center">
                        <LoadSpinner className="w-8 h-8" />
                      </div>
                    </TableCell>
                  </TableRow>
                ) : (
                  INTInterviews.map((interview: any) => (
                    <TableRow
                      key={interview.interviewId}
                      className={`even:bg-slate-50`}
                    >
                      <TableCell component="th" scope="row">
                        {interview?.jobName}
                      </TableCell>
                      <TableCell>{interview?.position}</TableCell>
                      <TableCell>{formatDDMMYY(interview?.time)}</TableCell>
                      <TableCell>
                        <span className={`badge-${interview?.jobApplyState}`}>
                          {ADMIN_APPLICANTS_STATUS[interview?.jobApplyState]}
                        </span>
                      </TableCell>
                      <TableCell>
                        <Link
                          to={`/interviewer/interview-recent/${interview.interviewId}`}
                        >
                          <PencilIcon className="w-4 h-4" />
                        </Link>
                      </TableCell>
                    </TableRow>
                  ))
                )}

                {INTInterviewsStatus === STATUS.IDLE && emptyRows > 0 && (
                  <TableRow style={{ height: 70 * emptyRows }}>
                    <TableCell colSpan={4} />
                  </TableRow>
                )}
              </TableBody>
            </Table>
            <div className="flex justify-end h-[53px] items-center">
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
                {(page + 1) * rowsPerPage > INTTotalInterviews
                  ? INTTotalInterviews
                  : (page + 1) * rowsPerPage}{" "}
                of {INTTotalInterviews}
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
  } else if (INTInterviewsStatus === STATUS.ERROR500) {
    return <Error errorCode={STATUS.ERROR500} />;
  } else if (INTInterviewsStatus === STATUS.ERROR404) {
    return <Error errorCode={STATUS.ERROR404} />;
  }
};
export default InterviewRecent;

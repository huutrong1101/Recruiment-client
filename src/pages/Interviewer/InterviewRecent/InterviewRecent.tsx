import { useState, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import './InterviewRecent.scss'
import { PencilIcon } from '@heroicons/react/24/outline';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { fetchInterviewRecent } from '../../../redux/reducer/InterviewRecentSlice';
import Loader from '../../../components/Loader/Loader';
import { STATUS } from '../../../utils/Status';

const rowsPerPageOptions = [5, 10];

const InterviewRecent = () => {

    const {interviewsRecent, interviewsRecentStatus} = useAppSelector((state: any) => state.interviewRecent);
    const dispatch = useAppDispatch();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const handleChangePage = (event: any, newPage: number) => {
        setPage(newPage);
    };
    const handleChangeRowsPerPage = (event: any) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, 10 - page * rowsPerPage);

    useEffect(() => {
        dispatch(fetchInterviewRecent())
    }, []);
    if(interviewsRecentStatus === STATUS.LOADING){
        return <Loader/>
    }else if(interviewsRecentStatus === STATUS.IDLE){
   console.log(interviewsRecent.length);
        return (
            <div className="InterviewRecent">
                <div className='mb-5 text-2xl'>Interview Recent</div>
                <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead className='bg-slate-300'>
                        <TableRow>
                            <TableCell>Position</TableCell>
                            <TableCell>Date</TableCell>
                            <TableCell>State</TableCell>
                            <TableCell>Button</TableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                            {interviewsRecent.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((interviewRecent:any) => (
                                <TableRow key={interviewRecent.id} className={`${interviewRecent.id % 2 === 0 ? 'bg-slate-100':''}`}>
                                    <TableCell component="th" scope="row">
                                        {interviewRecent.title}
                                    </TableCell>
                                    <TableCell>{interviewRecent.creationAt}</TableCell>
                                    <TableCell>
                                    <div className={`${(interviewRecent.id*interviewRecent.id*4)%100?"badge-completed":"badge-pending"}`}>
                                        <div className='dot'></div>
                                        <div>{(interviewRecent.id*interviewRecent.id*4)%100?"Completed":"Pending"}</div>
                                    </div>
                                </TableCell>
                                    <TableCell><PencilIcon className='w-4 h-4' /></TableCell>
                                </TableRow>
                            ))}
    
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={5} />
                            </TableRow>
                        )}
    
                        </TableBody>
                    </Table>
                    <TablePagination
                        rowsPerPageOptions={rowsPerPageOptions}
                        component="div"
                        count={10}
                        rowsPerPage={rowsPerPage}
                        page={page}
                        onPageChange={handleChangePage}
                        onRowsPerPageChange={handleChangeRowsPerPage}
                    />
                </TableContainer>
            </div>
        );
    }
}
export default InterviewRecent;
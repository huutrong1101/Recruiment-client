import { useState, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import './CandidateRecent.scss'
import { PencilIcon } from '@heroicons/react/24/outline';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { fetchINTCandidatesData } from '../../../redux/reducer/INTCandidatesSlice';
import Loader from '../../../components/Loader/Loader';
import { STATUS } from '../../../utils/Status';
import { Link } from 'react-router-dom';

const rowsPerPageOptions = [5, 10];

const CandidateRecent = () => {
    
    const {INTCandidates, INTCandidatesStatus} = useAppSelector((state: any) => state.INTCandidates);
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
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, INTCandidates.length - page * rowsPerPage);

    useEffect(() => {
        dispatch(fetchINTCandidatesData())
    }, []);

    if(INTCandidatesStatus === STATUS.LOADING){
        return (
            <Loader/>
        );
    }else if(INTCandidatesStatus === STATUS.IDLE){
        return (
            <div className='CandidateRecent'>
                <div className='mb-5 text-2xl mt-4'>Candidate Recent</div>
                <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead className='bg-slate-200'>
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
                        {INTCandidates.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((candidate:any,index:any) => (
                            <TableRow key={index} className={`even:bg-slate-50`}>
                                <TableCell component="th" scope="row">
                                    <div className='flex items-center'>
                                        <img src="#" className='h-10 w-10 rounded-full mr-4' />
                                        <div>{candidate.name}</div>
                                    </div>
                                </TableCell>
                                <TableCell>{candidate.position}</TableCell>
                                <TableCell>{candidate.date}</TableCell>
                                <TableCell>
                                    <div className={`${(index*123*4)%100?"badge-completed":"badge-pending"}`}>
                                        <div className='dot'></div>
                                        <div>{candidate.state}</div>
                                    </div>
                                </TableCell>
                                <TableCell>{candidate.score === -1? "NULL":candidate.score}</TableCell>
                                <TableCell>
                                    <Link to={`/interviewer/candidate-recent/1`} >
                                        <PencilIcon className='w-4 h-4' />
                                    </Link>
                                </TableCell>
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
                        count={INTCandidates.length}
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

export default CandidateRecent;

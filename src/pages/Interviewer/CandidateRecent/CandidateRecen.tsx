import { useState, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import './CandidateRecent.scss'
import { PencilIcon } from '@heroicons/react/24/outline';

import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { fetchCandidateRecent } from '../../../redux/reducer/CandidateRecentSlice';
import Loader from '../../../components/Loader/Loader';
import { STATUS } from '../../../utils/Status';
import { Link } from 'react-router-dom';

const rowsPerPageOptions = [5, 10];

const CandidateRecent = () => {
    
    const {candidatesRecent, candidatesRecentStatus} = useAppSelector((state: any) => state.candidateRecent);
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
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, candidatesRecent.length - page * rowsPerPage);

    useEffect(() => {
        dispatch(fetchCandidateRecent())
    }, []);

    if(candidatesRecentStatus === STATUS.LOADING){
        return (
            <Loader/>
        );
    }else if(candidatesRecentStatus === STATUS.IDLE){
        return (
            <div className='CandidateRecent'>
                <div className='mb-5 text-2xl'>Candidate Recent</div>
                <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead className='bg-slate-300'>
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
                        {candidatesRecent.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((candidateRecent:any) => (
                            <TableRow key={candidateRecent.id} className={`${candidateRecent.id % 2 === 0 ? 'bg-slate-100':''}`}>
                                <TableCell component="th" scope="row">
                                    <div className='flex items-center'>
                                        <img src={candidateRecent.avatar} className='h-10 w-10 rounded-full mr-4' />
                                        <div>{candidateRecent.name}</div>
                                    </div>
                                </TableCell>
                                <TableCell>{candidateRecent.role}</TableCell>
                                <TableCell>{candidateRecent.creationAt}</TableCell>
                                <TableCell>
                                    <div className={`${(candidateRecent.id*candidateRecent.id*4)%100?"badge-completed":"badge-pending"}`}>
                                        <div className='dot'></div>
                                        <div>{(candidateRecent.id*candidateRecent.id*4)%100?"Completed":"Pending"}</div>
                                    </div>
                                </TableCell>
                                <TableCell>{(candidateRecent.id*candidateRecent.id*4)%100}</TableCell>
                                <TableCell>
                                    <Link to={`/interviewer/candidate-recent/${candidateRecent.id}`} >
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
                        count={candidatesRecent.length}
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

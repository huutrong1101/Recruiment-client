import { useState, useEffect } from 'react';
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import './CandidateRecent.scss'
import { PencilIcon, ChevronLeftIcon, ChevronRightIcon} from '@heroicons/react/24/outline';
import { useAppDispatch, useAppSelector } from '../../../hooks/hooks';
import { fetchINTCandidatesData } from '../../../redux/reducer/INTCandidatesSlice';
import Loader from '../../../components/Loader/Loader';
import { STATUS } from '../../../utils/Status';
import { Link } from 'react-router-dom';

const rowsPerPageOptions = [5,10,15];

const CandidateRecent = () => {
    
    const { INTCandidates, INTCandidatesStatus, 
            INTTotalCandidates, INTTotalPages } = useAppSelector((state: any) => state.INTCandidates);
    const dispatch = useAppDispatch();

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(5);
    const [query, setQuery] = useState(`?size=${rowsPerPage}&page=${page+1}`);

    const handleIncreasePage = () => {
        if(page < INTTotalPages-1){
            setPage(page + 1);
            const newPage = page + 1;
            setQuery(`?size=${rowsPerPage}&page=${newPage+1}`);
        }
    };
    const handleDecreasePage = () => {
        if(page > 0){
            setPage(page - 1);
            const newPage = page - 1;
            setQuery(`?size=${rowsPerPage}&page=${newPage+1}`);
        }
    };

    const handleChangeRowsPerPage = (event: any) => {
        const rowsPerPageValue = parseInt(event.target.value, 10);
        if(rowsPerPageValue !== rowsPerPage){
            setRowsPerPage(rowsPerPageValue);
            setPage(0);
            const newPage = 0;
            const newRowsPerPage = rowsPerPageValue;
            setQuery(`?size=${newRowsPerPage}&page=${newPage+1}`);
        }
    };

    const emptyRows = rowsPerPage - Math.min(rowsPerPage, INTTotalCandidates - page * rowsPerPage);

    useEffect(() => {   
        dispatch(fetchINTCandidatesData(query))
    }, [query]);

    if(INTCandidatesStatus === STATUS.IDLE || INTCandidatesStatus === STATUS.LOADING){
        return (
            <div className='CandidateRecent'>
                <div className='mb-5 text-2xl mt-4'>Candidate Recent</div>
                <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)',  boxShadow: 'none'}}>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead className='bg-gray-200'>
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
                        {
                            INTCandidatesStatus === STATUS.LOADING?
                            (
                                <TableRow className='flex justify-end items-center'>
                                    <TableCell colSpan={6}><Loader/></TableCell>
                                </TableRow>
                            )
                            :
                            (
                                INTCandidates.map((candidate:any,index:any) => (
                                <TableRow key={index} className={`even:bg-slate-50`}>
                                    <TableCell component="th" scope="row">
                                        <div className='flex items-center'>
                                            <img src={candidate.avatar} className='h-10 w-10 rounded-full mr-4' />
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
                                        <Link to={`/interviewer/candidate-recent/${candidate.interviewId}`} >
                                            <PencilIcon className='w-4 h-4' />
                                        </Link>
                                    </TableCell>
                                </TableRow>
                                ))
                            )
                        }
    
                        {INTCandidatesStatus === STATUS.IDLE && emptyRows > 0 && (
                            <TableRow style={{ height: 70 * emptyRows }}>
                            <TableCell colSpan={6} />
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                    <div className='flex justify-end h-[53px] items-center	'>
                        <label htmlFor="rows-per-page">Rows per page:</label>
                        <select className='mx-[30px]' id="rows-per-page" value={rowsPerPage} onChange={handleChangeRowsPerPage}>
                            {rowsPerPageOptions.map((option) => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                            ))}
                        </select>
                        <div>{page*rowsPerPage+1}-{(page+1)*rowsPerPage > INTTotalCandidates?INTTotalCandidates:(page+1)*rowsPerPage} of {INTTotalCandidates}</div>
                        <ChevronLeftIcon className={`w-5 h-4 mx-[20px] ${page === 0 ? 'text-gray-400' : 'cursor-pointer'}`}  onClick={handleDecreasePage}/>
                        <ChevronRightIcon className={`w-5 h-4 mr-[30px] ${page === INTTotalPages-1 ? 'text-gray-400' : 'cursor-pointer'}`}  onClick={handleIncreasePage}/>
                    </div>
                </TableContainer>
            </div>
        );
    }else if(INTCandidatesStatus === STATUS.ERROR){
        return ( 
            <div>ERROR</div>
        );
    }
}

export default CandidateRecent;

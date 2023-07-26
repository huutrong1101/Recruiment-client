import{ useState, useEffect } from "react";
import { NavLink,  Link } from "react-router-dom";
import {EyeIcon} from "@heroicons/react/24/outline";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import SearchBar from "../Search/Search";

import {fetchAdminManagerJobList} from "../../redux/reducer/AdminListJobRecentSlice";
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import Loader from "../../components/Loader/Loader";
import { STATUS } from '../../utils/Status';


const ManagetJobList = () => {

  const {adminmanagerjobList, adminmanagerjobListStatus} = useAppSelector(
    (state: any) => state.adminmanagerjobList,
  );

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchAdminManagerJobList())
  }, []);
  useEffect(() => {
    console.log(adminmanagerjobList);
  }, [adminmanagerjobList]);

  // TODO: Page
  const rowsPerPageOptions = [10];
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event: any, newPage: number) => {
      setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: any) => {
      setRowsPerPage(parseInt(event.target.value, 100));
      setPage(0);
  };

  if(adminmanagerjobListStatus === STATUS.LOADING){
      return (
          <Loader/>
      );
  }
  else if(adminmanagerjobListStatus === STATUS.IDLE){
    return (
    <>
      <div className="mt-10">
      <div className="flex justify-center w-100% p-10 text-center">
        <SearchBar />
      </div>
      <div className="relative overflow-x-auto rounded-lg mb-10">
        <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}} >
          <Table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
            <TableHead className="text-xs text-gray-700 uppercase bg-gray-200 text-center">
              <TableRow>
                <TableCell scope="col" className="px-6 py-1 ">                   Name Jobs                 </TableCell>
                <TableCell scope="col" className="px-6 py-1">                    Date created                  </TableCell>
                <TableCell scope="col" className="px-6 py-1">                    Process                  </TableCell>
                <TableCell scope="col" className="px-6 py-1">                    Actions                  </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminmanagerjobList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((adminlistjobs:any )=> (
                <TableRow className="text-black bg-white text-center justify-center" key={adminlistjobs.name}>
                    <TableCell scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"  > {adminlistjobs.name}  </TableCell>
                    <TableCell className="px-6 py-4">{adminlistjobs.date}</TableCell>
                    <TableCell className="px-6 py-4 flex justify-center">
                      <div className="w-full h-3 bg-gray-300 rounded-xl mt-1 mb-1">
                        <div className="h-3 bg-emerald-400 rounded-xl"   style={{ width: `${adminlistjobs.member}%` }} ></div>
                        <div className=" mt-1 mb-2 justify-center text-center">{adminlistjobs.member} / {adminlistjobs.quantity} </div>
                      </div>
                    </TableCell>
                    <TableCell className="px-6 py-4 items-center  flex   justify-center">
                      <NavLink to={`/admin/candidate-pass-list/:JobId`} onClick={() => {}}>
                        {/* ${adminlistjobs.id} */}
                        <EyeIcon className="relative w-5 h-5 gap-2 rounded-xl" />
                      </NavLink>
                    </TableCell>
                  </TableRow>
              ))}
            </TableBody>
          </Table>
          <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                component="div"
                count={100}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
              />
        </TableContainer>
      </div>
    </div>
  </>
    );
  }
}
export default ManagetJobList;

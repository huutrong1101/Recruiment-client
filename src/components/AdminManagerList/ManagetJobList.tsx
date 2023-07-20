import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {EyeIcon} from "@heroicons/react/24/outline";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import SearchBar from "../Search/Search";
const rowsPerPageOptions = [10];
export default function ManagetJobList() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event: any, newPage: number) => {
      setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: any) => {
      setRowsPerPage(parseInt(event.target.value, 100));
      setPage(0);
  };
  let JobManagerList = [
    {      nameJob: "Web Designer/Developer",     day: "9/2/2022",       member: 50,      quantity: 100,      link: "admin/candidate-pass-list/:JobId",    },
    {      nameJob: "Web Designer/Developer",     day: "9/3/2021",       member: 25,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    {      nameJob: "Web Designer/Developer",     day: "9/1/2019",       member: 75,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    {      nameJob: "Web Designer/Developer",     day: "9/10/2020",      member: 65,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    {      nameJob: "Web Designer/Developer",     day: "9/10/2023",      member: 55,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    {      nameJob: "Web Designer/Developer",     day: "9/10/2023",      member: 15,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    {      nameJob: "Web Designer/Developer",     day: "9/10/2023",      member: 15,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    {      nameJob: "Web Designer/Developer",     day: "9/10/2023",      member: 15,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    {      nameJob: "Web Designer/Developer",     day: "6/10/2023",      member: 15,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    {      nameJob: "Web Designer/Developer",     day: "9/11/2023",      member: 25,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    {      nameJob: "Web Designer/Developer",     day: "9/2/2022",       member: 50,      quantity: 100,      link: "admin/candidate-pass-list/:JobId",    },
    {      nameJob: "Web Designer/Developer",     day: "9/3/2021",       member: 25,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    {      nameJob: "Web Designer/Developer",     day: "9/1/2019",       member: 75,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    {      nameJob: "Web Designer/Developer",     day: "9/10/2020",      member: 65,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    {      nameJob: "Web Designer/Developer",     day: "9/10/2023",      member: 55,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    {      nameJob: "Web Designer/Developer",     day: "9/10/2023",      member: 15,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    {      nameJob: "Web Designer/Developer",     day: "9/10/2023",      member: 15,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    {      nameJob: "Web Designer/Developer",     day: "9/10/2023",      member: 15,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    {      nameJob: "Web Designer/Developer",     day: "6/10/2023",      member: 15,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    {      nameJob: "Web Designer/Developer",     day: "9/11/2023",      member: 25,      quantity: 100,      link: "admin/candidate-pass-list/:JobId"    },
    
  ];
  return (
    <div className="">
    <div className="flex justify-center w-200%">
      <SearchBar />
    </div>
    <div className="mt-10 relative overflow-x-auto rounded-lg mb-10">
      <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}} >
        <Table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
          <TableHead className="text-xs text-gray-700 uppercase bg-gray-200 text-center">
            <TableRow>
              <TableCell scope="col" className="px-6 py-1 ">                   Name Jobs                 </TableCell>
              <TableCell scope="col" className="px-6 py-1">                    Date created                  </TableCell>
              <TableCell scope="col" className="px-6 py-1">                    Process                  </TableCell>
              <TableCell scope="col" className="px-6 py-1">                    Actions                  </TableCell>
              {                  }
            </TableRow>
          </TableHead>
          <TableBody>
            {JobManagerList.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index,JobManagerList:any )=> (
              <TableRow className="text-black bg-white text-center justify-center" key={index}>
                  <TableCell scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"  > {item.nameJob}  </TableCell>
                  <TableCell className="px-6 py-4">{item.day}</TableCell>
                  <TableCell className="px-6 py-4">{item.member} \ {item.quantity}</TableCell>
                  <TableCell className="px-6 py-4">
                    <NavLink to={`/${item.link}`} onClick={() => {}}>
                      <EyeIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
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
  );
}

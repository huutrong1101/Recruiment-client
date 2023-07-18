import React, { useState } from "react";
import SearchBar from "../../components/Search/Search";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
const rowsPerPageOptions = [10];
export default function ListCandiPass() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event: any, newPage: number) => {
      setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: any) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
  };
  let ListCandiPassList = [
    {      nameCan: "Nguyen Van A",      day: "9/2/2022",       point: "50",      email: "name@example.com",      phone: "098212xxx",    },
    {      nameCan: "Nguyen Van B",      day: "9/3/2021",       point: "25",      email: "name@example.com",      phone: "098212xxx",    },
    {      nameCan: "Nguyen Van C",      day: "9/1/2019",       point: "75",      email: "name@example.com",      phone: "098212xxx",    },
    {      nameCan: "Nguyen Van D",      day: "9/10/2020",      point: "65",      email: "name@example.com",      phone: "098212xxx",    },
    {      nameCan: "Nguyen Van E",      day: "9/10/2023",      point: "55",      email: "name@example.com",      phone: "098212xxx",    },
    {      nameCan: "Nguyen Van F",      day: "9/10/2023",      point: "15",      email: "name@example.com",      phone: "098212xxx",    },
    {      nameCan: "Nguyen Van R",      day: "9/10/2023",      point: "15",      email: "name@example.com",      phone: "098212xxx",    },
    {      nameCan: "Nguyen Van h",      day: "9/11/2023",      point: "25",      email: "name@example.com",      phone: "098212xxx",    },
    {      nameCan: "Nguyen Van d",      day: "5/03/2023",      point: "75",      email: "name@example.com",      phone: "098212xxx",    },
    {      nameCan: "Nguyen Van f",      day: "9/01/2023",      point: "95",      email: "name@example.com",      phone: "098212xxx",    },
  ];
  return (
    <div className="">
    <div className="flex justify-center w-200%">
      <SearchBar />
    </div>
    <div className="relative rounded-lg">
    <div className="flex items-center justify-center text-center  bg-white border-[2px] rounded-[30px] mt-6 p-8 ">
    <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}}>
      <Table className="text-sm text-gray-500 dark:text-gray-400 text-center sticky">
        <TableHead className="text-xs text-gray-700 uppercase bg-gray-200 text-center">
          <TableRow>
          <TableCell scope="col" className="px-3 py-1">
              Name
            </TableCell>
            <TableCell scope="col" className="px-3 py-1">
              Phone
            </TableCell>
            <TableCell scope="col" className="px-3 py-1">
              Email
            </TableCell>
            <TableCell scope="col" className="px-3 py-1">
              Date created
            </TableCell>
            <TableCell scope="col" className="px-3 py-1">
              Point
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {ListCandiPassList
          .sort((a, b) => b.point - a.point)
          .map((item, index) => (
            <TableRow className="text-black bg-white text-center" key={index}>
              <TableCell scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">   {item.nameCan}  </TableCell>
              <TableCell className="px-6 py-4">{item.phone}</TableCell>
              <TableCell className="px-6 py-4">{item.email}</TableCell>
              <TableCell className="px-6 py-4">{item.day}</TableCell>
              <TableCell className="px-6 py-4">{item.point}</TableCell>
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
  </div>
  );
}

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { PencilSquareIcon, TrashIcon,UserMinusIcon} from "@heroicons/react/24/outline";
import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
import TablePagination from '@mui/material/TablePagination';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
interface TypeData {
  typeSelected: string;
}
const rowsPerPageOptions = [5, 10];
export default function AdminTable({ typeSelected }: TypeData) {
  console.log(typeSelected);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const handleChangePage = (event: any, newPage: number) => {
      setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: any) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, 10 - page * rowsPerPage);
  // Candidate.state
  let Candidate = [
    {     name: "Nguyễn Văn A",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "9/10/2002",      position: "Recruiter",      stateBlackList: 0,   },
    {     name: "Nguyễn Văn B",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "5/6/2002",      position: "Candidate",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn C",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "7/9/2002",      position: "Recruiter",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn D",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "6/11/2002",      position: "Candidate",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn E",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "2/11/2002",      position: "Recruiter",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn F",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "8/2/2002",      position: "Candidate",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn G",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "8/2/2002",      position: "Candidate",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn K",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "8/2/2002",      position: "Candidate",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn ",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "8/2/2002",      position: "Candidate",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn G",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "11/4/2002",      position: "Candidate",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn H",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "25/6/2002",      position: "Recruiter",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn I",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "29/10/2002",      position: "Candidate",      stateBlackList: 1,    },
    {     name: "Nguyễn Văn K",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "9/10/2002",      position: "Recruiter",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn A",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "9/10/2002",      position: "Candidate",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn B",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "5/6/2002",      position: "Recruiter",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn C",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "7/9/2002",      position: "Candidate",      stateBlackList: 1,    },
    {     name: "Nguyễn Văn X",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "7/9/2002",      position: "Candidate",      stateBlackList: 1,    },
    {     name: "Nguyễn Văn Y",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "7/9/2002",      position: "Candidate",      stateBlackList: 1,    },
    {     name: "Nguyễn Văn M",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "7/9/2002",      position: "Candidate",      stateBlackList: 1,    },
    {     name: "Nguyễn Văn T",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "7/9/2002",      position: "Candidate",      stateBlackList: 1,    },
    {     name: "Nguyễn Văn Z",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "7/9/2002",      position: "Candidate",      stateBlackList: 1,    },
    {     name: "Nguyễn Văn D",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "6/11/2002",      position: "Candidate",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn E",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "2/11/2002",     position: "Candidate",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn F",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "8/2/2002",      position: "Candidate",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn G",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "11/4/2002",      position: "Interviewer",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn H",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "25/6/2002",      position: "Interviewer",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn I",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "29/10/2002",      position: "Interviewer",     stateBlackList: 0,    },
    {     name: "Nguyễn Văn K",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "9/10/2002",      position: "Interviewer",      stateBlackList: 0,    },
  ];
  if (typeSelected == "Blacklist") {
    {
      Candidate = Candidate.filter((item) => item.stateBlackList == 1)
      return (
        <div className="flex items-center justify-center text-center bg-zinc-300 rounded-[30px] mt-6 mx-auto p-8 ">
          <div className="relative w-full max-w-full overflow-x-auto rounded-lg h-[500px]">
          <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}}>
            <Table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
              <TableHead className="text-xs text-gray-700 uppercase bg-gray-200 text-center">
                <TableRow>
                  <TableCell scope="col" className="px-3 py-1">                    Name                  </TableCell>
                  <TableCell scope="col" className="px-3 py-1">                    Position                  </TableCell>
                  <TableCell scope="col" className="px-3 py-1">                    Phone number                  </TableCell>
                  <TableCell scope="col" className="px-3 py-1">                    Email                  </TableCell>
                  <TableCell scope="col" className="px-3 py-1">                    Date created                  </TableCell>
                  <TableCell scope="col" className="px-3 py-1">                    Actions                  </TableCell>
                  {                  }
                </TableRow>
              </TableHead>
              <TableBody>
                {Candidate.map((item, index) => (
                  <TableRow className="text-black bg-white text-center" key={index}>
                    <TableCell  scope="row"   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.name}
                    </TableCell>
                    <TableCell className="px-6 py-4">{item.position}</TableCell>
                    <TableCell className="px-6 py-4">{item.phone}</TableCell>
                    <TableCell className="px-6 py-4">{item.email}</TableCell>
                    <TableCell className="px-6 py-4">{item.day}</TableCell>
                    {/* <td className="px-6 py-4">{item.stateBlackList}</td> */}
                    <TableCell className="px-6 py-4">
                      <button>
                        <NavLink to={`/admin/blacklist-delete/`} onClick={() => {}}>
                            <PencilSquareIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
                        </NavLink>
                      </button>
                      <button>
                      <TrashIcon  onClick={handleClickOpen} className="w-5 h-5 relative rounded-lg justify-center items-center gap-2 flex"/>
                      <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title" className='text-center'>
                            {"Use Google's location service?"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                              Or consider carefully before deleting them all changes when pressing the agree button.
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Disagree</Button>
                            <Button onClick={handleClose} autoFocus>
                              Agree
                            </Button>
                          </DialogActions>
                        </Dialog>
                      </button>
                    </TableCell>
                    </TableRow>
                ))}
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
        </div>
      );
    }
  };
  if (typeSelected !== "All") {
    Candidate = Candidate.filter((item) => item.position == typeSelected);
  };
  return (
    <div className="flex items-center justify-center text-center bg-zinc-300 rounded-[30px] mt-6 mx-auto p-8 ">
      <div className="relative w-full max-w-full overflow-x-auto rounded-lg h-[500px]">
      <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}}>
            <Table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
              <TableHead className="text-xs text-gray-700 uppercase bg-gray-200 text-center">
                <TableRow>
                  <TableCell scope="col" className="px-3 py-1">                    Name                  </TableCell>
                  <TableCell scope="col" className="px-3 py-1">                    Position                  </TableCell>
                  <TableCell scope="col" className="px-3 py-1">                    Phone number                  </TableCell>
                  <TableCell scope="col" className="px-3 py-1">                    Email                  </TableCell>
                  <TableCell scope="col" className="px-3 py-1">                    Date created                  </TableCell>
                  <TableCell scope="col" className="px-3 py-1">                    Actions                  </TableCell>
                  {                  }
                </TableRow>
              </TableHead>
          <TableBody>
            {Candidate.map((item, index) => (
              <TableRow className="text-black bg-white text-center" key={index}>
                <TableCell   scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> {item.name}</TableCell>
                <TableCell className="px-6 py-4">{item.position}</TableCell>
                <TableCell className="px-6 py-4">{item.phone}</TableCell>
                <TableCell className="px-6 py-4">{item.email}</TableCell>
                <TableCell className="px-6 py-4">{item.day}</TableCell>
                {/* <td className="px-6 py-4">{item.stateBlackList}</td> */}
                <TableCell className="px-6 py-4">
                  <button>
                      <NavLink to={"/admin/position-change"} onClick={() => {}}>
                        <PencilSquareIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
                      </NavLink>
                  </button>
                  <button>
                  <NavLink to={"#"} onClick={() => {}}>
                  <TrashIcon onClick={handleClickOpen} className="w-5 h-5 relative rounded-lg justify-center items-center gap-2 flex"/>
                      <Dialog
                          open={open}
                          onClose={handleClose}
                          aria-labelledby="alert-dialog-title"
                          aria-describedby="alert-dialog-description"
                        >
                          <DialogTitle id="alert-dialog-title" className='text-center'>
                            {"Use Google's location service?"}
                          </DialogTitle>
                          <DialogContent>
                            <DialogContentText id="alert-dialog-description">
                            Or consider carefully before deleting them all changes when pressing the agree button.
                            </DialogContentText>
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose}>Disagree</Button>
                            <Button onClick={handleClose} autoFocus>
                              Agree
                            </Button>
                          </DialogActions>
                        </Dialog>
                    </NavLink>
                  </button>
                  {(item.position === "Candidate" && item.stateBlackList === 0) ? (
                    <button>
                      <NavLink to={"/admin/blacklist-add"} onClick={() => {}}>
                        <UserMinusIcon className="w-5 h-5 relative rounded-lg justify-center items-center gap-2 flex" />
                      </NavLink>
                    </button>
                    ) : null}
                </TableCell>
              </TableRow>
            ))}
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
    </div>
  );
}

// import React, { useState,useEffect } from "react";
// import { NavLink } from "react-router-dom";
// import { PencilSquareIcon, TrashIcon,UserMinusIcon} from "@heroicons/react/24/outline";
// import { TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Paper } from '@mui/material';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogContent from '@mui/material/DialogContent';
// import DialogContentText from '@mui/material/DialogContentText';
// import DialogTitle from '@mui/material/DialogTitle';

// import { useAppSelector } from "../../hooks/hooks";

// import { AcountInterface, AcountConfig } from "../../services/services";
// import PaginationAcountlist from "./Pagination/Paginationacountlist";
// import axiosInstance from "../../utils/AxiosInstance";
// import { omitBy, isUndefined } from "lodash";
// import useQueryParams from "../../hooks/useQueryParams";
// import qs from "query-string";
// import { createSearchParams, useNavigate } from "react-router-dom";
// import { omit, isEqual } from "lodash";

// export type QueryConfig = {
//   [key in keyof AcountConfig]: string;
// };
// interface TypeData {
//   typeSelected: string;
// }
// export default function AdminTable({ typeSelected }: TypeData) {
//   const Acounts: AcountInterface[] = useAppSelector((state) => state.adminacountList.Acounts);
//   const totalAcounts = useAppSelector((state) => state.adminacountList.totalAcounts);

//   const navigate = useNavigate();

//   const queryParams: QueryConfig = useQueryParams();

//   const queryConfig: QueryConfig = omitBy(
//     {
//       page: queryParams.page || "1",
//       size: queryParams.size || 10,
//       searchText: queryParams.searchText,
//       searchBy: queryParams.searchBy,
//     },
//     isUndefined,
//   );

//   const [prevQueryConfig, setPrevQueryConfig] =
//     useState<QueryConfig>(queryConfig);

//   const [showAcounts, setAdminManagerAcountList] = useState(Acounts);

//   const [pageSize, setPageSize] = useState(
//     Math.ceil(totalAcounts / Number(queryParams.size || 10)),
//   );

//   const [isLoading, setIsLoading] = useState(false);
//   if (typeSelected == "Blacklist") {
//     {
//       const queryConfig: QueryConfig = omitBy(
//         {
//           page: queryParams.page || "1",
//           size: queryParams.size || 10,
//           searchText: queryParams.searchText   || "BLACKLIST",
//           searchBy: queryParams.searchBy  || "role",
//         },
//         isUndefined,
//       );  
//       useEffect(() => {
//         if (!isEqual(prevQueryConfig, queryConfig)) {
//           const fetchAcounts = async () => {
//             try {
//               const query = qs.stringify(queryConfig);
//               const response = await axiosInstance(`/admin/users?${query}`);
//               setAdminManagerAcountList(response.data.result.content);
//               setPageSize(response.data.result.totalPages);
//             } catch (error) {
//               console.log(error);
//             }
//           };
//           fetchAcounts();
//           setPrevQueryConfig(queryConfig);
//         }
//       }, [queryConfig, prevQueryConfig]);
//       return (
//           <div className="mt-10 w-full max-w-full overflow-x-auto rounded-xl">
//           <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}}>
//             <Table className="w-full text-gray-500 dark:text-gray-400 text-center">
//               <TableHead className=" text-gray-700 uppercase bg-gray-200 text-center">
//                 <TableRow>
//                   <TableCell scope="col" className="px-3 py-1">                    Name                  </TableCell>
//                   <TableCell scope="col" className="px-3 py-1">                    ROLE           </TableCell>
//                   <TableCell scope="col" className="px-3 py-1">                    Phone number                  </TableCell>
//                   <TableCell scope="col" className="px-3 py-1">                    Email                  </TableCell>
//                   <TableCell scope="col" className="px-3 py-1">                    Date created                  </TableCell>
//                   <TableCell scope="col" className="px-3 py-1">                    Actions                  </TableCell>
//                   {                  }
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//               {showJobLists.map((datalist)  => (
//                   <TableRow className="text-black bg-white text-center justify-center" key={datalist.id}>
//                     <TableCell  scope="row"   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
//                       {datalist.name}
//                     </TableCell>
//                     <TableCell className="px-6 py-4 text-center justify-center">BlackList</TableCell>
//                     <TableCell className="px-6 py-4 text-center justify-center">{datalist.phone}</TableCell>
//                     <TableCell className="px-6 py-4 text-center justify-center">{datalist.email}</TableCell>
//                     <TableCell className="px-6 py-4 text-center justify-center">{datalist.date}</TableCell>
//                     {/* <td className="px-6 py-4">{item.stateBlackList}</td> */}
//                     <TableCell className="px-6 py-4">
//                       <button>
//                         <NavLink to={`/admin/blacklist-delete/`} onClick={() => {}}>
//                             <PencilSquareIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
//                         </NavLink>
//                       </button>
//                       <button>
//                         <NavLink to={"/admin/blacklist-delete"} onClick={() => {}}>
//                           <TrashIcon className="w-5 h-5 relative rounded-lg justify-center items-center gap-2 flex" />
//                         </NavLink>
//                       </button>
//                     </TableCell>
//                     </TableRow>
//                 ))}
//               </TableBody>
//             </Table>           
//           </div>
//       )
//     }
//   }
//   else if (typeSelected === "All") {
//     const queryConfig: QueryConfig = omitBy(
//       {
//         page: queryParams.page || "1",
//         size: queryParams.size || 10,
//         searchText: queryParams.searchText   || ,
//         searchBy: queryParams.searchBy  || ,
//       },
//       isUndefined,
//     );  
//     useEffect(() => {
//       if (!isEqual(prevQueryConfig, queryConfig)) {
//         const fetchAcounts = async () => {
//           try {
//             const query = qs.stringify(queryConfig);
//             const response = await axiosInstance(`/admin/users?${query}`);
//             setAdminManagerAcountList(response.data.result.content);
//             setPageSize(response.data.result.totalPages);
//           } catch (error) {
//             console.log(error);
//           }
//         };
//         fetchAcounts();
//         setPrevQueryConfig(queryConfig);
//       }
//     }, [queryConfig, prevQueryConfig]);
//     return (
//       <div className="mt-10 w-full max-w-full overflow-x-auto rounded-xl">
//           <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}}>
//             <Table className="w-full text-gray-500 dark:text-gray-400 text-center">
//               <TableHead className=" text-gray-700 uppercase bg-gray-200 text-center">
//                 <TableRow>
//                   <TableCell scope="col" className="px-3 py-1">                    Name                  </TableCell>
//                   <TableCell scope="col" className="px-3 py-1">                    ROLE           </TableCell>
//                   <TableCell scope="col" className="px-3 py-1">                    Phone number                  </TableCell>
//                   <TableCell scope="col" className="px-3 py-1">                    Email                  </TableCell>
//                   <TableCell scope="col" className="px-3 py-1">                    Date created                  </TableCell>
//                   <TableCell scope="col" className="px-3 py-1">                    Actions                  </TableCell>
//                   {                  }
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//               {showJobLists.map((datalist)  => (
//                   <TableRow className="text-black bg-white text-center justify-center" key={datalist.id}>
//                     <TableCell  scope="row"   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
//                       {datalist.name}
//                     </TableCell>
//                     <TableCell className="px-6 py-4 text-center justify-center">{datalist.role}</TableCell>
//                     <TableCell className="px-6 py-4 text-center justify-center">{datalist.phone}</TableCell>
//                     <TableCell className="px-6 py-4 text-center justify-center">{datalist.email}</TableCell>
//                     <TableCell className="px-6 py-4 text-center justify-center">{datalist.date}</TableCell>
//                     {/* <td className="px-6 py-4">{item.stateBlackList}</td> */}
//                     <TableCell className="px-6 py-4">
//                       <button>
//                         <NavLink to={`/admin/blacklist-delete/`} onClick={() => {}}>
//                             <PencilSquareIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
//                         </NavLink>
//                       </button>
//                       <button>
//                         <NavLink to={"/admin/blacklist-delete"} onClick={() => {}}>
//                           <TrashIcon className="w-5 h-5 relative rounded-lg justify-center items-center gap-2 flex" />
//                         </NavLink>
//                       </button>
//                     </TableCell>
//                     </TableRow>
//                 ))}
//               </TableBody>
//             </Table>           
//           </div>
//     )
//   } else if (typeSelected === "Recruiter") {
//     const queryConfig: QueryConfig = omitBy(
//       {
//         page: queryParams.page || "1",
//         size: queryParams.size || 10,
//         searchText: queryParams.searchText   || "RECRUITER",
//         searchBy: queryParams.searchBy  || role,
//       },
//       isUndefined,
//     );  
//     useEffect(() => {
//       if (!isEqual(prevQueryConfig, queryConfig)) {
//         const fetchAcounts = async () => {
//           try {
//             const query = qs.stringify(queryConfig);
//             const response = await axiosInstance(`/admin/users?${query}`);
//             setAdminManagerAcountList(response.data.result.content);
//             setPageSize(response.data.result.totalPages);
//           } catch (error) {
//             console.log(error);
//           }
//         };
//         fetchAcounts();
//         setPrevQueryConfig(queryConfig);
//       }
//     }, [queryConfig, prevQueryConfig]);
//     return (
//       <div className="mt-10 w-full max-w-full overflow-x-auto rounded-xl">
//           <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}}>
//             <Table className="w-full text-gray-500 dark:text-gray-400 text-center">
//               <TableHead className=" text-gray-700 uppercase bg-gray-200 text-center">
//                 <TableRow>
//                   <TableCell scope="col" className="px-3 py-1">                    Name                  </TableCell>
//                   <TableCell scope="col" className="px-3 py-1">                    ROLE           </TableCell>
//                   <TableCell scope="col" className="px-3 py-1">                    Phone number                  </TableCell>
//                   <TableCell scope="col" className="px-3 py-1">                    Email                  </TableCell>
//                   <TableCell scope="col" className="px-3 py-1">                    Date created                  </TableCell>
//                   <TableCell scope="col" className="px-3 py-1">                    Actions                  </TableCell>
//                   {                  }
//                 </TableRow>
//               </TableHead>
//               <TableBody>
//               {showJobLists.map((datalist)  => (
//                   <TableRow className="text-black bg-white text-center justify-center" key={datalist.id}>
//                     <TableCell  scope="row"   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
//                       {datalist.name}
//                     </TableCell>
//                     <TableCell className="px-6 py-4 text-center justify-center">{datalist.role}</TableCell>
//                     <TableCell className="px-6 py-4 text-center justify-center">{datalist.phone}</TableCell>
//                     <TableCell className="px-6 py-4 text-center justify-center">{datalist.email}</TableCell>
//                     <TableCell className="px-6 py-4 text-center justify-center">{datalist.date}</TableCell>
//                     {/* <td className="px-6 py-4">{item.stateBlackList}</td> */}
//                     <TableCell className="px-6 py-4">
//                       <button>
//                         <NavLink to={`/admin/blacklist-delete/`} onClick={() => {}}>
//                             <PencilSquareIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
//                         </NavLink>
//                       </button>
//                       <button>
//                         <NavLink to={"/admin/blacklist-delete"} onClick={() => {}}>
//                           <TrashIcon className="w-5 h-5 relative rounded-lg justify-center items-center gap-2 flex" />
//                         </NavLink>
//                       </button>
//                     </TableCell>
//                     </TableRow>
//                 ))}
//               </TableBody>
//             </Table>           
//         </div>
//       }
// else if (typeSelected === "Interviewer") {
//   const queryConfig: QueryConfig = omitBy(
//     {
//     page: queryParams.page || "1",
//     size: queryParams.size || 10,
//     searchText: queryParams.searchText   || "INTERVIEW",
//     searchBy: queryParams.searchBy  || role,
//     },
//     isUndefined,
//   );  
//   useEffect(() => { 
//     if (!isEqual(prevQueryConfig, queryConfig)) {
//     const fetchAcounts = async () => {
//     try {
//           const query = qs.stringify(queryConfig);
//           const response = await axiosInstance(`/admin/users?${query}`);
//           setAdminManagerAcountList(response.data.result.content);
//           setPageSize(response.data.result.totalPages);
//         } catch (error) {
//           console.log(error);
//         }
//       };
//     fetchAcounts();
//     setPrevQueryConfig(queryConfig);
//     }
//   }, [queryConfig, prevQueryConfig]);
//   }
//   return (
//     <div className="mt-10 w-full max-w-full overflow-x-auto rounded-xl">
//       <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}}>
//         <Table className="w-full text-gray-500 dark:text-gray-400 text-center">
//           <TableHead className=" text-gray-700 uppercase bg-gray-200 text-center">
//           <TableRow>
//           <TableCell scope="col" className="px-3 py-1">                    Name                  </TableCell>
//           <TableCell scope="col" className="px-3 py-1">                    ROLE           </TableCell>
//           <TableCell scope="col" className="px-3 py-1">                    Phone number                  </TableCell>
//           <TableCell scope="col" className="px-3 py-1">                    Email                  </TableCell>
//           <TableCell scope="col" className="px-3 py-1">                    Date created                  </TableCell>
//           <TableCell scope="col" className="px-3 py-1">                    Actions                  </TableCell>
//           </TableRow>
//         </TableHead>
//         <TableBody>
//           {showJobLists.map((datalist)  => (
//           <TableRow className="text-black bg-white text-center justify-center" key={datalist.id}>
//           <TableCell  scope="row"   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
//           {datalist.name}
//           </TableCell>
//           <TableCell className="px-6 py-4 text-center justify-center">Interviewer</TableCell>
//           <TableCell className="px-6 py-4 text-center justify-center">{datalist.phone}</TableCell>
//           <TableCell className="px-6 py-4 text-center justify-center">{datalist.email}</TableCell>
//           <TableCell className="px-6 py-4 text-center justify-center">{datalist.date}</TableCell>
//           {/* <td className="px-6 py-4">{item.stateBlackList}</td> */}
//           <TableCell className="px-6 py-4">
//           <button>
//           <NavLink to={`/admin/blacklist-delete/`} onClick={() => {}}>
//           <PencilSquareIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
//           </NavLink>
//           </button>
//           <button>
//           <NavLink to={"/admin/blacklist-delete"} onClick={() => {}}>
//           <TrashIcon className="w-5 h-5 relative rounded-lg justify-center items-center gap-2 flex" />
//           </NavLink>
//           </button>
//           </TableCell>
//           </TableRow>
//         ))}
//     </TableBody>
//     </Table>           
//     </div>)
//   }
//   return (
//               <div className="mt-10 w-full max-w-full overflow-x-auto rounded-xl">
//               <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}}>
//                     <Table className="w-full text-sm text-gray-500 dark:text-gray-400 text-center">
//                       <TableHead className="text-xs text-gray-700 uppercase bg-gray-200 text-center">
//                         <TableRow>
//                           <TableCell scope="col" className="px-3 py-1">                    Name                  </TableCell>
//                           <TableCell scope="col" className="px-3 py-1">                    ROLE                 </TableCell>
//                           <TableCell scope="col" className="px-3 py-1">                    Phone number                  </TableCell>
//                           <TableCell scope="col" className="px-3 py-1">                    Email                  </TableCell>
//                           <TableCell scope="col" className="px-3 py-1">                    Date created                  </TableCell>
//                           <TableCell scope="col" className="px-3 py-1">                    Actions                  </TableCell>
//                           {                  }
//                         </TableRow>
//                       </TableHead>
//                   <TableBody>
//                   {showJobLists.map((datalist)  =>  (
//                       <TableRow className="text-black bg-white text-center" key={datalist.id}>
//                         <TableCell   scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"> {datalist.name}</TableCell>
//                         <TableCell className="px-6 py-4">Candidate</TableCell>
//                         <TableCell className="px-6 py-4">{datalist.phone}</TableCell>
//                         <TableCell className="px-6 py-4">{datalist.email}</TableCell>
//                         <TableCell className="px-6 py-4">{datalist.day}</TableCell>
//                         {/* <td className="px-6 py-4">{item.stateBlackList}</td> */}
//                         <TableCell className="px-6 py-4">
//                           <button>
//                               <NavLink to={"/admin/position-change"} onClick={() => {}}>
//                                 <PencilSquareIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
//                               </NavLink>
//                           </button>
//                           <button>
//                           <TrashIcon onClick={handleClickOpen} className="w-5 h-5 relative rounded-lg justify-center items-center gap-2 flex"/>
//                               <Dialog
//                                   open={open}
//                                   onClose={handleClose}
//                                   aria-labelledby="alert-dialog-title"
//                                   aria-describedby="alert-dialog-description"
//                                 >
//                                   <DialogTitle id="alert-dialog-title" className='text-center'>
//                                     {"Use Google's location service?"}
//                                   </DialogTitle>
//                                   <DialogContent>
//                                     <DialogContentText id="alert-dialog-description">
//                                     Or consider carefully before deleting them all changes when pressing the agree button.
//                                     </DialogContentText>
//                                   </DialogContent>
//                                   <DialogActions>
//                                     <Button onClick={handleClose} color="error" variant="contained">Disagree</Button>
//                                     <Button onClick={handleClose} autoFocus type='submit' variant="contained" sx={{
//                                             backgroundColor: "#059669",'&:hover': { backgroundColor: "#289972", },
//                                         }}>
//                                         Agree
//                                     </Button>
//                                   </DialogActions>
//                                 </Dialog>
//                           </button>
//                             <button>
//                             <NavLink to={"/admin/blacklist-add"} onClick={() => {}}>
//                               <UserMinusIcon className="w-5 h-5 relative rounded-lg justify-center items-center gap-2 flex" />
//                             </NavLink>
//                             </button>
//                         </TableCell>
//                       </TableRow>
//                     ))}
//                     </TableBody>
//                   </Table>        
//                 </div>
//               );
// }


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
const rowsPerPageOptions = [10];
export default function AdminTable({ typeSelected }: TypeData) {
  console.log(typeSelected);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const handleChangePage = (event: any, newPage: number) => {
      setPage(newPage);
  };
  const handleChangeRowsPerPage = (event: any) => {
      setRowsPerPage(parseInt(event.target.value, 100));
      setPage(0);
  };
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
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
    {     name: "Nguyễn Văn ",       email: "Candidate@example.com",      phone: "0978123xxx",      day: "8/2/2002",      position: "Candidate",      stateBlackList: 0,    },
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
    {     name: "Nguyễn Văn H",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "11/4/2002",      position: "Interviewer",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn I",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "11/4/2002",      position: "Interviewer",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn H",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "25/6/2002",      position: "Interviewer",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn I",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "29/10/2002",      position: "Interviewer",     stateBlackList: 0,    },
    {     name: "Nguyễn Văn K",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "9/10/2002",      position: "Interviewer",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn A",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "9/10/2002",      position: "Recruiter",      stateBlackList: 0,   },
    {     name: "Nguyễn Văn B",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "5/6/2002",      position: "Candidate",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn C",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "7/9/2002",      position: "Recruiter",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn D",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "6/11/2002",      position: "Candidate",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn E",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "2/11/2002",      position: "Recruiter",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn F",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "8/2/2002",      position: "Candidate",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn G",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "8/2/2002",      position: "Candidate",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn K",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "8/2/2002",      position: "Candidate",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn ",       email: "Candidate@example.com",      phone: "0978123xxx",      day: "8/2/2002",      position: "Candidate",      stateBlackList: 0,    },
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
    {     name: "Nguyễn Văn H",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "11/4/2002",      position: "Interviewer",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn I",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "11/4/2002",      position: "Interviewer",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn H",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "25/6/2002",      position: "Interviewer",      stateBlackList: 0,    },
    {     name: "Nguyễn Văn I",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "29/10/2002",      position: "Interviewer",     stateBlackList: 0,    },
    {     name: "Nguyễn Văn K",      email: "Candidate@example.com",      phone: "0978123xxx",      day: "9/10/2002",      position: "Interviewer",      stateBlackList: 0,    },
  ];
  if (typeSelected == "Blacklist") {
    {
      Candidate = Candidate.filter((item) => item.stateBlackList == 1)
      return (
          <div className="mt-10 w-full max-w-full overflow-x-auto rounded-xl">
          <TableContainer component={Paper} sx={{ border: '1px solid rgba(0, 0, 0, 0.4)'}}>
            <Table className="w-full text-gray-500 dark:text-gray-400 text-center">
              <TableHead className=" text-gray-700 uppercase bg-gray-200 text-center">
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
                {Candidate.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index,Candidate:any) => (
                  <TableRow className="text-black bg-white text-center justify-center" key={index}>
                    <TableCell  scope="row"   className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                      {item.name}
                    </TableCell>
                    <TableCell className="px-6 py-4 text-center justify-center">{item.position}</TableCell>
                    <TableCell className="px-6 py-4 text-center justify-center">{item.phone}</TableCell>
                    <TableCell className="px-6 py-4 text-center justify-center">{item.email}</TableCell>
                    <TableCell className="px-6 py-4 text-center justify-center">{item.day}</TableCell>
                    {/* <td className="px-6 py-4">{item.stateBlackList}</td> */}
                    <TableCell className="px-6 py-4">
                      <button>
                        <NavLink to={`/admin/blacklist-delete/`} onClick={() => {}}>
                            <PencilSquareIcon className="relative flex items-center justify-center w-5 h-5 gap-2 rounded-lg" />
                        </NavLink>
                      </button>
                      <button>
                        <NavLink to={"/admin/blacklist-delete"} onClick={() => {}}>
                          <TrashIcon className="w-5 h-5 relative rounded-lg justify-center items-center gap-2 flex" />
                        </NavLink>
                      </button>
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
      );
    }
  };
  if (typeSelected !== "All") {
    Candidate = Candidate.filter((item) => item.position == typeSelected);
  };
  Candidate = Candidate.filter((item) => item.stateBlackList == 0)
  return (
      <div className="mt-10 w-full max-w-full overflow-x-auto rounded-xl">
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
            {Candidate.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((item, index,Candidate:any) => (
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
                            <Button onClick={handleClose} color="error" variant="contained">Disagree</Button>
                            <Button onClick={handleClose} autoFocus type='submit' variant="contained" sx={{
                                    backgroundColor: "#059669",'&:hover': { backgroundColor: "#289972", },
                                }}>
                                Agree
                            </Button>
                          </DialogActions>
                        </Dialog>
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
            count={100}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </TableContainer>
      </div>
  );
}


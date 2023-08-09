import { useAppSelector } from "../hooks/hooks";

export interface JobDataInterface {
  listJobInfoSearch: { [index: string]: object[] };
}

// export const JobData: JobDataInterface = {
//   listJobInfoSearch: {
//     "Employee Type": [
//       { id: 1, value: "Full-time" },
//       { id: 2, value: "Part-time" },
//       { id: 3, value: "Remote" },
//     ],
//     Location: [
//       { id: 1, value: "Location 1" },
//       { id: 2, value: "Location 2" },
//       { id: 3, value: "Location 3" },
//     ],
//     "Job Type": [
//       { id: 1, value: "Type 1" },
//       { id: 2, value: "Type 2" },
//       { id: 3, value: "Type 3" },
//     ],

//     Experience: [
//       { id: 1, value: "Type 1" },
//       { id: 2, value: "Type 2" },
//       { id: 3, value: "Type 3" },
//     ],

//     Qualification: [
//       { id: 1, value: "Type 1" },
//       { id: 2, value: "Type 2" },
//       { id: 3, value: "Type 3" },
//     ],

//     Salary: [
//       { id: 1, value: "Exp 1" },
//       { id: 2, value: "Exp 2" },
//       { id: 3, value: "Exp 3" },
//     ],
//     "Posted at": [
//       { id: 1, value: "Location 1" },
//       { id: 2, value: "Location 2" },
//       { id: 3, value: "Location 3" },
//     ],
//   },
// };

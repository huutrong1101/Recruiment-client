import React, { useState } from "react";
import classnames       from "classnames";
import { Outlet }       from "react-router-dom";
import SearchBar        from "../../components/Search/Search";
import Tabbaradmin      from "../../components/Tabbaradmin/Tabbaradmin";
import Recruiter_list   from "../../components/AdminManagerList/RecruiterList";
import Blacklist_list   from "../../components/AdminManagerList/BlackList";
import Interview_list   from "../../components/AdminManagerList/InterviewList";
import Candidate_list   from "../../components/AdminManagerList/CandidateList";
import SearchList_list  from "../../components/AdminManagerList/SearchList";
import NoteDelete from "../../components/NoteDelete/NoteDelete";
export default function AdminDashboard() {
  // const [ShowSearch, SearchListtrue] = useState(false) ;
  return(
    <div className="flex flex-col">
        <nav className="p-2 text-center">
          <SearchBar />
        </nav>
        <nav className="bg-white p-6 relative overflow-x-auto">
          <Tabbaradmin />
        </nav>
        <Outlet></Outlet>

    </div>
  );
}

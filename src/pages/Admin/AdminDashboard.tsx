import { Outlet }       from "react-router-dom";
import SearchBar        from "../../components/Search/Search";
import Tabbaradmin      from "../../components/Tabbaradmin/Tabbaradmin";
export default function AdminDashboard() {
  // const [ShowSearch, SearchListtrue] = useState(false) ;
  return(
    <div className="flex flex-col">
        <nav className="p-10 text-center">
          <SearchBar />
        </nav>
        <nav className="bg-white relative overflow-x-auto">
          <Tabbaradmin />
        </nav>
        <Outlet />
    </div>
  );
}

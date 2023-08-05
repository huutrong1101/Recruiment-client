import { Outlet, useNavigate } from "react-router-dom";
import { hasLocalToken } from "../../utils/localToken";
import NotFound from "../NotFound/NotFound";
import { useAppSelector } from "../../hooks/hooks";
import FilterLoadingLayout from "./FilterLoadingLayout";

export default function FilterNonLogin() {
  const { isLoggedIn, loading, token } = useAppSelector((app) => app.Auth);

  if (token) {
    if (loading === "idle" || loading === "pending") {
      return <FilterLoadingLayout />;
    }

    if (loading === "success" && isLoggedIn) {
      return <NotFound />;
    }
  }

  return (
    <>
      <Outlet />
    </>
  );
}

import { Outlet, useNavigate } from "react-router-dom";
import { hasLocalToken } from "../../utils/localToken";
import NotFound from "../NotFound/NotFound";
import { useAppSelector } from "../../hooks/hooks";

export default function FilterNonLogin() {
  const { isLoggedIn, loading } = useAppSelector((app) => app.Auth);

  if (loading === "success" && isLoggedIn) {
    return <></>;
  }

  return (
    <>
      <Outlet />
    </>
  );
}

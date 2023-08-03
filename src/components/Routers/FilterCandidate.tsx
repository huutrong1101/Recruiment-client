import { useTokenAuthorize } from "../../hooks/useTokenAuthorize";
import { useAppSelector } from "../../hooks/hooks";
import { Outlet, useNavigate } from "react-router-dom";
import NotFound from "../NotFound/NotFound";

export default function FilterCandidate() {
  useTokenAuthorize();
  const navigate = useNavigate();

  const { isLoggedIn, loading, token } = useAppSelector((app) => app.Auth);

  if (!token && loading === "idle") {
    navigate("/auth/login");
    return <NotFound />;
  }

  // Wait for verifying a token
  if (loading === "idle" || loading === "pending") {
    return (
      <>
        <div className="min-h-[80vh] min-w-[100vh] animate-pulse bg-gray-200 rounded-xl mb-8 duration-75"></div>
      </>
    );
  }

  // Something occurred while verifying
  if (loading === "failed") {
    return <>Failed to verify account</>;
  }

  // If the token is logged in
  if (!isLoggedIn && loading === "success") {
    return <>Not logged in</>;
  }

  return <Outlet />;
}

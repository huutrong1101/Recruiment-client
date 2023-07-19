import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { authLogout, fetchUserFromToken } from "../redux/AuthSlice";

export function useTokenAuthorize() {
  const dispatch = useAppDispatch();

  const token = useAppSelector((app) => app.Auth.token);

  useEffect(() => {
    if (token !== null) {
      // Get the profile from signed in token.
      dispatch(fetchUserFromToken({ token }))
        .unwrap()
        .catch((error: any) => {
          // if failed, trying to look at the scenario.
          // First, if the token is broken
          if (!error.success && error.statusCode === 500) {
            dispatch(authLogout());
          }

          // Second one, when expired, we trying to refresh it
        });
    }

    return () => {
      // Clean up here
    };
  }, []);
}

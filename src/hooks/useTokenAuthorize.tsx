import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./hooks";
import { authLogout, fetchUserFromToken } from "../redux/AuthSlice";
import {
  getLocalToken,
  hasLocalToken,
  hasRefreshToken,
} from "../utils/localToken";
import { requestRefreshAccessToken } from "../utils/AxiosInstance";

export function useTokenAuthorize() {
  const dispatch = useAppDispatch();

  // const token = useAppSelector((app) => app.Auth.token);

  useEffect(() => {
    if (hasRefreshToken()) {
      if (!hasLocalToken()) {
        requestRefreshAccessToken().then(
          ({ refreshToken, accessToken }: any) => {
            dropDispatchFetchUser(accessToken);
          },
        );
      } else {
        dropDispatchFetchUser(getLocalToken());
      }
    }
  }, []);

  const dropDispatchFetchUser = async (token: string) => {
    return dispatch(fetchUserFromToken({ token }))
      .unwrap()
      .catch((error: any) => {
        // if failed, trying to look at the scenario.
        // First, if the token is broken
        if (!error.success && error.statusCode === 500) {
          dispatch(authLogout());
        }

        // Second one, when expired, we trying to refresh it
      });
  };
}

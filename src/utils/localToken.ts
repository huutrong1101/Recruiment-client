const LOCAL_STORAGE_TOKEN_KEY = "token";

export function hasLocalToken(): boolean {
  return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) !== null;
}

export function getLocalToken(): string {
  try {
    const localStorageToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
    if (localStorageToken === null) {
      throw new Error(`The token is not found`);
    }
    const parsedToken = JSON.parse(localStorageToken) as string;

    return parsedToken;
  } catch (err) {
    clearLocalToken();
    throw err;
  }
}

export function setLocalToken(jwtToken: string) {
  console.debug(`localToken: set:: ${jwtToken}`);
  localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, JSON.stringify(jwtToken));
}

export function clearLocalToken() {
  console.debug(`localToken: empty`);
  localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
}

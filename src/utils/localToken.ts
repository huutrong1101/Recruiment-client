const LOCAL_STORAGE_TOKEN_KEY = "token";

export function hasLocalToken(): boolean {
  return localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) !== null;
}

export function getLocalToken(): string {
  const localStorageToken = localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY);
  if (localStorageToken === null) {
    throw new Error(`The token is not found`);
  }
  return JSON.parse(localStorageToken) as string;
}

export function setLocalToken(jwtToken: string) {
  console.debug(`localToken: set:: ${jwtToken}`);
  localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, JSON.stringify(jwtToken));
}

export function clearLocalToken() {
  console.debug(`localToken: empty`);
  localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
}

import { useSearchParams } from "react-router-dom";

export default function useQuerParams() {
  const [searchParams] = useSearchParams();
  return Object.fromEntries([...searchParams]);
}

import { useSearchParams } from "react-router-dom";

<<<<<<< HEAD
export default function useQuerParams() {
=======
export default function useQueryParams() {
>>>>>>> 343d44cfbf7837a21922134c90a057bc9434ab74
  const [searchParams] = useSearchParams();
  return Object.fromEntries([...searchParams]);
}

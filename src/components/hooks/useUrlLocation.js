import { useSearchParams } from "react-router-dom";

export default function useUrlLocation() {
  const [searchParams] = useSearchParams();
  const lat = searchParams.get("lat");
  const long = searchParams.get("lng");
return [lat,long]
}

import { useLocation } from "react-router-dom";
//Hook para parsear a query da url
export default function useQuery() {
    return new URLSearchParams(useLocation().search);
}

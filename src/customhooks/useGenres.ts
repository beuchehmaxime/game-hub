// import { useEffect, useState } from "react";
// import apiClient from "../services/api-client";
// import { CanceledError } from "axios";
import useData from "./useData";


export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// interface FetchGenresResponse{
//     count: number;
//     results: Genre[];
// }

// const useGenres = () => {
//      const [genres, setGenres] = useState<Genre[]>([]);
//     const [errors, setError] = useState("");
//     const [isLoading, setLoading] = useState(false);
    
//     useEffect(() => {
//         setLoading(true);
//         const controller = new AbortController();

//         apiClient.get<FetchGenresResponse>('/genres', { signal: controller.signal })
//             .then(res => {
//                 setGenres(res.data.results);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 if (error instanceof CanceledError) return;
//                 setError(error.message);
//                 setLoading(false)
//             });
//         return () => controller.abort();
//     }, []);

//     return { genres, errors, isLoading };
// }

const useGenres = () => useData<Genre>('/genres')

export default useGenres;
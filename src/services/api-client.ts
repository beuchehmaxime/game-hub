import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '599f03a6f74241399d1d00c99092c88a'
    }
});
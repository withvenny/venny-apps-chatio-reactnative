import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer stABC40UKdvWZN0PVt-Bk2Fqqdpj9r_CHbUvXZrKz42J1dZKweZxe5d-zBoj3vrOn5k4qdZxpOgibFpV2fV4KNzf6ZLNKGnh1_xVCcH3ojf_dbhJtaaTa5_3rJilWnYx'
    }
});
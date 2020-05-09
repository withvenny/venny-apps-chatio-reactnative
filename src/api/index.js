import axios from 'axios';

//
import { AsyncStorage } from 'react-native';

//
let url;
if (__DEV__) {
  url = 'https://io-venny-api.herokuapp.com';
} else {
  url = 'https://api.venny.io';
}

export default axios.create({
  baseURL: url,
  headers: {
    Authorization: 'Bearer stABC40UKdvWZN0PVt-Bk2Fqqdpj9r_CHbUvXZrKz42J1dZKweZxe5d-zBoj3vrOn5k4qdZxpOgibFpV2fV4KNzf6ZLNKGnh1_xVCcH3ojf_dbhJtaaTa5_3rJilWnYx'
}
});

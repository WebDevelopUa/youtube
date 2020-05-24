// YouTube Data API v3 (TURN ON) - https://console.developers.google.com/apis/library/youtube.googleapis.com
import axios from 'axios';

const API_KEY = 'AIzaSyAYsFmRIiqqtfZ6INIfnafcVpH7iZE6nAk';
const SEARCH_RESULTS = 20;

const axiosObject = axios.create({
        baseURL: 'https://www.googleapis.com/youtube/v3',
        params: {
            part: 'snippet',
            type: 'video',
            maxResults: SEARCH_RESULTS,
            key: API_KEY
        }
    }
);

export default axiosObject;

import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://bg-react-app.firebaseio.com/'
});

export default instance;
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-9062b.firebaseio.com/'
});

export default instance;
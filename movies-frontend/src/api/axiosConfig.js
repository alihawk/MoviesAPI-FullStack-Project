import axios from 'axios';

export default axios.create({
    baseURL:'https://a273-39-63-133-48.ngrok-free.app',
    headers: {"ngrok-skip-browser-warning": "true"}
});
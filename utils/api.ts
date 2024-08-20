import axios from 'axios';
import { toast } from 'react-toastify';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

export async function fetchUsers() {
    try {
        const response = await axios.get(API_URL);
        return response.data;
    } catch (error) {
        toast.error('Error fetching users');
        throw error;
    }
}
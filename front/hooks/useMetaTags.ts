import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL;

export const useMetaTags = () => {
    return useQuery({
        queryKey: ['meta-tags'],
        queryFn: async () => {
            const response = await axios.get(`${API_URL}/api/landing/meta-tags/`);
            return response.data;
        }
    });
};
